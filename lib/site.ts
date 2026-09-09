const rawToken = process.env.NEXT_PUBLIC_WH_TOKEN?.trim() ?? "";

export const site = {
  ticker: "WH",
  name: "Waffle House",
  listedAs: "$WH",
  chain: "Robinhood Chain",
  chainId: 4663,
  venueName: "LONG",
  venueHome: "https://app.long.xyz",
  venueExplore: "https://app.long.xyz/tokens",
  explorerBase: "https://robinhoodchain.blockscout.com",
  token: /^0x[a-fA-F0-9]{40}$/.test(rawToken) ? rawToken : "",
  pair: {
    ticker: "AI",
    listedAs: "$AI",
    name: "Artificial Inu",
    address: "0x2E8c31162b855A2ffa90F6F8634643Ad6F111e18",
  },
} as const;

export function shortAddress(address: string, left = 6, right = 4) {
  return `${address.slice(0, left)}…${address.slice(-right)}`;
}

export function explorerAddress(address: string) {
  return `${site.explorerBase}/address/${address}`;
}

export function explorerToken(address: string) {
  return `${site.explorerBase}/token/${address}`;
}

export function launchTokenUrl() {
  return site.token
    ? `${site.venueHome}/tokens/${site.token}`
    : site.venueExplore;
}

export function isLaunched() {
  return Boolean(site.token);
}
