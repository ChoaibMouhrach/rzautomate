import { FaqAccordion } from "@/components/site/faq-accordion";
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
        <FaqAccordion name={group.id} items={group.items} />
      </section>
    ))}
  </div>
);
