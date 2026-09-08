import { site } from "@/lib/site";

export type MarketQuote =
  | {
      status: "live";
      priceUsd: number;
      mcapUsd: number;
      change24h: number | null;
    }
  | {
      status: "premarket" | "indexing" | "error";
      priceUsd: null;
      mcapUsd: null;
      change24h: null;
    };

type DexToken = {
  decimals?: number;
  total_supply?: number | null;
  summary?: {
    price_usd?: number;
    fdv?: number;
    "24h"?: { last_price_usd_change?: number };
  };
};

function marketCapUsd(data: DexToken, priceUsd: number | undefined) {
  if (data.summary?.fdv != null) return data.summary.fdv;
  if (priceUsd == null || data.total_supply == null || data.decimals == null) {
    return null;
  }
  return priceUsd * (data.total_supply / 10 ** data.decimals);
}

export function formatUsd(value: number) {
  if (value >= 1_000_000_000) return `$${(value / 1_000_000_000).toFixed(2)}B`;
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(2)}M`;
  if (value >= 1_000) return `$${(value / 1_000).toFixed(2)}K`;
  if (value >= 1) return `$${value.toFixed(2)}`;
  if (value >= 0.0001) return `$${value.toFixed(4)}`;
  return `$${value.toExponential(2)}`;
}

export function formatChange(value: number) {
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(1)}%`;
}

export async function getQuote(): Promise<MarketQuote> {
  const token = site.token.toLowerCase();
  if (!token) {
    return { status: "premarket", priceUsd: null, mcapUsd: null, change24h: null };
  }

  try {
    const response = await fetch(
      `https://api.dexpaprika.com/networks/robinhood/tokens/${token}`,
      {
        headers: { Accept: "application/json" },
        next: { revalidate: 20 },
        signal: AbortSignal.timeout(8_000),
      },
    );

    if (response.status === 404) {
      return { status: "indexing", priceUsd: null, mcapUsd: null, change24h: null };
    }
    if (!response.ok) {
      return { status: "error", priceUsd: null, mcapUsd: null, change24h: null };
    }

    const data = (await response.json()) as DexToken;
    const priceUsd = data.summary?.price_usd;
    const mcapUsd = marketCapUsd(data, priceUsd);
    const change24h = data.summary?.["24h"]?.last_price_usd_change ?? null;

    if (priceUsd == null || mcapUsd == null) {
      return { status: "indexing", priceUsd: null, mcapUsd: null, change24h: null };
    }

    return {
      status: "live",
      priceUsd,
      mcapUsd,
      change24h: typeof change24h === "number" ? change24h : null,
    };
  } catch {
    return { status: "error", priceUsd: null, mcapUsd: null, change24h: null };
  }
}
