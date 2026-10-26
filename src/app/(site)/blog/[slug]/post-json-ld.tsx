import { JsonLd } from "@/components/site/json-ld";
import type { Post } from "@/lib/blog";
import { blogPostingJsonLd, breadcrumbJsonLd } from "@/lib/json-ld";

export function PostJsonLd({ post }: { post: Post }) {
  return (
    <JsonLd
      data={[
        blogPostingJsonLd(post),
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]),
      ]}
    />
  );
}
