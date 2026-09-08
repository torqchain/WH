import { Faq } from "@/components/faq";
import { NightShift } from "@/components/night-shift";
import { QuoteBoard } from "@/components/quote-board";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Thesis } from "@/components/thesis";
import { TickerTape } from "@/components/ticker-tape";
import { Tokenomics } from "@/components/tokenomics";
import { Treasury } from "@/components/treasury";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <TickerTape />
      <SiteHeader />
      <main className="flex-1">
        <QuoteBoard />
        <Thesis />
        <Tokenomics />
        <Treasury />
        <NightShift />
        <Faq />
      </main>
      <SiteFooter />
    </div>
  );
}
