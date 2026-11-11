import { why } from "./content";
import { Integrations1 } from "./integrations-1";
import { HomeSection, SectionHeading } from "./section";

export const Tools = () => (
  <HomeSection id="tools" className="bg-ink text-paper">
    <div className="mx-auto max-w-2xl text-center">
      <SectionHeading>{why.centerTitle}</SectionHeading>
      <p className="mt-4 text-lg text-paper/60">{why.centerLine}</p>
    </div>
    <div className="mt-14">
      <Integrations1 />
    </div>
  </HomeSection>
);
