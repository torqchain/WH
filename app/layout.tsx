import type { Metadata } from "next";
import { Bebas_Neue, Geist, IBM_Plex_Mono } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://127.0.0.1:43147");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "$WH · Waffle House — private meme ticker",
  description:
    "The Waffle House memecoin ticker. Tokenize the private sector. Launching on Pons with an Index Treasury: 50% kitchen, 50% holders, mix 50% PONS / 25% burn / 25% liquidity.",
  applicationName: "$WH Waffle House",
  keywords: [
    "Waffle House",
    "$WH",
    "Pons",
    "Robinhood Chain",
    "memecoin",
    "Index Treasury",
  ],
  openGraph: {
    title: "$WH · Waffle House — private meme ticker",
    description:
      "Great food, great deals, ghetto-tier drama. The Jerry Springer of restaurants, listed as a private-company meme ticker on Pons.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "$WH · Waffle House",
    description: "Private-company meme ticker. Launching on Pons.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${ibmPlexMono.variable} ${bebasNeue.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
