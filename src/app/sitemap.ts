import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";
import { services } from "@/lib/services";
import { legalNav, nav, site } from "@/lib/site";

const absolute = (path: string) => new URL(path, site.url).toString();

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", ...nav, ...legalNav].map((page) =>
    typeof page === "string" ? page : page.href,
  );

  return [
    ...pages.map((path) => ({ url: absolute(path) })),
    ...services.map((service) => ({
      url: absolute(`/services/${service.slug}`),
    })),
    ...posts.map((post) => ({
      url: absolute(`/blog/${post.slug}`),
      lastModified: post.date,
    })),
  ];
}
