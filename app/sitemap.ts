import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: Array<{ path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }> = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/pos", priority: 0.9, changeFrequency: "weekly" },
    { path: "/storefront", priority: 0.9, changeFrequency: "weekly" },
    { path: "/delivery", priority: 0.9, changeFrequency: "weekly" },
    { path: "/features", priority: 0.9, changeFrequency: "weekly" },
    { path: "/industries", priority: 0.8, changeFrequency: "monthly" },
    { path: "/download", priority: 0.8, changeFrequency: "monthly" },
    { path: "/pricing", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" },
    { path: "/careers", priority: 0.5, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
  ];
  return pages.map((p) => ({
    url: `${site.url}${p.path}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}