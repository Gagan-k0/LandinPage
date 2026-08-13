import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Features — Complete restaurant management platform",
  description:
    "Explore every FatFox feature — order management, kitchen display, QR-code dine-in, delivery fleet, menu engine, GST billing, settlements, hotels & room service, customers, staff and reports.",
  alternates: { canonical: `${site.url}/features` },
  openGraph: {
    title: `Features — Complete restaurant management platform | ${site.name}`,
    description:
      "Every FatFox feature: POS, kitchen, delivery, billing, hotels and reports.",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
};

const GROUPS = [
  {
    id: "orders",
    title: "Order management",
    desc: "Every order from every channel, in one live board.",
    icon: "M4 7 V17 M8 4 V20 M12 7 V17 M16 4 V20 M20 7 V17",
    features: [
      "Dine-in, takeaway, delivery & online orders in one flow",
      "Live order pipeline: new → preparing → picked up → delivered",
      "QR-code ordering — guests scan, order & pay from the table",
      "Dine-in pre-booking with table calendar",
      "Cancellation & rejection handling with reasons",
      "Pickup orders with offline mode & auto-sync",
    ],
  },
  {
    id: "kitchen",
    title: "Kitchen display & KOT",
    desc: "Print and digital tickets that keep kitchens fast.",
    icon: "M12 3 L3 8 L12 13 L21 8 Z M3 12 L12 17 L21 12 M3 16 L12 21 L21 16",
    features: [
      "Kitchen dashboard with live orders",
      "Multiple kitchen departments with own display",
      "Automatic KOT printing — dine-in & delivery",
      "Prep timers & priority sorting for rush hours",
      "KOT reprint & save-bill options",
      "Room-service KOT for in-house guests",
    ],
  },
  {
    id: "delivery",
    title: "Delivery management",
    desc: "Your own riders, zones and COD — fully controlled.",
    icon: "M3 8 L6 5 H14 L17 8 H20 A1.5 1.5 0 0 1 21.5 9.5 V15 H18 M3 8 H1.5 A1.5 1.5 0 0 0 0 9.5 V14.5 H3 M6 15.5 A2 2 0 1 0 6 19.5 A2 2 0 0 0 6 15.5 Z M18 15.5 A2 2 0 1 0 18 19.5 A2 2 0 0 0 18 15.5 Z",
    features: [
      "Delivery dashboard with live per-order status",
      "Ready, picked-up & delivered tracking",
      "Delivery areas & zone-wise management",
      "Delivery partner signup, approval & blocking",
      "Per-rider details, earnings & delivery history",
      "Delivery invoices & COD reconciliation",
    ],
  },
  {
    id: "menu",
    title: "Menu & pricing engine",
    desc: "Build any menu complexity without a developer.",
    icon: "M9 5 H18 M9 12 H18 M9 19 H18 M4 5 H4.5 M4 12 H4.5 M4 19 H4.5",
    features: [
      "Categories, food items & custom variants",
      "Add-ons with per-item assignment",
      "Combos with own pricing & discounts",
      "Discounts on items, categories & orders",
      "Multi-tax rates with per-item application",
      "Meal periods — breakfast, lunch, dinner menus",
    ],
  },
  {
    id: "billing",
    title: "Billing, invoices & money",
    desc: "GST-accurate billing with settlements you can trust.",
    icon: "M8 3 H16 V21 H8 Z M12 3 V21 M8 7 H11 M8 11 H11 M8 15 H11",
    features: [
      "GST-compliant billing across all channels",
      "Delivery, pickup & dine-in invoices",
      "Consolidated invoice history & view",
      "Transactions with full payment trail",
      "Settlements per channel, rider & period",
      "Print-bill with custom branding",
    ],
  },
  {
    id: "hotels",
    title: "Hotels, rooms & guests",
    desc: "Room service, guest folios and hotel operations.",
    icon: "M12 3 a4 4 0 0 1 4 4 c0 2-1.5 3-1.5 5 H9.5 C9.5 10 8 9 8 7 a4 4 0 0 1 4-4 Z M8.5 13 H15.5 A3 3 0 0 1 15.5 19 H8.5 A3 3 0 0 1 8.5 13 Z",
    features: [
      "Hotel bookings, rooms & categories",
      "Guest check-in with guest folio billing",
      "Room-service POS — order straight to kitchen",
      "Room & hotel inventory management",
      "Hotel reports & CMS pages",
      "Housekeeping-style service tracking",
    ],
  },
  {
    id: "customers",
    title: "Customers & storefront",
    desc: "Delight customers and grow repeat orders.",
    icon: "M12 21 s-7-4.6-7-10 a7 7 0 0 1 14 0 c0 5.4-7 10-7 10 Z",
    features: [
      "Customer dashboard with order history",
      "Favourites, reviews & ratings",
      "White-label storefront links per branch",
      "Address & profile management",
      "Notifications & live order tracking",
      "Blocked-customer moderation tools",
    ],
  },
  {
    id: "staff",
    title: "Staff & branches",
    desc: "Roles, permissions and multi-outlet control.",
    icon: "M16 21 V19 A4 4 0 0 0 12 15 H6 A4 4 0 0 0 2 19 V21 M9 11 A4 4 0 1 0 9 3 A4 4 0 0 0 9 11 Z M22 21 V19 A4 4 0 0 0 18 15",
    features: [
      "Branch-wise user accounts & roles",
      "Staff profiles with activity tracking",
      "Department assignments for staff",
      "Blocked-staff management",
      "Multi-outlet login from one account",
      "Audit-friendly action history",
    ],
  },
  {
    id: "reports",
    title: "Reports & insights",
    desc: "Know exactly how your business is doing.",
    icon: "M5 20 V12 M12 20 V5 M19 20 V9",
    features: [
      "Sales report by day, item & channel",
      "Settlement & tax summaries",
      "Top dishes & hourly trends",
      "Delivery performance & rider stats",
      "Hotel & room revenue reports",
      "Exportable in one click",
    ],
  },
];

