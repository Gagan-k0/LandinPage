import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import DemoForm from "@/components/DemoForm";
import { CheckIcon, SectionHeading } from "@/components/sections/SectionHeading";
import { site } from "@/lib/site";

export type ProductData = {
  slug: string;
  name: string;
  heading: string;
  subheading: string;
  description: string;
  keywords: string[];
  bullets: string[];
  hero: React.ReactNode;
  features: Array<{ title: string; desc: string; icon: string }>;
  faqs: Array<{ q: string; a: string }>;
};

export function productMetadata(p: ProductData): Metadata {
  return {
    title: `${p.name} — ${p.heading}`,
    description: p.description,
    keywords: p.keywords,
    alternates: { canonical: `${site.url}/${p.slug}` },
    openGraph: {
      title: `${p.name} — ${p.heading} | ${site.name}`,
      description: p.description,
      url: `${site.url}/${p.slug}`,
      images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: p.name }],
    },
    twitter: {
      title: `${p.name} — ${p.heading} | ${site.name}`,
      description: p.description,
    },
  };
}

export function productJsonLd(p: ProductData) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `${p.name} by ${site.name}`,
    url: `${site.url}/${p.slug}`,
    description: p.description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Android, iOS",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      description: "Custom pricing — book a free demo",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "210",
    },
    publisher: {
      "@type": "Organization",
      name: site.builder.name,
      url: site.builder.url,
    },
  };
}

export function productFaqJsonLd(p: ProductData) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: p.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function ProductPage({ data }: { data: ProductData }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd(data)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productFaqJsonLd(data)) }}
      />

      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 12% 12%, rgba(255,87,51,.12) 0, transparent 32%), radial-gradient(circle at 88% 25%, rgba(255,87,51,.08) 0, transparent 30%)",
          }}
        />
        <div className="container-x relative grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-bold text-brand-700">
              FatFox {data.name}
            </p>
            <h1 className="font-display text-4xl font-extrabold leading-[1.12] tracking-tight text-ink sm:text-5xl">
              {data.heading}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink/60">{data.subheading}</p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {data.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm font-medium text-ink/80">
                  <CheckIcon className="mt-0.5" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-brand-500 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-brand-500/30 transition hover:bg-brand-600"
              >
                Book a Free Demo
              </Link>
              <Link
                href="/pricing"
                className="rounded-full border border-black/10 bg-white px-7 py-3.5 text-sm font-bold text-ink transition hover:border-brand-300 hover:text-brand-600"
              >
                See Pricing
              </Link>
            </div>
          </div>
          <div>{data.hero}</div>
        </div>
      </section>

      <section className="bg-[#faf7f5] py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow={`Why ${data.name}`}
            title="Built for real restaurant operations"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {data.features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 100}>
                <article
                  className="group h-full rounded-3xl border border-black/5 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/10"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-500 group-hover:text-white">
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d={f.icon} />
                    </svg>
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">{f.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="FAQ" title={`${data.name} — common questions`} />
          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {data.faqs.map((f) => (
              <details
                key={f.q}
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
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-28">
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 10%, rgba(255,87,51,.25) 0, transparent 40%)",
          }}
        />
        <div className="container-x relative grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              See {data.name} live — book a free demo
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-white/60">
              A 30-minute walkthrough with our team. No pressure, no jargon — just a
              clear look at how FatFox {data.name} fits your restaurant.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-white/75">
              {[
                "Personalised walkthrough for your restaurant type",
                "Menu & pricing consultation included",
                "Questions answered by product experts",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-500/20 text-brand-400">
                    <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3 8.5 L6.5 12 L13 4.5" />
                    </svg>
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur sm:p-8">
            <DemoForm compact />
          </div>
        </div>
      </section>
    </>
  );
}