import Link from "next/link";
import { WaffleWordmark } from "@/components/waffle-logo";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-foreground bg-foreground text-wh-yellow">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-[1.4fr_0.8fr]">
        <div>
          <WaffleWordmark className="h-12 w-auto" />
          <div className="mt-3 font-heading text-3xl leading-none">
            {site.listedAs} · MEME
          </div>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-wh-yellow/80">
            $WH is a memecoin ticker for a privately owned restaurant and a Pons
            launch with an Index Treasury. Nothing here is equity, an offering,
            or financial advice. You can lose everything. The hash browns are
            still better.
          </p>
        </div>
        <div className="font-mono text-[11px] tracking-[0.14em] uppercase">
          <div className="flex flex-col gap-1">
            <Link href={site.ponsExplore} target="_blank" rel="noreferrer" className="underline">
              Pons launchpad
            </Link>
            <Link href={site.indexBuild} target="_blank" rel="noreferrer" className="underline">
              Indices builder
            </Link>
            <Link href="#treasury" className="underline">
              Treasury
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
