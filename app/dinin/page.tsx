import type { Metadata } from "next";
import Link from "next/link";
import DineInMockup from "@/components/mockups/DineInMockup";
import CtaBand from "@/components/sections/CtaBand";
import Faq from "@/components/sections/Faq";

export const metadata: Metadata = {
  title: "Dine-In Management System & Waiter Captain App | FatFox",
  description:
    "Complete Dine-In Operating System for modern restaurants: 40+ tables across 5 zones, native Flutter Waiter Captain App (Dineinapk), instant QR table ordering, split billing, and silent ESC/POS thermal KOT printing.",
  keywords: [
    "dine in restaurant pos",
    "table management software",
    "waiter captain app",
    "qr code table ordering",
    "kot thermal printing",
    "restaurant table floor plan",
    "fatfox dine in",
    "petpooja alternative dine in",
  ],
};

const DINEIN_FEATURES = [
  {
    title: "Flutter Waiter Captain App (Dineinapk)",
    desc: "Empower waiters on Android phones and Sunmi handheld POS devices. Take orders at table-side, customize variants/add-ons, and sync directly with kitchen KOT printers.",
    icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
    badge: "Native Android & Sunmi",
  },
  {
    title: "Table Floor Plan & 5 Zone Management",
    desc: "Organize up to 40+ tables across AC Dining, Non-AC, VIP Lounge, Outdoor, and Family Sections with real-time status badges (Free, Occupied, KOT Pending, Billed).",
    icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
    badge: "Live Visual Floor",
  },
  {
    title: "Contactless QR-Code Table Ordering",
    desc: "Guests scan table QR codes to view your digital menu with 235+ items, select dish variants, place orders, and pay straight from their phone with 0% commission.",
    icon: "M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z",
    badge: "0% Commission",
  },
  {
    title: "Silent Thermal ESC/POS KOT Printing",
    desc: "Sub-0.5 second ticket routing to Kitchen, Bar, and Tandoor thermal printers via LAN TCP (:9100) or Bluetooth SPP with automated KOT department auto-cut.",
    icon: "M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z",
    badge: "0.5s Latency",
  },
  {
    title: "Table Shift, Merge & Split Billing",
    desc: "Move guests between tables effortlessly, merge multiple tables for large parties, and split bills equally or seat-wise with dynamic discount codes.",
    icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    badge: "Flexible Billing",
  },
  {
    title: "Pre-Booking & Reservation Calendar",
    desc: "Accept advance table reservations for weekends and special events. Floor plan automatically reserves tables and alerts captains upon guest arrival.",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    badge: "Max Seating Capacity",
  },
];

const COMPARISON_ROWS = [
  { feature: "Bundled Mobile Waiter Captain App", fatfox: "Included (Dineinapk)", petpooja: "Paid Add-on Extra", win: "fatfox" },
  { feature: "QR Code Dine-In Table Ordering", fatfox: "Included (0% Commission)", petpooja: "Additional Monthly Charge", win: "fatfox" },
  { feature: "Thermal KOT Printer Discovery", fatfox: "LAN Subnet Scan + Bluetooth Auto", petpooja: "Manual IP Setup Required", win: "fatfox" },
  { feature: "Table Floor Plan Zones", fatfox: "5 Customizable Zones & Timers", petpooja: "Basic Table Grid", win: "fatfox" },
  { feature: "Sunmi POS & Android Handheld Support", fatfox: "Native Flutter APK", petpooja: "Web Browser / Native Wrapper", win: "fatfox" },
  { feature: "Offline Bill & Cart Resilience", fatfox: "Local Cache + Stale Floor Recovery", petpooja: "Requires Active Internet", win: "fatfox" },
];

