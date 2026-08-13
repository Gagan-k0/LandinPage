"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  value: number;
  suffix: string;
  label: string;
  format?: "lakh";
  icon: string;
};

const STATS: Stat[] = [
  {
    value: 120,
    suffix: "+",
    label: "restaurants & cloud kitchens use FatFox",
    icon: "M4 7 V17 M8 4 V20 M12 7 V17 M16 4 V20 M20 7 V17",
  },
  {
    value: 200000,
    suffix: "+",
    label: "orders processed every month",
    format: "lakh",
    icon: "M4 19 V9 M9 19 V4 M14 19 V7 M19 19 V11",
  },
  {
    value: 35,
    suffix: "+",
    label: "cities with live delivery operations",
    icon: "M12 21 a9 9 0 1 0 0-18 a9 9 0 0 0 0 18 Z M12 7 V12 L15 14",
  },
  {
    value: 99.9,
    suffix: "%",
    label: "platform uptime, backed by SLA",
    icon: "M20 12 a8 8 0 1 1-16 0 a8 8 0 0 1 16 0 Z M12 8 V12 L14.5 14.5",
  },
];

function useCountUp(target: number, active: boolean, duration = 1600) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return value;
}

function Counter({
  target,
  suffix,
  format,
}: {
  target: number;
  suffix: string;
  format?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const value = useCountUp(target, active);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const display =
    format === "lakh"
      ? `${(value / 100000).toFixed(1)}L`
      : target % 1 === 0
        ? Math.round(value).toLocaleString("en-IN")
        : value.toFixed(1);

  return (
    <div ref={ref} className="font-display text-4xl font-extrabold text-brand-400 sm:text-5xl">
      {display}
      <span>{suffix}</span>
    </div>
  );
}

export default function Metrics() {
  return (
    <section className="relative overflow-hidden bg-navy-800 py-20 text-white sm:py-24">
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 85% 20%, rgba(255,87,51,.16) 0, transparent 36%)",
        }}
      />
      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-400">
            The metrics that matter
          </p>
          <h2 className="text-balance font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Amplifying the key metrics that matter
          </h2>
        </div>
        <dl className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-3xl border border-white/10 bg-white/5 p-7 text-center backdrop-blur"
            >
              <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-400">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d={s.icon} />
                </svg>
              </span>
              <dd className="mt-4">
                <Counter target={s.value} suffix={s.suffix} format={s.format} />
              </dd>
              <dt className="mt-2 text-sm text-white/60">{s.label}</dt>
            </div>
          ))}
        </dl>
        <p className="mt-10 text-center text-xs text-white/40">
          Numbers reflect FatFox platform performance across active partner restaurants.
        </p>
      </div>
    </section>
  );
}