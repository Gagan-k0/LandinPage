import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "FatFox — All-in-One Restaurant POS, Online Ordering & Delivery Platform",
    short_name: "FatFox",
    description:
      "All-in-one restaurant management platform — online ordering storefront, cloud POS & admin panel, and a delivery partner app.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#FF5733",
    icons: [
      {
        src: "/logo.svg",
        sizes: "48x48",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}