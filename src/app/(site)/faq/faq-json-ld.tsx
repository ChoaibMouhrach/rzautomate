import { JsonLd } from "@/components/site/json-ld";
import { faqPageJsonLd } from "@/lib/json-ld";
import { faqGroups } from "./content";

export function FaqJsonLd() {
  const items = faqGroups.flatMap(
    (group): { question: string; answer: string }[] => [...group.items],
  );

  return <JsonLd data={faqPageJsonLd(items)} />;
}
