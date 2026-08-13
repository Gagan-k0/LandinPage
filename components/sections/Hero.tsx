"use client";

import { useState } from "react";
import Link from "next/link";
import PosMockup from "@/components/mockups/PosMockup";
import StorefrontMockup from "@/components/mockups/StorefrontMockup";
import DriverMockup from "@/components/mockups/DriverMockup";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const HERO_PRODUCTS = [
  {
    id: "pos",
    label: "Cloud POS",
    name: "Restaurant POS software made simple!",
    desc: "Orders, kitchen, billing & staff — every channel in one dashboard.",
    mockup: <PosMockup />,
  },
  {
    id: "storefront",
    label: "Storefront",
    name: "Your own online ordering website!",
    desc: "White-label ordering site with 0% commission on your orders.",
    mockup: <StorefrontMockup />,
  },
  {
    id: "delivery",
    label: "Delivery App",
    name: "A rider app your fleet will love!",
    desc: "Accept, deliver, track COD & earnings — all in one driver app.",
    mockup: <DriverMockup />,
  },
] as const;

export default function Hero() {
  const [active, setActive] = useState(0);
  const current = HERO_PRODUCTS[active];

  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 8%, rgba(255,87,51,.14) 0, transparent 34%), radial-gradient(circle at 88% 18%, rgba(255,87,51,.08) 0, transparent 30%)",
        }}
      />
      <div className="container-x relative pb-16 pt-14 sm:pb-20 sm:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-bold text-brand-700">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
              <path d="M12 2 L14.5 8.5 L21 9.5 L16.5 14 L18 20.5 L12 17 L6 20.5 L7.5 14 L3 9.5 L9.5 8.5 Z" />
            </svg>
            Built by {site.builder.name} — official AI & software development company
          </p>
          <h1 className="text-balance mt-6 font-display text-[2.6rem] font-extrabold leading-[1.08] tracking-tight text-ink sm:text-6xl lg:text-[4.2rem]">
            All-in-One Software Powering{" "}
            <span className="text-brand-500">Restaurant Growth</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink/60 sm:text-lg">
            Stay ahead of the curve with solutions designed for tomorrow&apos;s
            challenges — flexible tools that adapt to your unique needs.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-brand-500 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-brand-500/30 transition hover:-translate-y-0.5 hover:bg-brand-600"
            >
              Get Started
            </Link>
            <Link
              href="/#products"
              className="rounded-full border border-black/10 bg-white px-8 py-4 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-600"
            >
              Explore Products
            </Link>
          </div>

          <div className="mt-8" role="tablist" aria-label="FatFox product showcase">
            <div className="inline-flex flex-wrap justify-center gap-2 rounded-full border border-black/10 bg-white p-1.5">
              {HERO_PRODUCTS.map((p, i) => (
                <button
                  key={p.id}
                  role="tab"
                  aria-selected={active === i}
                  aria-controls="hero-product-panel"
                  onClick={() => setActive(i)}
                  className={cn(
                    "rounded-full px-5 py-2.5 text-sm font-bold transition",
                    active === i
                      ? "bg-ink text-white shadow-md"
                      : "text-ink/60 hover:text-ink"
                  )}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div
          id="hero-product-panel"
          role="tabpanel"
          className="mx-auto mt-10 max-w-5xl"
        >
          <div
            key={current.id}
            className="animate-float-slow [animation-duration:8s]"
          >
            {current.mockup}
          </div>
        </div>
      </div>
    </section>
  );
}

export function BrandMarquee() {
  const brands = [
    "Burgerama",
    "Yangki Momos",
    "Berco's",
    "Tandoor",
    "Krishna Vilasa",
    "Sri Krishna Vilasa",
    "LCode",
    "Mindstack",
    "Brokr",
  ];
  return (
    <section className="border-y border-black/5 bg-[#faf7f5] py-8" aria-label="Brands that trust FatFox">
      <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-ink/40">
        Trusted by restaurants &amp; businesses across the globe
      </p>
      <div className="relative mt-5 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#faf7f5] to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#faf7f5] to-transparent"
          aria-hidden="true"
        />
        <div className="animate-marquee flex w-max items-center gap-14">
          {[...brands, ...brands].map((b, i) => (
            <span
              key={`${b}-${i}`}
              className="whitespace-nowrap font-display text-lg font-extrabold tracking-tight text-ink/35"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}