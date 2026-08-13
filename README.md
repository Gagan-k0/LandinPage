# FatFox — Marketing Landing Page

Official marketing website for **FatFox**, an all-in-one restaurant operating
system — online ordering storefront, cloud POS & admin panel, and a delivery
partner app. Built by [FoxWel AI](https://www.foxwel.ai/).

## Tech stack

- **Next.js 16** (App Router, static prerendering) — best-in-class SEO
- **React 19 + TypeScript**
- **Tailwind CSS v4**

## Pages

| Route          | Purpose                                        |
| -------------- | ---------------------------------------------- |
| `/`            | Home — hero, product showcase, features, FAQ   |
| `/pos`         | Cloud POS & Admin Panel product page           |
| `/storefront`  | White-label online ordering product page       |
| `/delivery`    | Delivery Partner App product page              |
| `/pricing`     | Plans & pricing                                |
| `/about`       | Company, values & FoxWel AI                    |
| `/contact`     | Demo request form & contact details            |

## SEO built in

- Metadata API (title, description, keywords, OG/Twitter, canonical) per page
- JSON-LD: `Organization`, `FAQPage`, `SoftwareApplication`, breadcrumbs
- `sitemap.xml` + `robots.txt` generated at build time
- Semantic HTML, heading hierarchy, static prerendering, mobile-first

## Development

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build (static prerender)
npm run lint      # eslint
npm run start     # serve production build
```

## Configuration

Update `lib/site.ts` with your real domain, contact details and social links
before going live. Metrics and testimonials in `components/sections/` are
placeholders — replace with real numbers and reviews.

Deploy anywhere Next.js runs (Vercel recommended).