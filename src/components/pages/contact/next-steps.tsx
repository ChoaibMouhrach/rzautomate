import { LandingHeading, LandingSection } from "@/components/site/landing-section";
import { nextSteps } from "@/components/pages/contact/content";

export const NextSteps = () => (
  <LandingSection className="bg-ink text-paper">
    <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
      <div>
        <p className="text-sm font-medium text-paper/60">{nextSteps.label}</p>
        <LandingHeading className="mt-4">{nextSteps.heading}</LandingHeading>
      </div>
      <ol className="grid gap-8">
        {nextSteps.steps.map((step, index) => (
          <li
            key={step.title}
            className="grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-1 rounded-3xl bg-white/5 p-6 md:p-8"
          >
            <span
              aria-hidden
              className="row-span-2 self-center text-5xl font-semibold tracking-tighter text-primary md:text-6xl"
            >
              {index + 1}
            </span>
            <h3 className="text-xl font-semibold tracking-tight">
              {step.title}
            </h3>
            <p className="text-paper/70">{step.line}</p>
          </li>
        ))}
      </ol>
    </div>
  </LandingSection>
);
