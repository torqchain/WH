const steps = [
  {
    n: "01",
    title: "Launch on Pons",
    body: "$WH goes live on Pons, Robinhood Chain's meme factory. No committee. Wallet in, ticker out.",
  },
  {
    n: "02",
    title: "Fees hit the vault",
    body: "Trading fees route to the Index Treasury. Indices takes its protocol cut. The rest is ours to split.",
  },
  {
    n: "03",
    title: "Kitchen / floor",
    body: "50% stays with the kitchen. 50% hits the floor mix: 50% PONS, 25% burn, 25% locked liquidity.",
  },
];

export function Treasury() {
  return (
    <section id="treasury" className="mx-auto max-w-6xl px-4 py-6 sm:py-10">
      <div className="border-2 border-foreground bg-foreground text-wh-yellow">
        <div className="px-4 py-3">
          <p className="font-mono text-[10px] tracking-[0.28em] uppercase">
            Indices · Basket vault
          </p>
          <h2 className="font-heading text-5xl leading-none sm:text-6xl">
            How do we pay?
          </h2>
        </div>
      </div>

      <ol className="grid border-2 border-t-0 border-foreground bg-wh-paper sm:grid-cols-3">
        {steps.map((step) => (
          <li
            key={step.n}
            className="border-foreground px-4 py-4 sm:border-r-2 sm:last:border-r-0"
          >
            <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-foreground/60">
              Step {step.n}
            </div>
            <h3 className="font-heading text-3xl leading-none">{step.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-foreground/80">
              {step.body}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
