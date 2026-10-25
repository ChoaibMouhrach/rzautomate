"use client";

import { Plus } from "lucide-react";
import {
  Button,
  Disclosure,
  DisclosureGroup,
  DisclosurePanel,
  Heading,
} from "react-aria-components";
import { focusRing, tv } from "@/lib/ui";

const item = tv({
  base: "group rounded-ui border border-border bg-background transition-colors hover:bg-muted expanded:bg-muted",
});

const trigger = tv({
  extend: focusRing,
  base: "flex w-full cursor-pointer items-center justify-between gap-6 rounded-ui px-6 py-5 text-left text-base font-medium -outline-offset-2 sm:text-lg",
});

export interface AccordionItem {
  question: string;
  answer: string;
}

export function Accordion({ items }: { items: readonly AccordionItem[] }) {
  return (
    <DisclosureGroup className="flex w-full flex-col gap-3">
      {items.map((entry) => (
        <Disclosure key={entry.question} id={entry.question} className={item()}>
          <Heading>
            <Button
              slot="trigger"
              className={({ isFocusVisible }) => trigger({ isFocusVisible })}
            >
              {entry.question}
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors group-hover:text-foreground">
                <Plus
                  aria-hidden
                  className="size-4 transition-transform duration-200 group-expanded:rotate-45 motion-reduce:transition-none"
                />
              </span>
            </Button>
          </Heading>
          <DisclosurePanel className="h-(--disclosure-panel-height) overflow-clip transition-[height] duration-200 motion-reduce:transition-none">
            <p className="px-6 pb-6 pr-16 leading-7 text-muted-foreground">
              {entry.answer}
            </p>
          </DisclosurePanel>
        </Disclosure>
      ))}
    </DisclosureGroup>
  );
}
