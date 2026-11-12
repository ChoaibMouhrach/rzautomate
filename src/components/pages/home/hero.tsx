import { FlowHero } from "@/components/site/flow-hero";
import { BookCallButton } from "./book-call-button";
import { hero, services } from "./content";

export const Hero = () => (
  <FlowHero
    title={hero.title}
    description={hero.description}
    flow={services.items[0].stack}
    showProgress
  >
    <BookCallButton size="lg" />
  </FlowHero>
);
