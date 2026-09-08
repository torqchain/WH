import Image from "next/image";

export function NightShift() {
  return (
    <section id="wojack" className="mx-auto max-w-6xl px-4 py-6 sm:py-10">
      <div className="mb-4">
        <p className="font-mono text-[10px] tracking-[0.28em] uppercase">
          Night shift · The regular
        </p>
        <h2 className="font-heading text-5xl leading-none sm:text-6xl">
          Wojack
        </h2>
      </div>

      <div className="overflow-hidden border-2 border-foreground bg-wh-paper">
        <div className="grid items-stretch lg:grid-cols-[minmax(0,22rem)_1fr]">
          <figure className="border-b-2 border-foreground bg-wh-ticket lg:border-r-2 lg:border-b-0">
            <Image
              src="/wojack.jpg"
              alt="Wojack in a Waffle House cap, crying Robinhood-green tears of joy"
              width={1152}
              height={1728}
              sizes="(min-width: 1024px) 22rem, 100vw"
              className="h-auto w-full object-cover object-top"
            />
          </figure>

          <div className="flex flex-col justify-center px-4 py-5 sm:px-6 sm:py-7">
            <p className="font-mono text-[10px] tracking-[0.24em] uppercase text-foreground/60">
              Wo Jacks · Est. 1969
            </p>
            <h3 className="mt-2 font-heading text-4xl leading-none sm:text-5xl">
              The pancake house that lost
            </h3>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/85 sm:text-base">
              <p>
                Wojack started a pancake house in 1969 called Wo Jacks, where he
                flipped pancakes and grilled potatoes.
              </p>
              <p>
                Unfortunately for Wojack, Waffle House came into his hometown and
                opened a restaurant. All of Wojack&apos;s customers went to Waffle House
                instead of Wo Jacks.
              </p>
              <p>
                So now that we have a $WH token, he can invest in the thing that
                cost him everything.
              </p>
            </div>
            <p className="mt-5 font-heading text-4xl leading-none text-wh-red sm:text-5xl">
              Tears of joy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