const DINEIN_FAQS = [
  {
    q: "How does the FatFox Waiter Captain App (Dineinapk) work?",
    a: "The Captain App is a native Flutter Android application designed for waiters and POS operators. Staff can log in, view live floor plans across 5 areas, select tables, add items with variants/add-ons, and trigger silent ESC/POS thermal KOT prints directly from their mobile phone or Sunmi terminal.",
  },
  {
    q: "Can customers order from their phone at the table?",
    a: "Yes! Every table can have a unique QR code. Customers scan the QR, browse your live menu, customize dishes, and submit orders directly to your kitchen. The order automatically updates the table status in your POS and Waiter Captain App.",
  },
  {
    q: "What thermal printers are supported for KOT printing?",
    a: "FatFox supports all standard 80mm and 58mm ESC/POS thermal printers connected over LAN (TCP port 9100) or Bluetooth SPP. Our built-in printer discovery service auto-scans your local network subnet to detect printers in under a second.",
  },
  {
    q: "How does table shifting and split billing work?",
    a: "Waiters can long-press any active table card to shift items or move guests to another available table. For billing, staff can split the bill equally, by individual seats, or apply percentage/flat discounts before printing final receipts.",
  },
  {
    q: "What happens if the internet goes down during dining service?",
    a: "FatFox is engineered with offline resilience. The Captain App and POS cache floor state locally, allowing waiters to take orders, print KOTs to local LAN printers, and generate bills without interruption. Once reconnected, data syncs automatically to the cloud server.",
  },
];

