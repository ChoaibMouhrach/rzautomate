import { process } from "./content";
import { HomeSection, MonoLabel, SectionHeading } from "./section";

export const Process = () => (
  <HomeSection id="how-it-works">
    <div className="mx-auto max-w-3xl text-center">
      <MonoLabel>{process.label}</MonoLabel>
      <SectionHeading className="mt-4">{process.heading}</SectionHeading>
      <p className="mt-4 text-lg text-muted-foreground">
        {process.description}
      </p>
    </div>
    <ol className="mt-16 grid gap-12 lg:grid-cols-4 lg:gap-8">
      {process.steps.map((step, index) => (
        <li key={step.title} className="relative flex flex-col lg:items-center lg:text-center">
          <div className="flex items-center gap-4 lg:w-full">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-medium text-paper lg:mx-auto">
              {String(index + 1).padStart(2, "0")}
            </span>
            {index < process.steps.length - 1 && (
              <span
                aria-hidden
                className="beam-line absolute left-[calc(50%+2rem)] right-[-50%] top-7 hidden h-px overflow-hidden bg-border lg:block"
              />
            )}
          </div>
          <h3 className="mt-5 text-xl font-medium tracking-tight">{step.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{step.line}</p>
        </li>
      ))}
    </ol>
  </HomeSection>
);
