import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";
import { pagePaths } from "@/lib/pages";
import { absoluteUrl } from "@/lib/site";

const postDates = new Map<string, string | undefined>([
  ...posts.map((post) => [`/blog/${post.slug}`, post.updated ?? post.date] as const),
  ["/blog", posts.map((post) => post.updated ?? post.date).sort().at(-1)] as const,
]);

export default function sitemap(): MetadataRoute.Sitemap {
  return pagePaths().map((path) => ({
    url: absoluteUrl(path),
    lastModified: postDates.get(path),
  }));
}
