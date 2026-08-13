"use client";

import { useEffect, useState } from "react";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { cn } from "@/lib/utils";

const TESTIMONIALS = [
  {
    quote:
      "FatFox replaced our old POS, our ordering website and even our delivery setup. Orders from every channel land in one screen, and our settlement reports are finally something we can trust.",
    name: "Viraaj Bhatia",
    role: "Co-founder, Burgerama Kitchen",
    initials: "VB",
    tone: "bg-brand-100 text-brand-700",
  },
  {
    quote:
      "The white-label storefront under our own brand means zero commission on online orders. Within three months it became our highest-margin channel — the app practically runs itself.",
    name: "Aditi Rao",
    role: "Founder, Yangki Momos",
    initials: "AR",
    tone: "bg-yellow-100 text-yellow-700",
  },
  {
    quote:
      "Running five outlets, I needed everything synced into one place. The admin panel does exactly that — kitchen, billing, staff, delivery riders — and the 24×7 support team actually picks up the phone.",
    name: "Kabir Malhotra",
    role: "Managing Partner, Berco's Restaurants",
    initials: "KM",
    tone: "bg-green-100 text-green-700",
  },
] as const;

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const t = TESTIMONIALS[index];

  return (
    <section id="testimonials" className="bg-[#faf7f5] py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Hear from our clients"
          title="Hear from the restaurants growing with FatFox"
        />
        <div className="mx-auto mt-12 max-w-3xl">
          <figure className="relative rounded-3xl border border-black/5 bg-white p-8 shadow-xl shadow-brand-900/5 sm:p-12">
            <span className="absolute -top-5 left-8 flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 font-display text-2xl font-bold text-white">
              “
            </span>
            <blockquote className="font-display text-lg font-medium leading-relaxed text-ink sm:text-xl">
              {t.quote}
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4 border-t border-black/5 pt-6">
              <span className={`flex h-12 w-12 items-center justify-center rounded-full font-display text-sm font-bold ${t.tone}`} aria-hidden="true">
                {t.initials}
              </span>
              <div className="flex-1">
                <div className="font-display text-base font-bold text-ink">{t.name}</div>
                <div className="text-sm text-ink/55">{t.role}</div>
              </div>
              <div className="flex gap-1 text-brand-500" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-current" aria-hidden="true">
                    <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9z" />
                  </svg>
                ))}
              </div>
            </figcaption>
          </figure>
          <div className="mt-6 flex justify-center gap-2" role="tablist" aria-label="Testimonial navigation">
            {TESTIMONIALS.map((item, i) => (
              <button
                key={item.name}
                role="tab"
                aria-selected={index === i}
                aria-label={`Show testimonial from ${item.name}`}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-2.5 rounded-full transition-all",
                  index === i ? "w-8 bg-brand-500" : "w-2.5 bg-ink/15 hover:bg-ink/30"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}