import { ArrowUpRight } from "lucide-react";
import { LandingHeading, LandingSection } from "@/components/site/landing-section";
import { related } from "./content";

export const Related = () => (
  <LandingSection>
    <LandingHeading className="max-w-2xl text-3xl md:text-4xl">
      {related.heading}
    </LandingHeading>
    <ul className="mt-10 grid gap-4 md:grid-cols-3">
      {related.tiles.map((tile) => (
        <li key={tile.href}>
          <a
            href={tile.href}
            className="group flex h-full min-h-48 flex-col justify-between gap-8 rounded-3xl bg-muted p-8 no-underline transition-colors hover:bg-foreground/8 hover:no-underline"
          >
            <span className="flex items-start justify-between gap-4">
              <span className="text-2xl font-semibold leading-tight tracking-tighter text-foreground">
                {tile.title}
              </span>
              <ArrowUpRight aria-hidden className="size-6 shrink-0 text-primary" />
            </span>
            <span className="text-muted-foreground">{tile.line}</span>
          </a>
        </li>
      ))}
    </ul>
  </LandingSection>
);
