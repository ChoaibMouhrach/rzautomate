import { Plus } from "lucide-react";
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
  <div className={`flex flex-col gap-2 ${className ?? ""}`}>
    {items.map((item) => (
      <details
        key={item.question}
        name={name}
        className="group rounded-3xl bg-muted transition-colors open:bg-primary/10"
      >
        <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-6 text-xl font-semibold tracking-tight marker:hidden md:p-8 [&::-webkit-details-marker]:hidden">
          <h3>{item.question}</h3>
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-background text-primary transition-colors group-open:bg-primary group-open:text-primary-foreground">
            <Plus
              aria-hidden
              className="size-5 transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
            />
          </span>
        </summary>
        <p className="px-6 pb-6 pr-20 text-lg text-muted-foreground md:px-8 md:pb-8 md:pr-24">
          <FreeText>{item.answer}</FreeText>
        </p>
      </details>
    ))}
  </div>
);
