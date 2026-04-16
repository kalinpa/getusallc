import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { languages, type Lang } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.getusallc.com";
  const pages = [
    { path: "", cf: "weekly" as const, p: 1 },
    { path: "/contact", cf: "monthly" as const, p: 0.9 },
    { path: "/blog", cf: "weekly" as const, p: 0.8 },
    { path: "/tools/calculator", cf: "monthly" as const, p: 0.7 },
    { path: "/tools/tax-test", cf: "monthly" as const, p: 0.7 },
    { path: "/tools/state-comparison", cf: "monthly" as const, p: 0.7 },
    { path: "/search", cf: "monthly" as const, p: 0.5 },
    { path: "/privacy", cf: "yearly" as const, p: 0.3 },
    { path: "/terms", cf: "yearly" as const, p: 0.3 },
    { path: "/disclaimer", cf: "yearly" as const, p: 0.3 },
  ];

  const staticEntries: MetadataRoute.Sitemap = languages.flatMap((lang: Lang) =>
    pages.map(pg => ({
      url: `${base}/${lang}${pg.path}`,
      lastModified: new Date(),
      changeFrequency: pg.cf,
      priority: pg.p,
      alternates: {
        languages: Object.fromEntries(languages.map(l => [l, `${base}/${l}${pg.path}`])),
      },
    }))
  );

  const blogEntries: MetadataRoute.Sitemap = languages.flatMap((lang: Lang) =>
    getAllPosts(lang).map(post => ({
      url: `${base}/${lang}/blog/${post.slug}`,
      lastModified: new Date(post.updated || post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: {
        languages: Object.fromEntries(languages.map(l => [l, `${base}/${l}/blog/${post.slug}`])),
      },
    }))
  );

  return [...staticEntries, ...blogEntries];
}
