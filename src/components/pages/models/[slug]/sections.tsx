import { ArrowLeft, ArrowUpRight, Check, X } from "lucide-react";
import type { ReactNode } from "react";
import { LandingHeading, LandingSection, SectionLabel } from "@/components/site/landing-section";
import { Accordion } from "@/components/ui/accordion";
import { FreeText } from "@/components/ui/free-text";
import { Link, LinkButton } from "@/components/ui/link";
import { getModel, modelsCheckedLabel } from "@/lib/models";
import { tierLabels } from "../content";
import { ProviderChip } from "../provider-logo";
import { DataTable } from "@/components/site/data-table";
import type { ModelPageContent } from "./types";

const body = "mt-4 max-w-2xl text-lg text-muted-foreground";

const Split = ({ label, title, children, aside }: { label: string; title: string; children?: ReactNode; aside: ReactNode }) => (
  <div className="grid items-start gap-10 lg:grid-cols-[2fr_3fr] lg:gap-16">
    <div>
      <SectionLabel>{label}</SectionLabel>
      <LandingHeading className="mt-4">{title}</LandingHeading>
      {children}
    </div>
    {aside}
  </div>
);

const heroTones = ["bg-primary text-primary-foreground", "bg-muted", "bg-tint", "bg-ink text-paper"];
const heroMuted = ["text-primary-foreground/85", "text-muted-foreground", "text-muted-foreground", "text-paper/70"];

export const ModelHero = ({ page, provider }: { page: ModelPageContent; provider: string }) => {
  const model = getModel(page.slug)!;
  const facts = [model.tools && "Tool calling", model.vision && "Vision", model.reasoning && "Reasoning", model.structured && "Structured output", model.openWeights && "Open weights"].filter(Boolean) as string[];
  return (
    <header className="page-container pb-10 pt-10 md:pb-14 md:pt-16">
      <div className="animate-fade-slide-in">
        <a href="/models" className="inline-flex items-center gap-1.5 rounded-sm text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
          <ArrowLeft aria-hidden className="size-4" />
          All AI models
        </a>
        <div className="mt-8 flex items-center gap-4">
          <ProviderChip provider={provider} className="size-16 bg-muted" logoClassName="size-9" />
          <div>
            <a href={`/models?provider=${encodeURIComponent(provider)}#models`} className="font-medium underline-offset-4 hover:underline">{provider}</a>
            <p className="text-sm text-muted-foreground">{tierLabels[model.tier]} model</p>
          </div>
        </div>
        <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-[1.02] tracking-tighter sm:text-6xl md:text-7xl">{page.h1}</h1>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">{page.summary}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <LinkButton href="#calculator" size="lg">Try the cost calculator</LinkButton>
          <LinkButton href="#compare" variant="ghost" size="lg">Compare models →</LinkButton>
        </div>
        {facts.length > 0 && (
          <ul className="mt-8 flex flex-wrap gap-2">
            {facts.map((fact) => <li key={fact} className="rounded-full bg-muted px-4 py-2 text-sm font-medium">{fact}</li>)}
          </ul>
        )}
        <dl className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {page.tiles.map((tile, index) => (
            <div key={tile.label} className={`flex min-h-48 flex-col justify-between gap-8 rounded-3xl p-6 md:p-8 ${heroTones[index % heroTones.length]}`}>
              <dt className={`text-sm font-medium ${heroMuted[index % heroTones.length]}`}>{tile.label}</dt>
              <div>
                <dd className="text-3xl font-semibold leading-tight tracking-tighter md:text-4xl">{tile.value}</dd>
                {tile.sub && <dd className={`mt-1 text-sm ${heroMuted[index % heroTones.length]}`}>{tile.sub}</dd>}
              </div>
            </div>
          ))}
        </dl>
        {page.tileFootnote && <p className="mt-3 text-sm text-muted-foreground">{page.tileFootnote}</p>}
        {page.notice && (
          <p className="mt-6 inline-block max-w-3xl rounded-2xl bg-primary/10 px-5 py-3 text-sm font-medium text-primary">
            {page.notice.text} {page.notice.link && <Link href={page.notice.link.href} className="font-semibold">{page.notice.link.label}</Link>}
          </p>
        )}
      </div>
    </header>
  );
};

