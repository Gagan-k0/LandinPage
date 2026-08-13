import Link from "next/link";
import { cn } from "@/lib/utils";

export function FoxMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-9 w-9", className)}
      role="img"
      aria-label="FatFox logo"
    >
      <path
        d="M10 38 L14 18 L22 24 L24 14 L26 24 L34 18 L38 38 C34 44 14 44 10 38 Z"
        fill="#FF5733"
      />
      <path d="M10 38 L14 18 L22 24 C16 28 12 31 10 38 Z" fill="#ED3A10" />
      <path d="M38 38 L34 18 L26 24 C32 28 36 31 38 38 Z" fill="#C52D0B" />
      <circle cx="20" cy="29" r="1.6" fill="#fff" />
      <circle cx="28" cy="29" r="1.6" fill="#fff" />
      <path d="M22 33 C23.2 34.4 24.8 34.4 26 33" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-2.5", className)}
      aria-label="FatFox — home"
    >
      <FoxMark />
      <span className="font-display text-xl font-extrabold tracking-tight text-ink">
        Fat<span className="text-brand-500">Fox</span>
      </span>
    </Link>
  );
}