import { posts } from "@/lib/blog";
import { services } from "@/lib/services";
import { legalNav, nav } from "@/lib/site";

export function pagePaths() {
  return [
    "/",
    ...nav.map((item) => item.href),
    ...services.map((service) => `/services/${service.slug}`),
    ...posts.map((post) => `/blog/${post.slug}`),
    ...legalNav.map((item) => item.href),
  ];
}
