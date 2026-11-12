import { FlowHero } from "@/components/site/flow-hero";
import { FreeText } from "@/components/ui/free-text";
import { LinkButton } from "@/components/ui/link";
import { bookingLabel } from "./constants";
import type { HeroContent } from "./types";

export const ServiceHero = ({
  hero,
  bookHref,
  auditHref,
}: {
  hero: HeroContent;
  bookHref: string;
  auditHref: string;
}) => (
  <FlowHero title={hero.title} description={hero.subhead} flow={hero.flow}>
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-wrap items-center justify-center gap-3">
        <LinkButton href={bookHref} size="lg">
          {bookingLabel}
        </LinkButton>
        <LinkButton href={auditHref} size="lg" variant="ghost">
          {hero.secondary}
        </LinkButton>
      </div>
      <p className="text-sm text-muted-foreground">
        <FreeText>{hero.trust}</FreeText>
      </p>
    </div>
  </FlowHero>
);
