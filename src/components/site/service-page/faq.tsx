import { LandingHeading, LandingSection, SectionLabel } from "@/components/site/landing-section";
import { TextLink } from "@/components/ui/text-link";
import { FaqAccordion } from "@/components/site/faq-accordion";
import type { FaqContent } from "./types";

export const Faq = ({ faq, name }: { faq: FaqContent; name: string }) => (
  <LandingSection id="faq">
    <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <SectionLabel>{faq.label}</SectionLabel>
        <LandingHeading className="mt-4">{faq.heading}</LandingHeading>
        <TextLink href={faq.link.href} className="mt-6 inline-block text-primary">
          {faq.link.label}
        </TextLink>
      </div>
      <FaqAccordion name={name} items={faq.items} />
    </div>
  </LandingSection>
);