export const PricingSection = ({ page, name }: { page: ModelPageContent; name: string }) => (
  <LandingSection>
    <Split
      label="Pricing"
      title={`${name} API pricing`}
      aside={<DataTable caption={`${name} API pricing per 1M tokens in US dollars`} headers={page.pricing.columns} rows={page.pricing.rows} />}
    >
      <p className={body}>{page.pricing.plain}</p>
      {page.pricing.extra && <p className="mt-3 max-w-2xl text-muted-foreground">{page.pricing.extra}</p>}
      {page.pricing.peakNote && <p className="mt-3 max-w-2xl text-sm text-muted-foreground">{page.pricing.peakNote}</p>}
      <p className="mt-4 text-sm text-muted-foreground">{page.pricing.source}</p>
    </Split>
  </LandingSection>
);

export const CalculatorSection = ({ name, intro, children }: { name: string; intro: string; children: ReactNode }) => (
  <LandingSection id="calculator">
    <div className="max-w-2xl">
      <SectionLabel>Calculator</SectionLabel>
      <LandingHeading className="mt-4">{name} cost calculator</LandingHeading>
      <p className="mt-4 text-lg text-muted-foreground">{intro}</p>
    </div>
    <div className="mt-12 md:mt-14">{children}</div>
  </LandingSection>
);

export const AccessSection = ({ page, name }: { page: ModelPageContent; name: string }) => (
  <LandingSection>
    <div className="max-w-2xl">
      <SectionLabel>Availability</SectionLabel>
      <LandingHeading className="mt-4">Where to access {name}</LandingHeading>
      <p className={body}>{page.access.line}</p>
    </div>
    <div className="mt-12 md:mt-14">
      <DataTable caption={`Platforms that offer ${name}`} headers={page.access.columns} rows={page.access.rows} />
    </div>
  </LandingSection>
);

export const FreeSection = ({ page, name }: { page: ModelPageContent; name: string }) => (
  <LandingSection>
    <div className="grid gap-10 rounded-3xl bg-tint p-8 md:p-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
      <div>
        <SectionLabel>Free access</SectionLabel>
        <LandingHeading className="mt-4 text-3xl md:text-4xl">Is {name} free?</LandingHeading>
        <p className="mt-4 text-lg text-muted-foreground">{page.free.answer}</p>
      </div>
      <ul className="space-y-2 self-center">
        {page.free.rows.map((row) => (
          <li key={row} className="flex items-center gap-4 rounded-2xl bg-background p-4 font-medium">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-primary"><Check aria-hidden className="size-5" /></span>
            {row}
          </li>
        ))}
      </ul>
    </div>
  </LandingSection>
);

export const CompareSection = ({ page, name }: { page: ModelPageContent; name: string }) => (
  <LandingSection id="compare">
    <div className="max-w-2xl">
      <SectionLabel>Alternatives</SectionLabel>
      <LandingHeading className="mt-4">{name} vs alternatives</LandingHeading>
      <p className={body}>{page.compare.line}</p>
    </div>
    <div className="mt-12 md:mt-14">
      <DataTable
        caption={`${name} compared with alternatives`}
        headers={["Model", "Input $/1M", "Output $/1M", "Context", "Why pick it"]}
        highlight={page.compare.rows.findIndex((row) => row.current)}
        rows={page.compare.rows.map((row) => [
          row.slug && !row.current ? <a key={row.name} href={`/models/${row.slug}`} className="underline-offset-4 hover:underline">{row.name}</a> : row.name,
          row.input,
          row.output,
          row.context,
          <span key="why" className="font-sans tabular-nums">{row.why}</span>,
        ])}
      />
    </div>
    <Link href="/models" className="mt-6 inline-block font-medium">See all AI models →</Link>
  </LandingSection>
);

