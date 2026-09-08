const rawToken = process.env.NEXT_PUBLIC_WH_TOKEN?.trim() ?? "";

export const site = {
  ticker: "WH",
  name: "Waffle House",
  listedAs: "$WH",
  chain: "Robinhood Chain",
  chainId: 4663,
  venueName: "Pons",
  ponsExplore: "https://ponsfamily.com/launchpad",
  ponsCreate: "https://ponsfamily.com/launchpad/create",
  indexHome: "https://indices.theindex.finance/",
  indexBuild: "https://indices.theindex.finance/build",
  explorerBase: "https://robinhoodchain.blockscout.com",
  token: /^0x[a-fA-F0-9]{40}$/.test(rawToken) ? rawToken : "",
  feeSplit: {
    kitchen: 50,
    holders: 50,
  },
  holderMix: [
    {
      id: "pons",
      label: "PONS",
      pct: 50,
      hashbrown: "Smothered",
      color: "#121008",
      detail: "Holder-side fees buy $PONS, the launchpad this coin lives on.",
    },
    {
      id: "burn",
      label: "BURN",
      pct: 25,
      hashbrown: "Covered",
      color: "#c8102e",
      detail: "Buyback and burn. Supply walks out the door and does not come back.",
    },
    {
      id: "liquidity",
      label: "LIQUIDITY",
      pct: 25,
      hashbrown: "Chunked",
      color: "#fff6c8",
      detail: "Locked liquidity so the night shift still has a market at 3 a.m.",
    },
  ],
} as const;

export function shortAddress(address: string, left = 6, right = 4) {
  return `${address.slice(0, left)}…${address.slice(-right)}`;
}

export function explorerAddress(address: string) {
  return `${site.explorerBase}/address/${address}`;
}

export function ponsTokenUrl() {
  return site.token
    ? `https://ponsfamily.com/launchpad/${site.token}`
    : site.ponsExplore;
}

export function isLaunched() {
  return Boolean(site.token);
}
