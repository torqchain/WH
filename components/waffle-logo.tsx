import Image from "next/image";
import { cn } from "@/lib/utils";

export function WaffleWordmark({
  className,
  preload = false,
}: {
  className?: string;
  preload?: boolean;
}) {
  return (
    <Image
      src="/waffle-house-wordmark.png"
      alt="Waffle House"
      width={1724}
      height={557}
      preload={preload}
      className={cn("h-10 w-auto max-w-full object-contain", className)}
    />
  );
}

export function WaffleBadge({
  className,
  preload = false,
}: {
  className?: string;
  preload?: boolean;
}) {
  return (
    <Image
      src="/waffle-house-logo-alt.png"
      alt="Waffle House"
      width={400}
      height={400}
      preload={preload}
      className={cn("size-10 rounded-full", className)}
    />
  );
}
