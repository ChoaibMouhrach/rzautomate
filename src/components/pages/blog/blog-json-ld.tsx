import { JsonLd } from "@/components/site/json-ld";
import { blogJsonLd, breadcrumbJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/pages";

export function BlogJsonLd() {
  return (
    <JsonLd
      data={[
        blogJsonLd(),
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: pageMetadata.blog.title, path: "/blog" },
        ]),
      ]}
    />
  );
}
