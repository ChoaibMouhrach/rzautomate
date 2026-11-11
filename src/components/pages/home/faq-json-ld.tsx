import { JsonLd } from "@/components/site/json-ld";
import { faqPageJsonLd } from "@/lib/json-ld";
import { faq } from "./content";

export const HomeFaqJsonLd = () => (
  <JsonLd
    data={faqPageJsonLd(
      faq.items.map(({ question, answer }) => ({ question, answer })),
    )}
  />
);
