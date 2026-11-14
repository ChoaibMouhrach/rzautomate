import { ArrowUpRight, Calculator, Gauge, ListOrdered, Scale } from "lucide-react";
import { FreeText } from "@/components/ui/free-text";
import { TextLink } from "@/components/ui/text-link";
import { freeTools } from "./content";
import { LandingSection, LandingHeading } from "@/components/site/landing-section";

const icons = {
  calculator: Calculator,
  "list-ordered": ListOrdered,
  gauge: Gauge,
  scale: Scale,
};

const cardStyles = [
  "bg-ink text-paper",
  "bg-muted",
  "bg-tint",
  "bg-muted",
];

const bodyStyles = [
  "text-paper/70",
  "text-muted-foreground",
  "text-muted-foreground",
  "text-muted-foreground",
];

export const FreeTools = () => (
  <LandingSection id="free-tools">
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <LandingHeading>{freeTools.heading}</LandingHeading>
        <p className="mt-4 text-lg text-muted-foreground">{freeTools.subhead}</p>
      </div>
      <TextLink href={freeTools.footerLink.href} className="shrink-0">
        {freeTools.footerLink.label} →
      </TextLink>
    </div>
    <ul className="mt-14 grid gap-4 lg:grid-cols-3">
      {freeTools.tiles.map((tile, index) => {
        const Icon = icons[tile.icon];
        const isDark = index === 0;
        return (
          <li key={tile.href} className={`flex ${index === 0 ? "lg:row-span-2" : ""} ${index === 3 ? "lg:col-span-2" : ""}`}>
            <a
              href={tile.href}
              className={`group flex min-h-72 w-full flex-col justify-between gap-12 rounded-3xl p-8 transition-colors md:p-10 ${cardStyles[index]}`}
            >
              <div className="flex items-start justify-between gap-4">
                <span
                  className={`flex size-14 items-center justify-center rounded-full ${isDark ? "bg-primary text-primary-foreground" : "bg-background text-primary"}`}
                >
                  <Icon aria-hidden className="size-7" />
                </span>
                <span
                  className={`flex size-10 items-center justify-center rounded-full transition-colors ${isDark ? "bg-white/10 group-hover:bg-primary" : "bg-background group-hover:bg-primary group-hover:text-primary-foreground"}`}
                >
                  <ArrowUpRight aria-hidden className="size-5" />
                </span>
              </div>
              <div>
                <p className={`text-sm font-medium ${isDark ? "text-paper/60 [&_span]:text-[#ff6b5e]" : "text-muted-foreground"}`}>
                  <FreeText>{tile.tag}</FreeText>
                </p>
                <h3 className="mt-2 text-3xl font-semibold leading-tight tracking-tighter">
                  {tile.name}
                </h3>
                <p className={`mt-3 max-w-md text-lg ${bodyStyles[index]}`}>
                  {tile.line}
                </p>
              </div>
            </a>
          </li>
        );
      })}
    </ul>
  </LandingSection>
);
