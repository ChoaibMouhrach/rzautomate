import { ArrowUpRight } from "lucide-react";
import { BookCallButton } from "./book-call-button";
import { button } from "@/components/ui/button";
import { results } from "./content";
import { NumberTicker } from "./number-ticker";
import { HomeSection, MonoLabel, SectionHeading } from "./section";

export const Results = () => (
  <HomeSection id="results">
    <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-2xl">
        <MonoLabel>{results.label}</MonoLabel>
        <SectionHeading className="mt-4">{results.heading}</SectionHeading>
        <p className="mt-4 text-lg text-muted-foreground">{results.body}</p>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <BookCallButton size="lg" />
        <a
          href={results.secondary.href}
          className={button({
            size: "lg",
            className: "bg-muted text-foreground hover:bg-muted hover:opacity-80",
          })}
        >
          {results.secondary.label} →
        </a>
      </div>
    </div>
    <ul className="mt-16 grid gap-4 md:grid-cols-3">
      {results.tiles.map((tile) => (
        <li
          key={tile.number}
          className="flex min-h-80 flex-col justify-between gap-10 rounded-3xl bg-muted p-8 md:p-10"
        >
          <p className="text-6xl font-semibold leading-none tracking-tighter text-primary md:text-7xl">
            <NumberTicker value={tile.number} />
          </p>
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">
              {tile.label}
            </h3>
            <p className="mt-3 text-muted-foreground">{tile.line}</p>
          </div>
        </li>
      ))}
    </ul>
    <a
      href={results.summary.link.href}
      className="group mt-4 grid items-center gap-8 rounded-3xl bg-ink p-8 text-paper md:p-12 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-14"
    >
      <div>
        <p className="text-7xl font-semibold leading-none tracking-tighter md:text-8xl">
          {results.summary.figure}
        </p>
        <p className="mt-3 text-paper/60">{results.summary.figureLabel}</p>
      </div>
      <p className="max-w-xl text-lg text-paper/80">{results.summary.text}</p>
      <span className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 font-medium text-primary-foreground transition-opacity group-hover:opacity-90">
        {results.summary.link.label}
        <ArrowUpRight aria-hidden className="size-5" />
      </span>
    </a>
  </HomeSection>
);