export const FitSection = ({ page, name }: { page: ModelPageContent; name: string }) => (
  <LandingSection>
    <SectionLabel>Fit</SectionLabel>
    <LandingHeading className="mt-4">What {name} is good for</LandingHeading>
    <div className="mt-12 grid gap-4 md:mt-14 md:grid-cols-2">
      {([["A good fit for", page.fit.good, Check, "bg-muted"], ["Not the best pick for", page.fit.bad, X, "bg-tint"]] as const).map(([title, items, Icon, tone]) => (
        <div key={title} className={`rounded-3xl p-8 md:p-10 ${tone}`}>
          <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
          <ul className="mt-6 space-y-3">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className={`mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-background ${Icon === Check ? "text-primary" : "text-muted-foreground"}`}>
                  <Icon aria-hidden className="size-4" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="mt-4 flex flex-col justify-between gap-8 rounded-3xl bg-ink p-8 text-paper md:p-12">
      <span className="inline-flex w-fit rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground">Our take</span>
      <p className="max-w-3xl text-balance text-2xl leading-snug tracking-tight md:text-3xl">{page.fit.take}</p>
      <ul className="flex flex-wrap gap-x-6 gap-y-2 font-medium">
        {page.fit.links.map((link) => <li key={link.href}><a href={link.href} className="underline-offset-4 hover:underline">{link.label} →</a></li>)}
      </ul>
    </div>
  </LandingSection>
);

export const VersionsSection = ({ page }: { page: ModelPageContent }) => (
  <LandingSection id="versions">
    <div className="max-w-2xl">
      <SectionLabel>History</SectionLabel>
      <LandingHeading className="mt-4">{page.versions.heading}</LandingHeading>
      <p className={body}>{page.versions.line}</p>
    </div>
    <ol className="mt-12 space-y-2 rounded-3xl bg-muted p-2 md:mt-14">
      {page.versions.rows.map((row, index) => (
        <li key={`${row.name}-${row.released}`} className="grid items-center gap-2 rounded-2xl bg-background p-5 md:grid-cols-[2fr_1fr_2fr] md:gap-6">
          <p className="flex flex-wrap items-center gap-3 font-semibold">
            {row.slug ? <a href={`/models/${row.slug}`} className="underline-offset-4 hover:underline">{row.name}</a> : row.name}
            <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${row.status === "Latest" && index === 0 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>{row.status}</span>
          </p>
          <p className="text-sm tabular-nums text-muted-foreground md:text-base">{row.released}</p>
          <p className="text-sm tabular-nums md:text-right md:text-base">{row.input} in / {row.output} out <span className="text-muted-foreground">per 1M</span></p>
        </li>
      ))}
    </ol>
  </LandingSection>
);

export const ModelFaq = ({ page, name }: { page: ModelPageContent; name: string }) => (
  <LandingSection>
    <div className="grid gap-10 lg:grid-cols-[2fr_3fr] lg:gap-16">
      <div>
        <SectionLabel>Questions</SectionLabel>
        <LandingHeading className="mt-4">{name} FAQ</LandingHeading>
        <p className="mt-4 text-sm text-muted-foreground">Prices checked {modelsCheckedLabel}.</p>
      </div>
      <Accordion items={page.faqs} name="model-faq" />
    </div>
  </LandingSection>
);

const relatedTones = ["bg-ink text-paper", "bg-muted", "bg-tint"];
const relatedMuted = ["text-paper/70", "text-muted-foreground", "text-muted-foreground"];

export const RelatedSection = ({ page }: { page: ModelPageContent }) => (
  <LandingSection>
    <SectionLabel>Keep comparing</SectionLabel>
    <LandingHeading className="mt-4">Compare more models</LandingHeading>
    <ul className="mt-12 grid gap-4 md:mt-14 md:grid-cols-3">
      {page.related.map(({ slug, line }, index) => {
        const related = getModel(slug)!;
        return (
          <li key={slug} className="flex">
            <a href={`/models/${slug}`} className={`group flex min-h-64 w-full flex-col justify-between gap-10 rounded-3xl p-8 transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${relatedTones[index % relatedTones.length]}`}>
              <span className="flex items-start justify-between gap-4">
                <ProviderChip provider={related.provider} />
                <ArrowUpRight aria-hidden className="size-6 opacity-60 transition-opacity group-hover:opacity-100" />
              </span>
              <span>
                <span className="block text-3xl font-semibold leading-tight tracking-tighter">{related.name}</span>
                <span className={`mt-2 block ${relatedMuted[index % relatedTones.length]}`}><FreeText>{line}</FreeText></span>
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  </LandingSection>
);
