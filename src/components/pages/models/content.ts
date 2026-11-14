import { formatPrice, models, modelsCheckedLabel, tiers, type AiModel, type Tier } from "@/lib/models";

export const bookHref = "/book?service=agent-development&source=models";
export const agentServiceHref = "/services/ai-agent-development";

const byOutputPrice = (a: AiModel, b: AiModel) => a.outputPrice - b.outputPrice || a.name.localeCompare(b.name);

export const cheapest = [...models].sort(byOutputPrice)[0];
export const largest = [...models].sort((a, b) => b.context - a.context || a.name.localeCompare(b.name))[0];
export const cheapestTools = [...models].filter((model) => model.tools).sort(byOutputPrice)[0];
export const cheapestOpen = ([...models] as AiModel[]).filter((model) => model.openWeights).sort(byOutputPrice)[0];

export const workflows = [
  { preset: "support emails", name: "Answer 1,000 support emails a month", count: 1000, input: 2000, output: 400, service: "AI customer support agents", href: "/services/ai-customer-support-agents" },
  { preset: "invoices", name: "Read 100 invoices a month", count: 100, input: 3000, output: 600, service: "AI document processing", href: "/services/ai-document-processing" },
  { preset: "leads", name: "Score 500 new leads a month", count: 500, input: 1500, output: 200, service: "AI lead generation & CRM automation", href: "/services/ai-lead-generation" },
] as const;

export const monthlyCost = (job: (typeof workflows)[number], model: AiModel) => job.count * (job.input * model.inputPrice + job.output * model.outputPrice) / 1_000_000;

export const workflowEstimates = (job: (typeof workflows)[number]) =>
  models
    .filter((model) => model.tools)
    .map((model) => ({ model, cost: monthlyCost(job, model) }))
    .sort((a, b) => a.cost - b.cost || a.model.name.localeCompare(b.model.name));

export const formatMonthly = (cost: number) => `$${cost.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

export const jobCosts = {
  title: "What a real job costs on each model",
  body: "Per-token prices are hard to picture. So here's the same math for jobs we build AI agents for. Each card uses the cheapest and the priciest model in the table that can use tools.",
  formula: "monthly = count × (input_tokens × input_price + output_tokens × output_price) / 1,000,000, standard rates, no caching. Same presets as the calculator on every model page.",
  closing: "The model bill is rarely the expensive part. Getting the agent to answer correctly and write to the right place in your tools is where the work is.",
} as const;

export const tierColumns = [
  { tier: "flagship", icon: "sparkles", title: "Flagship models", body: "The smartest and most expensive. Use them for long, hard tasks like agents that plan many steps or read huge documents." },
  { tier: "mid", icon: "scale", title: "Mid-tier models", body: "Where most business work lands. Smart enough for real tasks and cheap enough to run thousands of times." },
  { tier: "small", icon: "zap", title: "Small and fast models", body: "Built for high volume. Sorting emails, pulling fields from forms and tagging leads, at a fraction of the price." },
] as const satisfies readonly { tier: Tier; icon: string; title: string; body: string }[];

export const tierModels = (tier: Tier) => models.filter((model) => model.tier === tier).sort(byOutputPrice);

export const tierPriceLine = (tier: Tier) => {
  const prices = tierModels(tier).map((model) => model.outputPrice);
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  return min === max ? `Output at ${formatPrice(min)} per 1M tokens` : `Output from ${formatPrice(min)} to ${formatPrice(max)} per 1M tokens`;
};

export const tierLabels: Record<Tier, string> = { flagship: "Flagship", mid: "Mid", small: "Small" };
export const tierOptions = tiers;

export const choose = {
  title: "How to choose an AI model for your business",
  intro: "The cheapest model that does the job reliably wins. Here's the order we check things in.",
  rows: [
    { n: "01", title: "Can it use tools?", line: "If the agent has to update your CRM or send an email, it needs tool calling." },
    { n: "02", title: "Is it accurate on your data?", line: "We test a few models on real examples from your business before we build." },
    { n: "03", title: "Does the context fit?", line: "Long contracts and big help centers need a bigger window. Short tasks don't." },
    { n: "04", title: "What does it cost at your volume?", line: "Multiply by a month of real work, not by one request." },
    { n: "05", title: "Can you switch later?", line: "Prices change every few months, so the model should be easy to swap." },
  ],
  take: {
    title: "Our take",
    body: "We don't sell any model, so we pick whichever one does your job well for the least money. Often that's a mid-tier or small model, not the flagship.",
    label: "Book a free 30-min call",
  },
} as const;

export const method = {
  title: "How we keep this table current",
  rows: [
    { icon: "file-check", title: "Sources", line: "Each provider's own pricing page, checked against public trackers." },
    { icon: "calendar", title: "Updates", line: "We check prices by hand whenever we update the table. The date sits under the table." },
    { icon: "list", title: "What's in", line: "Models a business would actually use in production." },
    { icon: "minus", title: "No guessing", line: "If a number isn't confirmed, the cell shows a dash." },
  ],
} as const;

export const faqs = [
  { question: "What does per 1M tokens mean?", answer: "A token is a small chunk of text, roughly three quarters of an English word. AI providers charge per million tokens, with one rate for the text you send and another for the text the model writes back. A short support email and its reply usually come to a couple of thousand tokens." },
  { question: "Why does output cost more than input?", answer: "Writing text takes more computing power than reading it, so most providers charge several times more for output. If your workflow writes long answers, the output price drives most of the bill. That's why our table sorts by output price by default." },
  { question: "What is the cheapest AI model API right now?", answer: `As of ${modelsCheckedLabel}, the cheapest model in our table by output price is ${cheapest.name} at ${formatPrice(cheapest.outputPrice)} per 1M output tokens. The cheapest one that can also use tools is ${cheapestTools.name}. Cheapest isn't always best, though. A model that gets answers wrong costs more in fixes than it saves.` },
  { question: "What is a context window?", answer: "The context window is the most text a model can read in one request, counted in tokens. It includes your instructions, any files you attach and the conversation so far. A bigger window lets the model read long documents in one go, but filling it costs more per request." },
  { question: "What's the difference between open-weights and closed models?", answer: "You can download open-weights models and run them on your own servers or through any hosting company. Closed models only work through their maker's API. Open weights give you more control over data and cost. Closed models are usually easier to start with." },
  { question: "How often are these prices updated?", answer: "We check the table by hand whenever we update it, and the date under the table shows the last check. Providers change prices with little notice, so confirm on the provider's site before you set a budget. If you spot a wrong number, email us and we'll fix it." },
] as const;
