export const modelsCheckedAt = "2026-11-14";
export const modelsCheckedLabel = "November 14, 2026";
export const formatPrice = (price: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 3 }).format(price);

export const tiers = ["flagship", "mid", "small"] as const;
export type Tier = (typeof tiers)[number];

export interface LongContextRates {
  threshold: number;
  inputPrice: number;
  outputPrice: number;
  cachedInputPrice: number;
}

export interface AiModel {
  slug: string;
  tier: Tier;
  name: string;
  provider: string;
  modelId: string;
  inputPrice: number;
  outputPrice: number;
  cachedInputPrice: number | null;
  tools: boolean;
  vision: boolean;
  reasoning: boolean;
  structured: boolean;
  openWeights: boolean;
  context: number;
  output: number | null;
  released: string;
  source: string;
  longContext?: LongContextRates;
}

export const models: readonly AiModel[] = [
  {
    slug: "claude-fable-5-2",
    tier: "flagship",
    name: "Claude Fable 5.2",
    provider: "Anthropic",
    modelId: "claude-fable-5-2",
    inputPrice: 8,
    outputPrice: 40,
    cachedInputPrice: 0.2,
    tools: true,
    vision: true,
    reasoning: true,
    structured: true,
    openWeights: false,
    context: 1000000,
    output: 128000,
    released: "2026-11-09",
    source: "https://platform.claude.com/docs/en/about-claude/pricing",
  },
  {
    slug: "claude-opus-5-5",
    tier: "flagship",
    name: "Claude Opus 5.5",
    provider: "Anthropic",
    modelId: "claude-opus-5-5",
    inputPrice: 4,
    outputPrice: 20,
    cachedInputPrice: 0.2,
    tools: true,
    vision: true,
    reasoning: true,
    structured: true,
    openWeights: false,
    context: 1000000,
    output: 128000,
    released: "2026-09-22",
    source: "https://platform.claude.com/docs/en/about-claude/pricing",
  },
  {
    slug: "claude-sonnet-5-5",
    tier: "mid",
    name: "Claude Sonnet 5.5",
    provider: "Anthropic",
    modelId: "claude-sonnet-5-5",
    inputPrice: 2,
    outputPrice: 10,
    cachedInputPrice: 0.1,
    tools: true,
    vision: true,
    reasoning: true,
    structured: true,
    openWeights: false,
    context: 1000000,
    output: 128000,
    released: "2026-09-28",
    source: "https://platform.claude.com/docs/en/about-claude/pricing",
  },
  {
    slug: "claude-haiku-5-5",
    tier: "small",
    name: "Claude Haiku 5.5",
    provider: "Anthropic",
    modelId: "claude-haiku-5-5",
    inputPrice: 0.1,
    outputPrice: 0.5,
    cachedInputPrice: 0.01,
    tools: true,
    vision: true,
    reasoning: true,
    structured: true,
    openWeights: false,
    context: 1000000,
    output: 128000,
    released: "2026-10-07",
    source: "https://platform.claude.com/docs/en/about-claude/pricing",
    longContext: { threshold: 100000, inputPrice: 0.5, outputPrice: 2.5, cachedInputPrice: 0.05 },
  },
  {
    slug: "gpt-6-astra",
    tier: "flagship",
    name: "GPT-6 Astra",
    provider: "OpenAI",
    modelId: "gpt-6-astra",
    inputPrice: 10,
    outputPrice: 50,
    cachedInputPrice: 1,
    tools: true,
    vision: true,
    reasoning: true,
    structured: true,
    openWeights: false,
    context: 1050000,
    output: 128000,
    released: "2026-09-03",
    source: "https://developers.openai.com/api/docs/pricing",
    longContext: { threshold: 272000, inputPrice: 20, outputPrice: 75, cachedInputPrice: 2 },
  },
  {
    slug: "gpt-6-1-sol",
    tier: "mid",
    name: "GPT-6.1 Sol",
    provider: "OpenAI",
    modelId: "gpt-6.1-sol",
    inputPrice: 2,
    outputPrice: 10,
    cachedInputPrice: 0.1,
    tools: true,
    vision: true,
    reasoning: true,
    structured: true,
    openWeights: false,
    context: 1050000,
    output: 128000,
    released: "2026-09-29",
    source: "https://developers.openai.com/api/docs/pricing",
    longContext: { threshold: 272000, inputPrice: 4, outputPrice: 15, cachedInputPrice: 0.2 },
  },
  {
    slug: "gpt-6-1-terra",
    tier: "mid",
    name: "GPT-6.1 Terra",
    provider: "OpenAI",
    modelId: "gpt-6.1-terra",
    inputPrice: 1,
    outputPrice: 5,
    cachedInputPrice: 0.05,
    tools: true,
    vision: true,
    reasoning: true,
    structured: true,
    openWeights: false,
    context: 1050000,
    output: 128000,
    released: "2026-10-26",
    source: "https://developers.openai.com/api/docs/pricing",
    longContext: { threshold: 272000, inputPrice: 2, outputPrice: 7.5, cachedInputPrice: 0.1 },
  },
  {
    slug: "gpt-6-luna",
    tier: "small",
    name: "GPT-6 Luna",
    provider: "OpenAI",
    modelId: "gpt-6-luna",
    inputPrice: 0.1,
    outputPrice: 0.5,
    cachedInputPrice: 0.01,
    tools: true,
    vision: true,
    reasoning: true,
    structured: true,
    openWeights: false,
    context: 1050000,
    output: 128000,
    released: "2026-09-22",
    source: "https://developers.openai.com/api/docs/pricing",
    longContext: { threshold: 272000, inputPrice: 0.2, outputPrice: 0.75, cachedInputPrice: 0.02 },
  },
  {
    slug: "gemini-4-argon",
    tier: "flagship",
    name: "Gemini 4 Argon",
    provider: "Google",
    modelId: "gemini-4-argon",
    inputPrice: 2,
    outputPrice: 10,
    cachedInputPrice: 0.1,
    tools: true,
    vision: true,
    reasoning: true,
    structured: true,
    openWeights: false,
    context: 1048576,
    output: 65536,
    released: "2026-10-13",
    source: "https://ai.google.dev/gemini-api/docs/pricing",
  },
  {
    slug: "gemini-4-carbon",
    tier: "flagship",
    name: "Gemini 4 Carbon",
    provider: "Google",
    modelId: "gemini-4-carbon",
    inputPrice: 2,
    outputPrice: 10,
    cachedInputPrice: 0.1,
    tools: true,
    vision: true,
    reasoning: true,
    structured: true,
    openWeights: false,
    context: 1048576,
    output: 65536,
    released: "2026-11-10",
    source: "https://ai.google.dev/gemini-api/docs/pricing",
  },
  {
    slug: "gemini-3-8-flash",
    tier: "mid",
    name: "Gemini 3.8 Flash",
    provider: "Google",
    modelId: "gemini-3.8-flash",
    inputPrice: 0.75,
    outputPrice: 3.75,
    cachedInputPrice: 0.075,
    tools: true,
    vision: true,
    reasoning: true,
    structured: true,
    openWeights: false,
    context: 1048576,
    output: 65536,
    released: "2026-09-02",
    source: "https://ai.google.dev/gemini-api/docs/pricing",
  },
  {
    slug: "grok-4-7",
    tier: "flagship",
    name: "Grok 4.7",
    provider: "xAI",
    modelId: "grok-4.7",
    inputPrice: 2,
    outputPrice: 6,
    cachedInputPrice: 0.5,
    tools: true,
    vision: true,
    reasoning: true,
    structured: true,
    openWeights: false,
    context: 500000,
    output: null,
    released: "2026-09-21",
    source: "https://docs.x.ai/developers/models/grok-4.7",
    longContext: { threshold: 200000, inputPrice: 4, outputPrice: 12, cachedInputPrice: 1 },
  },
  {
    slug: "deepseek-v4-pro",
    tier: "flagship",
    name: "DeepSeek V4 Pro",
    provider: "DeepSeek",
    modelId: "deepseek-v4-pro",
    inputPrice: 1.32,
    outputPrice: 3.96,
    cachedInputPrice: 0.044,
    tools: true,
    vision: false,
    reasoning: true,
    structured: true,
    openWeights: true,
    context: 1000000,
    output: 384000,
    released: "2026-04-24",
    source: "https://api-docs.deepseek.com/quick_start/pricing",
  },
  {
    slug: "deepseek-v4-1-flash",
    tier: "small",
    name: "DeepSeek V4.1 Flash",
    provider: "DeepSeek",
    modelId: "deepseek-flash",
    inputPrice: 0.3,
    outputPrice: 1.2,
    cachedInputPrice: 0.006,
    tools: true,
    vision: true,
    reasoning: true,
    structured: true,
    openWeights: true,
    context: 1000000,
    output: 384000,
    released: "2026-09-10",
    source: "https://api-docs.deepseek.com/quick_start/pricing",
  },
  {
    slug: "kimi-k3",
    tier: "flagship",
    name: "Kimi K3",
    provider: "Moonshot",
    modelId: "kimi-k3",
    inputPrice: 3,
    outputPrice: 15,
    cachedInputPrice: 0.3,
    tools: true,
    vision: true,
    reasoning: true,
    structured: false,
    openWeights: true,
    context: 1048576,
    output: 1048576,
    released: "2026-07-16",
    source: "https://platform.kimi.ai/docs/pricing/chat",
  },
  {
    slug: "qwen-3-8-max",
    tier: "flagship",
    name: "Qwen3.8-Max",
    provider: "Alibaba",
    modelId: "qwen3.8-max",
    inputPrice: 2,
    outputPrice: 6,
    cachedInputPrice: 0.2,
    tools: false,
    vision: true,
    reasoning: true,
    structured: false,
    openWeights: false,
    context: 1000000,
    output: 65536,
    released: "2026-08-02",
    source: "https://www.alibabacloud.com/help/en/model-studio/model-pricing",
  },
  {
    slug: "muse-spark",
    tier: "mid",
    name: "Muse Spark",
    provider: "Meta",
    modelId: "muse-spark-1.3",
    inputPrice: 1.25,
    outputPrice: 4.25,
    cachedInputPrice: 0.15,
    tools: true,
    vision: true,
    reasoning: true,
    structured: true,
    openWeights: false,
    context: 1048576,
    output: 131072,
    released: "2026-09-02",
    source: "https://dev.meta.ai/docs/getting-started/pricing-rate-limits/",
  },
];

export const getModel = (slug: string) => models.find((model) => model.slug === slug);

export const formatTokens = (tokens: number) => tokens.toLocaleString("en-US");

export interface Rates {
  input: number;
  output: number;
  cached: number | null;
}

export const baseRates = (model: AiModel): Rates => ({ input: model.inputPrice, output: model.outputPrice, cached: model.cachedInputPrice });

export const requestCost = (rates: Rates, input: number, output: number, cachedShare = 0) => {
  const share = cachedShare / 100;
  const inputRate = rates.cached === null ? rates.input : rates.input * (1 - share) + rates.cached * share;
  return (input * inputRate + output * rates.output) / 1_000_000;
};

export const modelRates = (model: AiModel, input: number): Rates =>
  model.longContext && input > model.longContext.threshold
    ? { input: model.longContext.inputPrice, output: model.longContext.outputPrice, cached: model.longContext.cachedInputPrice }
    : baseRates(model);
