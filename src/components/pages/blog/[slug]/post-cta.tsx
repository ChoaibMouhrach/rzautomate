import {
  CtaCard,
  CtaCardAction,
  CtaCardContent,
  CtaCardDescription,
  CtaCardTitle,
} from "@/components/ui/cta-card";

export function PostCta() {
  return (
    <CtaCard className="mt-16">
      <CtaCardContent>
        <CtaCardTitle>Want help automating your first workflow?</CtaCardTitle>
        <CtaCardDescription>
          Tell us what is slowing your team down and we will suggest where to
          start.
        </CtaCardDescription>
      </CtaCardContent>
      <CtaCardAction href="/contact">Book a free call</CtaCardAction>
    </CtaCard>
  );
}
