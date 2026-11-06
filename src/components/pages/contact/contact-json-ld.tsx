import { JsonLd } from "@/components/site/json-ld";
import { breadcrumbJsonLd, contactPageJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/pages";

export function ContactJsonLd() {
  return (
    <JsonLd
      data={[
        contactPageJsonLd(),
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: pageMetadata.contact.title, path: "/contact" },
        ]),
      ]}
    />
  );
}
