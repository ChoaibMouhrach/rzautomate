import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";
import { pagePaths } from "@/lib/pages";
import { absoluteUrl } from "@/lib/site";

const postDates = new Map(posts.map((post) => [`/blog/${post.slug}`, post.date]));

export default function sitemap(): MetadataRoute.Sitemap {
  return pagePaths().map((path) => ({
    url: absoluteUrl(path),
    lastModified: postDates.get(path),
  }));
}
