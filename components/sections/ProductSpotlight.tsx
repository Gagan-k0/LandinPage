import Link from "next/link";
import Reveal from "@/components/Reveal";
import PosMockup from "@/components/mockups/PosMockup";
import StorefrontMockup from "@/components/mockups/StorefrontMockup";
import DriverMockup from "@/components/mockups/DriverMockup";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { cn } from "@/lib/utils";

const SPOTLIGHTS = [
  {
    id: "pos",
    eyebrow: "Cloud POS & Admin Panel",
    title: "Restaurant POS software made simple!",
    description:
      "Run every part of your restaurant from one control room — dine-in, takeaway, delivery and online orders together.",
    points: [
      "QR-code dine-in ordering — guests scan, order & pay from the table",
      "Kitchen display with departments & auto KOT printing",
      "Live order flow: new → preparing → picked up → delivered",
      "Room-service POS & guest folio for hotels & guesthouses",
      "Add-ons, combos, variants, discounts & taxes in one menu engine",
      "Settlements, transactions & GST invoices for every channel",
    ],
    cta: { label: "Explore Cloud POS", href: "/pos" },
    mockup: <PosMockup />,
  },
  {
    id: "storefront",
    eyebrow: "Storefront",
    title: "Your own online ordering website!",
    description:
      "A fast, SEO-ready ordering site under your brand and domain with 0% commission — plus everything regular customers love.",
    points: [
      "White-label website under your brand, colours & domain",
      "0% commission — every online order belongs to you",
      "Full checkout for delivery, pickup, dine-in & room bill",
      "Live order tracking with notifications at every step",
      "Favourites, reviews & ratings that bring customers back",
      "Dine-in pre-booking & reservations built in",
    ],
    cta: { label: "Explore Storefront", href: "/storefront" },
    mockup: <StorefrontMockup />,
  },
  {
    id: "delivery",
    eyebrow: "Delivery Partner App",
    title: "A rider app your fleet will love!",
    description:
      "From OTP login to daily settlements — everything your delivery partners need to deliver fast and earn more.",
    points: [
      "OTP-based login — riders onboard in under a minute",
      "Live order alerts with accept, decline & availability toggle",
      "Start, pick up & deliver flow with built-in navigation",
      "COD cash tracking with zero reconciliation headaches",
      "Earnings, ratings & payouts visible in real time",
      "White-label rider app with your brand & colours",
    ],
    cta: { label: "Explore Delivery App", href: "/delivery" },
    mockup: <DriverMockup />,
  },
] as const;

export default function ProductSpotlight() {
  return (
    <section id="products" className="py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Products"
          title="Everything your restaurant needs to grow"
          description="We design our products to be the best in every way, so you get the most out of them — quality, ease of use and great performance."
        />
        <div className="mt-16 space-y-24 lg:space-y-32">
          {SPOTLIGHTS.map((s, i) => (
            <Reveal key={s.id} as="article" className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className={cn(i % 2 === 1 && "lg:order-2")}>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
                  {s.eyebrow}
                </p>
                <h3 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                  {s.title}
                </h3>
                <p className="mt-4 leading-relaxed text-ink/60">{s.description}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm font-medium text-ink/80">
                      <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-100 text-brand-600">
                        <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M3 8.5 L6.5 12 L13 4.5" />
                        </svg>
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  href={s.cta.href}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand-500"
                >
                  {s.cta.label}
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 8 H13 M9 4 L13 8 L9 12" />
                  </svg>
                </Link>
              </div>
              <div className={cn(i % 2 === 1 && "lg:order-1", "relative")}>
                <div
                  className={cn(
                    "absolute -inset-6 rounded-[2.5rem] blur-3xl",
                    i % 2 === 1
                      ? "bg-gradient-to-br from-brand-500/15 via-transparent to-transparent"
                      : "bg-gradient-to-bl from-brand-500/15 via-transparent to-transparent"
                  )}
                  aria-hidden="true"
                />
                <div className="relative">{s.mockup}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}