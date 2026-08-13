import Link from "next/link";
import Reveal from "@/components/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";

const DIFFS = [
  {
    title: "0% commission on your own orders",
    desc: "Every order on your branded storefront stays 100% yours — no per-order cut on qualifying plans.",
  },
  {
    title: "Everything in one platform",
    desc: "POS, storefront, billing, staff and delivery fleet in one subscription — not three separate products.",
  },
  {
    title: "No lock-in, transparent pricing",
    desc: "Published pricing, cancel anytime, and your data exports whenever you ask.",
  },
] as const;

export default function CompareTeaser() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-4xl rounded-[2.5rem] border border-brand-200/60 bg-gradient-to-br from-brand-50 via-white to-white p-8 sm:p-12 lg:p-16">
          <SectionHeading
            eyebrow="Why FatFox"
            title="Compare FatFox with the big names"
            description="We built FatFox to be the better choice — and we're happy to show the comparison in black and white."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {DIFFS.map((d, i) => (
              <Reveal key={d.title} delay={i * 100}>
                <div className="h-full rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-500 font-display text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-ink">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">{d.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/compare"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand-500"
            >
              See the full comparison
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 8 H13 M9 4 L13 8 L9 12" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}