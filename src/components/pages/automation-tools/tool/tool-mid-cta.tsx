import { LandingSection } from "@/components/site/landing-section";
import { CtaCard, CtaCardAction, CtaCardContent, CtaCardDescription, CtaCardTitle } from "@/components/ui/cta-card";
import { FreeText } from "@/components/ui/free-text";
import { bookHrefFor } from "./service-links";
import type { ToolPage } from "@/lib/tool-pages/types";

export const ToolMidCta = ({ page }: { page: ToolPage }) => (
  <LandingSection className="py-0">
    <CtaCard>
      <CtaCardContent>
        <CtaCardTitle>Not sure what {page.name} will cost you?</CtaCardTitle>
        <CtaCardDescription>
          <FreeText>Tell us what you want to automate. On a free 30-min call we'll say which tool and plan fit, and what it should cost each month.</FreeText>
        </CtaCardDescription>
      </CtaCardContent>
      <CtaCardAction href={bookHrefFor(page.slug)}>Book a free 30-min call</CtaCardAction>
    </CtaCard>
  </LandingSection>
);
