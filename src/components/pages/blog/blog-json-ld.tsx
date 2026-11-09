import type { Post } from "@/lib/blog";
import { JsonLd } from "@/components/site/json-ld";
import { blogJsonLd, breadcrumbJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/pages";

export const BlogJsonLd = ({ posts }: { posts: readonly Post[] }) => <JsonLd
      data={[
        blogJsonLd(posts),
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: pageMetadata.blog.title, path: "/blog" },
        ]),
      ]}
    />;
