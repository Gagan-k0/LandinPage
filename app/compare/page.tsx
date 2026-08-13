import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import DemoForm from "@/components/DemoForm";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "FatFox vs PetPooja — why restaurants switch",
  description:
    "An honest, side-by-side comparison of FatFox and PetPooja restaurant software — commission, white-label, delivery fleet, billing, support and pricing. See what you get with FatFox.",
  alternates: { canonical: `${site.url}/compare` },
  openGraph: {
    title: `FatFox vs PetPooja — why restaurants switch | ${site.name}`,
    description:
      "Side-by-side comparison of FatFox and PetPooja — commission, white-label, delivery fleet, billing and support.",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
};

type Row = {
  feature: string;
  fatfox: string;
  petpooja: string;
  win: "fatfox" | "petpooja" | "tie";
};

const ROWS: Row[] = [
  { feature: "Cloud POS — dine-in, takeaway & delivery", fatfox: "Included", petpooja: "Included", win: "tie" },
  { feature: "Kitchen display system & KOT printing", fatfox: "Included", petpooja: "Included", win: "tie" },
  { feature: "Online ordering website under your own brand & domain", fatfox: "Included on every plan", petpooja: "Paid add-on", win: "fatfox" },
  { feature: "Commission on your own-branded website orders", fatfox: "0% commission*", petpooja: "Per-order fee applies", win: "fatfox" },
  { feature: "Delivery partner app for your own fleet", fatfox: "Included (white-label)", petpooja: "Not a core product", win: "fatfox" },
  { feature: "GST billing & GST invoice generation", fatfox: "Included in POS", petpooja: "Separate product needed", win: "fatfox" },
  { feature: "Payroll, attendance & staff management", fatfox: "Included in admin panel", petpooja: "Separate product needed", win: "fatfox" },
  { feature: "Multi-outlet consolidated reports", fatfox: "Included", petpooja: "Included", win: "tie" },
  { feature: "White-label driver app & storefront for chains", fatfox: "Included on Scale", petpooja: "Limited", win: "fatfox" },
  { feature: "No lock-in — cancel anytime", fatfox: "Yes", petpooja: "Contract terms vary", win: "fatfox" },
  { feature: "Transparent published pricing", fatfox: "Published on site", petpooja: "Quote-based", win: "fatfox" },
  { feature: "Free onboarding & staff training", fatfox: "Included", petpooja: "Included", win: "tie" },
  { feature: "24×7 support by phone, chat & email", fatfox: "Yes", petpooja: "Yes", win: "tie" },
  { feature: "Custom integrations & open API", fatfox: "Available on Scale", petpooja: "Enterprise only", win: "fatfox" },
];

const HIGHLIGHTS = [
  {
    icon: "M12 2 L14.5 8.5 L21 9.5 L16.5 14 L18 20.5 L12 17 L6 20.5 L7.5 14 L3 9.5 L9.5 8.5 Z",
    title: "0% commission on your own orders",
    desc: "Every order on your branded storefront is 100% yours — no per-order cut on qualifying plans.",
  },
  {
    icon: "M3 8 L6 5 H14 L17 8 H20 A1.5 1.5 0 0 1 21.5 9.5 V15 H18 M3 8 H1.5 A1.5 1.5 0 0 0 0 9.5 V14.5 H3 M6 15.5 A2 2 0 1 0 6 19.5 A2 2 0 0 0 6 15.5 Z M18 15.5 A2 2 0 1 0 18 19.5 A2 2 0 0 0 18 15.5 Z",
    title: "One platform, everything included",
    desc: "POS, storefront, billing, staff and delivery fleet in one subscription — not three separate products.",
  },
  {
    icon: "M12 21 a9 9 0 1 0 0-18 a9 9 0 0 0 0 18 Z M12 7 V12 L15 14",
    title: "Live in 7 days",
    desc: "Free onboarding, menu setup and staff training — your restaurant runs on FatFox within a week.",
  },
  {
    icon: "M20 12 a8 8 0 1 1-16 0 a8 8 0 0 1 16 0 Z M12 8 V12 L14.5 14.5",
    title: "99.9% uptime with SLA",
    desc: "Backed by a written service-level agreement — not just a promise in marketing copy.",
  },
];

const COMPARE_FAQS = [
  {
    q: "Is this comparison fair?",
    a: "Yes. The table reflects what is publicly stated on each company's website as of August 2026 — product scope, add-ons and pricing models. Where something is unclear, we mark it conservatively. If any detail is out of date, tell us and we'll correct it.",
  },
  {
    q: "How is FatFox different from PetPooja?",
    a: "PetPooja sells several separate products (POS, payroll, invoicing, tasks) that must be bought and integrated individually. FatFox is one platform — cloud POS, branded online storefront with 0% commission on qualifying plans, staff management, GST billing and a white-label delivery driver app — all included in a single transparent subscription.",
  },
  {
    q: "Can I migrate from PetPooja to FatFox?",
    a: "Yes. Menu data, item images and category structures are migrated by our team as part of free onboarding. Most restaurants are live within 7 days, and your storefront URL and QR codes can be re-pointed to keep regular customers coming back.",
  },
  {
    q: "What about aggregator orders (Zomato, Swiggy)?",
    a: "Both platforms integrate with aggregators. FatFox does not charge commission on your own-branded website orders — aggregator commissions are separate and set by the aggregators themselves.",
  },
];

const compareFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: COMPARE_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

