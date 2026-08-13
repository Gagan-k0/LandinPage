import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import FloatingActions from "@/components/FloatingActions";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "FatFox — All-in-One Restaurant POS, Online Ordering & Delivery Platform",
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "restaurant pos software",
    "restaurant management system",
    "online food ordering system",
    "cloud kitchen software",
    "delivery app for restaurants",
    "restaurant billing software",
    "white label food delivery platform",
    "food delivery driver app",
    "multi-outlet restaurant software",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title:
      "FatFox — All-in-One Restaurant POS, Online Ordering & Delivery Platform",
    description: site.description,
    locale: "en_IN",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: `${site.name} — All-in-one restaurant operating system`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "FatFox — All-in-One Restaurant POS, Online Ordering & Delivery Platform",
    description: site.description,
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
  verification: {},
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/logo.svg",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  description: site.description,
  slogan: site.tagline,
  brand: { "@type": "Brand", name: site.name, logo: `${site.url}/logo.svg` },
  logo: `${site.url}/logo.svg`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: site.contact.phone,
    contactType: "sales",
    email: site.contact.email,
    availableLanguage: ["English", "Hindi"],
  },
  parentOrganization: {
    "@type": "Organization",
    name: site.builder.name,
    url: site.builder.url,
    email: site.builder.email,
  },
  sameAs: Object.values(site.social),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-500 focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-white"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingActions />
        <CookieConsent />
      </body>
    </html>
  );
}