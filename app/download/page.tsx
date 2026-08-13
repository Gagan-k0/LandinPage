import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import DemoForm from "@/components/DemoForm";
import { SectionHeading, CheckIcon } from "@/components/sections/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Download FatFox POS for Windows 7, 8, 10 & 11",
  description:
    "Download the FatFox POS desktop app for Windows 7, 8, 10 and 11. Choose the installer or portable EXE — cloud POS with kitchen display, billing and delivery management in a native Windows app.",
  alternates: { canonical: `${site.url}/download` },
  openGraph: {
    title: `Download FatFox POS for Windows | ${site.name}`,
    description:
      "FatFox POS desktop app for Windows 7, 8, 10 and 11 — installer and portable builds.",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
};

const RELEASES_URL = "https://github.com/Gagan-k0/LandinPage/releases";

const VERSIONS = [
  {
    name: "Windows 7",
    badge: "Legacy build",
    tone: "bg-zinc-100 text-zinc-600",
    note: "For older billing PCs. Uses a lighter runtime and receives essential updates.",
    setup: `${RELEASES_URL}/download/v1.0.0-win7/FatFoxPOS-Setup-1.0.0-win7.exe`,
    portable: `${RELEASES_URL}/download/v1.0.0-win7/FatFoxPOS-Portable-1.0.0-win7.exe`,
  },
  {
    name: "Windows 8",
    badge: "Legacy build",
    tone: "bg-zinc-100 text-zinc-600",
    note: "Works on 32-bit & 64-bit Windows 8 / 8.1 systems.",
    setup: `${RELEASES_URL}/download/v1.0.0-win8/FatFoxPOS-Setup-1.0.0-win8.exe`,
    portable: `${RELEASES_URL}/download/v1.0.0-win8/FatFoxPOS-Portable-1.0.0-win8.exe`,
  },
  {
    name: "Windows 10",
    badge: "Recommended",
    tone: "bg-brand-100 text-brand-700",
    note: "Best experience for daily restaurant operations. Full-speed updates.",
    setup: `${RELEASES_URL}/download/v1.0.0/FatFoxPOS-Setup-1.0.0.exe`,
    portable: `${RELEASES_URL}/download/v1.0.0/FatFoxPOS-Portable-1.0.0.exe`,
  },
  {
    name: "Windows 11",
    badge: "Recommended",
    tone: "bg-brand-100 text-brand-700",
    note: "Latest runtime, touch-friendly billing screens and faster printing.",
    setup: `${RELEASES_URL}/download/v1.0.0/FatFoxPOS-Setup-1.0.0.exe`,
    portable: `${RELEASES_URL}/download/v1.0.0/FatFoxPOS-Portable-1.0.0.exe`,
  },
];

const downloadJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "FatFox POS for Windows",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Windows 7, Windows 8, Windows 10, Windows 11",
  softwareVersion: "1.0.0",
  description:
    "Cloud restaurant POS desktop app for Windows — orders, kitchen display, GST billing, delivery management and settlements.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  publisher: {
    "@type": "Organization",
    name: site.builder.name,
    url: site.builder.url,
  },
};

