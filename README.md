# $WH · Waffle House

Memecoin ticker site for **Waffle House ($WH)** — a private-company meme listing on [LONG](https://app.long.xyz), paired with tokenized [AMC](https://robinhoodchain.blockscout.com/token/0x05a3d1Cd21d0C88145E82600E62e7E496e0F222B).

Repo: [github.com/torqchain/WH](https://github.com/torqchain/WH)

This is not Waffle House stock. Waffle House is privately owned. $WH is a joke ticker for a restaurant people actually love, launched against AMC on LONG. There is no vault.

## The pitch

Robinhood Chain already has tokenized public stocks. The thing people want is a bid on businesses they cannot buy — diners, brands, the privatized sector. $WH is that experiment: hash browns, late-night chaos, and a joke ticker for a restaurant people actually love.

## Launch setup

| Piece | Value |
| --- | --- |
| Venue | [LONG](https://app.long.xyz) on Robinhood Chain |
| Pair | $WH / $AMC |
| AMC contract | `0x05a3d1Cd21d0C88145E82600E62e7E496e0F222B` |
| Vault | None |

After the LONG contract exists, set `NEXT_PUBLIC_WH_TOKEN` to the token address. The WH TOKEN ticket then shows that contract, and **Last** / **Mcap** pull from DexPaprika on Robinhood Chain every 20 seconds. Buy buttons point at `https://app.long.xyz/tokens/<token>`. Until that env is set, Contract Address stays pending and Last stays PRE-MARKET.

## Run locally

```bash
git clone https://github.com/torqchain/WH.git
cd WH
npm install
npm run dev
```

Open [http://127.0.0.1:43147](http://127.0.0.1:43147).

```bash
npm run build
npm start -- --port 43147
```

Copy `.env.example` to `.env.local` if you want to wire the live token. Set `NEXT_PUBLIC_SITE_URL` to the public origin so Open Graph images resolve to absolute URLs.

## Stack

Next.js, TypeScript, Tailwind, shadcn/ui.
