import { LandingHeading, LandingSection } from "@/components/site/landing-section";
import { TextLink } from "@/components/ui/text-link";
import { assumptions } from "@/components/pages/tools/automation-roi-calculator/content";

export const RoiAssumptions = () => (
  <LandingSection id="assumptions" className="bg-tint">
    <div className="max-w-3xl">
      <LandingHeading>{assumptions.heading}</LandingHeading>
      <p className="mt-6 text-lg text-muted-foreground">{assumptions.intro}</p>
    </div>
    <ul className="mt-12 grid gap-3 md:grid-cols-2">
      {assumptions.bullets.map((bullet) => (
        <li key={bullet.title} className="rounded-3xl bg-background p-6 md:p-8">
          <h3 className="text-xl font-semibold tracking-tight">
            {bullet.title}
          </h3>
          <p className="mt-2 text-muted-foreground">{bullet.text}</p>
        </li>
      ))}
    </ul>
    <p className="mt-8 text-sm text-muted-foreground">
      {assumptions.source.prefix}
      <TextLink
        href={assumptions.source.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground underline"
      >
        {assumptions.source.label}
      </TextLink>
      .
    </p>
  </LandingSection>
);
