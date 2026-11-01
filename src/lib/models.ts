export const modelsCheckedAt = "2026-11-01";
export const modelsCheckedLabel = "November 1, 2026";
export const formatPrice = (price: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 3 }).format(price);

export const models = [
  {
    slug: "claude-fable-5-1",
    name: "Claude Fable 5.1",
    provider: "Anthropic",
    modelId: "claude-fable-5-1",
    description: "Claude Fable 5.1 costs $10 per 1M input and $50 per 1M output tokens. 1M context, 128K max output. Checked Nov 1, 2026.",
    inputPrice: 10,
    outputPrice: 50,
    cachedInputPrice: 0.25,
    tools: true,
    vision: true,
    reasoning: true,
    structured: true,
    openWeights: false,
    pricingNote: "Standard Claude API rates. Batch input and output receive a 50% discount. Cache writes are billed separately.",
    context: 1_000_000,
    output: 128_000,
    released: "2026-09-01",
    focus: "Demanding reasoning and long-horizon agentic work",
    source: "https://platform.claude.com/docs/en/models/fable-5-1/overview",
  },
  {
    slug: "gpt-6-1-sol",
    name: "GPT-6.1 Sol",
    provider: "OpenAI",
    modelId: "gpt-6.1-sol",
    description:
      "A reasoning model for complex coding, computer use, and professional work.",
    inputPrice: 2,
    outputPrice: 10,
    cachedInputPrice: 0.1,
    tools: true,
    vision: true,
    reasoning: true,
    structured: true,
    openWeights: false,
    pricingNote: "Standard rates. Above 272,000 input tokens, listed input/output rates rise to $4/$15 per 1M tokens; cached input rises to $0.20. Priority and other service tiers may differ.",
    context: 1_050_000,
    output: 128_000,
    released: "2026-09-29",
    focus: "Coding, computer use, and professional work",
    source: "https://models.dev/models/openai/gpt-6.1-sol",
  },
  {
    slug: "claude-opus-5-5",
    name: "Claude Opus 5.5",
    provider: "Anthropic",
    modelId: "claude-opus-5-5",
    description:
      "A reasoning model for long-running agentic coding and knowledge work.",
    inputPrice: 4,
    outputPrice: 20,
    cachedInputPrice: 0.2,
    tools: true,
    vision: true,
    reasoning: true,
    structured: true,
    openWeights: false,
    pricingNote: "Standard rates. Fast mode and other service tiers may differ.",
    context: 1_000_000,
    output: 128_000,
    released: "2026-09-22",
    focus: "Long-running coding agents and knowledge work",
    source: "https://models.dev/models/anthropic/claude-opus-5-5",
  },
  {
    slug: "claude-sonnet-5-5",
    name: "Claude Sonnet 5.5",
    provider: "Anthropic",
    modelId: "claude-sonnet-5-5",
    description:
      "A fast reasoning model for everyday coding, agents, and knowledge work.",
    inputPrice: 2,
    outputPrice: 10,
    cachedInputPrice: 0.1,
    tools: true,
    vision: true,
    reasoning: true,
    structured: true,
    openWeights: false,
    pricingNote: "Standard rates. Batch, caching, and other service tiers may differ.",
    context: 1_000_000,
    output: 128_000,
    released: "2026-09-28",
    focus: "Everyday coding, agents, and knowledge work",
    source: "https://models.dev/models/anthropic/claude-sonnet-5-5",
  },
] as const;

export type AiModel = (typeof models)[number];

export function getModel(slug: string) {
  return models.find((model) => model.slug === slug);
}

export const formatTokens = (tokens: number) => tokens.toLocaleString("en-US");
