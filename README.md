# $WH · Waffle House

Memecoin ticker site for **Waffle House ($WH)** — a private-company meme listing on [Pons](https://ponsfamily.com/launchpad), with fees routed to an [Index Treasury](https://indices.theindex.finance/build).

Repo: [github.com/torqchain/WH](https://github.com/torqchain/WH)

This is not Waffle House stock. Waffle House is privately owned. $WH is a joke ticker for a restaurant people actually love, plus a vault that splits trading fees with holders.

## The pitch

Robinhood Chain already has tokenized public stocks. The thing people want is a bid on businesses they cannot buy — diners, brands, the privatized sector. $WH is that experiment: hash browns, late-night chaos, and a joke ticker for a restaurant people actually love.

## Launch setup

| Piece | Value |
| --- | --- |
| Venue | [Pons](https://ponsfamily.com/launchpad) on Robinhood Chain |
| Fee split | 50% kitchen (creator) / 50% floor (holders) |
| Floor mix | 50% $PONS · 25% burn · 25% locked liquidity |

After the Pons contract exists, set `NEXT_PUBLIC_WH_TOKEN` to the token address. The WH TOKEN ticket then shows that contract, and **Last** / **Mcap** pull from DexPaprika on Robinhood Chain every 20 seconds. Buy buttons point at `https://ponsfamily.com/launchpad/<token>`. Until that env is set, Contract Address stays pending and Last stays PRE-MARKET.

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
