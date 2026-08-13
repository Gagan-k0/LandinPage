import DemoForm from "@/components/DemoForm";

export default function CtaBand() {
  return (
    <section
      id="free-demo-form"
      className="relative overflow-hidden bg-ink py-20 text-white sm:py-28"
    >
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 15%, rgba(255,87,51,.28) 0, transparent 38%), radial-gradient(circle at 10% 90%, rgba(255,87,51,.16) 0, transparent 40%)",
        }}
      />
      <div className="container-x relative grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-400">
            Book a free demo
          </p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            We&apos;d love to show you FatFox in action
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-white/60">
            Tell us about your restaurant and our team will walk you through the
            platform — POS, storefront and delivery — and answer every question
            you have.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-white/75">
            {[
              "Free onboarding and staff training",
              "Live in as fast as 7 days",
              "Transparent pricing — no hidden fees",
              "24×7 support from day one",
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
          <DemoForm />
        </div>
      </div>
    </section>
  );
}