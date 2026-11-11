import {
  CtaCard,
  CtaCardAction,
  CtaCardContent,
  CtaCardDescription,
  CtaCardTitle,
} from "@/components/ui/cta-card";

export const ContactCta = ({ className }: { className?: string }) => <CtaCard className={className}>
      <CtaCardContent>
        <CtaCardTitle>Ready to automate your workflow?</CtaCardTitle>
        <CtaCardDescription>
          Tell us what is slowing your team down and we will come back with a
          clear plan and a fixed price.
        </CtaCardDescription>
      </CtaCardContent>
      <CtaCardAction href="/contact">Book a free consultation</CtaCardAction>
    </CtaCard>;
