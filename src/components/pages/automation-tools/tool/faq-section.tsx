import { LandingHeading, LandingSection, SectionLabel } from "@/components/site/landing-section";
import { Accordion } from "@/components/ui/accordion";
import type { ToolPage } from "@/lib/tool-pages/types";

export const FaqSection = ({ page }: { page: ToolPage }) => (
  <LandingSection>
    <div className="grid gap-10 lg:grid-cols-[2fr_3fr] lg:gap-16">
      <div>
        <SectionLabel>Questions</SectionLabel>
        <LandingHeading className="mt-4">{page.faq.heading}</LandingHeading>
      </div>
      <Accordion items={page.faq.items} name={`${page.slug}-faq`} />
    </div>
  </LandingSection>
);
