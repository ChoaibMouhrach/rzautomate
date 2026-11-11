import { Calculator, Gauge, ListOrdered, Scale } from "lucide-react";
import { FreeText } from "@/components/ui/free-text";
import { TextLink } from "./button";
import { freeTools } from "./content";
import { HomeSection, SectionHeading } from "./section";

const icons = {
  calculator: Calculator,
  "list-ordered": ListOrdered,
  gauge: Gauge,
  scale: Scale,
};

export const FreeTools = () => (
  <HomeSection id="free-tools">
    <SectionHeading className="max-w-2xl">{freeTools.heading}</SectionHeading>
    <p className="mt-4 text-lg text-muted-foreground">{freeTools.subhead}</p>
    <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {freeTools.tiles.map((tile) => {
        const Icon = icons[tile.icon];
        return (
          <li key={tile.href} className="flex">
            <a
              href={tile.href}
              className="flex w-full flex-col rounded-2xl bg-muted p-6 transition-colors hover:bg-tint focus-visible:bg-tint"
            >
              <Icon aria-hidden className="size-6 text-primary" />
              <h3 className="mt-6 text-lg font-medium tracking-tight">
                {tile.name}
              </h3>
              <p className="mt-1 flex-1 text-muted-foreground">{tile.line}</p>
              <span className="mt-6 text-sm text-muted-foreground">
                <FreeText>{tile.tag}</FreeText>
              </span>
            </a>
          </li>
        );
      })}
    </ul>
    <p className="mt-8">
      <TextLink href={freeTools.footerLink.href}>
        {freeTools.footerLink.label} →
      </TextLink>
    </p>
  </HomeSection>
);
