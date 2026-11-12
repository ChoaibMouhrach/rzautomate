import { LandingHeading, LandingSection, SectionLabel } from "@/components/site/landing-section";
import { pain } from "./content";

export const Pain = () => (
  <LandingSection>
    <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <SectionLabel>{pain.label}</SectionLabel>
        <LandingHeading className="mt-4">{pain.heading}</LandingHeading>
      </div>
      <div>
        <ol className="flex flex-col gap-2">
          {pain.rows.map((row, index) => (
            <li
              key={row.title}
              className="flex gap-5 rounded-3xl bg-muted p-6 md:gap-8 md:p-8"
            >
              <span className="text-3xl font-semibold leading-none tracking-tighter text-primary md:text-4xl">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                  {row.title}
                </h3>
                <p className="mt-2 text-muted-foreground">{row.line}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-xl font-medium tracking-tight md:text-2xl">
          {pain.closing}
        </p>
      </div>
    </div>
  </LandingSection>
);
