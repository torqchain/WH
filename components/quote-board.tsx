import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CaStats } from "@/components/ca-stats";
import { CopyButton } from "@/components/copy-button";
import { WaffleBadge, WaffleWordmark } from "@/components/waffle-logo";
import { getQuote } from "@/lib/quote";
import {
  explorerAddress,
  isLaunched,
  launchTokenUrl,
  shortAddress,
  site,
} from "@/lib/site";

export async function QuoteBoard() {
  const launched = isLaunched();
  const quote = await getQuote();

  return (
    <section id="quote" className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <div className="grid items-stretch gap-6 lg:grid-cols-[1.4fr_0.9fr]">
        <div>
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="rounded-none border-2 border-foreground bg-foreground px-2 font-mono text-[10px] tracking-[0.2em] text-wh-yellow">
              <span className="open-dot mr-1 size-1.5 rounded-full bg-wh-yellow" />
              OPEN 24H
            </Badge>
            <Badge
              variant="outline"
              className="rounded-none border-2 border-foreground bg-wh-paper font-mono text-[10px] tracking-[0.2em]"
            >
              MEME
            </Badge>
            <Badge
              variant="outline"
              className="rounded-none border-2 border-foreground bg-wh-paper font-mono text-[10px] tracking-[0.2em]"
            >
              PRIVATE TICKER
            </Badge>
          </div>

          <p className="font-mono text-xs tracking-[0.35em] uppercase">
            Robinhood Chain · {site.venueName}
          </p>
          <h1 className="mt-3 max-w-xl">
            <WaffleWordmark preload className="h-16 w-auto sm:h-24" />
            <span className="sr-only">Waffle House {site.listedAs}</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-foreground/90 sm:text-xl">
            Sure, there are stock coins. What everyone actually wants is a bid on
            the businesses they already love — the privately owned ones. Tokenize
            the private sector. Start with the Jerry Springer of restaurants.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="h-11 rounded-none border-2 border-foreground bg-foreground px-5 font-heading text-xl tracking-wide text-wh-yellow hover:bg-foreground/90"
            >
              <Link href={launchTokenUrl()} target="_blank" rel="noreferrer">
                {launched ? `Buy ${site.listedAs} on LONG` : "Launching on LONG"}
                <ArrowUpRight data-icon="inline-end" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-11 rounded-none border-2 border-foreground bg-wh-paper font-heading text-xl tracking-wide"
            >
              <a href="#pair">Anchored to AMC</a>
            </Button>
          </div>

          <p className="mt-5 font-mono text-[11px] tracking-wide text-foreground/70">
            This is a memecoin, not a share of the restaurant.
          </p>
        </div>

        <div className="ticket border-2 border-foreground shadow-[8px_8px_0_0_#121008]">
          <div className="flex items-center justify-between border-b-2 border-foreground bg-foreground px-4 py-2.5 text-wh-yellow">
            <span className="font-heading text-2xl tracking-wide">
              {site.ticker} TOKEN
            </span>
            <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-[0.2em]">
              <Clock className="size-3" />
              ALWAYS OPEN
            </span>
          </div>

          <CaStats initial={quote} />

          <div className="space-y-3 px-4 py-4">
            <div className="flex items-center gap-3">
              <WaffleBadge className="size-12 border-2 border-foreground" />
              <div>
                <div className="font-heading text-3xl leading-none">
                  {site.name} / {site.ticker}
                </div>
                <div className="font-mono text-[10px] tracking-[0.18em] uppercase">
                  Private company meme ticker
                </div>
              </div>
            </div>

            <div className="border-2 border-dashed border-foreground/40 bg-wh-paper px-3 py-3">
              <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/70">
                Contract Address
              </div>
              {launched ? (
                <>
                  <div className="mt-1 break-all font-mono text-xs sm:text-sm">
                    {shortAddress(site.token, 10, 6)}
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <CopyButton value={site.token} label="Copy CA" />
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-2 border-foreground bg-wh-paper font-mono text-[11px] uppercase tracking-wider"
                    >
                      <Link
                        href={explorerAddress(site.token)}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Explorer
                        <ArrowUpRight data-icon="inline-end" />
                      </Link>
                    </Button>
                  </div>
                </>
              ) : (
                <div className="mt-1 font-mono text-xs text-foreground/50 sm:text-sm">
                  Pending LONG launch
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
