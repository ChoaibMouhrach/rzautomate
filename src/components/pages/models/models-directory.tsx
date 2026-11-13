import { FreeText } from "@/components/ui/free-text";
import { Accordion } from "@/components/ui/accordion";
import { ModelsScrollArea } from "./models-scroll-area";
import { PageContent, PageDescription, PageHeader, PageTitle } from "@/components/site/page";
import { JsonLd } from "@/components/site/json-ld";
import { site } from "@/lib/site";
import { Link, LinkButton } from "@/components/ui/link";
import { formatPrice, formatTokens, models, modelsCheckedAt, modelsCheckedLabel } from "@/lib/models";
import { auditHref, bookHref, cheapest, cheapestOpen, cheapestTools, faqs, largest, providerCount, priceTieNote, selectionSteps, workflowEstimates, workflows } from "./content";
import { modelsJsonLd } from "./models-json-ld";
import { ModelsTable } from "./models-table";

const sectionClass = "mt-20 space-y-6";
const headingClass = "text-2xl font-semibold tracking-tight sm:text-3xl";

export const ModelsDirectory = () => {
  const picks = [
    { title: "Cheapest output price", model: cheapest, body: `${cheapest.name} at ${formatPrice(cheapest.outputPrice)} per 1M output tokens.${priceTieNote(cheapest)}` },
    { title: "Largest context window", model: largest, body: `${largest.name} reads up to ${formatTokens(largest.context)} tokens in one request, subject to the provider's input and output limits.` },
    { title: "Cheapest with tool calling", model: cheapestTools, body: `${cheapestTools.name} at ${formatPrice(cheapestTools.outputPrice)} per 1M output tokens.${priceTieNote(cheapestTools, true)} Tool calling is what lets an agent update a CRM or send an email.` },
    { title: "Cheapest open-weights model", model: cheapestOpen, body: cheapestOpen ? `${cheapestOpen.name} at ${formatPrice(cheapestOpen.outputPrice)} per 1M output tokens through ${cheapestOpen.provider}.` : "No open-weights models are included in this starting catalog yet." },
  ];

  return (
    <>
      <JsonLd data={modelsJsonLd()} />
      <PageHeader>
        <p className="mb-4 text-sm font-medium text-muted-foreground">AI model directory</p>
        <PageTitle>Compare AI models by API price, context window and features</PageTitle>
        <PageDescription>Compare four selected models in one table, priced per 1 million tokens. Use the list to shortlist models for your next workflow, with a source for every specification.</PageDescription>
        <ul className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground"><li>{models.length} models</li><li>{providerCount} providers</li><li>Prices checked <time dateTime={modelsCheckedAt}>{modelsCheckedLabel}</time></li></ul>
        <p className="mt-3 text-xs text-muted-foreground">Last updated {modelsCheckedLabel}</p>
        <div className="mt-8 flex flex-col items-center gap-4"><LinkButton href="#model-table">Jump to the table</LinkButton><Link href={bookHref}><FreeText>Not sure which model fits your workflow? Book a free 30-min call</FreeText></Link></div>
      </PageHeader>
      <PageContent>
        <section id="model-table" className="scroll-mt-24 space-y-6" aria-labelledby="pricing-title">
          <h2 id="pricing-title" className={headingClass}>AI model pricing comparison</h2>
          <p className="text-muted-foreground">Prices are per 1 million tokens in US dollars. Click any column heading to sort, or any row to see the model&apos;s full specs.</p>
          <ModelsTable />
          <p className="text-sm text-muted-foreground">These are standard API rates from the catalog snapshot; service tiers, long-context requests, caching rules and batch discounts can change the bill. Check the provider before you commit a budget. Spot a wrong number? Email <Link href={`mailto:${site.email}`}>{site.email}</Link> and I&apos;ll fix it.</p>
          <details className="rounded-3xl bg-muted p-6"><summary className="cursor-pointer text-sm font-medium">Pricing notes and model sources</summary><ul className="mt-4 space-y-3 text-sm text-muted-foreground">{models.map((model) => <li key={model.slug}><Link href={model.source}>{model.name}</Link>: {model.pricingNote}</li>)}</ul></details>
        </section>
        <section className={sectionClass}>
          <h2 className={headingClass}>Quick picks</h2>
          <p className="text-muted-foreground">Generated from the full catalog, so these picks update with the data. Ties are resolved alphabetically.</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{picks.map((pick) => <article key={pick.title} className="flex flex-col gap-4 rounded-3xl bg-muted p-8"><h3 className="font-semibold">{pick.title}</h3><p className="flex-1 text-sm text-muted-foreground">{pick.body}</p>{pick.model && <Link href={`/models/${pick.model.slug}`} className="text-sm">See {pick.model.name}</Link>}</article>)}</div>
        </section>
        <section className={sectionClass}>
          <h2 className={headingClass}>What these prices mean for an actual workflow</h2>
          <p className="max-w-3xl text-muted-foreground">Per-token prices are hard to picture. Here is the same math for common automation jobs, comparing the lowest and highest total model bill among models with tool calling. These are illustrative assumptions, not measured client workloads.</p>
          <ModelsScrollArea label="Illustrative workflow costs"><table className="w-full text-left text-sm"><caption className="sr-only">Illustrative workflow costs, excluding caching, retries, hosting and other tool charges.</caption><thead className="border-b border-border bg-muted/50"><tr>{["Job", "Assumption per item", "Cheapest model", "Priciest model"].map((label) => <th key={label} scope="col" className="px-5 py-4 font-medium">{label}</th>)}</tr></thead><tbody className="divide-y divide-border">{workflows.map((job) => {
            const estimates = workflowEstimates(job);
            const low = estimates[0];
            const high = estimates[estimates.length - 1];
            return <tr key={job.href}><th scope="row" className="min-w-60 px-5 py-5 font-medium">{job.name}<Link href={job.href} className="mt-2 block text-xs font-normal text-muted-foreground">{job.service}</Link></th><td className="min-w-52 px-5 py-5">{formatTokens(job.input)} input + {formatTokens(job.output)} output tokens</td><td className="px-5 py-5">{formatPrice(low.cost)}<span className="mt-1 block text-xs text-muted-foreground">{low.model.name}</span></td><td className="px-5 py-5">{formatPrice(high.cost)}<span className="mt-1 block text-xs text-muted-foreground">{high.model.name}</span></td></tr>;
          })}</tbody></table></ModelsScrollArea>
          <p className="text-sm text-muted-foreground">Cost = items × (input tokens × input rate + output tokens × output rate) ÷ 1,000,000. Estimates exclude caching, retries, reasoning-token overhead, hosting, taxes and external tools.</p>
          <p className="max-w-3xl text-muted-foreground">The model bill is rarely the expensive part. Getting the agent to answer correctly, hand off to a person when it should, and write to the right place in your tools is where the work is.</p>
        </section>
        <section className={sectionClass}>
          <h2 className={headingClass}>How to choose an AI model for business automation</h2>
          <p className="text-muted-foreground">The cheapest model that does the job reliably wins. Here&apos;s the order I check things in:</p>
          <ol className="max-w-3xl list-decimal space-y-5 pl-5">{selectionSteps.map(([title, body]) => <li key={title} className="pl-2"><h3 className="font-semibold">{title}</h3><p className="mt-1 text-muted-foreground">{body}</p></li>)}</ol>
          <p>Want me to run this test on your own data? <Link href={bookHref}><FreeText>Book a free 30-min call</FreeText></Link></p>
        </section>
        <section className={sectionClass}>
          <h2 className={headingClass}>How this table is maintained</h2>
          <ul className="max-w-3xl space-y-4 text-muted-foreground">
            <li><strong className="text-foreground">Sources:</strong> A snapshot of the open-source <Link href="https://models.dev">Models.dev database</Link>. Each model has a source link above. Claude Fable 5.1 pricing and specifications were checked against Anthropic’s documentation. Other entries use Models.dev; OpenRouter rates have not been checked.</li>
            <li><strong className="text-foreground">Updates:</strong> Manually reviewed when the catalog changes, with no fixed update schedule. Last updated <time dateTime={modelsCheckedAt}>{modelsCheckedLabel}</time>.</li>
            <li><strong className="text-foreground">What&apos;s included:</strong> GPT-6.1 Sol, Claude Opus 5.5 and Claude Sonnet 5.5, using their direct-provider listings. Reseller copies and minor variants are left out.</li>
            <li><strong className="text-foreground">What&apos;s not included yet:</strong> Benchmark scores and speed. This is a starting catalog, not a ranking of every model on the market.</li>
          </ul>
        </section>
        <section className={sectionClass}>
          <h2 className={headingClass}>AI model pricing FAQ</h2>
          <Accordion items={faqs} />
        </section>
        <section className="mt-20 rounded-[2rem] bg-muted p-8 text-center sm:p-12">
          <h2 className={headingClass}>Picking a model is the easy part</h2>
          <p className="mx-auto mt-5 max-w-3xl text-muted-foreground">Getting it to do real work in your tools is where most projects stall. RZ Automate builds AI agents and n8n workflows that take repetitive work off small and mid-sized businesses. On a free 30-minute call, I&apos;ll look at one task you want off your plate and tell you which model I&apos;d use, what it could cost per month at your volume, and whether it&apos;s worth automating at all.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3"><LinkButton href={bookHref}>Book a free 30-min call</LinkButton><LinkButton href={auditHref} variant="secondary"><FreeText>Get a free workflow audit</FreeText></LinkButton></div>
        </section>
      </PageContent>
    </>
  );
};
