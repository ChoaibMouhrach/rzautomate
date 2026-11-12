import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { LandingHeading, LandingSection, SectionLabel } from "@/components/site/landing-section";
import { LinkButton } from "@/components/ui/link";
import { bookingLabel } from "./constants";
import type { BuildContent } from "./types";

const tagStyles: Record<string, string> = {
  Answered: "bg-primary text-primary-foreground",
  Routed: "bg-primary text-primary-foreground",
  "Handed off": "bg-primary text-primary-foreground",
};

export const Build = ({
  build,
  bookHref,
}: {
  build: BuildContent;
  bookHref: string;
}) => {
  const [open, setOpen] = useState(0);
  const active = build.items[open];

  return (
    <LandingSection id="what-we-build">
      <div className="max-w-3xl">
        <SectionLabel>{build.label}</SectionLabel>
        <LandingHeading className="mt-4">{build.heading}</LandingHeading>
        <p className="mt-4 text-lg text-muted-foreground">{build.definition}</p>
      </div>
      <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-20">
        <ul className="border-t border-border">
          {build.items.map((item, index) => {
            const isOpen = index === open;
            return (
              <li key={item.name} className="border-b border-border">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`build-${index}`}
                    onClick={() => setOpen(index)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 py-6 text-left text-xl font-medium tracking-tight outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="text-sm text-muted-foreground">
                        0{index + 1}
                      </span>
                      {item.name}
                    </span>
                    {isOpen ? (
                      <Minus aria-hidden className="size-5 shrink-0" />
                    ) : (
                      <Plus aria-hidden className="size-5 shrink-0" />
                    )}
                  </button>
                </h3>
                <div id={`build-${index}`} hidden={!isOpen} className="pb-6 pl-10 pr-9">
                  <p className="text-muted-foreground">{item.body}</p>
                </div>
              </li>
            );
          })}
        </ul>
        <div
          key={open}
          aria-live="polite"
          className="flex flex-col justify-center gap-3 rounded-2xl bg-tint p-6 md:p-10"
        >
          {active.stack.map((card, index) => (
            <div
              key={card.tag}
              style={{ animationDelay: `${index * 90}ms` }}
              className="animate-stack-in rounded-2xl bg-background p-5"
            >
              <span
                className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${tagStyles[card.tag] ?? "bg-muted text-muted-foreground"}`}
              >
                {card.tag}
              </span>
              <p className="mt-3 text-lg font-medium tracking-tight">{card.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{card.meta}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12">
        <LinkButton href={bookHref} size="lg">
          {bookingLabel}
        </LinkButton>
      </div>
    </LandingSection>
  );
};
