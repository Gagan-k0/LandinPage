"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const inputClass =
  "w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-ink outline-none transition placeholder:text-black/35 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-xs font-semibold text-red-600">
      {message}
    </p>
  );
}

export default function DemoForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState<string | undefined>();

  const validatePhone = (value: string): string | undefined => {
    const digits = value.replace(/\D/g, "");
    if (digits.length < 10) {
      return "Please enter a valid phone number (10+ digits).";
    }
    if (digits.length > 13) {
      return "That number looks too long — please double-check it.";
    }
    return undefined;
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-3xl border border-green-200 bg-green-50 px-6 py-12 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white" aria-hidden="true">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 13 L9 17 L19 7" />
          </svg>
        </span>
        <h3 className="mt-4 font-display text-xl font-bold text-ink">Thank you!</h3>
        <p className="mt-2 max-w-sm text-sm text-ink/70">
          Your demo request has been received. Our team will reach out to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        const err = validatePhone(phone);
        setPhoneError(err);
        if (err) return;
        setSubmitted(true);
      }}
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-semibold text-ink/80">
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your full name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-ink/80">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@restaurant.com"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold text-ink/80">
            Phone number *
          </label>
          <div className="flex">
            <span className="inline-flex items-center rounded-l-xl border border-r-0 border-black/10 bg-[#faf7f5] px-3 text-sm font-semibold text-ink/70">
              +91
            </span>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              placeholder="98765 43210"
              inputMode="numeric"
              value={phone}
              onChange={(e) => {
                const v = e.target.value.replace(/[^\d\s+-]/g, "");
                setPhone(v);
                if (phoneError) setPhoneError(validatePhone(v));
              }}
              aria-invalid={!!phoneError}
              aria-describedby={phoneError ? "phone-error" : undefined}
              className={cn(inputClass, "rounded-l-none", phoneError && "border-red-400 focus:border-red-500 focus:ring-red-500/20")}
            />
          </div>
          <FieldError id="phone-error" message={phoneError} />
        </div>
        <div>
          <label htmlFor="business" className="mb-1.5 block text-xs font-semibold text-ink/80">
            Restaurant / business name *
          </label>
          <input
            id="business"
            name="business"
            type="text"
            required
            placeholder="e.g. Krishna Vilas"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="interest" className="mb-1.5 block text-xs font-semibold text-ink/80">
          Which product are you interested in? *
        </label>
        <select
          id="interest"
          name="interest"
          required
          defaultValue=""
          className={inputClass}
        >
          <option value="" disabled>
            Select a product…
          </option>
          <option>Cloud POS & Admin Panel</option>
          <option>Online Ordering Storefront</option>
          <option>Delivery Partner App</option>
          <option>Complete FatFox platform</option>
          <option>Not sure yet — need advice</option>
        </select>
      </div>

      {!compact && (
        <div>
          <label htmlFor="outlets" className="mb-1.5 block text-xs font-semibold text-ink/80">
            Number of outlets
          </label>
          <select
            id="outlets"
            name="outlets"
            className={inputClass}
            defaultValue=""
          >
            <option value="" disabled>
              Select…
            </option>
            <option>Single outlet</option>
            <option>2–5 outlets</option>
            <option>6–20 outlets</option>
            <option>20+ outlets / chain</option>
          </select>
        </div>
      )}

      <button
        type="submit"
        className="btn-shine w-full rounded-xl bg-brand-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-600 active:scale-[0.99]"
      >
        {compact ? "Request a Demo" : "Book My Free Demo"}
      </button>
      <p className="text-center text-xs text-ink/50">
        Free onboarding &amp; support · No credit card required · We reply within 24 hours
      </p>
    </form>
  );
}