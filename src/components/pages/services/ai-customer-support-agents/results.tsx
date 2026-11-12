import { ArrowUpRight } from "lucide-react";
import { LandingHeading, LandingSection, SectionLabel } from "@/components/site/landing-section";
import { button } from "@/components/ui/button";
import { LinkButton } from "@/components/ui/link";
import { NumberTicker } from "@/components/ui/number-ticker";
import { bookHref, bookingLabel, results } from "./content";

export const Results = () => (
  <LandingSection id="results">
    <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-2xl">
        <SectionLabel>{results.label}</SectionLabel>
        <LandingHeading className="mt-4">{results.heading}</LandingHeading>
        <p className="mt-4 text-lg text-muted-foreground">{results.body}</p>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <LinkButton href={bookHref} size="lg">
          {bookingLabel}
        </LinkButton>
        <a
          href={results.secondary.href}
          className={button({ size: "lg", variant: "secondary" })}
        >
          {results.secondary.label}
        </a>
      </div>
    </div>
    <ul className="mt-16 grid gap-4 md:grid-cols-3">
      {results.tiles.map((tile) => (
        <li
          key={tile.label}
          className="flex min-h-72 flex-col justify-between gap-10 rounded-3xl bg-muted p-8 md:p-10"
        >
          <p className="text-6xl font-semibold leading-none tracking-tighter text-primary md:text-7xl">
            <NumberTicker value={tile.number} />
          </p>
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">{tile.label}</h3>
            <p className="mt-3 text-muted-foreground">{tile.line}</p>
          </div>
        </li>
      ))}
    </ul>
    <a
      href={results.summary.link.href}
      className="group mt-4 grid items-center gap-8 rounded-3xl bg-ink p-8 text-paper md:p-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-14"
    >
      <p className="max-w-3xl text-lg text-paper/80 md:text-xl">{results.summary.text}</p>
      <span className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 font-medium text-primary-foreground transition-opacity group-hover:opacity-90">
        {results.summary.link.label}
        <ArrowUpRight aria-hidden className="size-5" />
      </span>
    </a>
  </LandingSection>
);
