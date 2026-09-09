"use client";

import { useEffect, useState } from "react";
import {
  formatChange,
  formatUsd,
  type MarketQuote,
} from "@/lib/quote";

export function CaStats({ initial }: { initial: MarketQuote }) {
  const [quote, setQuote] = useState(initial);

  useEffect(() => {
    let cancelled = false;

    async function refresh() {
      try {
        const response = await fetch("/api/quote", { cache: "no-store" });
        if (!response.ok) return;
        const next = (await response.json()) as MarketQuote;
        if (!cancelled) setQuote(next);
      } catch {
        // Keep the last good quote instead of flashing an error on a blip.
      }
    }

    void refresh();
    const id = window.setInterval(refresh, 20_000);
    return () => {
      cancelled = true;
      window.clearInterval(id);
    };
  }, []);

  const last =
    quote.status === "live"
      ? formatUsd(quote.priceUsd)
      : quote.status === "indexing"
        ? "INDEXING"
        : quote.status === "error"
          ? "—"
          : "PRE-MARKET";
  const mcap = quote.status === "live" ? formatUsd(quote.mcapUsd) : "—";
  const change =
    quote.status === "live" && quote.change24h != null
      ? formatChange(quote.change24h)
      : null;

  return (
    <div className="grid grid-cols-2 gap-0 border-b-2 border-foreground">
      <QuoteStat
        label="Last"
        value={last}
        hint={change}
        tone={quote.status === "live" ? "default" : "muted"}
        hintTone={
          quote.change24h == null
            ? "muted"
            : quote.change24h >= 0
              ? "up"
              : "down"
        }
      />
      <QuoteStat
        label="Mcap"
        value={mcap}
        tone={quote.status === "live" ? "default" : "muted"}
      />
      <QuoteStat label="Venue" value="LONG" />
      <QuoteStat label="Pair" value="AI" />
    </div>
  );
}

function QuoteStat({
  label,
  value,
  hint,
  tone = "default",
  hintTone = "muted",
}: {
  label: string;
  value: string;
  hint?: string | null;
  tone?: "default" | "muted";
  hintTone?: "muted" | "up" | "down";
}) {
  return (
    <div className="border-r-2 border-foreground px-4 py-3 last:border-r-0 even:border-r-0">
      <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-foreground/60">
        {label}
      </div>
      <div
        className={
          tone === "muted"
            ? "font-heading text-2xl leading-none text-foreground/50 sm:text-3xl"
            : "font-heading text-2xl leading-none sm:text-3xl"
        }
      >
        {value}
      </div>
      {hint ? (
        <div
          className={
            hintTone === "up"
              ? "mt-1 font-mono text-[10px] tracking-wide text-emerald-800"
              : hintTone === "down"
                ? "mt-1 font-mono text-[10px] tracking-wide text-wh-red"
                : "mt-1 font-mono text-[10px] tracking-wide text-foreground/50"
          }
        >
          {hint} 24h
        </div>
      ) : null}
    </div>
  );
}
