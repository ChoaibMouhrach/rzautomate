import {
  CtaCard,
  CtaCardAction,
  CtaCardContent,
  CtaCardDescription,
  CtaCardTitle,
} from "@/components/ui/cta-card";

export function ContactCta({ className }: { className?: string }) {
  return (
    <CtaCard className={className}>
      <CtaCardContent>
        <CtaCardTitle>Ready to automate your workflow?</CtaCardTitle>
        <CtaCardDescription>
          Tell us what is slowing your team down and we will come back with a
          clear plan and a fixed price.
        </CtaCardDescription>
      </CtaCardContent>
      <CtaCardAction href="/contact">Contact us</CtaCardAction>
    </CtaCard>
  );
}
