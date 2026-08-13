import type { Metadata } from "next";
import DemoForm from "@/components/DemoForm";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Book a free demo or talk to sales",
  description:
    "Contact FatFox to book a free demo, ask about pricing, or talk to our restaurant tech experts. Reach us by phone, email or the quick form — we reply within 24 hours.",
  alternates: { canonical: `${site.url}/contact` },
  openGraph: {
    title: `Contact — Book a free demo or talk to sales | ${site.name}`,
    description:
      "Contact FatFox to book a free demo or talk to sales.",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 85% 10%, rgba(255,87,51,.1) 0, transparent 34%)",
          }}
        />
        <div className="container-x relative">
          <SectionHeading
            eyebrow="Contact"
            title="Let's talk about your restaurant"
            description="Book a free demo, ask a question, or just say hi — our team replies within 24 hours."
          />
          <div className="mx-auto mt-14 grid max-w-5xl gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div className="space-y-5">
              <a
                href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-4 rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition hover:border-brand-300"
              >
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 4 H9 L11 9 L8.5 10.5 a12 12 0 0 0 5 5 L15 13 L20 15 V19 a2 2 0 0 1-2 2 A17 17 0 0 1 3 6 a2 2 0 0 1 2-2 Z" />
                  </svg>
                </span>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-ink/45">Call us</div>
                  <div className="mt-0.5 font-display text-base font-bold text-ink">{site.contact.phone}</div>
                </div>
              </a>

              <a
                href={`mailto:${site.contact.email}`}
                className="flex items-center gap-4 rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition hover:border-brand-300"
              >
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7 L12 13 L21 7" />
                  </svg>
                </span>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-ink/45">Email us</div>
                  <div className="mt-0.5 font-display text-base font-bold text-ink">{site.contact.email}</div>
                </div>
              </a>

              <a
                href={site.builder.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition hover:border-brand-300"
              >
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 2 L14.5 8.5 L21 9.5 L16.5 14 L18 20.5 L12 17 L6 20.5 L7.5 14 L3 9.5 L9.5 8.5 Z" />
                  </svg>
                </span>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-ink/45">Built by</div>
                  <div className="mt-0.5 font-display text-base font-bold text-ink">
                    {site.builder.name}{" "}
                    <span className="text-xs font-semibold text-brand-600">foxwel.ai ↗</span>
                  </div>
                </div>
              </a>

              <div className="rounded-3xl border border-black/5 bg-brand-50 p-6">
                <h3 className="font-display text-base font-bold text-ink">Free demo? Here&apos;s what happens</h3>
                <ol className="mt-4 space-y-3 text-sm text-ink/70">
                  {[
                    "We call you within 24 hours to understand your setup",
                    "A 30-minute personalised walkthrough of FatFox",
                    "You pick a plan — or keep us in your pocket for later",
                  ].map((s, i) => (
                    <li key={s} className="flex gap-3">
                      <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white">
                        {i + 1}
                      </span>
                      {s}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-xl shadow-black/5 sm:p-8">
              <h2 className="font-display text-xl font-extrabold text-ink">Request your demo</h2>
              <p className="mt-1 text-sm text-ink/55">
                Tell us about your restaurant and we&apos;ll take it from there.
              </p>
              <div className="mt-6">
                <DemoForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}