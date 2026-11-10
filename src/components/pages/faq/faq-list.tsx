import { Accordion } from "@/components/ui/accordion";
import { FreeText } from "@/components/ui/free-text";
import { faqGroups } from "./content";

export const FaqList = () => (
  <div className="flex flex-col gap-16">
    {faqGroups.map((group) => (
      <section
        key={group.id}
        id={group.id}
        aria-labelledby={`${group.id}-title`}
        className="scroll-mt-24"
      >
        <h2
          id={`${group.id}-title`}
          className="mb-6 text-2xl font-semibold tracking-tight"
        >
          {group.title}
        </h2>
        <Accordion
          name={group.id}
          items={group.items.map((item) => ({
            question: item.question,
            answer: <FreeText>{item.answer}</FreeText>,
          }))}
        />
      </section>
    ))}
  </div>
);
