import type { Metadata } from "next";
import PosMockup from "@/components/mockups/PosMockup";
import {
  ProductPage,
  productMetadata,
} from "@/components/product/ProductPage";

const data = {
  slug: "pos",
  name: "Cloud POS & Admin Panel",
  heading: "Restaurant POS software made simple",
  subheading:
    "Run dine-in, takeaway, delivery and online orders from one cloud dashboard — with kitchen display, GST billing, inventory and staff management built in.",
  description:
    "FatFox Cloud POS is restaurant POS software for dine-in, takeaway and delivery — orders, kitchen display, GST billing, inventory, settlements and staff management in one dashboard for single outlets and chains.",
  keywords: [
    "restaurant pos software",
    "cloud pos system",
    "restaurant billing software",
    "kitchen display system",
    "restaurant management system",
    "pos for restaurants india",
  ],
  bullets: [
    "Dine-in, takeaway & delivery order flow",
    "QR-code dine-in ordering at every table",
    "Kitchen display with department-wise KOTs",
    "GST billing, transactions & settlements",
  ],
  features: [
    { title: "Takes any order, anywhere", desc: "POS terminal, waiter tablet, QR at the table or online — every order reaches the kitchen instantly with zero mix-ups.", icon: "M4 7 V17 M8 4 V20 M12 7 V17 M16 4 V20 M20 7 V17" },
    { title: "QR-code dine-in ordering", desc: "Guests scan the table QR, browse the menu, order and pay from their own phone — waiters and billing stay in sync.", icon: "M8 2 H16 A2 2 0 0 1 18 4 V20 A2 2 0 0 1 16 22 H8 A2 2 0 0 1 6 20 V4 A2 2 0 0 1 8 2 Z M10 6 H14 M11 18 H13" },
    { title: "Kitchen display system", desc: "Department-wise kitchen tickets with prep timers, live-orders view and priority sorting for peak-hour rush.", icon: "M12 3 L3 8 L12 13 L21 8 Z M3 12 L12 17 L21 12 M3 16 L12 21 L21 16" },
    { title: "GST billing & invoicing", desc: "Accurate GST invoices, split bills, discounts and settlement reports for dine-in, delivery and pickup — your accountant will love it.", icon: "M8 3 H16 V21 H8 Z M12 3 V21 M8 7 H11 M8 11 H11 M8 15 H11" },
    { title: "Room-service & guest folio", desc: "Hotels and guesthouses get room-wise POS, guest folios and hotel bookings — from breakfast service to mini-bar billing.", icon: "M12 3 a4 4 0 0 1 4 4 c0 2-1.5 3-1.5 5 H9.5 C9.5 10 8 9 8 7 a4 4 0 0 1 4-4 Z M8.5 13 H15.5 A3 3 0 0 1 15.5 19 H8.5 A3 3 0 0 1 8.5 13 Z" },
    { title: "Pickup with offline mode", desc: "Takeaway orders and billing keep working even when the internet drops — everything syncs back automatically.", icon: "M3 8 L6 5 H14 L17 8 H20 A1.5 1.5 0 0 1 21.5 9.5 V15 H18 M3 8 H1.5 A1.5 1.5 0 0 0 0 9.5 V14.5 H3 M6 15.5 A2 2 0 1 0 6 19.5 A2 2 0 0 0 6 15.5 Z M18 15.5 A2 2 0 1 0 18 19.5 A2 2 0 0 0 18 15.5 Z" },
    { title: "Delivery fleet control", desc: "Approve or block delivery partners, assign orders, track live statuses and reconcile COD — all from the admin panel.", icon: "M16 21 V19 A4 4 0 0 0 12 15 H6 A4 4 0 0 0 2 19 V21 M9 11 A4 4 0 1 0 9 3 A4 4 0 0 0 9 11 Z M22 21 V19 A4 4 0 0 0 18 15" },
    { title: "Settlements & reports", desc: "Channel-wise revenue, taxes, settlements and 40+ reports — exportable the moment you need them.", icon: "M5 20 V12 M12 20 V5 M19 20 V9" },
  ],
  faqs: [
    { q: "What can the FatFox POS do?", a: "It handles orders from dine-in, takeaway, QR code at the table, delivery aggregators and your own storefront; sends tickets to kitchen departments; prints GST bills; tracks inventory by recipe; and manages staff, delivery partners and settlements — all in one cloud dashboard." },
    { q: "Does it work for chains and multi-outlet restaurants?", a: "Yes. Each outlet runs its own POS while owners get consolidated reports across outlets from a single login — perfect for 2 to 50+ outlets." },
    { q: "What hardware do I need?", a: "A tablet or PC, a receipt printer, and optionally a cash drawer and barcode scanner. QR-code ordering needs nothing extra — guests use their own phones." },
    { q: "Does FatFox POS work offline?", a: "Yes. Pickup orders and billing keep working even when the internet drops. Once you're back online, all data syncs automatically — no lost orders." },
    { q: "Does FatFox POS print GST-compliant invoices?", a: "Yes, all billing supports GST with item-level tax, combo and discount handling, plus settlement and transaction reports for your accountant." },
  ],
  hero: <PosMockup className="mx-auto max-w-xl" />,
};

export const metadata: Metadata = productMetadata(data);

export default function PosPage() {
  return <ProductPage data={data} />;
}