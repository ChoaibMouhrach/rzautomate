import { CalendarDays, FileCheck, List, Minus } from "lucide-react";
import { LandingHeading, LandingSection, SectionLabel } from "@/components/site/landing-section";
import { method } from "./content";

const icons = { "file-check": FileCheck, calendar: CalendarDays, list: List, minus: Minus } as const;

export const Method = () => (
  <LandingSection className="pt-0">
    <div className="grid gap-10 rounded-3xl bg-muted p-8 md:p-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
      <div>
        <SectionLabel>Where the numbers come from</SectionLabel>
        <LandingHeading className="mt-4">{method.title}</LandingHeading>
      </div>
      <ul className="grid gap-3 sm:grid-cols-2">
        {method.rows.map((row) => {
          const Icon = icons[row.icon];
          return (
            <li key={row.title} className="rounded-2xl bg-background p-6">
              <span className="flex size-11 items-center justify-center rounded-full bg-muted text-primary">
                <Icon aria-hidden className="size-5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 text-xl font-semibold tracking-tight">{row.title}</h3>
              <p className="mt-2 text-muted-foreground">{row.line}</p>
            </li>
          );
        })}
      </ul>
    </div>
  </LandingSection>
);
