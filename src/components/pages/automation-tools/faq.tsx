import { Accordion } from "@/components/ui/accordion";
import { Link } from "@/components/ui/link";
import { LandingHeading, LandingSection, SectionLabel } from "@/components/site/landing-section";
import { faqs } from "./content";

export const Faq = () => (
  <LandingSection>
    <div className="grid gap-10 lg:grid-cols-[2fr_3fr] lg:gap-16">
      <div>
        <SectionLabel>Questions</SectionLabel>
        <LandingHeading className="mt-4">Automation tools FAQ</LandingHeading>
        <Link href="/faq" className="mt-4 inline-block font-medium">See all questions →</Link>
      </div>
      <Accordion items={faqs} name="automation-tools-faq" />
    </div>
  </LandingSection>
);
