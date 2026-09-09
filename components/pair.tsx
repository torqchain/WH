import Link from "next/link";
import { explorerToken, site } from "@/lib/site";

export function Pair() {
  return (
    <section id="pair" className="mx-auto max-w-6xl px-4 py-6 sm:py-10">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="font-mono text-[10px] tracking-[0.28em] uppercase">
            LONG · Anchored pair
          </p>
          <h2 className="font-heading text-5xl leading-none sm:text-6xl">
            {site.listedAs} / {site.pair.listedAs}
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed">
          No vault. No kitchen cut. $WH launches on LONG, anchored to $AI.
          Buying the meme puts Artificial Inu in the pool.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="border-2 border-foreground bg-wh-paper shadow-[8px_8px_0_0_#121008]">
          <div className="border-b-2 border-foreground bg-foreground px-4 py-2 font-heading text-2xl text-wh-yellow">
            Check Please · The pair
          </div>
          <div className="grid sm:grid-cols-2">
            <PairCard
              ticker={site.listedAs}
              title={site.name}
              subtitle="The meme"
              body="A joke ticker for a privately owned restaurant. Not equity. Not a claim on hash browns. The thing you actually want to bid on."
            />
            <PairCard
              ticker={site.pair.listedAs}
              title={site.pair.name}
              subtitle="The meme ticker"
              body="LONG's flagship meme. Other tokens launch against it. $WH uses $AI as the other side of the pool."
              highlight
            />
          </div>
        </div>

        <div className="ticket border-2 border-foreground shadow-[8px_8px_0_0_#121008]">
          <div className="border-b-2 border-foreground bg-foreground px-4 py-2 font-heading text-2xl text-wh-yellow">
            Why $AI
          </div>
          <div className="space-y-3 p-4">
            <p className="text-sm leading-relaxed">
              LONG lets a new meme launch against $AI instead of a stock.
              Artificial Inu is the booth next to ours. Pair the diner with the
              inu.
            </p>
            <ul className="space-y-2 font-mono text-[11px] tracking-[0.12em] uppercase">
              <li className="border-2 border-foreground bg-wh-paper px-3 py-2">
                Venue · LONG
              </li>
              <li className="border-2 border-foreground bg-wh-paper px-3 py-2">
                Pair · {site.listedAs} / {site.pair.listedAs}
              </li>
              <li className="border-2 border-foreground bg-wh-paper px-3 py-2">
                Vault · None
              </li>
            </ul>
            <Link
              href={explorerToken(site.pair.address)}
              target="_blank"
              rel="noreferrer"
              className="inline-block font-mono text-[10px] tracking-[0.18em] uppercase underline underline-offset-2"
            >
              $AI contract on explorer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function PairCard({
  ticker,
  title,
  subtitle,
  body,
  highlight = false,
}: {
  ticker: string;
  title: string;
  subtitle: string;
  body: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={
        highlight
          ? "border-foreground bg-wh-yellow px-4 py-5 sm:border-l-2"
          : "border-foreground px-4 py-5"
      }
    >
      <div className="font-heading text-5xl leading-none sm:text-6xl">
        {ticker}
      </div>
      <div className="mt-1 font-heading text-3xl leading-none">{title}</div>
      <div className="font-mono text-[10px] tracking-[0.2em] uppercase">
        {subtitle}
      </div>
      <p className="mt-3 text-sm leading-relaxed">{body}</p>
    </div>
  );
}
