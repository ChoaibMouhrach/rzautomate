import { ArrowUpRight, Check, X } from "lucide-react";
import type { ReactNode } from "react";
import { LandingHeading, LandingSection } from "@/components/site/landing-section";
import { Accordion } from "@/components/ui/accordion";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { FreeText } from "@/components/ui/free-text";
import { Link, LinkButton } from "@/components/ui/link";
import { getModel, modelsCheckedLabel } from "@/lib/models";
import type { ModelPageContent } from "./types";

const body = "mt-4 max-w-2xl text-lg text-muted-foreground";

export const DataTable = ({ headers, rows, caption, highlight }: { headers: string[]; rows: ReactNode[][]; caption: string; highlight?: number }) => (
  <div className="mt-10 overflow-x-auto rounded-3xl bg-muted px-2">
    <table className="w-full text-left text-sm">
      <caption className="sr-only">{caption}</caption>
      <thead>
        <tr>{headers.map((header) => <th key={header} scope="col" className="whitespace-nowrap px-5 py-4 text-xs font-medium uppercase tracking-wide text-muted-foreground">{header}</th>)}</tr>
      </thead>
      <tbody className="divide-y divide-border/60">
        {rows.map((row, index) => (
          <tr key={index} className={index === highlight ? "bg-primary/10" : undefined}>
            {row.map((cell, cellIndex) => cellIndex === 0
              ? <th key={cellIndex} scope="row" className="whitespace-nowrap px-5 py-4 font-semibold">{cell}</th>
              : <td key={cellIndex} className="px-5 py-4 tabular-nums">{cell}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const ModelHero = ({ page, provider }: { page: ModelPageContent; provider: string }) => (
  <header className="page-container pb-6 pt-12 md:pt-20">
    <div className="animate-fade-slide-in">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "AI Models", href: "/models" }, { label: provider, href: `/models?provider=${encodeURIComponent(provider)}` }, { label: getModel(page.slug)!.name }]} />
      <h1 className="mt-8 max-w-4xl text-balance text-5xl font-semibold leading-[1.02] tracking-tighter sm:text-6xl md:text-7xl">{page.h1}</h1>
      <p className="mt-6 max-w-3xl text-lg text-muted-foreground">{page.summary}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <LinkButton href="#calculator" size="lg">Try the cost calculator</LinkButton>
        <LinkButton href="#compare" variant="ghost" size="lg">Compare models →</LinkButton>
      </div>
      <dl className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
        {page.tiles.map((tile) => (
          <div key={tile.label} className="rounded-3xl bg-muted p-6">
            <dt className="text-sm text-muted-foreground">{tile.label}</dt>
            <dd className="mt-2 text-3xl font-semibold tracking-tighter">{tile.value}</dd>
            {tile.sub && <dd className="mt-1 text-sm text-muted-foreground">{tile.sub}</dd>}
          </div>
        ))}
      </dl>
      {page.tileFootnote && <p className="mt-3 text-sm text-muted-foreground">{page.tileFootnote}</p>}
      {page.notice && (
        <p className="mt-6 rounded-3xl bg-muted px-6 py-4 text-sm">
          {page.notice.text} {page.notice.link && <Link href={page.notice.link.href} className="font-medium">{page.notice.link.label}</Link>}
        </p>
      )}
    </div>
  </header>
);

export const PricingSection = ({ page, name }: { page: ModelPageContent; name: string }) => (
  <LandingSection>
    <LandingHeading>{name} API pricing</LandingHeading>
    <DataTable caption={`${name} API pricing per 1M tokens in US dollars`} headers={page.pricing.columns} rows={page.pricing.rows} />
    {page.pricing.peakNote && <p className="mt-4 text-sm text-muted-foreground">{page.pricing.peakNote}</p>}
    <p className={body}>{page.pricing.plain}</p>
    {page.pricing.extra && <p className="mt-2 max-w-2xl text-muted-foreground">{page.pricing.extra}</p>}
    <p className="mt-4 text-sm text-muted-foreground">{page.pricing.source}</p>
  </LandingSection>
);

export const CalculatorSection = ({ name, intro, children }: { name: string; intro: string; children: ReactNode }) => (
  <LandingSection id="calculator">
    <LandingHeading>{name} cost calculator</LandingHeading>
    <p className={body}>{intro}</p>
    {children}
  </LandingSection>
);

export const AccessSection = ({ page, name }: { page: ModelPageContent; name: string }) => (
  <LandingSection>
    <LandingHeading>Where to access {name}</LandingHeading>
    <DataTable caption={`Platforms that offer ${name}`} headers={page.access.columns} rows={page.access.rows} />
    <p className={body}>{page.access.line}</p>
  </LandingSection>
);

export const FreeSection = ({ page, name }: { page: ModelPageContent; name: string }) => (
  <LandingSection>
    <div className="grid gap-8 rounded-3xl bg-muted p-8 md:p-12 lg:grid-cols-2 lg:gap-16">
      <div>
        <LandingHeading className="text-3xl md:text-4xl">Is {name} free?</LandingHeading>
        <p className="mt-4 text-lg text-muted-foreground">{page.free.answer}</p>
      </div>
      <ul className="space-y-4 self-center">
        {page.free.rows.map((row) => (
          <li key={row} className="flex items-start gap-3 font-medium">
            <Check aria-hidden className="mt-0.5 size-5 shrink-0 text-primary" />
            {row}
          </li>
        ))}
      </ul>
    </div>
  </LandingSection>
);

export const CompareSection = ({ page, name }: { page: ModelPageContent; name: string }) => (
  <LandingSection id="compare">
    <LandingHeading>{name} vs alternatives</LandingHeading>
    <DataTable
      caption={`${name} compared with alternatives`}
      headers={["Model", "Input $/1M", "Output $/1M", "Context", "Why pick it"]}
      highlight={page.compare.rows.findIndex((row) => row.current)}
      rows={page.compare.rows.map((row) => [
        row.slug && !row.current ? <a key={row.name} href={`/models/${row.slug}`} className="underline-offset-4 hover:underline">{row.name}</a> : row.name,
        row.input,
        row.output,
        row.context,
        <span key="why" className="whitespace-nowrap font-sans">{row.why}</span>,
      ])}
    />
    <p className={body}>{page.compare.line}</p>
    <Link href="/models" className="mt-4 inline-block font-medium">See all AI models →</Link>
  </LandingSection>
);

export const FitSection = ({ page, name }: { page: ModelPageContent; name: string }) => (
  <LandingSection className="bg-muted">
    <LandingHeading>What {name} is good for</LandingHeading>
    <div className="mt-12 grid gap-10 md:grid-cols-2">
      {([["A good fit for", page.fit.good, Check], ["Not the best pick for", page.fit.bad, X]] as const).map(([title, items, Icon]) => (
        <div key={title}>
          <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
          <ul className="mt-4 space-y-3">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Icon aria-hidden className={`mt-0.5 size-5 shrink-0 ${Icon === Check ? "text-primary" : "text-muted-foreground"}`} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <p className="mt-10 max-w-2xl text-lg">{page.fit.take}</p>
    <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-medium">
      {page.fit.links.map((link) => <Link key={link.href} href={link.href}>{link.label} →</Link>)}
    </p>
  </LandingSection>
);

export const VersionsSection = ({ page }: { page: ModelPageContent }) => (
  <LandingSection id="versions">
    <LandingHeading>{page.versions.heading}</LandingHeading>
    <ol className="mt-10 max-w-2xl space-y-6 border-l-2 border-muted pl-6">
      {page.versions.rows.map((row, index) => (
        <li key={`${row.name}-${row.released}`} className="relative">
          <span aria-hidden className={`absolute -left-[31px] top-1.5 size-2.5 rounded-full ${row.status === "Latest" && index === 0 ? "bg-primary" : "bg-muted-foreground/40"}`} />
          <p className="font-semibold">
            {row.slug ? <a href={`/models/${row.slug}`} className="underline-offset-4 hover:underline">{row.name}</a> : row.name}
            <span className="ml-2 text-sm font-normal text-muted-foreground">{row.status}</span>
          </p>
          <p className="mt-1 text-sm tabular-nums text-muted-foreground">{row.released} · {row.input} in / {row.output} out per 1M</p>
        </li>
      ))}
    </ol>
    <p className={body}>{page.versions.line}</p>
  </LandingSection>
);

export const ModelFaq = ({ page, name }: { page: ModelPageContent; name: string }) => (
  <LandingSection>
    <div className="grid gap-10 lg:grid-cols-[2fr_3fr] lg:gap-16">
      <div>
        <LandingHeading>{name} FAQ</LandingHeading>
        <p className="mt-4 text-sm text-muted-foreground">Prices checked {modelsCheckedLabel}.</p>
      </div>
      <Accordion items={page.faqs} name="model-faq" />
    </div>
  </LandingSection>
);

export const RelatedSection = ({ page }: { page: ModelPageContent }) => (
  <LandingSection>
    <LandingHeading>Compare more models</LandingHeading>
    <ul className="mt-12 grid gap-4 md:grid-cols-3">
      {page.related.map(({ slug, line }) => (
        <li key={slug}>
          <a href={`/models/${slug}`} className="group flex h-full min-h-44 flex-col justify-between rounded-3xl bg-muted p-6 transition-colors hover:bg-muted/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:p-8">
            <ArrowUpRight aria-hidden className="size-5 self-end opacity-60 transition-opacity group-hover:opacity-100" />
            <span>
              <span className="block text-2xl font-semibold tracking-tight">{getModel(slug)!.name}</span>
              <span className="mt-2 block text-sm text-muted-foreground"><FreeText>{line}</FreeText></span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  </LandingSection>
);
