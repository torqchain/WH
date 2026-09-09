import Link from "next/link";
import { launchTokenUrl, site } from "@/lib/site";

const faqs = [
  {
    q: "Is this real Waffle House stock?",
    a: "No. Waffle House is a privately owned company. $WH is a memecoin ticker. It does not represent equity, a claim on stores, or anything the company issued.",
  },
  {
    q: "Where does it launch?",
    a: `On LONG (${site.venueHome.replace("https://", "")}), the Robinhood Chain launchpad that pairs memes with stock tokens. After the contract is live, the Buy button on this site points at the LONG token page.`,
    extra: true,
  },
  {
    q: "Why AMC? Is there a vault?",
    a: "No vault. $WH is anchored to tokenized AMC on LONG. Buying $WH puts AMC in the pool. Waffle House is the Jerry Springer of restaurants; AMC is the other 2 a.m. ticker. Pair them.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-6xl px-4 py-6 sm:pb-14">
      <div className="border-2 border-foreground bg-wh-paper">
        <div className="border-b-2 border-foreground bg-foreground px-4 py-3 text-wh-yellow">
          <p className="font-mono text-[10px] tracking-[0.28em] uppercase">
            Fine print they actually read
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl">Questions from booth 4</h2>
        </div>
        <div>
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group border-b-2 border-foreground last:border-b-0"
            >
              <summary className="cursor-pointer list-none px-4 py-3 font-heading text-xl marker:hidden sm:text-2xl [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-3">
                  {item.q}
                  <span className="font-mono text-sm group-open:hidden">+</span>
                  <span className="hidden font-mono text-sm group-open:inline">−</span>
                </span>
              </summary>
              <p className="px-4 pb-4 text-sm leading-relaxed text-foreground/80">
                {item.a}
                {item.extra ? (
                  <>
                    {" "}
                    <Link
                      href={launchTokenUrl()}
                      className="underline underline-offset-2"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open LONG
                    </Link>
                  </>
                ) : null}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
