import { LineParts } from "./line-parts";
import { ctaLineFor, bookHrefFor } from "./service-links";
import { LandingSection } from "@/components/site/landing-section";
import { CtaCard, CtaCardAction, CtaCardContent, CtaCardDescription, CtaCardTitle } from "@/components/ui/cta-card";
import type { ToolPage } from "@/lib/tool-pages/types";

export const ToolCta = ({ page }: { page: ToolPage }) => (
  <LandingSection className="pt-0">
    <CtaCard>
      <CtaCardContent>
        <CtaCardTitle>{page.cta.heading}</CtaCardTitle>
        <CtaCardDescription>{page.cta.body}</CtaCardDescription>
      </CtaCardContent>
      <CtaCardAction href={bookHrefFor(page.slug)}>Book a free 30-min call</CtaCardAction>
    </CtaCard>
    <p className="mt-4 text-sm text-muted-foreground"><LineParts parts={ctaLineFor(page.slug, page.name)} /></p>
  </LandingSection>
);
