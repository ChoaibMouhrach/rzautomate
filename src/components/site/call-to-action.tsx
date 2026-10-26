import {
  Section,
  SectionDescription,
  SectionFooter,
  SectionHeader,
  SectionTitle,
} from "@/components/site/section";
import { LinkButton } from "@/components/ui/link";

export function CallToAction() {
  return (
    <Section className="bg-muted">
      <SectionHeader align="center">
        <SectionTitle>Ready to see what we can automate?</SectionTitle>
        <SectionDescription>
          Tell us about your workflow. We&apos;ll come back with a clear plan and
          a fixed price.
        </SectionDescription>
      </SectionHeader>
      <SectionFooter>
        <LinkButton href="/contact" size="lg">
          Get in touch
        </LinkButton>
      </SectionFooter>
    </Section>
  );
}
