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
        <SectionTitle>Find out what to automate first</SectionTitle>
        <SectionDescription>
          A free 30-min call with me, the engineer who builds the work. You
          leave knowing which tasks to hand off first.
        </SectionDescription>
      </SectionHeader>
      <SectionFooter>
        <LinkButton href="/contact" size="lg">
          Book a free 30-min call
        </LinkButton>
      </SectionFooter>
    </Section>
  );
}
