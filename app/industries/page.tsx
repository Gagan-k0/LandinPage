import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries — Built for restaurants, cloud kitchens, hotels & chains",
  description:
    "FatFox adapts to every food business — restaurants & cafés, cloud kitchens, food chains & franchises, hotels & guesthouses, and QSRs. See how each industry uses the platform.",
  alternates: { canonical: `${site.url}/industries` },
  openGraph: {
    title: `Industries — Built for restaurants, cloud kitchens, hotels & chains | ${site.name}`,
    description:
      "FatFox for restaurants, cloud kitchens, food chains, hotels and QSRs.",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
};

const INDUSTRIES = [
  {
    id: "restaurants",
    name: "Restaurants & Cafés",
    tagline: "Run the floor like clockwork",
    icon: "M12 2 V4 M12 8 V10 M10 6 H14 M6 8 A2 2 0 0 1 8 6 H16 A2 2 0 0 1 18 8 C18 13 16 16 14 18 L12 20 L10 18 C8 16 6 13 6 8 Z",
    points: [
      "QR-code ordering that cuts waiter legwork in peak hours",
      "Table floor plan with live occupancy",
      "KOT to kitchen departments in seconds",
      "Dine-in pre-booking for weekends",
    ],
  },
  {
    id: "cloud-kitchens",
    name: "Cloud Kitchens",
    tagline: "Focus on food, not admin",
    icon: "M16 8 A6 6 0 0 1 22 14 C22 18 19 20 16 20 H8 A6 6 0 0 1 8 8 A5 5 0 0 1 16 8 Z M16 14 C16 17 15 19 12.5 19 M9 12 A1 1 0 1 0 9 14 A1 1 0 0 0 9 12 Z",
    points: [
      "Delivery-first dashboard with live statuses",
      "Rider app + COD handling for self-delivery",
      "0% commission storefront for direct orders",
      "Per-kitchen reports across multiple brands",
    ],
  },
  {
    id: "chains",
    name: "Food Chains & Franchises",
    tagline: "One control room, many outlets",
    icon: "M3 7 H21 M3 12 H21 M3 17 H21 M6 9 V19 M10 9 V19 M14 9 V19 M18 9 V19",
    points: [
      "Multi-outlet login with per-branch roles",
      "Consolidated sales & settlement reports",
      "Standardised menu, taxes & discounts",
      "Branded storefront for every location",
    ],
  },
  {
    id: "hotels",
    name: "Hotels & Guesthouses",
    tagline: "Room service without the chaos",
    icon: "M12 3 a4 4 0 0 1 4 4 c0 2-1.5 3-1.5 5 H9.5 C9.5 10 8 9 8 7 a4 4 0 0 1 4-4 Z M8.5 13 H15.5 A3 3 0 0 1 15.5 19 H8.5 A3 3 0 0 1 8.5 13 Z",
    points: [
      "Room-wise POS & guest folio billing",
      "Bookings, rooms & guest management",
      "Restaurant + hotel reports in one place",
      "Room-bill checkout at your storefront",
    ],
  },
  {
    id: "qsr",
    name: "QSRs & Bakeries",
    tagline: "Fast orders, faster counters",
    icon: "M12 3 V5 M12 19 V21 M5 12 H3 M21 12 H19 M6 6 L4.5 4.5 M19.5 4.5 L18 6 M6 18 L4.5 19.5 M18 18 L19.5 19.5 M12 8 A4 4 0 1 0 12 16 A4 4 0 0 0 12 8 Z",
    points: [
      "Quick-service billing with variants & add-ons",
      "Pickup orders with offline mode",
      "Combo meal pricing that updates instantly",
      "Hourly sales view for shift planning",
    ],
  },
  {
    id: "platforms",
    name: "Platform Builders & White-label",
    tagline: "Launch your own food ordering brand",
    icon: "M12 2 L3 7 L12 12 L21 7 Z M3 11 L12 16 L21 11 M3 15 L12 20 L21 15",
    points: [
      "Fully white-label storefront, admin & driver app",
      "Multi-tenant management via super-admin",
      "Your brand, colours & domains on everything",
      "APIs to integrate with your existing stack",
    ],
  },
];

export default function IndustriesPage() {
  return (
    <>
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 10%, rgba(255,87,51,.12) 0, transparent 34%), radial-gradient(circle at 88% 15%, rgba(255,87,51,.08) 0, transparent 30%)",
          }}
        />
        <div className="container-x relative">
          <SectionHeading
            eyebrow="Industries"
            title="FatFox adapts to every food business"
            description="The same powerful platform, tuned for how your business operates — from a single café counter to a national chain."
          />
        </div>
      </section>

      <section className="bg-[#faf7f5] py-20 sm:py-24">
        <div className="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.id} delay={(i % 3) * 100}>
              <article className="card-ring group flex h-full flex-col rounded-3xl border border-black/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-500/15">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d={ind.icon} />
                  </svg>
                </span>
                <h2 className="mt-6 font-display text-xl font-extrabold text-ink">{ind.name}</h2>
                <p className="mt-1 text-sm font-semibold text-brand-600">{ind.tagline}</p>
                <ul className="mt-5 flex-1 space-y-3">
                  {ind.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm font-medium text-ink/75">
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
                  href="/contact"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-brand-600 transition group-hover:gap-3"
                >
                  See it for {ind.name.toLowerCase().replace(/s$/, "")}
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 8 H13 M9 4 L13 8 L9 12" />
                  </svg>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-24">
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 85% 15%, rgba(255,87,51,.22) 0, transparent 38%)",
          }}
        />
        <div className="container-x relative text-center">
          <h2 className="text-balance mx-auto max-w-2xl font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Don&apos;t see your business type?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">
            Tell us how you operate — we&apos;ll show you exactly how FatFox fits.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="btn-shine rounded-full bg-brand-500 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-brand-500/30 transition hover:bg-brand-600"
            >
              Talk to Us
            </Link>
            <Link
              href="/features"
              className="rounded-full border border-white/20 px-8 py-4 text-sm font-bold text-white transition hover:border-brand-400 hover:text-brand-400"
            >
              Explore All Features
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}