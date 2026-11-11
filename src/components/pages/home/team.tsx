import { team } from "./content";
import { TextLink } from "./button";
import { HomeSection } from "./section";
import { TextReveal } from "./text-reveal";

export const Team = () => (
  <HomeSection className="bg-tint">
    <h2 className="text-sm font-medium text-muted-foreground">
      {team.label}
    </h2>
    <TextReveal
      text={team.text}
      className="mt-6 max-w-5xl text-2xl font-semibold leading-tight tracking-tighter md:text-4xl"
    />
    <ul className="mt-10 flex flex-wrap gap-6">
      {team.links.map((link) => (
        <li key={link.href}>
          <TextLink href={link.href} rel="me">
            {link.label} →
          </TextLink>
        </li>
      ))}
    </ul>
  </HomeSection>
);
