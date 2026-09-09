import { site } from "@/lib/site";

export function Tokenomics() {
  return (
    <section id="tokenomics" className="mx-auto max-w-6xl px-4 py-6 sm:py-10">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="font-mono text-[10px] tracking-[0.28em] uppercase">
            Hash brown order · Index mix
          </p>
          <h2 className="font-heading text-5xl leading-none sm:text-6xl">
            Scattered. Smothered. Covered.
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed">
          Trading fees hit our Treasury. 50% goes to holders in PONS, burns and
          locked liquidity.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="border-2 border-foreground bg-wh-paper shadow-[8px_8px_0_0_#121008]">
          <div className="border-b-2 border-foreground bg-foreground px-4 py-2 font-heading text-2xl text-wh-yellow">
            Check Please · Who gets the fees
          </div>
          <div className="grid sm:grid-cols-2">
            <SplitCard
              pct={site.feeSplit.kitchen}
              title="Kitchen"
              subtitle="To us"
              body="Creator share. The kitchen claims this side of the vault. You keep the rest."
            />
            <SplitCard
              pct={site.feeSplit.holders}
              title="Floor"
              subtitle="To holders"
              body="The holder mix. Burns, locked liquidity, and $PONS bought for the people in the booths."
              highlight
            />
          </div>
        </div>

        <div className="ticket border-2 border-foreground shadow-[8px_8px_0_0_#121008]">
          <div className="border-b-2 border-foreground bg-foreground px-4 py-2 font-heading text-2xl text-wh-yellow">
            Floor mix
          </div>
          <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center">
            <MixWheel />
            <ul className="flex-1 space-y-3">
              {site.holderMix.map((leg) => (
                <li key={leg.id} className="border-2 border-foreground bg-wh-paper px-3 py-2">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="flex items-center gap-2 font-heading text-2xl leading-none">
                      <span
                        className="size-3 border-2 border-foreground"
                        style={{ background: leg.color }}
                        aria-hidden
                      />
                      {leg.hashbrown}
                    </span>
                    <span className="font-mono text-xs tracking-[0.18em]">
                      {leg.label} {leg.pct}%
                    </span>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-foreground/75">
                    {leg.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function SplitCard({
  pct,
  title,
  subtitle,
  body,
  highlight = false,
}: {
  pct: number;
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
      <div className="font-heading text-7xl leading-none">{pct}%</div>
      <div className="mt-1 font-heading text-3xl leading-none">{title}</div>
      <div className="font-mono text-[10px] tracking-[0.2em] uppercase">
        {subtitle}
      </div>
      <p className="mt-3 text-sm leading-relaxed">{body}</p>
    </div>
  );
}

function mixGradient(legs: readonly { color: string; pct: number }[]) {
  return legs
    .reduce<{ css: string[]; end: number }>(
      (acc, leg) => ({
        css: [...acc.css, `${leg.color} ${acc.end}% ${acc.end + leg.pct}%`],
        end: acc.end + leg.pct,
      }),
      { css: [], end: 0 },
    )
    .css.join(", ");
}

function MixWheel() {
  const stops = mixGradient(site.holderMix);

  return (
    <div className="mx-auto grid size-40 shrink-0 place-items-center">
      <div
        className="size-36 rounded-full border-4 border-foreground shadow-[4px_4px_0_0_#121008]"
        style={{ background: `conic-gradient(${stops})` }}
        aria-hidden
      />
      <span className="sr-only">
        Floor mix:{" "}
        {site.holderMix.map((leg) => `${leg.pct}% ${leg.label}`).join(", ")}
      </span>
    </div>
  );
}
