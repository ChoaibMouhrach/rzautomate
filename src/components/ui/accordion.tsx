import { Plus } from "lucide-react";
import { focusRing, tv } from "@/lib/ui";

const item = tv({
  base: "group rounded-ui border border-border bg-background transition-colors hover:bg-muted open:bg-muted",
});

const trigger = tv({
  extend: focusRing,
  base: "flex w-full cursor-pointer list-none items-center justify-between gap-6 rounded-ui px-6 py-5 text-left text-base font-medium -outline-offset-2 focus-visible:outline-2 marker:hidden sm:text-lg [&::-webkit-details-marker]:hidden",
});

export interface AccordionItem {
  question: string;
  answer: string;
}

export function Accordion({
  items,
  name = "accordion",
}: {
  items: readonly AccordionItem[];
  name?: string;
}) {
  return (
    <div className="flex w-full flex-col gap-3">
      {items.map((entry) => (
        <details key={entry.question} name={name} className={item()}>
          <summary className={trigger({ isFocusVisible: false })}>
            <h3 className="contents">{entry.question}</h3>
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors group-hover:text-foreground">
              <Plus
                aria-hidden
                className="size-4 transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
              />
            </span>
          </summary>
          <p className="px-6 pb-6 pr-16 leading-7 text-muted-foreground">
            {entry.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
