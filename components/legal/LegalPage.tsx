import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { site } from "@/lib/site";

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

export function legalMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: `${site.url}${path}` },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
    },
  };
}

export function LegalPage({
  eyebrow,
  title,
  updated,
  intro,
  sections,
  cta = true,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
  cta?: boolean;
}) {
  return (
    <>
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 10%, rgba(255,87,51,.1) 0, transparent 34%)",
          }}
        />
        <div className="container-x relative">
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={intro}
            align="left"
          />
          <p className="mt-3 text-xs font-semibold text-ink/45">
            Last updated: {updated}
          </p>
          <div className="mx-auto mt-10 max-w-3xl space-y-10">
            {sections.map((s) => (
              <section key={s.heading}>
                <h2 className="font-display text-xl font-extrabold tracking-tight text-ink">
                  {s.heading}
                </h2>
                {s.paragraphs?.map((p) => (
                  <p key={p} className="mt-3 text-sm leading-relaxed text-ink/70">
                    {p}
                  </p>
                ))}
                {s.list && (
                  <ul className="mt-3 space-y-2.5">
                    {s.list.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/70">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-500" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
            {cta && (
              <div className="rounded-3xl border border-black/5 bg-[#faf7f5] p-6 sm:p-8">
                <h2 className="font-display text-lg font-extrabold text-ink">
                  Questions about this policy?
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  Write to us at{" "}
                  <a href={`mailto:${site.contact.email}`} className="font-semibold text-brand-600 hover:underline">
                    {site.contact.email}
                  </a>{" "}
                  or call{" "}
                  <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="font-semibold text-brand-600 hover:underline">
                    {site.contact.phone}
                  </a>
                  . We reply within one business day.
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-600"
                >
                  Contact us
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}