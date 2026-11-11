import { Accordion } from "@/components/ui/accordion";
import { FreeText } from "@/components/ui/free-text";

export interface FaqAccordionItem {
  question: string;
  answer: string;
}

export const FaqAccordion = ({
  items,
  name,
  className,
}: {
  items: readonly FaqAccordionItem[];
  name: string;
  className?: string;
}) => (
  <Accordion
    name={name}
    className={className}
    items={items.map((item) => ({
      question: item.question,
      answer: <FreeText>{item.answer}</FreeText>,
    }))}
  />
);
