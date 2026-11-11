import { Plus } from "lucide-react";
import type { ReactNode } from "react";

export interface AccordionItem {
  question: string;
  answer: ReactNode;
}

export const Accordion = ({
  items,
  name = "accordion",
  className,
}: {
  items: readonly AccordionItem[];
  name?: string;
  className?: string;
}) => (
  <div className={`flex w-full flex-col gap-2 ${className ?? ""}`}>
    {items.map((entry) => (
      <details
        key={entry.question}
        name={name}
        className="group rounded-3xl bg-muted transition-colors open:bg-primary/10"
      >
        <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-6 text-xl font-semibold tracking-tight outline-0 marker:hidden focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring md:p-8 [&::-webkit-details-marker]:hidden">
          <h3>{entry.question}</h3>
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-background text-primary transition-colors group-open:bg-primary group-open:text-primary-foreground">
            <Plus
              aria-hidden
              className="size-5 transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
            />
          </span>
        </summary>
        <p className="px-6 pb-6 pr-20 text-lg leading-7 text-muted-foreground md:px-8 md:pb-8 md:pr-24">
          {entry.answer}
        </p>
      </details>
    ))}
  </div>
);
