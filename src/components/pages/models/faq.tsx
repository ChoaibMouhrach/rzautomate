import { LandingHeading, LandingSection } from "@/components/site/landing-section";
import { Accordion } from "@/components/ui/accordion";
import { Link } from "@/components/ui/link";
import { faqs } from "./content";

export const Faq = () => (
  <LandingSection>
    <div className="grid gap-10 lg:grid-cols-[2fr_3fr] lg:gap-16">
      <div>
        <LandingHeading>AI model pricing FAQ</LandingHeading>
        <Link href="/faq" className="mt-4 inline-block font-medium">See all questions →</Link>
      </div>
      <Accordion items={faqs} name="models-faq" />
    </div>
  </LandingSection>
);
