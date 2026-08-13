import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading, CheckIcon } from "@/components/sections/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing — Transparent plans for every restaurant",
  description:
    "FatFox pricing for restaurants, cloud kitchens and food chains. Transparent plans with no hidden fees — POS, online ordering storefront and delivery app plans starting at ₹0 setup.",
  alternates: { canonical: `${site.url}/pricing` },
  openGraph: {
    title: `Pricing — Transparent plans for every restaurant | ${site.name}`,
    description:
      "FatFox pricing for restaurants, cloud kitchens and food chains.",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
};

const PLANS = [
  {
    name: "Starter",
    tagline: "For live ordering, fast",
    price: "₹0",
    period: "setup fee. Storefront at 2% per order.",
    highlight: false,
    features: [
      "White-label online storefront",
      "Branded page on your own domain",
      "Unlimited menu items & categories",
      "Order admin panel",
      "Email & chat support",
    ],
  },
  {
    name: "Growth",
    tagline: "Full operations, one platform",
    price: "Custom",
    period: "quote based on outlets & volume.",
    highlight: true,
    features: [
      "Everything in Starter",
      "Cloud POS — dine-in, takeaway & delivery",
      "Kitchen display system",
      "GST billing & settlement reports",
      "Inventory & staff management",
      "Storefront at 0% commission*",
      "Priority 24×7 support",
    ],
  },
  {
    name: "Scale",
    tagline: "For chains & delivery platforms",
    price: "Enterprise",
    period: "multi-outlet & multi-tenant pricing.",
    highlight: false,
    features: [
      "Everything in Growth",
      "Delivery partner app & fleet management",
      "Multi-outlet consolidated reports",
      "White-label across your brands",
      "Custom integrations & APIs",
      "Dedicated success manager",
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 10%, rgba(255,87,51,.1) 0, transparent 34%)",
          }}
        />
        <div className="container-x relative">
          <SectionHeading
            eyebrow="Pricing"
            title="Transparent pricing that scales with you"
            description="Simple plans, no hidden fees, no lock-in. Start with a free demo and move up when your business does."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {PLANS.map((p) => (
              <article
                key={p.name}
                className={
                  p.highlight
                    ? "relative flex flex-col rounded-3xl border-2 border-brand-500 bg-white p-8 shadow-2xl shadow-brand-500/15"
                    : "relative flex flex-col rounded-3xl border border-black/10 bg-white p-8 shadow-sm"
                }
              >
                {p.highlight && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-4 py-1 text-xs font-bold text-white">
                    Most popular
                  </span>
                )}
                <h2 className="font-display text-xl font-extrabold text-ink">{p.name}</h2>
                <p className="mt-1 text-sm text-ink/55">{p.tagline}</p>
                <p className="mt-6 font-display text-4xl font-extrabold tracking-tight text-ink">
                  {p.price}
                </p>
                <p className="mt-1 text-xs text-ink/50">{p.period}</p>
                <ul className="mt-7 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm font-medium text-ink/80">
                      <CheckIcon className="mt-0.5 h-4 w-4" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={
                    p.highlight
                      ? "mt-8 rounded-full bg-brand-500 px-6 py-3 text-center text-sm font-bold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-600"
                      : "mt-8 rounded-full border border-black/10 px-6 py-3 text-center text-sm font-bold text-ink transition hover:border-brand-300 hover:text-brand-600"
                  }
                >
                  Get Started
                </Link>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-ink/50">
            *Storefront 0% commission applies to orders placed on your own branded website above the
            Growth plan. Payment gateway charges, if any, are passed through at cost. All plans
            include free onboarding and training.
          </p>
        </div>
      </section>

      <section className="bg-[#faf7f5] py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="What's included"
            title="Every plan comes with"
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-x-12 gap-y-6 sm:grid-cols-2">
            {[
              "Free onboarding & data migration",
              "Staff training at no extra cost",
              "Standard POS hardware support",
              "99.9% uptime with SLA",
              "Regular feature updates",
              "Cancel anytime, no lock-in",
            ].map((t) => (
              <div key={t} className="flex items-center gap-3 rounded-2xl border border-black/5 bg-white px-5 py-4 shadow-sm">
                <CheckIcon />
                <span className="text-sm font-semibold text-ink">{t}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-brand-500/30 transition hover:bg-brand-600"
            >
              Talk to Sales — Book a Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}