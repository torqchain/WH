"use client";

import { isLaunched, site } from "@/lib/site";

const items = [
  `${site.listedAs}  ${isLaunched() ? "LIVE" : "PRE-MARKET"}`,
  "WAFFLE HOUSE",
  "MEME PRIVATE TICKER",
  "TOKENIZE THE PRIVATE SECTOR",
  "LAUNCHING ON PONS",
  "INDEX TREASURY LIVE",
  "50% KITCHEN  ·  50% FLOOR",
  "BURN 25  ·  LIQ 25  ·  PONS 50",
  "OPEN 24 HOURS",
  "JERRY SPRINGER OF RESTAURANTS",
];

export function TickerTape() {
  const line = items.join("    ✦    ");
  const doubled = `${line}    ✦    ${line}    ✦    `;

  return (
    <div className="relative overflow-hidden border-b-2 border-foreground bg-foreground text-wh-yellow">
      <div className="ticker-track flex w-max whitespace-nowrap py-1.5 font-mono text-[11px] font-semibold tracking-[0.22em] uppercase">
        <span className="px-4">{doubled}</span>
        <span className="px-4" aria-hidden>
          {doubled}
        </span>
      </div>
    </div>
  );
}
