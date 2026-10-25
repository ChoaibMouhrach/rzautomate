"use client";

import {
  Button,
  Disclosure,
  DisclosureGroup,
  DisclosurePanel,
  Heading,
} from "react-aria-components";
import { focusRing, tv } from "@/lib/ui";

const trigger = tv({
  extend: focusRing,
  base: "flex w-full cursor-pointer items-center justify-between gap-4 rounded-ui py-4 text-left font-medium",
});

export interface AccordionItem {
  question: string;
  answer: string;
}

export function Accordion({ items }: { items: readonly AccordionItem[] }) {
  return (
    <DisclosureGroup className="divide-y divide-border border-y border-border">
      {items.map((item) => (
        <Disclosure key={item.question} id={item.question} className="group">
          <Heading>
            <Button
              slot="trigger"
              className={({ isFocusVisible }) => trigger({ isFocusVisible })}
            >
              {item.question}
              <svg
                aria-hidden
                viewBox="0 0 16 16"
                className="size-4 shrink-0 text-muted-foreground transition-transform group-expanded:rotate-180"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="m4 6 4 4 4-4" />
              </svg>
            </Button>
          </Heading>
          <DisclosurePanel>
            <p className="pb-4 text-muted-foreground">{item.answer}</p>
          </DisclosurePanel>
        </Disclosure>
      ))}
    </DisclosureGroup>
  );
}
