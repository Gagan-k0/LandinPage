import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left"
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink/60 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("h-5 w-5 flex-none text-brand-500", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 13 L9 17 L19 7" />
    </svg>
  );
}