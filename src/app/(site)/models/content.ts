import { formatPrice, models, modelsCheckedLabel, type AiModel } from "@/lib/models";

export const bookHref = "/book?service=models";
export const auditHref = "/contact?service=workflow-audit";
export const providerCount = new Set(models.map((model) => model.provider)).size;
export const cheapest = [...models].sort((a, b) => a.outputPrice - b.outputPrice || a.name.localeCompare(b.name))[0];
export const largest = [...models].sort((a, b) => b.context - a.context)[0];
export const cheapestTools = [...models].filter((model) => model.tools).sort((a, b) => a.outputPrice - b.outputPrice || a.name.localeCompare(b.name))[0];
export const cheapestOpen = ([...models] as AiModel[]).filter((model) => model.openWeights).sort((a, b) => a.outputPrice - b.outputPrice)[0];


export function priceTieNote(model: AiModel, toolCallingOnly = false) {
  const ties = models.filter((candidate) => candidate.slug !== model.slug && candidate.outputPrice === model.outputPrice && (!toolCallingOnly || candidate.tools));
  return ties.length ? ` Tied with ${ties.map((candidate) => candidate.name).join(", ")}.` : "";
}

export const workflows = [
  { name: "Answer 1,000 support emails", count: 1000, input: 1500, output: 400, service: "AI customer support agents", href: "/services/ai-customer-support-agents" },
  { name: "Read 100 invoices into your accounting tool", count: 100, input: 2000, output: 300, service: "AI document processing", href: "/services/ai-document-processing" },
  { name: "Score 500 new leads", count: 500, input: 1000, output: 200, service: "AI lead generation & CRM automation", href: "/services/ai-lead-generation" },
] as const;

export function workflowEstimates(job: (typeof workflows)[number]) {
  return models.filter((model) => model.tools).map((model) => ({ model, cost: job.count * (job.input * model.inputPrice + job.output * model.outputPrice) / 1_000_000 })).sort((a, b) => a.cost - b.cost || a.model.name.localeCompare(b.model.name));
}

export const selectionSteps = [
  ["Can it use tools?", "If the workflow has to update a CRM, send an email or look up an order, tool calling is required. Start with that filter."],
  ["Is it accurate on your real data?", "I test candidates on real examples from your business before building. Benchmarks don't tell you how a model handles your invoices."],
  ["Does the context fit?", "Long contracts, big help centers and email threads need a larger context window. Most short tasks don't."],
  ["What does it cost at your volume?", "Multiply by your monthly volume, not by one request."],
  ["Can you switch later?", "I build so the model can be swapped without rebuilding the workflow, because prices and capabilities change."],
] as const;

export const faqs = [
  { question: 'What does "per 1M tokens" mean?', answer: "A token is a chunk of text, roughly three-quarters of an English word on average. Providers charge per million tokens, with separate rates for the text you send (input) and the text the model writes (output). A short support email and its reply is usually a few hundred to a few thousand tokens." },
  { question: "Why is output more expensive than input?", answer: "Most providers charge more for output because generating text takes more compute than processing input. For workflows that write long answers, output can drive most of the bill, which is why this table sorts by output price by default." },
  { question: "What is the cheapest LLM API right now?", answer: `As of ${modelsCheckedLabel}, ${cheapest.name} has the lowest output price in this table at ${formatPrice(cheapest.outputPrice)} per 1M output tokens.${priceTieNote(cheapest)} The cheapest option with tool calling is ${cheapestTools.name}.${priceTieNote(cheapestTools, true)} This comparison covers four selected models, not every LLM API. A model that gets answers wrong can cost more in fixes than it saves.` },
  { question: "What is a context window?", answer: "The context window is the token budget a model can handle in one request, including your instructions, documents and conversation. Providers may count generated output within that budget. A larger limit lets you work with longer files; your actual token usage determines the bill." },
  { question: "What's the difference between open-weights and closed models?", answer: "Open-weights models have downloadable weights and can be run on your own servers, subject to their license and hardware requirements. Closed model weights are not publicly available; access is through hosted services. Open weights offer more deployment control, while hosted models are often easier to start with." },
  { question: "How often are these prices updated?", answer: `This table is reviewed manually when the catalog is updated, with no fixed daily or weekly schedule. The last data check was ${modelsCheckedLabel}. Confirm pricing with the provider before setting a budget.` },
] as const;
