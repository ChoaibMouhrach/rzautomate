import { JsonLd } from "@/components/site/json-ld";
import { breadcrumbJsonLd, faqPageJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/pages";
import { faqGroups } from "./content";

export const FaqJsonLd = () => (
  <JsonLd
    data={[
      faqPageJsonLd(
        faqGroups.flatMap((group) =>
          group.items.map(({ question, answer }) => ({ question, answer })),
        ),
      ),
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: pageMetadata.faq.title, path: "/faq" },
      ]),
    ]}
  />
);
