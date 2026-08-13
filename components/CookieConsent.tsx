"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Consent = { necessary: true; analytics: boolean; functional: boolean } | null;

const STORAGE_KEY = "fatfox-consent";

function loadConsent(): Consent {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return { necessary: true, analytics: !!parsed.analytics, functional: !!parsed.functional };
  } catch {
    return null;
  }
}

export default function CookieConsent() {
  const [consent, setConsent] = useState<Consent>(null);
  const [show, setShow] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [draft, setDraft] = useState({ analytics: false, functional: false });

  useEffect(() => {
    const stored = loadConsent();
    const timer = setTimeout(
      () => {
        if (stored) {
          setConsent(stored);
        } else {
          setConsent({ necessary: true, analytics: false, functional: false });
          setShow(true);
        }
      },
      stored ? 0 : 1200
    );
    return () => clearTimeout(timer);
  }, []);

  if (!consent || !show) return null;

  const save = (value: { analytics: boolean; functional: boolean }) => {
    const next: Consent = { necessary: true, ...value };
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // storage unavailable — just close the banner
    }
    setConsent(next);
    setCustomizing(false);
  };

  const rejectAll = () => save({ analytics: false, functional: false });
  const acceptAll = () => save({ analytics: true, functional: true });

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[70] p-4 sm:p-6"
    >
      <div className="mx-auto max-w-3xl rounded-3xl border border-black/10 bg-white/95 shadow-2xl shadow-black/20 backdrop-blur">
        {!customizing ? (
          <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div className="flex items-start gap-4">
              <span className="hidden h-11 w-11 flex-none items-center justify-center rounded-2xl bg-brand-50 text-brand-600 sm:flex" aria-hidden="true">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2 A6.5 6.5 0 0 0 6 15 A6.5 6.5 0 0 0 15 6 Z M6 15 A8 8 0 1 0 15 6 M14.5 9.5 H14.6 M9 12.5 H9.1 M12 17 H12.1" />
                </svg>
              </span>
              <div>
                <h2 className="font-display text-sm font-bold text-ink">We value your privacy</h2>
                <p className="mt-1 text-xs leading-relaxed text-ink/60">
                  We use cookies to improve your experience, analyse site usage and show
                  relevant offers.{" "}
                  <Link href="/privacy" className="font-semibold text-brand-600 hover:underline">
                    Cookie Policy
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:flex-none">
              <button
                type="button"
                onClick={rejectAll}
                className="rounded-full px-4 py-2.5 text-xs font-bold text-ink/70 transition hover:bg-black/5"
              >
                Reject All
              </button>
              <button
                type="button"
                onClick={() => setCustomizing(true)}
                className="rounded-full px-4 py-2.5 text-xs font-bold text-ink transition hover:bg-black/5"
              >
                Customise
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="rounded-full bg-brand-500 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-600"
              >
                Accept All
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="font-display text-sm font-bold text-ink">Customise consent preferences</h2>
                <p className="mt-1 text-xs leading-relaxed text-ink/60">
                  Turn categories on or off to help us improve and personalise your experience.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setCustomizing(false)}
                className="flex h-8 w-8 flex-none items-center justify-center rounded-full text-ink/50 transition hover:bg-black/5 hover:text-ink"
                aria-label="Close customise panel"
              >
                <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M4 4 L12 12 M12 4 L4 12" />
                </svg>
              </button>
            </div>

            <div className="mt-5 space-y-3">
              <div className="flex items-center justify-between rounded-2xl border border-black/5 bg-[#faf7f5] px-4 py-3">
                <div>
                  <div className="text-sm font-bold text-ink">Necessary</div>
                  <p className="mt-0.5 text-xs text-ink/60">
                    Required for the site to function — form submission and saving your consent choice.
                  </p>
                </div>
                <span className="rounded-full bg-ink/5 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-ink/50">
                  Always on
                </span>
              </div>
              {(
                [
                  ["analytics", "Analytics", "Helps us understand how visitors use the site so we can improve it."],
                  ["functional", "Functional", "Enables extras like chat widgets and content sharing."],
                ] as const
              ).map(([key, label, desc]) => (
                <div key={key} className="flex items-center justify-between rounded-2xl border border-black/5 bg-[#faf7f5] px-4 py-3">
                  <div>
                    <div className="text-sm font-bold text-ink">{label}</div>
                    <p className="mt-0.5 text-xs text-ink/60">{desc}</p>
                  </div>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={draft[key]}
                    aria-label={`Toggle ${label}`}
                    onClick={() => setDraft((d) => ({ ...d, [key]: !d[key] }))}
                    className={cn(
                      "relative h-6 w-11 flex-none rounded-full transition-colors",
                      draft[key] ? "bg-brand-500" : "bg-ink/15"
                    )}
                  >
                    <span
                      className={cn(
                        "absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all",
                        draft[key] ? "left-[22px]" : "left-0.5"
                      )}
                    />
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap justify-end gap-2">
              <button
                type="button"
                onClick={rejectAll}
                className="rounded-full px-4 py-2.5 text-xs font-bold text-ink/70 transition hover:bg-black/5"
              >
                Reject All
              </button>
              <button
                type="button"
                onClick={() => save(draft)}
                className="rounded-full border border-black/10 px-5 py-2.5 text-xs font-bold text-ink transition hover:border-brand-300 hover:text-brand-600"
              >
                Save My Preferences
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="rounded-full bg-brand-500 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-600"
              >
                Accept All
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
