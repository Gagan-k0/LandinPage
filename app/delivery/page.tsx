import type { Metadata } from "next";
import DriverMockup from "@/components/mockups/DriverMockup";
import {
  ProductPage,
  productMetadata,
} from "@/components/product/ProductPage";

const data = {
  slug: "delivery",
  name: "Delivery Partner App",
  heading: "A rider app your delivery fleet will love",
  subheading:
    "Accept orders, navigate to the door, handle cash-on-delivery and track earnings — a simple, fast driver app that keeps your deliveries on time.",
  description:
    "FatFox Delivery Partner App is a food delivery driver app for restaurants and cloud kitchens — live order alerts, navigation, COD tracking, earnings and settlements for your own delivery fleet.",
  keywords: [
    "food delivery driver app",
    "delivery partner app for restaurants",
    "restaurant self delivery app",
    "rider app for cloud kitchens",
    "delivery fleet management software",
  ],
  bullets: [
    "OTP login — onboard riders in a minute",
    "Accept, pick up & deliver with navigation",
    "COD cash tracking & settlements",
    "Earnings, ratings & availability",
  ],
  features: [
    { title: "OTP-based login", desc: "Riders log in with their mobile number and one-time password — no passwords, no IT support, onboarding in under a minute.", icon: "M12 3 a4 4 0 0 1 4 4 c0 2-1.5 3-1.5 5 H9.5 C9.5 10 8 9 8 7 a4 4 0 0 1 4-4 Z M8.5 13 H15.5 A3 3 0 0 1 15.5 19 H8.5 A3 3 0 0 1 8.5 13 Z" },
    { title: "One-tap accepting", desc: "Riders get instant order alerts with fare and route preview, and can accept or decline in one tap — even on a slow network.", icon: "M9 11 H21 M9 15 H21 M4.5 12 A1.5 1.5 0 1 0 4.5 9 A1.5 1.5 0 0 0 4.5 12 Z M4.5 18 A1.5 1.5 0 1 0 4.5 15 A1.5 1.5 0 0 0 4.5 18 Z" },
    { title: "Built-in navigation", desc: "Turn-by-turn guidance to the restaurant and to the customer's door, with live order progress shared with the customer.", icon: "M9 20 L5 4 L20 11 L12 13 L9 20 Z" },
    { title: "COD handled safely", desc: "Riders log cash collected per order; the platform tracks every rupee and shows exactly what's due for settlement.", icon: "M12 3 V21 M17 7 C17 4.5 14.5 3.5 12 3.5 C9.5 3.5 7 4.8 7 7 C7 9.5 9.5 10.5 12 10.5 C14.5 10.5 17 11.5 17 14 C17 16.5 14.5 17.5 12 17.5 C9.5 17.5 7 16.5 7 14" },
    { title: "Earnings that add up", desc: "Daily earnings, tips, bonuses and payouts in one place — riders always know what they've earned and when they get paid.", icon: "M5 20 V12 M12 20 V5 M19 20 V9" },
    { title: "Availability control", desc: "Riders toggle availability and choose shifts — you control capacity on busy nights and quiet afternoons.", icon: "M12 21 a9 9 0 1 0 0-18 a9 9 0 0 0 0 18 Z M12 7 V12 L15 14" },
    { title: "White-label for your brand", desc: "The rider app carries your brand name and colours — built for restaurant chains and platforms launching their own delivery fleets.", icon: "M12 2 L3 7 L12 12 L21 7 Z M3 11 L12 16 L21 11 M3 15 L12 20 L21 15" },
    { title: "Fleet manager view", desc: "Approve, block and reassign riders from the admin panel, see live rider locations and reconcile deliveries per shift.", icon: "M16 21 V19 A4 4 0 0 0 12 15 H6 A4 4 0 0 0 2 19 V21 M9 11 A4 4 0 1 0 9 3 A4 4 0 0 0 9 11 Z M22 21 V19 A4 4 0 0 0 18 15" },
  ],
  faqs: [
    { q: "Do we need to build our own delivery fleet?", a: "No — the app is ready to go. Add your riders with OTP-based login, set delivery zones and pricing, and the app handles everything from order alerts to settlements." },
    { q: "How does cash-on-delivery work?", a: "Riders log the cash amount for each COD order in the app. The system tracks collections, and settlements are computed automatically — cash collected minus payouts and any adjustments." },
    { q: "Can riders track earnings in real time?", a: "Yes. Each rider sees today's earnings, pending payouts and weekly totals in the app, along with their ratings and delivery history." },
    { q: "Is the driver app available for both Android and iOS?", a: "Yes. It's a mobile-first PWA that installs from the browser on Android and iOS, with push notifications for new orders — no app-store listing needed." },
    { q: "Can customers track their rider?", a: "Yes — customers on the storefront see the rider's live status and ETA at every stage of the delivery." },
    { q: "Can I manage my riders from the admin panel?", a: "Yes — approve or block delivery partners, view live orders per rider, see earnings and reconcile COD cash — all from the FatFox admin panel." },
  ],
  hero: <DriverMockup className="mx-auto max-w-xl" />,
};

export const metadata: Metadata = productMetadata(data);

export default function DeliveryPage() {
  return <ProductPage data={data} />;
}