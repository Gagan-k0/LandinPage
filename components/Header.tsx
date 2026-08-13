"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import { cn } from "@/lib/utils";

const NAV = [
  {
    label: "Products",
    href: "/#products",
    children: [
      { label: "Storefront", href: "/storefront", desc: "White-label online ordering website" },
      { label: "Cloud POS & Admin", href: "/pos", desc: "Orders, kitchen, billing & staff" },
      { label: "Delivery Partner App", href: "/delivery", desc: "Track, accept & deliver faster" },
    ],
  },
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/85 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {NAV.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <button
                  type="button"
                  className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-ink/80 transition hover:bg-black/5 hover:text-ink"
                >
                  {item.label}
                  <svg viewBox="0 0 12 12" className="h-3 w-3 opacity-60" fill="none" aria-hidden="true">
                    <path d="M3 4.5 L6 7.5 L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div className="invisible absolute left-1/2 top-full w-80 -translate-x-1/2 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="overflow-hidden rounded-2xl border border-black/10 bg-white p-2 shadow-xl shadow-black/10">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="block rounded-xl px-4 py-3 transition hover:bg-brand-50"
                      >
                        <span className="block text-sm font-semibold text-ink">{c.label}</span>
                        <span className="block text-xs text-ink/60">{c.desc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium text-ink/80 transition hover:bg-black/5 hover:text-ink",
                  pathname === item.href && "bg-black/5 text-ink"
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="rounded-full px-5 py-2.5 text-sm font-semibold text-brand-600 transition hover:bg-brand-50"
          >
            Get Started
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-600"
          >
            Book a Demo
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-ink lg:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6 L18 18 M18 6 L6 18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M4 7 H20 M4 12 H20 M4 17 H20" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <nav className="border-t border-black/5 bg-white px-5 pb-6 pt-3 lg:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-1">
            <button
              type="button"
              onClick={() => setProductsOpen(!productsOpen)}
              className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-ink"
              aria-expanded={productsOpen}
            >
              Products
              <svg viewBox="0 0 12 12" className={cn("h-3 w-3 opacity-60 transition", productsOpen && "rotate-180")} fill="none" aria-hidden="true">
                <path d="M3 4.5 L6 7.5 L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {productsOpen && (
              <div className="mb-1 flex flex-col gap-1 pl-3">
                {NAV[0].children!.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-2 text-sm text-ink/80 hover:bg-brand-50"
                  >
                    {c.label}
                    <span className="block text-xs text-ink/50">{c.desc}</span>
                  </Link>
                ))}
              </div>
            )}
            {NAV.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-ink hover:bg-black/5"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 flex gap-3">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex-1 rounded-full border border-brand-200 px-5 py-2.5 text-center text-sm font-semibold text-brand-600"
            >
              Get Started
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex-1 rounded-full bg-brand-500 px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Book a Demo
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}