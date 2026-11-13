import {
  CtaCard,
  CtaCardAction,
  CtaCardContent,
  CtaCardDescription,
  CtaCardTitle,
} from "@/components/ui/cta-card";
import { FreeText } from "@/components/ui/free-text";

export const FaqCta = ({ className }: { className?: string }) => (
  <CtaCard className={className}>
    <CtaCardContent>
      <CtaCardTitle>Still have a question?</CtaCardTitle>
      <CtaCardDescription>
        <FreeText>Ask us on a free 30-minute call.</FreeText> You'll get the
        answer for your business specifically.
      </CtaCardDescription>
    </CtaCardContent>
    <CtaCardAction href="/book">Book a free 30-min call</CtaCardAction>
  </CtaCard>
);
