import { Faq } from "@/components/faq";
import { Launch } from "@/components/launch";
import { NightShift } from "@/components/night-shift";
import { Pair } from "@/components/pair";
import { QuoteBoard } from "@/components/quote-board";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Thesis } from "@/components/thesis";
import { TickerTape } from "@/components/ticker-tape";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <TickerTape />
      <SiteHeader />
      <main className="flex-1">
        <QuoteBoard />
        <Thesis />
        <Pair />
        <Launch />
        <NightShift />
        <Faq />
      </main>
      <SiteFooter />
    </div>
  );
}
