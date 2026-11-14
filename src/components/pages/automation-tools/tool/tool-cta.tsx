import { LineParts } from "./line-parts";
import { ctaLineFor } from "./service-links";
import { directorySectionClass } from "@/components/site/directory";
import { CtaCard, CtaCardAction, CtaCardContent, CtaCardDescription, CtaCardTitle } from "@/components/ui/cta-card";
import { bookHrefFor } from "./service-links";
import type { ToolPage } from "@/lib/tool-pages/types";

export const ToolCta = ({ page }: { page: ToolPage }) => (
  <div className={directorySectionClass}>
  <CtaCard>
    <CtaCardContent>
      <CtaCardTitle>{page.cta.heading}</CtaCardTitle>
      <CtaCardDescription>{page.cta.body}</CtaCardDescription>
    </CtaCardContent>
    <CtaCardAction href={bookHrefFor(page.slug)}>Book a free 30-min call</CtaCardAction>
  </CtaCard>
  <p className="mt-4 text-sm text-muted-foreground"><LineParts parts={ctaLineFor(page.slug, page.name)} /></p>
  </div>
);
