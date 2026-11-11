import { why } from "./content";
import { HomeSection, SectionHeading } from "./section";

export const Why = () => (
    <HomeSection id="why" className="bg-tint">
      <SectionHeading className="max-w-2xl">{why.heading}</SectionHeading>
      <ul className="mt-12 grid gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0 lg:divide-x lg:divide-border">
        {why.points.map((point) => (
          <li key={point.title} className="lg:px-8 lg:first:pl-0 lg:last:pr-0">
            <h3 className="font-semibold">{point.title}</h3>
            <p className="mt-1 text-muted-foreground">{point.line}</p>
          </li>
        ))}
      </ul>
    </HomeSection>
);