export default function DineInPage() {
  return (
    <div className="bg-canvas text-ink">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-ink via-ink to-brand-950/40 pb-20 pt-16 text-white">
        <div className="container-x relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-brand-300 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-brand-400 animate-pulse" />
              Complete Dine-In Operating System
            </div>

            <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
              Transform Your Table Service with{" "}
              <span className="gradient-text bg-gradient-to-r from-brand-300 via-amber-300 to-brand-500 bg-clip-text text-transparent">
                FatFox Dine-In
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-white/75 sm:text-xl">
              Manage 40+ tables across 5 floor zones, empower waiters with the Flutter Captain App (<code>Dineinapk</code>), enable zero-wait QR table ordering, and print silent thermal KOT tickets in under 0.5s.
            </p>

            {/* Badges */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-white/80">
              <span className="rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5">
                ⚡ 0.5s KOT Latency
              </span>
              <span className="rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5">
                📱 Waiter Captain App
              </span>
              <span className="rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5">
                🖨️ ESC/POS Thermal LAN &amp; Bluetooth
              </span>
              <span className="rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5">
                📲 0% Commission QR Ordering
              </span>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-shine rounded-full bg-brand-500 px-7 py-3.5 text-base font-bold text-white shadow-xl shadow-brand-500/30 transition hover:bg-brand-600"
              >
                Book a Dine-In Demo
              </Link>
              <Link
                href="/download"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-base font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-brand-400" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 3v13m-5-5l5 5 5-5M4 21h16" />
                </svg>
                Download Captain APK &amp; Windows POS
              </Link>
            </div>
          </div>

          {/* Interactive Live Control Room Mockup */}
          <div className="mt-14">
            <div className="text-center mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-400">
                Live Interactive Floor Control Room Preview
              </span>
            </div>
            <DineInMockup className="mx-auto max-w-5xl" />
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="border-y border-black/10 bg-white py-12">
        <div className="container-x">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 text-center">
            <div className="rounded-2xl border border-black/5 bg-brand-50/50 p-6">
              <div className="font-display text-3xl font-extrabold text-ink sm:text-4xl">35%</div>
              <div className="mt-1 text-sm font-semibold text-ink/60">Faster Table Turnover</div>
            </div>
            <div className="rounded-2xl border border-black/5 bg-brand-50/50 p-6">
              <div className="font-display text-3xl font-extrabold text-brand-600 sm:text-4xl">&lt;0.5s</div>
              <div className="mt-1 text-sm font-semibold text-ink/60">KOT Thermal Print Latency</div>
            </div>
            <div className="rounded-2xl border border-black/5 bg-brand-50/50 p-6">
              <div className="font-display text-3xl font-extrabold text-ink sm:text-4xl">100%</div>
              <div className="mt-1 text-sm font-semibold text-ink/60">Order Accuracy &amp; Sync</div>
            </div>
            <div className="rounded-2xl border border-black/5 bg-brand-50/50 p-6">
              <div className="font-display text-3xl font-extrabold text-emerald-600 sm:text-4xl">0%</div>
              <div className="mt-1 text-sm font-semibold text-ink/60">Commission on QR Orders</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Showcase Grid (PetPooja Style) */}
      <section className="py-20 bg-canvas">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Built for Fast-Paced Restaurant Floor Operations
            </h2>
            <p className="mt-3 text-base text-ink/70">
              Everything your captains, cashiers, and kitchen team need to deliver exceptional dine-in experiences.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {DINEIN_FEATURES.map((f) => (
              <div
                key={f.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-500/10"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-500 group-hover:text-white">
                      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d={f.icon} />
                      </svg>
                    </div>
                    <span className="rounded-full bg-brand-50 px-3 py-1 text-[11px] font-bold text-brand-700">
                      {f.badge}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-lg font-bold text-ink">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware Ecosystem Section */}
      <section className="border-t border-black/10 bg-white py-16">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-extrabold text-emerald-800">
              HARDWARE COMPATIBILITY
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">
              Works Seamlessly with Your Existing Restaurant Hardware
            </h2>
            <p className="mt-3 text-base text-ink/70">
              No locked-in proprietary hardware. FatFox Dine-In runs smoothly across standard Android phones, Sunmi POS devices, Windows PCs, and thermal receipt printers.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-2xl border border-black/10 bg-canvas p-5 text-center">
              <div className="font-display text-base font-bold text-ink">Sunmi V2 &amp; T2</div>
              <div className="mt-1 text-xs text-ink/60">Android Handheld &amp; Desktop POS</div>
            </div>
            <div className="rounded-2xl border border-black/10 bg-canvas p-5 text-center">
              <div className="font-display text-base font-bold text-ink">Android Mobiles</div>
              <div className="mt-1 text-xs text-ink/60">Flutter Captain App (Dineinapk)</div>
            </div>
            <div className="rounded-2xl border border-black/10 bg-canvas p-5 text-center">
              <div className="font-display text-base font-bold text-ink">Windows POS PC</div>
              <div className="mt-1 text-xs text-ink/60">Windows 7, 8, 10 &amp; 11 Desktop</div>
            </div>
            <div className="rounded-2xl border border-black/10 bg-canvas p-5 text-center">
              <div className="font-display text-base font-bold text-ink">Thermal Printers</div>
              <div className="mt-1 text-xs text-ink/60">80mm / 58mm LAN &amp; Bluetooth</div>
            </div>
          </div>
        </div>
      </section>

      {/* Petpooja Comparison Section */}
      <section className="py-20 bg-canvas border-t border-black/10">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
              Why Restaurants Upgrade from Petpooja to FatFox Dine-In
            </h2>
            <p className="mt-3 text-base text-ink/70">
              Compare key Dine-In capabilities side by side and see how FatFox saves time and subscription costs.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-ink">
                <thead className="bg-ink text-white uppercase text-[11px] font-bold tracking-wider">
                  <tr>
                    <th className="px-6 py-4">Dine-In Feature</th>
                    <th className="px-6 py-4 text-brand-300">FatFox Dine-In</th>
                    <th className="px-6 py-4 text-white/60">Petpooja</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/10">
                  {COMPARISON_ROWS.map((r, i) => (
                    <tr key={i} className="hover:bg-brand-50/50 transition">
                      <td className="px-6 py-4 font-semibold text-ink">{r.feature}</td>
                      <td className="px-6 py-4 font-bold text-emerald-600 bg-emerald-50/40">
                        ✓ {r.fatfox}
                      </td>
                      <td className="px-6 py-4 text-ink/60">{r.petpooja}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white border-t border-black/10">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-ink">Frequently Asked Questions</h2>
            <p className="mt-2 text-sm text-ink/60">Everything you need to know about setting up FatFox Dine-In.</p>
          </div>
          <Faq items={DINEIN_FAQS} />
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand />
    </div>
  );
}
