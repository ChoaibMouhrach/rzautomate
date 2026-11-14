import { DirectoryCta, DirectoryHero, DirectorySection, DirectoryTableShell, Facts, PickCard, PickGrid, Steps, tableHeadClass } from "@/components/site/directory";
import { JsonLd } from "@/components/site/json-ld";
import { PageContent } from "@/components/site/page";
import { Accordion } from "@/components/ui/accordion";
import { FreeText } from "@/components/ui/free-text";
import { Link, LinkButton } from "@/components/ui/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import { formatPrice, formatTokens, models, modelsCheckedAt, modelsCheckedLabel } from "@/lib/models";
import { site } from "@/lib/site";
import { auditHref, bookHref, cheapest, cheapestOpen, cheapestTools, faqs, largest, priceTieNote, providerCount, selectionSteps, workflowEstimates, workflows } from "./content";
import { modelsJsonLd } from "./models-json-ld";
import { ModelsTable } from "./models-table";

export const ModelsDirectory = () => {
  const picks = [
    { title: "Cheapest output price", model: cheapest, value: formatPrice(cheapest.outputPrice), body: `${cheapest.name} per 1M output tokens.${priceTieNote(cheapest)}` },
    { title: "Largest context window", model: largest, value: `${formatTokens(largest.context)} tokens`, body: `${largest.name} reads this much in one request, subject to the provider's input and output limits.` },
    { title: "Cheapest with tool calling", model: cheapestTools, value: formatPrice(cheapestTools.outputPrice), body: `${cheapestTools.name} per 1M output tokens.${priceTieNote(cheapestTools, true)} Tool calling is what lets an agent update a CRM or send an email.` },
    { title: "Cheapest open-weights model", model: cheapestOpen, value: cheapestOpen ? formatPrice(cheapestOpen.outputPrice) : "None yet", body: cheapestOpen ? `${cheapestOpen.name} per 1M output tokens through ${cheapestOpen.provider}.` : "No open-weights models are in this starting catalog yet." },
  ];

  return (
    <>
      <JsonLd data={modelsJsonLd()} />
      <DirectoryHero
        eyebrow="AI model directory"
        title="Compare AI models by API price, context window and features"
        description="Compare four selected models in one table, priced per 1 million tokens. Use the list to shortlist models for your next workflow, with a source for every specification."
        stats={[`${models.length} models`, `${providerCount} providers`, <>Prices checked <time dateTime={modelsCheckedAt}>{modelsCheckedLabel}</time></>]}
        updated={<>Last updated {modelsCheckedLabel}</>}
        actions={<><LinkButton href="#model-table" size="lg">Jump to the table</LinkButton><Link href={bookHref}><FreeText>Not sure which model fits your workflow? Book a free 30-min call</FreeText></Link></>}
      />
      <PageContent>
        <DirectorySection id="model-table" title="AI model pricing comparison" intro="Prices are per 1 million tokens in US dollars. Click a column heading to sort, or a row to see the model's full specs.">
          <ModelsTable />
          <p className="text-sm text-muted-foreground">These are standard API rates from the catalog snapshot; service tiers, long-context requests, caching rules and batch discounts can change the bill. Check the provider before you commit a budget. Spot a wrong number? Email <Link href={`mailto:${site.email}`}>{site.email}</Link> and I&apos;ll fix it.</p>
          <p className="text-muted-foreground">Comparing automation platforms too? See <Link href="/automation-tools">workflow automation tools</Link>.</p>
          <details className="rounded-3xl bg-muted p-6"><summary className="cursor-pointer text-sm font-medium">Pricing notes and model sources</summary><ul className="mt-4 space-y-3 text-sm text-muted-foreground">{models.map((model) => <li key={model.slug}><Link href={model.source}>{model.name}</Link>: {model.pricingNote}</li>)}</ul></details>
        </DirectorySection>
        <DirectorySection title="Quick picks" intro="Generated from the full catalog, so these picks update with the data. Ties are resolved alphabetically.">
          <PickGrid>{picks.map((pick) => <PickCard key={pick.title} title={pick.title} value={pick.value} body={pick.body} href={pick.model ? `/models/${pick.model.slug}` : undefined} linkLabel={pick.model ? `See ${pick.model.name}` : undefined} />)}</PickGrid>
        </DirectorySection>
        <DirectorySection title="What these prices mean for an actual workflow" intro="Per-token prices are hard to picture. Here is the same math for common automation jobs, comparing the lowest and highest total model bill among models with tool calling. These are illustrative assumptions, not measured client workloads.">
          <DirectoryTableShell>
            <ScrollArea orientation="horizontal" contentClassName="pb-3">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">Illustrative workflow costs, excluding caching, retries, hosting and other tool charges.</caption>
                <thead><tr>{["Job", "Assumption per item", "Cheapest model", "Priciest model"].map((label) => <th key={label} scope="col" className={tableHeadClass}>{label}</th>)}</tr></thead>
                <tbody className="divide-y divide-border/60">{workflows.map((job) => {
                  const estimates = workflowEstimates(job);
                  const low = estimates[0];
                  const high = estimates[estimates.length - 1];
                  return <tr key={job.href}><th scope="row" className="min-w-60 px-5 py-5 text-base font-semibold">{job.name}<Link href={job.href} className="mt-2 block text-xs font-normal text-muted-foreground">{job.service}</Link></th><td className="min-w-52 px-5 py-5 text-muted-foreground">{formatTokens(job.input)} input + {formatTokens(job.output)} output tokens</td><td className="px-5 py-5 text-base font-semibold tabular-nums">{formatPrice(low.cost)}<span className="mt-1 block text-xs font-normal text-muted-foreground">{low.model.name}</span></td><td className="px-5 py-5 text-base font-semibold tabular-nums">{formatPrice(high.cost)}<span className="mt-1 block text-xs font-normal text-muted-foreground">{high.model.name}</span></td></tr>;
                })}</tbody>
              </table>
            </ScrollArea>
          </DirectoryTableShell>
          <p className="text-sm text-muted-foreground">Cost = items × (input tokens × input rate + output tokens × output rate) ÷ 1,000,000. Estimates exclude caching, retries, reasoning-token overhead, hosting, taxes and external tools.</p>
          <p className="max-w-3xl text-muted-foreground">The model bill is rarely the expensive part. Getting the agent to answer correctly, hand off to a person when it should, and write to the right place in your tools is where the work is.</p>
        </DirectorySection>
        <DirectorySection title="How to choose an AI model for business automation" intro="The cheapest model that does the job reliably wins. This is the order I check things in.">
          <Steps steps={selectionSteps} />
          <p>Want me to run this test on your own data? <Link href={bookHref}><FreeText>Book a free 30-min call</FreeText></Link></p>
        </DirectorySection>
        <DirectorySection title="How this table is maintained">
          <Facts facts={[
            ["Sources", <>A snapshot of the open-source <Link href="https://models.dev">Models.dev database</Link>. Each model has a source link above. Claude Fable 5.1 pricing and specifications were checked against Anthropic&apos;s documentation. Other entries use Models.dev; OpenRouter rates have not been checked.</>],
            ["Updates", <>Manually reviewed when the catalog changes, with no fixed update schedule. Last updated <time dateTime={modelsCheckedAt}>{modelsCheckedLabel}</time>.</>],
            ["What's included", "GPT-6.1 Sol, Claude Opus 5.5 and Claude Sonnet 5.5, using their direct-provider listings. Reseller copies and minor variants are left out."],
            ["What's not included yet", "Benchmark scores and speed. This is a starting catalog, not a ranking of every model on the market."],
          ]} />
        </DirectorySection>
        <DirectorySection title="AI model pricing FAQ">
          <Accordion items={faqs} />
        </DirectorySection>
        <DirectoryCta
          title="Picking a model is the easy part"
          body="Getting it to do real work in your tools is where most projects stall. RZ Automate builds AI agents and n8n workflows that take repetitive work off small and mid-sized businesses. On a free 30-minute call, I'll look at one task you want off your plate and tell you which model I'd use, what it could cost per month at your volume, and whether it's worth automating at all."
          primary={<LinkButton href={bookHref}>Book a free 30-min call</LinkButton>}
          secondary={<LinkButton href={auditHref} variant="secondary"><FreeText>Get a free workflow audit</FreeText></LinkButton>}
        />
      </PageContent>
    </>
  );
};
