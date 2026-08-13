import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us — The team behind FatFox",
  description:
    "FatFox is an all-in-one restaurant management platform built by FoxWel AI, an official AI automation and software development company trusted by startups and enterprises.",
  alternates: { canonical: `${site.url}/about` },
  openGraph: {
    title: `About Us — The team behind FatFox | ${site.name}`,
    description:
      "FatFox is an all-in-one restaurant management platform built by FoxWel AI.",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
};

const VALUES = [
  {
    title: "Simplicity first",
    desc: "If a feature makes your life harder, it doesn't ship. Every screen is designed to be learned in minutes, not days.",
    icon: "M8 10 A4 4 0 1 0 8 18 A4 4 0 0 0 8 10 Z M8 14 H16 A3 3 0 0 1 16 20 H8",
  },
  {
    title: "Continuous innovation",
    desc: "Restaurant tech evolves fast — we ship regular updates so your platform stays ahead of what customers expect.",
    icon: "M17 3 a5 5 0 0 1-5 5 h-2 a5 5 0 0 0 0 10 h2 M13 21 a5 5 0 0 1 5-5 h2 a5 5 0 0 0 0-10 h-2",
  },
  {
    title: "Partners, not vendors",
    desc: "We win when your restaurant wins. From onboarding to 24×7 support, our team works as an extension of yours.",
    icon: "M12 21 s-7-4.6-7-10 a7 7 0 0 1 14 0 c0 5.4-7 10-7 10 Z",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 85% 15%, rgba(255,87,51,.12) 0, transparent 34%)",
          }}
        />
        <div className="container-x relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-bold text-brand-700">
              About {site.name}
            </p>
            <h1 className="font-display text-4xl font-extrabold leading-[1.12] tracking-tight text-ink sm:text-5xl">
              Built for restaurants that are ready to grow
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink/60">
              FatFox started with a simple observation: most restaurants juggle a
              POS, an ordering website, a delivery setup and spreadsheets — and
              none of them talk to each other. We built one platform where every
              channel works together, so owners can focus on food, not friction.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-brand-500 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-brand-500/30 transition hover:bg-brand-600"
              >
                Work With Us
              </Link>
              <Link
                href="/pricing"
                className="rounded-full border border-black/10 bg-white px-7 py-3.5 text-sm font-bold text-ink transition hover:border-brand-300 hover:text-brand-600"
              >
                See Pricing
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-xl shadow-brand-900/5">
            <h2 className="font-display text-xl font-extrabold text-ink">
              How we operate
            </h2>
            <dl className="mt-6 space-y-5">
              {[
                { k: "Listen", v: "We start with your live operations — how your kitchen, counters and riders actually work today." },
                { k: "Build", v: "We ship focused improvements every month, informed by real usage data across our restaurant partners." },
                { k: "Support", v: "24×7 support from humans who know restaurants — because a POS down at dinner rush is a crisis, not a ticket." },
              ].map((s, i) => (
                <div key={s.k} className="flex gap-4">
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-brand-50 font-display text-sm font-bold text-brand-600">
                    0{i + 1}
                  </span>
                  <div>
                    <dt className="font-display text-sm font-bold text-ink">{s.k}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-ink/60">{s.v}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-[#faf7f5] py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our values"
            title="The principles behind every feature"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v) => (
              <article key={v.title} className="rounded-3xl border border-black/5 bg-white p-7 shadow-sm">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d={v.icon} />
                  </svg>
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{v.desc}</p>
              </article>
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
              "radial-gradient(circle at 15% 20%, rgba(255,87,51,.2) 0, transparent 38%), radial-gradient(circle at 85% 80%, rgba(255,87,51,.14) 0, transparent 36%)",
          }}
        />
        <div className="container-x relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-400">
              Built by FoxWel AI
            </p>
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              The engineering team behind FatFox
            </h2>
            <p className="mt-4 max-w-lg leading-relaxed text-white/65">
              {site.builder.name} is an official AI automation and software
              development company. They design and deliver scalable platforms and
              AI-powered systems that automate, scale and run businesses — from
              marketplaces and booking systems to end-to-end restaurant tech.
            </p>
            <a
              href={site.builder.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-brand-500/30 transition hover:bg-brand-600"
            >
              Visit foxwel.ai
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 8 H13 M9 4 L13 8 L9 12" />
              </svg>
            </a>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur">
            <h3 className="font-display text-lg font-bold">Trusted by teams that build at scale</h3>
            <ul className="mt-6 space-y-3">
              {site.builder.clients.map((c) => (
                <li key={c} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3.5">
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-brand-500 font-display text-xs font-bold text-white" aria-hidden="true">
                    {c.slice(0, 2).toUpperCase()}
                  </span>
                  <span className="text-sm font-semibold text-white/85">{c}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-white/45">
              {site.builder.name} builds platforms for startups and enterprises
              across commerce, finance, healthcare and operations — powered by the
              world&apos;s most advanced AI tools.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}