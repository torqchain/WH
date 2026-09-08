import Link from "next/link";
import { Button } from "@/components/ui/button";
import { WaffleWordmark } from "@/components/waffle-logo";

export default function NotFound() {
  return (
    <div className="flex min-h-full flex-col items-center justify-center px-6 py-20 text-center">
      <WaffleWordmark className="mx-auto h-14 w-auto" />
      <p className="mt-6 font-mono text-[10px] tracking-[0.28em] uppercase">
        404 · Booth empty
      </p>
      <h1 className="mt-2 font-heading text-7xl leading-none">CLOSED?</h1>
      <p className="mt-3 max-w-md text-sm">
        Never. You took a wrong turn past the jukebox. The ticker is still on
        the board.
      </p>
      <Button
        asChild
        className="mt-6 rounded-none border-2 border-foreground bg-foreground font-heading text-xl text-wh-yellow"
      >
        <Link href="/">Back to $WH</Link>
      </Button>
    </div>
  );
}
