import type { Metadata } from "next";
import StorefrontMockup from "@/components/mockups/StorefrontMockup";
import {
  ProductPage,
  productMetadata,
} from "@/components/product/ProductPage";

const data = {
  slug: "storefront",
  name: "Storefront",
  heading: "Your own branded online food ordering website",
  subheading:
    "Give customers a fast, beautiful ordering website under your own brand and domain — with 0% commission on every online order that comes to you.",
  description:
    "FatFox Storefront is a white-label online food ordering system for restaurants — a branded ordering website on your own domain with 0% commission, offers, loyalty and live order tracking, fully synced with your POS.",
  keywords: [
    "online food ordering system for restaurants",
    "restaurant website builder",
    "white label food delivery platform",
    "free online order food system",
    "restaurant online ordering software india",
  ],
  bullets: [
    "White-label under your brand & domain",
    "0% commission — you keep every order",
    "Delivery, pickup, dine-in & room-bill checkout",
    "Live tracking, favourites & reviews",
  ],
  features: [
    { title: "Your brand, your domain", desc: "The storefront runs on your own website and domain with your logo, colours and restaurant name — customers never see anyone else's brand.", icon: "M12 2 L3 7 L12 12 L21 7 Z M3 11 L12 16 L21 11 M3 15 L12 20 L21 15" },
    { title: "0% commission", desc: "Orders placed on your website belong to you — no commission, no per-order fees. Every rupee goes to your restaurant.", icon: "M12 3 V21 M17 7 C17 4.5 14.5 3.5 12 3.5 C9.5 3.5 7 4.8 7 7 C7 9.5 9.5 10.5 12 10.5 C14.5 10.5 17 11.5 17 14 C17 16.5 14.5 17.5 12 17.5 C9.5 17.5 7 16.5 7 14" },
    { title: "Every checkout mode", desc: "Customers choose delivery, pickup, dine-in at the table or room-bill — each with its own flow, billing and receipt.", icon: "M8 2 H16 A2 2 0 0 1 18 4 V20 A2 2 0 0 1 16 22 H8 A2 2 0 0 1 6 20 V4 A2 2 0 0 1 8 2 Z M11 18 H13" },
    { title: "Live order tracking", desc: "Customers see order confirmations and live status — placed, preparing, out for delivery — with push notifications at every step.", icon: "M12 21 a9 9 0 1 0 0-18 a9 9 0 0 0 0 18 Z M12 7 V12 L15 14" },
    { title: "Favourites & reviews", desc: "Saved dishes, ratings and reviews build repeat orders — your regulars feel at home and new visitors trust what they see.", icon: "M12 21 s-7-4.6-7-10 a7 7 0 0 1 14 0 c0 5.4-7 10-7 10 Z" },
    { title: "Dine-in pre-booking", desc: "Customers reserve tables ahead of time, your floor plan fills in automatically and staff see reservations alongside walk-ins.", icon: "M6 3 V5 M18 3 V5 M4 8 H20 M6 3 H18 A2 2 0 0 1 20 5 V19 A2 2 0 0 1 18 21 H6 A2 2 0 0 1 4 19 V5 A2 2 0 0 1 6 3 Z" },
    { title: "Offers, combos & loyalty", desc: "First-order discounts, meal combos, free-delivery thresholds and reward points — promotions that keep customers coming back.", icon: "M20 12 a8 8 0 1 1-16 0 a8 8 0 0 1 16 0 Z M12 8 V12 L14.5 14.5" },
    { title: "SEO-ready out of the box", desc: "Every storefront ships with clean URLs, fast rendering and search-optimised menu pages, so customers find you on Google.", icon: "M12 21 V3 M5 7 H19 M5 12 H19 M5 17 H19" },
  ],
  faqs: [
    { q: "How is the storefront different from food aggregators?", a: "It's your own website — your brand, your customers, your data. Orders placed on it carry 0% commission, unlike aggregators that take 15–30% of every order. Many restaurants run both: aggregators for discovery, the storefront for profit." },
    { q: "How long does it take to launch my ordering website?", a: "Typically 3–7 days. We set up the site with your menu, branding and domain, and connect it to your FatFox POS — live ordering usually starts the same week." },
    { q: "Can I use my own domain like order.myrestaurant.com?", a: "Yes. We connect the storefront to a subdomain or a full custom domain of your choice with SSL included." },
    { q: "Does it work on mobile phones?", a: "Yes — the storefront is a mobile-first progressive web app. Customers can order in two taps and even add it to their home screen like an app." },
    { q: "Can customers track their orders in real time?", a: "Yes. Every order shows live status — confirmed, preparing, picked up, delivering — with notifications, so customers don't need to call your staff." },
    { q: "Can I run offers and coupons on the storefront?", a: "Absolutely. Time-based offers, percentage or flat coupons, combo meals, free-delivery thresholds and loyalty points are all self-serve in the admin panel." },
  ],
  hero: <StorefrontMockup className="mx-auto max-w-xl" />,
};

export const metadata: Metadata = productMetadata(data);

export default function StorefrontPage() {
  return <ProductPage data={data} />;
}