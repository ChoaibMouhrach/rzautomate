import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";
import { services } from "@/lib/services";
import { absoluteUrl, legalNav, nav } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", ...nav, ...legalNav].map((page) =>
    typeof page === "string" ? page : page.href,
  );

  return [
    ...pages.map((path) => ({ url: absoluteUrl(path) })),
    ...services.map((service) => ({
      url: absoluteUrl(`/services/${service.slug}`),
    })),
    ...posts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: post.date,
    })),
  ];
}
