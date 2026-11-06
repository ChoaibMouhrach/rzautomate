import { JsonLd } from "@/components/site/json-ld";
import { breadcrumbJsonLd, faqPageJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/pages";
import { faqGroups } from "./content";

export function FaqJsonLd() {
  const items = faqGroups.flatMap(
    (group): { question: string; answer: string }[] => [...group.items],
  );

  return (
    <JsonLd
      data={[
        faqPageJsonLd(items),
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: pageMetadata.faq.title, path: "/faq" },
        ]),
      ]}
    />
  );
}