function Mark({ kind }: { kind: "fatfox" | "petpooja" | "tie" }) {
  if (kind === "fatfox") {
    return (
      <span className="inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-500 text-white" aria-label="FatFox advantage">
        <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 8.5 L6.5 12 L13 4.5" />
        </svg>
      </span>
    );
  }
  if (kind === "petpooja") {
    return (
      <span className="inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-ink/10 text-ink/50" aria-label="PetPooja advantage">
        <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
          <path d="M4 4 L12 12 M12 4 L4 12" />
        </svg>
      </span>
    );
  }
  return (
    <span className="inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-ink/5 text-ink/40" aria-label="Equal">
      <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
        <path d="M3 6 H13 M3 10 H13" />
      </svg>
    </span>
  );
}

export default function ComparePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(compareFaqJsonLd) }}
      />

      <section className="relative overflow-hidden py-16 sm:py-24">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 12% 8%, rgba(255,87,51,.12) 0, transparent 34%), radial-gradient(circle at 88% 18%, rgba(255,87,51,.08) 0, transparent 30%)",
          }}
        />
        <div className="container-x relative">
          <SectionHeading
            eyebrow="FatFox vs PetPooja"
            title="Built to be the better choice"
            description="Two restaurant platforms, one honest table. See exactly what you get with FatFox — and what you'd be paying for elsewhere."
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2">
            {HIGHLIGHTS.map((h, i) => (
              <Reveal key={h.title} delay={(i % 2) * 100}>
                <div className="flex h-full items-start gap-4 rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/10">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d={h.icon} />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-ink">{h.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink/60">{h.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#faf7f5] py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Side by side"
            title="The honest comparison table"
            description="Based on publicly available information as of August 2026. FatFox rows marked with a check where we believe we lead."
          />
          <div className="mx-auto mt-12 max-w-4xl overflow-x-auto rounded-3xl border border-black/10 bg-white shadow-xl shadow-black/5">
            <table className="w-full min-w-[560px] border-collapse text-left">
              <thead>
                <tr className="border-b border-black/10">
                  <th scope="col" className="px-6 py-5 text-sm font-bold text-ink/60">Feature</th>
                  <th scope="col" className="w-[30%] px-6 py-5">
                    <span className="flex items-center gap-2">
                      <span className="font-display text-sm font-extrabold text-ink">FatFox</span>
                      <span className="rounded-full bg-brand-500 px-2 py-0.5 text-[10px] font-extrabold text-white">Recommended</span>
                    </span>
                  </th>
                  <th scope="col" className="w-[30%] px-6 py-5 font-display text-sm font-extrabold text-ink/50">PetPooja</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r.feature} className={cn("border-b border-black/5 last:border-0", r.win === "fatfox" && "bg-brand-50/60")}>
                    <th scope="row" className="px-6 py-4 text-sm font-semibold text-ink">{r.feature}</th>
                    <td className={cn("px-6 py-4 text-sm", r.win === "fatfox" ? "font-bold text-brand-700" : "font-medium text-ink/80")}>
                      <span className="flex items-center gap-2">
                        <Mark kind="fatfox" />
                        {r.fatfox}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-ink/70">
                      <span className="flex items-center gap-2">
                        <Mark kind="petpooja" />
                        {r.petpooja}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed text-ink/50">
            *0% commission applies to orders placed on your own branded FatFox storefront on the Growth plan and above.
            PetPooja details reflect its public website (products, add-ons and pricing model) as of August 2026 — product
            portfolios change, so verify with both teams before deciding.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="The switch"
            title="Why restaurants switch to FatFox"
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-4">
            {[
              "One invoice instead of three — POS, storefront, billing and delivery fleet in a single subscription.",
              "0% commission on your own-branded orders, so your highest-margin channel stays profitable.",
              "A white-label delivery app means you keep the rider relationship — and the delivery margin.",
              "Transparent published pricing with no lock-in — cancel anytime, export your data, walk away free.",
              "Your brand everywhere: storefront, driver app and admin panel all carry your logo, colours and domain.",
            ].map((t, i) => (
              <Reveal key={t} delay={Math.min(i * 80, 320)}>
                <div className="flex items-start gap-4 rounded-2xl border border-black/5 bg-white px-6 py-5 shadow-sm">
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-brand-500 font-display text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="pt-1 text-sm leading-relaxed text-ink/80">{t}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-brand-500/30 transition hover:-translate-y-0.5 hover:bg-brand-600"
            >
              Start the switch — book a free demo
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#faf7f5] py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="FAQ" title="Comparison questions, answered" />
          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {COMPARE_FAQS.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-black/10 bg-white px-6 py-5 transition open:border-brand-300 open:shadow-lg open:shadow-brand-500/5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-bold text-ink">
                  {f.q}
                  <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-brand-50 text-brand-600 transition group-open:rotate-45 group-open:bg-brand-500 group-open:text-white">
                    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                      <path d="M8 3 V13 M3 8 H13" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-28">
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 15%, rgba(255,87,51,.28) 0, transparent 38%), radial-gradient(circle at 10% 90%, rgba(255,87,51,.16) 0, transparent 40%)",
          }}
        />
        <div className="container-x relative grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-400">
              See it for yourself
            </p>
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Compare us live — book a free demo
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-white/60">
              Tell us what you use today (PetPooja or anything else) and our team
              will show you the same workflow on FatFox — side by side.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-white/75">
              {[
                "Personalised walkthrough mapped to your current setup",
                "Migration & data porting handled by our team",
                "Transparent quote before you commit to anything",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-500/20 text-brand-400">
                    <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3 8.5 L6.5 12 L13 4.5" />
                    </svg>
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur sm:p-8">
            <DemoForm compact />
          </div>
        </div>
      </section>
    </>
  );
}