export default function DownloadPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(downloadJsonLd) }}
      />

      <section className="relative overflow-hidden py-16 sm:py-24">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 12% 8%, rgba(255,87,51,.12) 0, transparent 34%), radial-gradient(circle at 88% 15%, rgba(255,87,51,.08) 0, transparent 30%)",
          }}
        />
        <div className="container-x relative">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-bold text-brand-700">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
                  <path d="M4 6.5 A2.5 2.5 0 0 1 6.5 4 H17.5 A2.5 2.5 0 0 1 20 6.5 V13.5 A2.5 2.5 0 0 1 17.5 16 H11 L8 19 V16 H6.5 A2.5 2.5 0 0 1 4 13.5 Z" />
                </svg>
                FatFox POS Desktop for Windows
              </p>
              <h1 className="text-balance font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
                Download FatFox POS for{" "}
                <span className="text-brand-500">Windows</span>
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink/60 sm:text-lg">
                Run your entire restaurant — billing, kitchen display, delivery and
                reports — in a fast native Windows app. Same FatFox cloud backend,
                one-click install, no browser needed.
              </p>
            </Reveal>
          </div>

          <div className="mx-auto mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VERSIONS.map((v, i) => (
              <Reveal key={v.name} delay={i * 100}>
                <article className="card-ring group relative flex h-full flex-col rounded-3xl border border-black/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-500/15">
                  <div className="flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="4" y="4" width="16" height="10" rx="2" />
                        <path d="M8 21 H16 M12 14 V21" />
                      </svg>
                    </span>
                    <span className={`rounded-full px-2.5 py-1 text-[10px] font-extrabold ${v.tone}`}>
                      {v.badge}
                    </span>
                  </div>
                  <h2 className="mt-5 font-display text-xl font-extrabold text-ink">{v.name}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">{v.note}</p>
                  <div className="mt-6 space-y-2.5">
                    <a
                      href={v.setup}
                      className="btn-shine flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-600"
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 3 V16 M7 11 L12 16 L17 11 M4 21 H20" />
                      </svg>
                      Installer (.exe)
                    </a>
                    <a
                      href={v.portable}
                      className="flex w-full items-center justify-center gap-2 rounded-xl border border-black/10 px-4 py-3 text-sm font-bold text-ink transition hover:border-brand-300 hover:text-brand-600"
                    >
                      Portable (no install)
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150}>
            <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-ink/50">
              Don&apos;t see a button working? The latest build is published under{" "}
              <a href={RELEASES_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-600 underline-offset-2 hover:underline">
                GitHub Releases
              </a>{" "}
              — or{" "}
              <Link href="/contact" className="font-semibold text-brand-600 underline-offset-2 hover:underline">
                contact us
              </Link>{" "}
              and we&apos;ll send you the EXE directly.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#faf7f5] py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Setup vs Portable"
            title="Which download should you pick?"
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
            <Reveal>
              <article className="card-ring h-full rounded-3xl border border-black/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-500/10">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 2 H15 A1 1 0 0 1 16 3 V5 H8 V3 A1 1 0 0 1 9 2 Z M7 5 H17 A2 2 0 0 1 19 7 V20 A2 2 0 0 1 17 22 H7 A2 2 0 0 1 5 20 V7 A2 2 0 0 1 7 5 Z" />
                  </svg>
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-ink">Installer (Setup.exe)</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  The classic setup wizard — choose your install folder, get a desktop
                  shortcut and Start-menu entry, and automatic background updates.
                  Best for dedicated billing PCs and branches.
                </p>
                <ul className="mt-5 space-y-2.5">
                  {["Desktop & Start-menu shortcuts", "Custom installation folder", "Clean uninstaller", "Best for permanent POS counters"].map((t) => (
                    <li key={t} className="flex items-start gap-2.5 text-sm font-medium text-ink/80">
                      <CheckIcon className="mt-0.5 h-4 w-4" />
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
            <Reveal delay={120}>
              <article className="card-ring h-full rounded-3xl border border-black/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-500/10">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22 V8 M12 8 L6 14 M12 8 L18 14 M4 3 H20" />
                  </svg>
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-ink">Portable (.exe)</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  One file, no install. Carry FatFox POS on a USB drive and run it on
                  any Windows PC in seconds. Nothing written outside the app folder.
                </p>
                <ul className="mt-5 space-y-2.5">
                  {["No installation required", "Runs straight from a USB drive", "Perfect for demos & pop-up counters", "Leaves no registry traces"].map((t) => (
                    <li key={t} className="flex items-start gap-2.5 text-sm font-medium text-ink/80">
                      <CheckIcon className="mt-0.5 h-4 w-4" />
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Requirements"
            title="What your PC needs"
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
            {[
              { t: "OS", v: "Windows 7 SP1, 8/8.1, 10 or 11", icon: "M4 6.5 A2.5 2.5 0 0 1 6.5 4 H17.5 A2.5 2.5 0 0 1 20 6.5 V13.5 A2.5 2.5 0 0 1 17.5 16 H11 L8 19 V16 H6.5 A2.5 2.5 0 0 1 4 13.5 Z" },
              { t: "Memory", v: "2 GB RAM minimum · 4 GB recommended", icon: "M4 8 H20 A1 1 0 0 1 21 9 V15 A1 1 0 0 1 20 16 H4 A1 1 0 0 1 3 15 V9 A1 1 0 0 1 4 8 Z M7 12 H17" },
              { t: "Storage & internet", v: "500 MB free · broadband connection to the FatFox cloud", icon: "M12 2 A10 10 0 0 1 22 12 A10 10 0 0 1 12 22 A10 10 0 0 1 2 12 A10 10 0 0 1 12 2 Z M12 7 A5 5 0 0 1 17 12 A5 5 0 0 1 12 17 A5 5 0 0 1 7 12 A5 5 0 0 1 12 7 Z" },
            ].map((r, i) => (
              <Reveal key={r.t} delay={i * 100}>
                <div className="card-ring h-full rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d={r.icon} />
                    </svg>
                  </span>
                  <h3 className="mt-4 font-display text-sm font-bold text-ink">{r.t}</h3>
                  <p className="mt-1.5 text-sm text-ink/60">{r.v}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-yellow-200 bg-yellow-50 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-yellow-100 text-yellow-700">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 9 V14 M12 17.5 V17.6 M10.3 3.9 L1.8 18 A2 2 0 0 0 3.5 21 H20.5 A2 2 0 0 0 22.2 18 L13.7 3.9 A2 2 0 0 0 10.3 3.9 Z" />
                </svg>
              </span>
              <div>
                <h3 className="font-display text-base font-bold text-ink">
                  Two quick notes before you install
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-ink/70">
                  <li>
                    <strong>Needs internet:</strong> the desktop app connects to your FatFox cloud
                    backend — orders, menu and reports stay in sync across all your devices.
                  </li>
                  <li>
                    <strong>&quot;Unknown publisher&quot; warning:</strong> the app is unsigned, so
                    Windows SmartScreen may show a prompt. Click <em>More info → Run anyway</em>.
                    This is expected and safe.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#faf7f5] py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Install in 3 steps"
            title="From download to billing in minutes"
          />
          <ol className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-3">
            {[
              { t: "Download", v: "Pick your Windows version above and download the installer (or portable EXE)." },
              { t: "Run & sign in", v: "Open the file, accept the SmartScreen prompt, and log in with your FatFox account." },
              { t: "Start billing", v: "Your menu, tables and staff are already there — start taking orders right away." },
            ].map((s, i) => (
              <Reveal
                key={s.t}
                delay={i * 120}
                as="li"
                className="card-ring relative h-full rounded-3xl border border-black/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-500 font-display text-lg font-bold text-white shadow-lg shadow-brand-500/30">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-ink">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{s.v}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="No Windows? No problem"
            title="FatFox works everywhere"
          />
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            {[
              { t: "Use it in the browser", v: "The full POS & admin panel runs in any browser on any PC, tablet or phone — nothing to install.", icon: "M12 21 V3 M5 7 H19 M5 12 H19 M5 17 H19" },
              { t: "Storefront for your customers", v: "Your branded ordering website is live on every device — Android, iOS, desktop.", icon: "M8 2 H16 A2 2 0 0 1 18 4 V20 A2 2 0 0 1 16 22 H8 A2 2 0 0 1 6 20 V4 A2 2 0 0 1 8 2 Z M11 18 H13" },
              { t: "Driver app for riders", v: "The delivery partner app installs as a PWA on Android & iOS — no app store needed.", icon: "M3 8 L6 5 H14 L17 8 H20 A1.5 1.5 0 0 1 21.5 9.5 V15 H18 M3 8 H1.5 A1.5 1.5 0 0 0 0 9.5 V14.5 H3 M6 15.5 A2 2 0 1 0 6 19.5 A2 2 0 0 0 6 15.5 Z M18 15.5 A2 2 0 1 0 18 19.5 A2 2 0 0 0 18 15.5 Z" },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 100}>
                <div className="card-ring h-full rounded-3xl border border-black/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d={c.icon} />
                    </svg>
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-ink">{c.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">{c.v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-28">
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 10%, rgba(255,87,51,.25) 0, transparent 40%)",
          }}
        />
        <div className="container-x relative grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-400">
              Download help
            </p>
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Stuck with the download? We&apos;ve got you
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-white/60">
              Tell us which Windows version you&apos;re on and our team will send the
              right build directly to your inbox — plus a 10-minute setup call if
              you want it.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-white/75">
              {["We verify your OS and send the correct build", "Setup help over call or chat", "Free onboarding & training included"].map((t) => (
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
            <DemoForm compact />
          </div>
        </div>
      </section>
    </>
  );
}