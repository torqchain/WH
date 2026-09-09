const steps = [
  {
    n: "01",
    title: "Launch on LONG",
    body: "$WH goes live on LONG, the Robinhood Chain pad that puts memes on top of stock tokens. Wallet in, ticker out.",
  },
  {
    n: "02",
    title: "Anchor to AMC",
    body: "The pair is $WH / $AMC. Tokenized AMC Entertainment is the other side of the pool. No treasury. No fee vault.",
  },
  {
    n: "03",
    title: "Trade the floor",
    body: "Buying $WH puts AMC in the pool. Selling $WH takes AMC out. The stock token is the market, 24 hours a day.",
  },
];

export function Launch() {
  return (
    <section id="launch" className="mx-auto max-w-6xl px-4 py-6 sm:py-10">
      <div className="border-2 border-foreground bg-foreground text-wh-yellow">
        <div className="px-4 py-3">
          <p className="font-mono text-[10px] tracking-[0.28em] uppercase">
            LONG · Stock-token pair
          </p>
          <h2 className="font-heading text-5xl leading-none sm:text-6xl">
            How it launches
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
