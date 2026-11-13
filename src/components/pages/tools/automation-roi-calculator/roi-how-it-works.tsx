import { LandingHeading, LandingSection } from "@/components/site/landing-section";
import { howItWorks } from "@/components/pages/tools/automation-roi-calculator/content";

export const RoiHowItWorks = () => (
  <LandingSection id="how-it-works" className="bg-tint">
    <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <LandingHeading>{howItWorks.heading}</LandingHeading>
        <p className="mt-6 text-lg text-muted-foreground">{howItWorks.intro}</p>
        <p className="mt-6 text-muted-foreground">{howItWorks.closing}</p>
      </div>
      <ol className="grid gap-3">
        {howItWorks.steps.map((step, index) => (
          <li
            key={step}
            className="flex items-start gap-5 rounded-3xl bg-background p-5 md:p-6"
          >
            <span
              aria-hidden
              className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground"
            >
              {index + 1}
            </span>
            <p className="pt-1.5 text-lg leading-snug">{step}</p>
          </li>
        ))}
      </ol>
    </div>
  </LandingSection>
);
