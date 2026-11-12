import { FlowHero } from "@/components/site/flow-hero";
import { LinkButton } from "@/components/ui/link";
import { bookingLabel } from "./constants";
import type { HeroContent } from "./types";

export const ServiceHero = ({
  hero,
  bookHref,
  secondaryHref,
  handoff,
}: {
  hero: HeroContent;
  handoff?: boolean;
  bookHref: string;
  secondaryHref: string;
}) => (
  <FlowHero title={hero.title} description={hero.subhead} flow={hero.flow} handoff={handoff}>
    <div className="flex flex-wrap items-center justify-center gap-3">
      <LinkButton href={bookHref} size="lg">
        {bookingLabel}
      </LinkButton>
      <LinkButton href={secondaryHref} size="lg" variant="ghost">
        {hero.secondary}
      </LinkButton>
    </div>
  </FlowHero>
);
