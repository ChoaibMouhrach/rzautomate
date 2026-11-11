import { TextLink } from "./button";
import { BookCallButton } from "./book-call-button";
import { results } from "./content";
import { NumberTicker } from "./number-ticker";
import { HomeSection, MonoLabel, SectionHeading } from "./section";

export const Results = () => (
  <HomeSection id="results">
    <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
      <div>
        <MonoLabel>{results.label}</MonoLabel>
        <SectionHeading className="mt-4">{results.heading}</SectionHeading>
        <p className="mt-4 text-lg text-muted-foreground">{results.body}</p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <BookCallButton size="lg" />
          <TextLink href={results.secondary.href}>
            {results.secondary.label} →
          </TextLink>
        </div>
      </div>
      <ul className="grid auto-rows-fr gap-4 sm:grid-cols-2">
        {results.tiles.map((tile) => (
          <li key={tile.number} className="flex flex-col rounded-2xl bg-muted p-6">
            <span className="text-5xl font-semibold tracking-tighter text-primary">
              <NumberTicker value={tile.number} />
            </span>
            <h3 className="mt-2 font-medium">{tile.label}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{tile.line}</p>
          </li>
        ))}
        <li className="flex flex-col justify-between gap-6 rounded-2xl bg-tint p-6">
          <p className="text-muted-foreground">{results.summary.text}</p>
          <TextLink href={results.summary.link.href} className="text-primary">
            {results.summary.link.label} →
          </TextLink>
        </li>
      </ul>
    </div>
  </HomeSection>
);
