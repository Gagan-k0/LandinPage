import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers — Join the FatFox team",
  description:
    "Work on FatFox — the restaurant management platform built for restaurants, cloud kitchens and hotels. Join as engineering, product, design, sales or support.",
  alternates: { canonical: `${site.url}/careers` },
  openGraph: {
    title: `Careers — Join the FatFox team | ${site.name}`,
    description: "Build the future of restaurant software with the FatFox team.",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
};

const PERKS = [
  {
    title: "Ownership",
    text: "Small team, big problems. You ship things and see them live in real restaurants.",
    icon: "M12 3 L4 7 V17 L12 21 L20 17 V7 Z M9 12 L11 14 L15 10",
  },
  {
    title: "Remote-first",
    text: "Work from anywhere. Meet the team in person when it matters.",
    icon: "M2.5 12 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0 M2.5 12 H21.5 M12 2.5 c3 3 4.5 6.5 4.5 9.5 s-1.5 6.5-4.5 9.5 c-3-3-4.5-6.5-4.5-9.5 s1.5-6.5 4.5-9.5 Z",
  },
  {
    title: "Real users",
    text: "Your work runs kitchen screens and riders' phones every single day.",
    icon: "M9 11 A4 4 0 1 0 9 3 A4 4 0 0 0 9 11 Z M2 21 s0-5 3.5-6 M16 11 A3.5 3.5 0 1 0 16 4 A3.5 3.5 0 0 0 16 11 Z M14.5 15.5 c4 0 7.5 1.5 7.5 4.5",
  },
  {
    title: "Growth",
    text: "Learn across the stack — web, mobile and desktop, end to end.",
    icon: "M5 5 L19 19 M9 19 L19 9 M5 10 L5 5 L10 5 M19 14 L19 19 L14 19",
  },
  {
    title: "Modern stack",
    text: "Angular, Next.js, Flutter, Firebase and Electron — no legacy glue.",
    icon: "M12 3 L16 9 L12 15 L8 9 Z M12 15 L16 21 L12 21 L8 21 Z",
  },
  {
    title: "Fair pay, early",
    text: "Competitive salary plus equity in an early, fast-moving product.",
    icon: "M4 5 H20 V13 C20 16 18 19 14 19 H13 A2 2 0 0 0 11 17 C10 18 9 19 7 19 A2 2 0 0 0 5 17 V17 C5 14 4 13 4 11 Z M8 9 H15 M8 13 H12 M14 17 L17 14 M14 19 L17 16",
  },
];

const OPEN_ROLES = [
  { title: "Full-Stack Engineer", type: "Full-time · Remote", tag: "Engineering" },
  { title: "Flutter Mobile Engineer", type: "Full-time · Remote", tag: "Engineering" },
  { title: "Product Designer", type: "Full-time · Remote", tag: "Design" },
  { title: "Customer Success Manager", type: "Full-time · Anywhere", tag: "Sales & Support" },
];

export default function CareersPage() {
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
            eyebrow="Careers"
            title="Build software that runs real restaurants"
            description="We're a small team building FatFox — POS, storefront and driver apps used by live food businesses every day. If you like shipping fast and owning your work, say hi."
          />
          <Reveal delay={120}>
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:careers@fatfox.testfox.in?subject=Applying%20to%20FatFox"
                className="btn-shine rounded-full bg-brand-500 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-brand-500/30 transition hover:bg-brand-600"
              >
                Apply by Email
              </a>
              <Link
                href="/contact"
                className="rounded-full border border-black/15 px-8 py-4 text-sm font-bold text-ink transition hover:border-brand-400 hover:text-brand-600"
              >
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#faf7f5] py-20 sm:py-24">
        <div className="container-x">
          <h2 className="text-center font-display text-2xl font-extrabold text-ink sm:text-3xl">
            Why people stay at FatFox
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PERKS.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 100}>
                <div className="card-ring flex h-full flex-col rounded-3xl border border-black/10 bg-white p-8 text-left shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-500/15">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d={p.icon} />
                    </svg>
                  </span>
                  <h3 className="mt-5 font-display text-lg font-extrabold text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-ink/65">{p.text}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={200}>
              <div className="flex h-full flex-col justify-center rounded-3xl border-2 border-dashed border-brand-300 bg-brand-50/60 p-8 text-center">
                <p className="font-display text-lg font-extrabold text-brand-700">
                  Don&apos;t see your role?
                </p>
                <p className="mt-2 text-sm font-medium text-ink/65">
                  We&apos;re always open to great people. Send your profile — the
                  worst we can say is let&apos;s talk.
                </p>
                <a
                  href="mailto:careers@fatfox.testfox.in?subject=Open%20Application"
                  className="mx-auto mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-600 transition hover:gap-3"
                >
                  Write to us
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 8 H13 M9 4 L13 8 L9 12" />
                  </svg>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-x">
          <h2 className="text-center font-display text-2xl font-extrabold text-ink sm:text-3xl">
            Open roles
          </h2>
          <div className="mx-auto mt-10 max-w-3xl space-y-4">
            {OPEN_ROLES.map((r, i) => (
              <Reveal key={r.title} delay={i * 80}>
                <a
                  href={`mailto:careers@fatfox.testfox.in?subject=Applying%20for%20${encodeURIComponent(r.title)}`}
                  className="card-ring group flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-brand-500/10"
                >
                  <div>
                    <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-600">
                      {r.tag}
                    </span>
                    <h3 className="mt-3 font-display text-lg font-extrabold text-ink">
                      {r.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-ink/55">{r.type}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 px-5 py-2.5 text-sm font-bold text-brand-600 transition group-hover:bg-brand-500 group-hover:text-white">
                    Apply now
                    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3 8 H13 M9 4 L13 8 L9 12" />
                    </svg>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}