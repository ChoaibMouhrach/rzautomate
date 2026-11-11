import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { TextLink } from "./button";
import { BookCallButton } from "./book-call-button";
import { services } from "./content";
import { HomeSection, MonoLabel, SectionHeading } from "./section";

const tagStyles: Record<string, string> = {
  Trigger: "bg-tint text-muted-foreground",
  Done: "bg-primary text-primary-foreground",
};

export const Services = () => {
  const [open, setOpen] = useState(0);
  const active = services.items[open];

  return (
    <HomeSection id="services">
      <div className="max-w-2xl">
        <MonoLabel>{services.label}</MonoLabel>
        <SectionHeading className="mt-4">{services.heading}</SectionHeading>
        <p className="mt-4 text-lg text-muted-foreground">{services.subhead}</p>
      </div>
      <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-20">
        <ul className="border-t border-border">
          {services.items.map((item, index) => {
            const isOpen = index === open;
            return (
              <li key={item.name} className="border-b border-border">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`service-${index}`}
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
                <div
                  id={`service-${index}`}
                  hidden={!isOpen}
                  className="pb-6 pl-10 pr-9"
                >
                  <p className="text-muted-foreground">{item.body}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {item.tools.map((tool) => (
                      <li
                        key={tool.name}
                        className="flex size-9 items-center justify-center rounded-lg bg-muted"
                      >
                        <img
                          src={tool.src}
                          alt={tool.name}
                          title={tool.name}
                          loading="lazy"
                          className="size-5 object-contain"
                        />
                      </li>
                    ))}
                  </ul>
                  <TextLink
                    href={item.link.href}
                    className="mt-4 inline-block text-primary"
                  >
                    {item.link.label}
                  </TextLink>
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
                className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${tagStyles[card.tag] ?? "bg-ink text-paper"}`}
              >
                {card.tag}
              </span>
              <p className="mt-3 text-lg font-medium tracking-tight">
                {card.title}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{card.meta}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-muted-foreground">{services.footer}</p>
        <BookCallButton size="lg" />
      </div>
    </HomeSection>
  );
};
