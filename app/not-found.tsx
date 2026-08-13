import Link from "next/link";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-36">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 15%, rgba(255,87,51,.12) 0, transparent 34%), radial-gradient(circle at 85% 75%, rgba(255,87,51,.08) 0, transparent 30%)",
        }}
      />
      <div className="container-x relative mx-auto max-w-2xl text-center">
        <p className="font-display text-[6rem] font-extrabold leading-none tracking-tight text-brand-500 sm:text-[9rem]">
          404
        </p>
        <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          This page wandered off the menu
        </h1>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-ink/60">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s
          get you back to the kitchen — where the good stuff is.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="rounded-full bg-brand-500 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-brand-500/30 transition hover:-translate-y-0.5 hover:bg-brand-600"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-black/10 bg-white px-8 py-4 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-600"
          >
            Contact Support
          </Link>
        </div>
        <p className="mt-10 text-xs text-ink/45">
          Can&apos;t find what you need? Email{" "}
          <a href={`mailto:${site.contact.email}`} className="font-semibold text-brand-600 hover:underline">
            {site.contact.email}
          </a>
        </p>
      </div>
    </section>
  );
}