import { Section } from "@/components/site/section";
import {
  CtaCard,
  CtaCardAction,
  CtaCardContent,
  CtaCardDescription,
  CtaCardTitle,
} from "@/components/ui/cta-card";
import { FreeText } from "@/components/ui/free-text";

export const CallToAction = () => (
  <Section>
    <CtaCard>
      <CtaCardContent>
        <CtaCardTitle>Find out what to automate first</CtaCardTitle>
        <CtaCardDescription>
          <FreeText>
            A free 30-min call with me, the engineer who builds the work. You
            leave knowing which tasks to hand off first.
          </FreeText>
        </CtaCardDescription>
      </CtaCardContent>
      <CtaCardAction href="/contact">Book a free 30-min call</CtaCardAction>
    </CtaCard>
  </Section>
);