export default function FeaturesPage() {
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
            eyebrow="Features"
            title="One platform. Every feature your restaurant needs."
            description="Everything from QR-code dining to hotel room service — designed to be simple for your team and powerful for your business."
          />
          <Reveal delay={120}>
            <nav
              className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-2"
              aria-label="Feature categories"
            >
              {GROUPS.map((g) => (
                <a
                  key={g.id}
                  href={`#${g.id}`}
                  className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-ink/70 transition hover:border-brand-300 hover:text-brand-600"
                >
                  {g.title}
                </a>
              ))}
            </nav>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#faf7f5] py-20 sm:py-24">
        <div className="container-x space-y-8">
          {GROUPS.map((g, gi) => (
            <Reveal key={g.id} delay={Math.min(gi * 60, 300)}>
              <article
                id={g.id}
                className="scroll-mt-24 rounded-3xl border border-black/5 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-brand-500/10 sm:p-10"
              >
                <div className="flex flex-wrap items-center gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d={g.icon} />
                    </svg>
                  </span>
                  <div>
                    <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink">
                      {g.title}
                    </h2>
                    <p className="text-sm text-ink/55">{g.desc}</p>
                  </div>
                </div>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {g.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 rounded-2xl border border-black/5 bg-[#faf7f5] px-4 py-3 text-sm font-medium text-ink/80 transition-colors duration-200 hover:border-brand-200 hover:bg-brand-50">
                      <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-500 text-white">
                        <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M3 8.5 L6.5 12 L13 4.5" />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
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
            Ready to put these features to work?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">
            Book a free demo and watch your restaurant run on FatFox — live, with
            your own menu.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="btn-shine rounded-full bg-brand-500 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-brand-500/30 transition hover:bg-brand-600"
            >
              Book a Free Demo
            </Link>
            <Link
              href="/download"
              className="rounded-full border border-white/20 px-8 py-4 text-sm font-bold text-white transition hover:border-brand-400 hover:text-brand-400"
            >
              Download for Windows
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}