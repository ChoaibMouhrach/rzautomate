import { Accordion } from "@/components/ui/accordion";
import { faqGroups } from "./content";

export function FaqList() {
  return (
    <div className="flex flex-col gap-16">
      {faqGroups.map((group) => (
        <section key={group.title} aria-label={group.title}>
          <h2 className="mb-6 text-2xl font-semibold tracking-tight">
            {group.title}
          </h2>
          <Accordion items={group.items} />
        </section>
      ))}
    </div>
  );
}
