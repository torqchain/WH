"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WaffleWordmark } from "@/components/waffle-logo";
import { isLaunched, ponsTokenUrl, site } from "@/lib/site";

const nav = [
  { href: "#quote", label: "Quote" },
  { href: "#thesis", label: "Thesis" },
  { href: "#tokenomics", label: "Tokenomics" },
  { href: "#treasury", label: "Treasury" },
  { href: "#wojack", label: "Wojack" },
  { href: "#faq", label: "FAQ" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const buyHref = ponsTokenUrl();
  const buyLabel = isLaunched() ? `Buy ${site.listedAs} on Pons` : "Launching on Pons";

  function go(href: string) {
    setOpen(false);
    if (href.startsWith("#")) {
      document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <header className="sticky top-0 z-40 border-b-2 border-foreground bg-wh-yellow">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <a
          href="#quote"
          className="flex min-w-0 flex-1 items-center gap-3 overflow-hidden"
          onClick={() => setOpen(false)}
        >
          <WaffleWordmark
            preload
            className="h-8 w-auto max-w-[9.5rem] object-left object-contain sm:h-10 sm:max-w-[12rem]"
          />
          <div className="hidden leading-none min-[420px]:block">
            <div className="font-mono text-[10px] tracking-[0.28em] text-foreground/80">
              MEME
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-5 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[11px] font-semibold tracking-[0.18em] uppercase hover:underline"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="relative z-50 flex shrink-0 items-center gap-2">
          <Button
            asChild
            className="hidden border-2 border-foreground bg-foreground text-wh-yellow hover:bg-foreground/90 sm:inline-flex"
          >
            <Link href={buyHref} target="_blank" rel="noreferrer">
              {buyLabel}
            </Link>
          </Button>

          <button
            type="button"
            data-testid="mobile-menu-button"
            className="relative z-50 flex size-10 shrink-0 items-center justify-center border-2 border-foreground bg-wh-paper md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-menu"
          data-testid="mobile-menu"
          className="border-t-2 border-foreground bg-foreground px-4 py-4 text-wh-yellow"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => go(item.href)}
              className="block border-b border-wh-yellow/30 py-3 font-heading text-3xl"
            >
              {item.label}
            </a>
          ))}
          <Button
            asChild
            className="mt-4 h-11 w-full rounded-none border-2 border-wh-yellow bg-wh-yellow font-heading text-xl text-foreground"
          >
            <Link href={buyHref} target="_blank" rel="noreferrer">
              {buyLabel}
            </Link>
          </Button>
        </nav>
      ) : null}
    </header>
  );
}
