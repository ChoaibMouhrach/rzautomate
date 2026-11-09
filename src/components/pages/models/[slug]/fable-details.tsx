import { FreeText } from "@/components/ui/free-text";
import type { ReactNode } from "react";
import { PageContent, PageHeader, PageTitle, PageDescription } from "@/components/site/page";
import { Accordion } from "@/components/ui/accordion";
import { CtaCard, CtaCardAction, CtaCardContent, CtaCardDescription, CtaCardTitle } from "@/components/ui/cta-card";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { JsonLd } from "@/components/site/json-ld";
import { Link } from "@/components/ui/link";
import { absoluteUrl } from "@/lib/site";
import { models, formatPrice, formatTokens, modelsCheckedAt, modelsCheckedLabel } from "@/lib/models";
import { FableCalculator, CopyModelId } from "./fable-calculator";
import { pricing, specs, platforms, faqs, freeAnswer } from "./fable-content";

const path = "/models/claude-fable-5-1";
const pricingSource = "https://platform.claude.com/docs/en/about-claude/pricing";
const breadcrumbs = [{ label: "Home", href: "/" }, { label: "AI Models", href: "/models" }, { label: "Anthropic", href: "/models?provider=Anthropic" }, { label: "Claude Fable 5.1" }];

const Section = ({ title, children }: { title: string; children: ReactNode }) => <section className="space-y-6 border-t border-border pt-10"><h2 className="text-2xl font-semibold tracking-tight">{title}</h2>{children}</section>;
const DataTable = ({ headers, rows }: { headers: string[]; rows: ReactNode[][] }) => <div className="overflow-x-auto rounded-xl border border-border"><table className="w-full text-left text-sm"><thead className="bg-muted/50"><tr>{headers.map((header) => <th key={header} scope="col" className="whitespace-nowrap px-4 py-4 font-medium">{header}</th>)}</tr></thead><tbody className="divide-y divide-border">{rows.map((row, index) => <tr key={index}>{row.map((cell, i) => i === 0 ? <th key={i} scope="row" className="px-4 py-4 font-medium">{cell}</th> : <td key={i} className="px-4 py-4 tabular-nums">{cell}</td>)}</tr>)}</tbody></table></div>;

