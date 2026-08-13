import Reveal from "@/components/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";

const FAQS = [
  {
    q: "What is FatFox, and how is it different from a regular POS?",
    a: "FatFox is a complete restaurant operating system. Besides the cloud POS for billing and dine-in orders, it includes a white-label online ordering storefront (0% commission), a restaurant admin panel for managing kitchen, staff and inventory, and a delivery partner app for self-delivery — all synced into one dashboard.",
  },
  {
    q: "Does FatFox support online food ordering for my restaurant?",
    a: "Yes. Every FatFox restaurant gets a branded online ordering website under its own domain with live menu management, offers and combos. Orders placed on the storefront flow directly into the POS with no commission on the transaction.",
  },
  {
    q: "Can I run my own food delivery fleet with FatFox?",
    a: "Absolutely. The FatFox delivery partner app lets your riders accept orders, navigate to the customer, manage cash-on-delivery and track earnings. You own the customer relationship and keep the delivery margin.",
  },
  {
    q: "Is FatFox white-label — can we use our own brand?",
    a: "Yes. The storefront, driver app and admin panel all run under your brand name, colours, logo and domain. This makes FatFox ideal for multi-brand chains and for businesses building their own food ordering platform.",
  },
  {
    q: "What do I need to get started?",
    a: "Just your restaurant details. Our team handles onboarding, menu setup, storefront launch and rider onboarding, and trains your staff — typically live within 7 days.",
  },
  {
    q: "Who builds and supports FatFox?",
    a: "FatFox is built by FoxWel AI, an official AI automation and software development company. Support is available 24×7 via call, chat and email.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Faq() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="container-x">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Everything you need to know about the FatFox restaurant platform. Still curious? Reach out anytime."
        />
        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={Math.min(i * 70, 350)}>
              <details
                className="group rounded-2xl border border-black/10 bg-white px-6 py-5 transition open:border-brand-300 open:shadow-lg open:shadow-brand-500/5"
              >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-bold text-ink">
                {f.q}
                <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-brand-50 text-brand-600 transition group-open:rotate-45 group-open:bg-brand-500 group-open:text-white">
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <path d="M8 3 V13 M3 8 H13" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}