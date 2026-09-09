import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

const beats = [
  {
    kicker: "The gap",
    title: "You can buy Nvidia. You cannot buy the magic of a waffle.",
    body: "Robinhood Chain already tokenized public stocks. Fine. The thing people actually want is a ticket to companies that stayed private — the brands they eat, wear, and argue about. $WH is the experiment: a memecoin ticker for a business the market wants to invest in.",
  },
  {
    kicker: "The asset",
    title: "Great food. Great deals. Front-row drama.",
    body: "Waffle House is the best place in town to watch a night go sideways. Hash browns at 2 a.m. Parking-lot diplomacy. A jukebox, a griddle, and a floor mat that has seen some bizarre things land on it. It is the Jerry Springer of restaurants, and that is exactly why it is the perfect private-company meme ticker.",
  },
  {
    kicker: "The pair",
    title: "Degen Finance The RH Way.",
    body: "This is a LONG launch anchored to $AI. Buy $WH, the pool holds Artificial Inu. No vault. The meme ticker is the other side of the booth.",
  },
];

export function Thesis() {
  return (
    <section id="thesis" className="mx-auto max-w-6xl px-4 py-6 sm:py-10">
      <div className="border-2 border-foreground bg-foreground px-4 py-3 text-wh-yellow">
        <div className="font-mono text-[10px] tracking-[0.28em] uppercase">
          Offering circular · Meme
        </div>
        <h2 className="font-heading text-4xl sm:text-5xl">
          Tokenize the privatized sector
        </h2>
      </div>

      <div className="grid border-2 border-t-0 border-foreground bg-wh-paper sm:grid-cols-3">
        {beats.map((beat, index) => (
          <article
            key={beat.title}
            className="border-foreground px-4 py-5 sm:border-r-2 sm:last:border-r-0"
          >
            <div className="font-mono text-[10px] tracking-[0.24em] uppercase text-foreground/60">
              0{index + 1} · {beat.kicker}
            </div>
            <h3 className="mt-2 font-heading text-3xl leading-none">{beat.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">
              {beat.body}
            </p>
          </article>
        ))}
      </div>

      <p className="mt-4 font-mono text-[11px] leading-relaxed text-foreground/70">
        $WH does not grant equity, dividends, voting rights, or a free All-Star
        Breakfast. Waffle House remains privately owned. This ticker is a
        community meme launched on{" "}
        <Link
          href={site.venueHome}
          className="underline underline-offset-2"
          target="_blank"
          rel="noreferrer"
        >
          LONG
        </Link>{" "}
        and paired with{" "}
        <Link
          href="#pair"
          className="underline underline-offset-2"
        >
          {site.pair.listedAs}
          <ArrowUpRight className="ml-0.5 inline size-3" />
        </Link>
        .
      </p>
    </section>
  );
}