export const FableDetails = () => {
  const newer = models.filter((model) => model.name.startsWith("Claude Fable ") && model.released > "2026-09-01").sort((a, b) => b.released.localeCompare(a.released))[0];
  return <>
    <JsonLd data={{ "@context": "https://schema.org", "@graph": [
      { "@type": "BreadcrumbList", itemListElement: breadcrumbs.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.label, item: absoluteUrl(item.href ?? path) })) },
      { "@type": "WebPage", "@id": absoluteUrl(path), name: "Claude Fable 5.1 API pricing and specs", dateModified: modelsCheckedAt },
      { "@type": "FAQPage", mainEntity: faqs.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
    ] }} />
    <PageHeader><div className="mb-8 flex justify-center"><Breadcrumbs items={breadcrumbs} /></div><PageTitle>Claude Fable 5.1 API pricing and specs</PageTitle><PageDescription>Anthropic · Last checked {modelsCheckedLabel} · Source: <Link href={pricingSource}>Anthropic pricing page</Link></PageDescription></PageHeader>
    <PageContent><div className="space-y-12">
      {newer && <aside className="rounded-xl border border-border p-4">A newer Fable model is available: <Link href={`/models/${newer.slug}`}>{newer.name}</Link>.</aside>}
      <div className="space-y-6"><p className="text-lg leading-relaxed">Claude Fable 5.1 is Anthropic’s top-tier model, released on September 1, 2026. It costs $10 per 1M input tokens and $50 per 1M output tokens, with a 1,000,000-token context window and up to 128,000 output tokens. It accepts text, images and PDFs, supports tool calling, and always uses adaptive thinking.</p><dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">{[["Input", "$10 / 1M"], ["Output", "$50 / 1M"], ["Context", "1M tokens"], ["Max output", "128K tokens"]].map(([label, value]) => <div key={label} className="rounded-xl border border-border p-5"><dt className="text-sm text-muted-foreground">{label}</dt><dd className="mt-2 text-xl font-semibold">{value}</dd></div>)}</dl></div>
      <Section title="Claude Fable 5.1 API pricing"><DataTable headers={["Price type", "Per 1M tokens"]} rows={pricing} /><p>Output costs 5× input, so long answers drive the bill. Cache reads cost 2.5% of the normal input price. Reusing a cached system prompt or document can substantially reduce input costs after the initial cache write.</p><p className="text-sm text-muted-foreground">Source: <Link href={pricingSource}>Anthropic pricing page</Link>, checked {modelsCheckedLabel}. Cloud endpoint pricing and additional fees may vary.</p></Section>
      <Section title="Claude Fable 5.1 cost calculator"><p>Enter your volume and see what Fable 5.1 would cost per request, per month and per year.</p><FableCalculator /></Section>
      <Section title="Claude Fable 5.1 context window and specs"><DataTable headers={["Spec", "Claude Fable 5.1"]} rows={[...specs, ["API model ID", <CopyModelId key="api" value="claude-fable-5-1" />], ["Amazon Bedrock ID", <CopyModelId key="bedrock" value="anthropic.claude-fable-5-1" />]]} /><p>Claude Mythos 5.1 shares Fable 5.1’s specifications and pricing, with access restricted to organizations verified through Anthropic’s verification programs.</p><p className="text-sm"><Link href="https://platform.claude.com/docs/en/models/fable-5-1/overview">Anthropic model documentation</Link></p></Section>
      <Section title="Where to access Claude Fable 5.1"><DataTable headers={["Platform", "Model ID", "Base input $/1M", "Base output $/1M"]} rows={platforms.map(([platform, id]) => [platform, <CopyModelId key={platform} value={id} />, "$10.00", "$50.00"])} /><p>Pick a platform where your company already has billing and data agreements. Confirm regional availability and endpoint charges before deploying.</p></Section>
      <Section title="Is Claude Fable 5.1 free?"><p>{freeAnswer}</p><Link href="https://claude.com/pricing">Claude app plans and current limits</Link></Section>
      <Section title="Claude Fable 5.1 vs alternatives"><DataTable headers={["Model", "Input $/1M", "Output $/1M", "Context", "Max output", "Released"]} rows={models.map((model) => [<Link key={model.slug} href={`/models/${model.slug}`}>{model.name}</Link>, formatPrice(model.inputPrice), formatPrice(model.outputPrice), formatTokens(model.context), formatTokens(model.output), model.released])} /><p>Opus 5.5 costs 60% less than Fable 5.1 on both input and output, and shipped three weeks later. Check both on your own task before paying Fable prices.</p><Link href="/models">Compare all models →</Link></Section>
      <Section title="What Claude Fable 5.1 is good for"><p>Fable 5.1 is built for long, hard jobs: agents that run for hours, large codebases, and research across hundreds of documents in one 1M-token context. For the automations most small businesses need, like answering support emails, reading invoices or scoring leads, it’s more model than the job needs and costs several times more per task.</p></Section>
      <Section title="Claude Fable versions"><DataTable headers={["Version", "Released", "Input $/1M", "Output $/1M", "Status"]} rows={[["Claude Fable 5.1", "Sep 1, 2026", "$10.00", "$50.00", newer ? "Previous" : "Latest"], ["Claude Fable 5", "Jun 9, 2026", "$10.00", "$50.00", "Active (legacy)"]]} /><p>Fable 5.1 kept Fable 5’s input and output prices and reduced cache-read costs.</p><Link href="https://platform.claude.com/docs/en/models/fable-5/overview">Claude Fable 5 status and specifications</Link></Section>
      <Section title="Claude Fable 5.1 FAQ"><Accordion items={faqs} /></Section>
      <CtaCard>
        <CtaCardContent>
          <CtaCardTitle>Want Claude working inside your tools?</CtaCardTitle>
          <CtaCardDescription><FreeText>Bring one task to a free 30-minute call. I’ll recommend the right model and estimate the monthly cost for your workflow.</FreeText></CtaCardDescription>
        </CtaCardContent>
        <CtaCardAction href="/book?service=models&model=claude-fable-5-1">Book a free 30-min call</CtaCardAction>
      </CtaCard>
      <nav aria-label="Related services" className="flex flex-wrap gap-x-6 gap-y-3 text-sm"><Link href="/services/ai-agent-development">AI agent development</Link><Link href="/services/business-process-automation">Business process automation</Link></nav>
    </div></PageContent>
  </>;
};
