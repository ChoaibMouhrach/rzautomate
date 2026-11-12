import { LandingHeading, LandingSection, SectionLabel } from "@/components/site/landing-section";
import type { ProcessContent } from "./types";

export const Process = ({ process }: { process: ProcessContent }) => (
  <LandingSection id="how-we-work">
    <div className="max-w-3xl">
      <SectionLabel>{process.label}</SectionLabel>
      <LandingHeading className="mt-4">{process.heading}</LandingHeading>
    </div>
    <ol className="mt-14 grid gap-2 md:grid-cols-4 md:gap-6">
      {process.steps.map((step, index) => {
        const isLast = index === process.steps.length - 1;
        return (
          <li key={step.title} className="relative flex gap-5 md:block">
            <div className="flex flex-col items-center md:block">
              <span className="relative z-10 flex size-16 shrink-0 items-center justify-center rounded-full bg-primary text-2xl font-semibold text-primary-foreground">
                {index + 1}
              </span>
              {!isLast && (
                <span
                  aria-hidden
                  className="beam-link relative my-2 min-h-12 w-px flex-1 overflow-hidden bg-border md:absolute md:left-[4.5rem] md:right-[-1.5rem] md:top-8 md:my-0 md:h-px md:min-h-0 md:w-auto"
                />
              )}
            </div>
            <div className="pb-8 md:mt-6 md:pb-0">
              <h3 className="text-xl font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-2 text-muted-foreground">{step.line}</p>
            </div>
          </li>
        );
      })}
    </ol>
    {process.note && (
      <p className="mt-12 max-w-2xl text-muted-foreground">{process.note}</p>
    )}
  </LandingSection>
);
