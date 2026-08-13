const FEATURES = [
  {
    title: "QR-code dine-in ordering",
    desc: "Guests scan a table QR, order from their phone and pay — while your POS captures it all. Pre-booking, table management and room-service POS included.",
    icon: "M4 7 V17 M8 4 V20 M12 7 V17 M16 4 V20 M20 7 V17",
  },
  {
    title: "Live order pipeline",
    desc: "Every order moves through New → Preparing → Picked up → Delivered with live status visible to staff, customers and riders at all times.",
    icon: "M12 21 a9 9 0 1 0 0-18 a9 9 0 0 0 0 18 Z M12 7 V12 L15 14",
  },
  {
    title: "Kitchen display & KOTs",
    desc: "Department-wise kitchen display with automatic order tickets, prep timers and priority sorting — so nothing burns and nothing waits.",
    icon: "M12 3 L3 8 L12 13 L21 8 Z M3 12 L12 17 L21 12 M3 16 L12 21 L21 16",
  },
  {
    title: "Powerful menu engine",
    desc: "Add-ons, combos, variants, meal periods, discounts and taxes — build any menu complexity and change prices in seconds, not days.",
    icon: "M9 5 H18 M9 12 H18 M9 19 H18 M4 5 H4.5 M4 12 H4.5 M4 19 H4.5",
  },
  {
    title: "Pickup with offline mode",
    desc: "Takeaway orders keep flowing even when the internet drops — orders sync automatically once you're back online. No lost business.",
    icon: "M3 8 L6 5 H14 L17 8 H20 A1.5 1.5 0 0 1 21.5 9.5 V15 H18 M3 8 H1.5 A1.5 1.5 0 0 0 0 9.5 V14.5 H3 M6 15.5 A2 2 0 1 0 6 19.5 A2 2 0 0 0 6 15.5 Z M18 15.5 A2 2 0 1 0 18 19.5 A2 2 0 0 0 18 15.5 Z",
  },
  {
    title: "Money & settlements",
    desc: "Channel-wise revenue, GST invoices, transactions and settlements — 40+ reports that reconcile by the minute, not by the month.",
    icon: "M5 20 V12 M12 20 V5 M19 20 V9",
  },
] as const;

export default function Features() {
  return (
    <section id="features" className="relative overflow-hidden bg-navy-900 py-20 text-white sm:py-28">
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 20%, rgba(255,87,51,.18) 0, transparent 34%), radial-gradient(circle at 88% 80%, rgba(255,87,51,.12) 0, transparent 30%)",
        }}
      />
      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-400">
            Why our clients love us
          </p>
          <h2 className="text-balance font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            Simplicity meets excellence
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
            We craft top-quality, user-friendly products for peak performance — and
            keep shipping regular updates with new features.
          </p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <article
              key={f.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur transition hover:-translate-y-1 hover:border-brand-500/40 hover:bg-white/10"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-400 transition group-hover:bg-brand-500 group-hover:text-white">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d={f.icon} />
                </svg>
              </span>
              <h3 className="mt-5 font-display text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}