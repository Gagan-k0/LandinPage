import Link from "next/link";
import Logo from "@/components/Logo";
import { site } from "@/lib/site";

const PRODUCTS = [
  { name: "Storefront", href: "/storefront", desc: "White-label online ordering website for every restaurant you power." },
  { name: "Cloud POS & Admin", href: "/pos", desc: "Orders, kitchen, billing, inventory and staff — one control room." },
  { name: "Delivery Partner App", href: "/delivery", desc: "A driver app your delivery fleet will love to use." },
];

const COMPANY = [
  { name: "About Us", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
  { name: "Book a Demo", href: "/contact" },
];

const LEGAL = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
  { name: "Refund Policy", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo className="text-white [&_span]:text-white" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            {site.description}
          </p>
          <p className="mt-6 text-xs text-white/40">
            Built with care by the FatFox team · {new Date().getFullYear()}
          </p>
          <a
            href={site.builder.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white/80 transition hover:border-brand-500 hover:text-white"
          >
            <span className="flex h-4 w-4 items-center justify-center rounded bg-brand-500" aria-hidden="true">
              <svg viewBox="0 0 24 24" className="h-3 w-3 fill-white">
                <path d="M12 2 L14 8 L20 9 L15.5 13 L17 20 L12 16.5 L7 20 L8.5 13 L4 9 L10 8 Z" />
              </svg>
            </span>
            Powered by {site.builder.name}
          </a>
        </div>

        <nav aria-label="Products">
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white/40">
            Products
          </h3>
          <ul className="mt-4 space-y-3">
            {PRODUCTS.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="group block text-sm text-white/70 transition hover:text-white">
                  {p.name}
                  <span className="mt-0.5 block text-xs text-white/40 group-hover:text-white/60">
                    {p.desc}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company">
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white/40">
            Company
          </h3>
          <ul className="mt-4 space-y-3">
            {COMPANY.map((c) => (
              <li key={c.name}>
                <Link href={c.href} className="text-sm text-white/70 transition hover:text-white">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white/40">
            Get in touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>
              <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="transition hover:text-white">
                {site.contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.contact.email}`} className="transition hover:text-white">
                {site.contact.email}
              </a>
            </li>
          </ul>
          <div className="mt-5 flex gap-3">
            {[
              { name: "LinkedIn", href: site.social.linkedin, icon: "M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.3 18H5.7V9.7h2.6V18zM7 8.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM18 18h-2.6v-4.1c0-1-.4-1.7-1.3-1.7-.7 0-1.1.5-1.3 1-.1.2-.1.4-.1.7V18H10V9.7h2.6v1.2c.3-.5 1-1.3 2.3-1.3 1.7 0 3 1.1 3 3.5V18z" },
              { name: "Instagram", href: site.social.instagram, icon: "M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.8.1-1.1.1-1.5.2-1.8.3-.5.2-.8.4-1.1.7-.3.3-.5.6-.7 1.1-.1.3-.3.8-.3 1.8-.1 1.3-.1 1.7-.1 4.8s0 3.5.1 4.8c.1 1.1.2 1.5.3 1.8.2.5.4.8.7 1.1.3.3.6.5 1.1.7.3.1.8.3 1.8.3 1.3.1 1.7.1 4.8.1s3.5 0 4.8-.1c1.1-.1 1.5-.2 1.8-.3.5-.2.8-.4 1.1-.7.3-.3.5-.6.7-1.1.1-.3.3-.8.3-1.8.1-1.3.1-1.7.1-4.8s0-3.5-.1-4.8c-.1-1.1-.2-1.5-.3-1.8-.2-.5-.4-.8-.7-1.1-.3-.3-.6-.5-1.1-.7-.3-.1-.8-.3-1.8-.3-1.3-.1-1.7-.1-4.8-.1zm0 3.1a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4zm5.2-3a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z" },
              { name: "YouTube", href: site.social.youtube, icon: "M23 7.5s-.2-1.6-.9-2.3c-.9-.9-1.9-.9-2.4-1C16.4 4 12 4 12 4s-4.4 0-7.7.2c-.5.1-1.5.1-2.4 1-.7.7-.9 2.3-.9 2.3S.8 9.4.8 11.3v1.4c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.9.9 2.1.9 2.6 1 1.9.2 7.5.2 7.5.2s4.4 0 7.7-.2c.5-.1 1.5-.1 2.4-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8v-1.4c0-1.9-.2-3.8-.2-3.8zM9.8 15.3V8.7l6.2 3.3-6.2 3.3z" },
              { name: "Facebook", href: site.social.facebook, icon: "M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z" },
            ].map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="rounded-full bg-white/10 p-2.5 transition hover:bg-brand-500"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white" aria-hidden="true">
                  <path d={s.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>
            Powered by{" "}
            <a
              href={site.builder.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white/70 transition hover:text-brand-400"
            >
              {site.builder.name}
            </a>
          </p>
          <nav aria-label="Legal" className="flex gap-5">
            {LEGAL.map((l) => (
              <Link key={l.name} href={l.href} className="transition hover:text-white">
                {l.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}