import { services, type ModelPageContent } from "../types";

const anthropicSource = "Prices checked November 14, 2026 on Anthropic's pricing page.";
const standardCta = {
  body: "We build AI agents and automations that let your business grow without adding headcount. On the call we tell you which model fits and what it costs at your volume.",
};
const idRows = (id: string, bedrock: string, openrouter: string, input: string, output: string) => [
  ["Claude API", id, input, output],
  ["Amazon Bedrock", bedrock, "—", "—"],
  ["Google Cloud (Vertex AI)", id, "—", "—"],
  ["Microsoft Foundry", id, "—", "—"],
  ["OpenRouter", openrouter, input, output],
];
const accessColumns = ["Platform", "Model ID", "Input $/1M", "Output $/1M"];

export const anthropicPages: ModelPageContent[] = [
  {
    slug: "claude-fable-5-2",
    title: "Claude Fable 5.2 API Pricing, Context Window & Specs",
    description: "Claude Fable 5.2 costs $8 per 1M input and $40 per 1M output tokens. See the 1M context window, specs, cost calculator and how it compares.",
    h1: "Claude Fable 5.2 API pricing and specs",
    summary: "Claude Fable 5.2 is Anthropic's top-tier public model. Claude Fable 5.2 costs $8 per million input tokens and $40 per million output tokens, 20% less than Fable 5.1. It has a 1M token context window, 128K max output and always-on adaptive thinking. It suits long agent runs and deep research.",
    tiles: [
      { label: "Input", value: "$8 / 1M" },
      { label: "Output", value: "$40 / 1M" },
      { label: "Context", value: "1M tokens" },
      { label: "Max output", value: "128K tokens" },
    ],
    pricing: {
      columns: ["Price type", "Per 1M tokens"],
      rows: [["Input", "$8.00"], ["Output", "$40.00"], ["Cache read", "$0.20"], ["Cache write (5 min)", "$10.00"], ["Cache write (1 hour)", "$16.00"], ["Batch input", "$4.00"], ["Batch output", "$20.00"], ["Fast mode input", "$16.00"], ["Fast mode output", "$80.00"]],
      plain: "Output costs 5× input, so long answers drive the bill. Cached input costs 2.5% of the normal rate. The full 1M window is billed at the same rate.",
      source: anthropicSource,
    },
    calc: {
      intro: "Pick a job or enter your own numbers. We use the standard API rate.",
      note: "Uses standard rates. Ignores tax, batch discounts and fast mode. Fable 5.2 thinks on every request, and thinking tokens bill as output.",
      compare: ["claude-opus-5-5", "gpt-6-astra", "gpt-6-1-sol"],
      service: "agent-development",
    },
    specs: [["Context window", "1M tokens"], ["Max output", "128K tokens"], ["Input types", "Text and images"], ["Output types", "Text"], ["Tool calling", "Yes (forced tool choice not supported)"], ["Structured output", "Yes"], ["Reasoning", "Adaptive thinking, always on"], ["Knowledge cutoff", "June 2026"], ["Release date", "November 9, 2026"], ["Open weights", "No"], ["API model ID", "claude-fable-5-2"]],
    access: {
      columns: accessColumns,
      rows: idRows("claude-fable-5-2", "global.anthropic.claude-fable-5-2", "anthropic/claude-fable-5.2", "$8.00", "$40.00"),
      line: "Cloud partners set their own prices. Claude Mythos 5.2 has the same specs and pricing but is open only to organizations Anthropic verifies.",
    },
    free: {
      answer: "No. Claude Fable 5.2 is a paid model on the API and is not on the Claude Free plan. New API accounts get small test credits.",
      rows: ["Not on Claude Free", "Pro and Team pay with usage credits", "Included in Max and Ultra plans"],
    },
    compare: {
      rows: [
        { name: "Claude Fable 5.2", slug: "claude-fable-5-2", input: "$8.00", output: "$40.00", context: "1M", why: "Deepest reasoning in the Claude lineup", current: true },
        { name: "Claude Fable 5.1", input: "$10.00", output: "$50.00", context: "1M", why: "Older version, now costs more" },
        { name: "Claude Opus 5.5", slug: "claude-opus-5-5", input: "$4.00", output: "$20.00", context: "1M", why: "Half the price for most work" },
        { name: "GPT-6 Astra", slug: "gpt-6-astra", input: "$10.00", output: "$50.00", context: "1.05M", why: "OpenAI's top model" },
        { name: "GPT-6.1 Sol", slug: "gpt-6-1-sol", input: "$2.00", output: "$10.00", context: "1.05M", why: "Much cheaper all-rounder" },
      ],
      line: "Fable 5.2 is priced below GPT-6 Astra. For most daily tasks Claude Opus 5.5 does the job at half the cost.",
    },
    fit: {
      good: ["Agent runs that last hours", "Multi-step research and analysis", "Turning data into a finished doc or deck"],
      bad: ["High-volume, simple tasks", "Fast chat replies", "Zero data retention setups"],
      take: "We save Fable 5.2 for the hardest step in an agent and run the rest on cheaper models.",
      links: [services.agent],
    },
    versions: {
      heading: "Claude Fable versions",
      rows: [
        { name: "Claude Fable 5.2", slug: "claude-fable-5-2", released: "2026-11-09", input: "$8", output: "$40", status: "Latest" },
        { name: "Claude Fable 5.1", released: "2026-09-01", input: "$10", output: "$50", status: "Previous" },
        { name: "Claude Fable 5", released: "2026-06-09", input: "$10", output: "$50", status: "Previous" },
      ],
      line: "Fable 5.2 cut list prices by 20%. Fable 5 was unavailable from June 12 to July 1, 2026 under a US export-control order, then returned. Older versions are still live.",
    },
    faqs: [
      { question: "How much does Claude Fable 5.2 cost?", answer: "Claude Fable 5.2 costs $8 per million input tokens and $40 per million output tokens on the Claude API. Cached input reads cost $0.20 per million. The Batch API halves both rates to $4 and $20. Fast mode costs $16 and $80 per million for quicker output." },
      { question: "Is Claude Fable 5.2 free?", answer: "No, Claude Fable 5.2 is not free. It is not on the Claude Free plan, and the API bills every token. Pro and Team users pay for it with usage credits. Max and Ultra plans include Claude Fable 5.2. New API accounts get small free test credits." },
      { question: "What is the Claude Fable 5.2 context window?", answer: "Claude Fable 5.2 has a 1 million token context window and can write up to 128,000 tokens in one reply. That is roughly 555,000 words of input. The whole window is billed at the standard rate, so a long prompt costs the same per token as a short one." },
      { question: "When was Claude Fable 5.2 released?", answer: "Anthropic released Claude Fable 5.2 on November 9, 2026. It replaced Claude Fable 5.1, which came out on September 1, 2026, and cut list prices by 20%. Claude Fable 5.2 has a June 2026 knowledge cutoff and stays available until at least November 9, 2027." },
      { question: "What is the Claude Fable 5.2 API model ID?", answer: "The Claude Fable 5.2 model ID is claude-fable-5-2 on the Claude API, Google Cloud and Microsoft Foundry. On Amazon Bedrock you call it through the global.anthropic.claude-fable-5-2 inference profile. On OpenRouter the Claude Fable 5.2 ID is anthropic/claude-fable-5.2." },
      { question: "Claude Fable 5.2 vs GPT-6 Astra, which is cheaper?", answer: "Claude Fable 5.2 is cheaper on list price. It costs $8 input and $40 output per million tokens. GPT-6 Astra costs $10 and $50. For 1,000 support emails a month, Claude Fable 5.2 comes to about $32 and GPT-6 Astra about $40 at standard rates." },
    ],
    cta: { heading: "Not sure Claude Fable 5.2 is the right fit?", body: "We build AI agents that take on hard, multi-step work so your business can grow without adding headcount. On the call we tell you which model fits each step and what it costs at your volume.", service: "agent-development", link: services.agent },
    related: [
      { slug: "claude-opus-5-5", line: "$4 / $20. Anthropic's default pick." },
      { slug: "gpt-6-astra", line: "OpenAI's top model." },
      { slug: "claude-sonnet-5-5", line: "$2 / $10. Fast and capable." },
    ],
  },
  {
    slug: "claude-opus-5-5",
    title: "Claude Opus 5.5 API Pricing, Context Window & Specs",
    description: "Claude Opus 5.5 costs $4 per 1M input and $20 per 1M output tokens. See the 1M context window, specs, cost calculator and how it compares.",
    h1: "Claude Opus 5.5 API pricing and specs",
    summary: "Claude Opus 5.5 is Anthropic's recommended default model for most work. Claude Opus 5.5 costs $4 per million input tokens and $20 per million output tokens, 20% less than Opus 5. It has a 1M token context window, 128K max output and always-on adaptive thinking for long agent and coding tasks.",
    tiles: [
      { label: "Input", value: "$4 / 1M" },
      { label: "Output", value: "$20 / 1M" },
      { label: "Context", value: "1M tokens" },
      { label: "Max output", value: "128K tokens" },
    ],
    pricing: {
      columns: ["Price type", "Per 1M tokens"],
      rows: [["Input", "$4.00"], ["Output", "$20.00"], ["Cache read", "$0.20"], ["Cache write (5 min)", "$5.00"], ["Cache write (1 hour)", "$8.00"], ["Batch input", "$2.00"], ["Batch output", "$10.00"], ["Fast mode input", "$8.00"], ["Fast mode output", "$40.00"]],
      plain: "Output costs 5× input, so long answers drive the bill. Cached input costs 5% of the normal rate. The full 1M window is billed at the same rate.",
      source: anthropicSource,
    },
    calc: {
      intro: "Pick a job or enter your own numbers. We use the standard API rate.",
      note: "Uses standard rates. Ignores tax, batch discounts and fast mode. Opus 5.5 thinks on every request, and thinking tokens bill as output.",
      compare: ["claude-sonnet-5-5", "claude-fable-5-2", "gpt-6-astra"],
      service: "agent-development",
    },
    specs: [["Context window", "1M tokens"], ["Max output", "128K tokens (300K on Batch, beta)"], ["Input types", "Text and images"], ["Output types", "Text"], ["Tool calling", "Yes"], ["Structured output", "Yes"], ["Reasoning", "Adaptive thinking, always on"], ["Knowledge cutoff", "June 2026"], ["Release date", "September 22, 2026"], ["Open weights", "No"], ["API model ID", "claude-opus-5-5"]],
    access: {
      columns: accessColumns,
      rows: idRows("claude-opus-5-5", "anthropic.claude-opus-5-5", "anthropic/claude-opus-5.5", "$4.00", "$20.00"),
      line: "Cloud partners set their own prices. Regional endpoints on Bedrock and Google Cloud cost 10% more.",
    },
    free: {
      answer: "No. Claude Opus 5.5 is not on the Claude Free plan, and the API bills every token. It comes with Claude Pro and higher plans.",
      rows: ["Not on Claude Free", "Included in Claude Pro and up", "Small free test credits on new API accounts"],
    },
    compare: {
      rows: [
        { name: "Claude Opus 5.5", slug: "claude-opus-5-5", input: "$4.00", output: "$20.00", context: "1M", why: "Strong default for agents and code", current: true },
        { name: "Claude Fable 5.2", slug: "claude-fable-5-2", input: "$8.00", output: "$40.00", context: "1M", why: "Harder reasoning, twice the price" },
        { name: "Claude Sonnet 5.5", slug: "claude-sonnet-5-5", input: "$2.00", output: "$10.00", context: "1M", why: "Faster and half the price" },
        { name: "GPT-6 Astra", slug: "gpt-6-astra", input: "$10.00", output: "$50.00", context: "1.05M", why: "OpenAI's top model" },
        { name: "GPT-6.1 Sol", slug: "gpt-6-1-sol", input: "$2.00", output: "$10.00", context: "1.05M", why: "Cheaper OpenAI all-rounder" },
      ],
      line: "Opus 5.5 costs less than half of GPT-6 Astra. If speed matters more than depth, Claude Sonnet 5.5 does it for half.",
    },
    fit: {
      good: ["Long-running coding agents", "Agents that use many tools", "Reading charts, scans and screenshots"],
      bad: ["Simple sorting or tagging at scale", "Fast chat replies", "Tight per-request budgets"],
      take: "We use Opus 5.5 when an agent has to plan and act across tools, and hand simple steps to Haiku.",
      links: [services.agent],
    },
    versions: {
      heading: "Claude Opus versions",
      rows: [
        { name: "Claude Opus 5.5", slug: "claude-opus-5-5", released: "2026-09-22", input: "$4", output: "$20", status: "Latest" },
        { name: "Claude Opus 5", released: "2026-07-24", input: "$5", output: "$25", status: "Previous" },
        { name: "Claude Opus 4.8", released: "2026-05-28", input: "$5", output: "$25", status: "Previous" },
      ],
      line: "Opus 5.5 is the first Opus priced below $5 and $25. Older Opus models still cost $5 and $25 and stay live.",
    },
    faqs: [
      { question: "How much does Claude Opus 5.5 cost?", answer: "Claude Opus 5.5 costs $4 per million input tokens and $20 per million output tokens on the Claude API. Cached input reads cost $0.20 per million. The Batch API halves both rates to $2 and $10. Fast mode costs $8 and $40 per million for quicker output." },
      { question: "Is Claude Opus 5.5 free?", answer: "No, Claude Opus 5.5 is not free. It is not on the Claude Free plan and needs Claude Pro or a higher plan in the app. On the API every token is billed, though new accounts get small free test credits to try Claude Opus 5.5." },
      { question: "What is the Claude Opus 5.5 context window?", answer: "Claude Opus 5.5 has a 1 million token context window and writes up to 128,000 tokens per reply. On the Batch API it can write up to 300,000 tokens with a beta header. The whole window is billed at the standard Claude Opus 5.5 rate." },
      { question: "When was Claude Opus 5.5 released?", answer: "Anthropic released Claude Opus 5.5 on September 22, 2026. It followed Claude Opus 5 and lowered the price from $5 and $25 to $4 and $20 per million tokens. Claude Opus 5.5 has a June 2026 knowledge cutoff and stays available until at least September 22, 2027." },
      { question: "What is the Claude Opus 5.5 API model ID?", answer: "The Claude Opus 5.5 model ID is claude-opus-5-5 on the Claude API, Google Cloud and Microsoft Foundry. On Amazon Bedrock it is anthropic.claude-opus-5-5. On OpenRouter the Claude Opus 5.5 ID is anthropic/claude-opus-5.5. There is no separate dated snapshot ID." },
      { question: "Claude Opus 5.5 vs GPT-6 Astra, which is cheaper?", answer: "Claude Opus 5.5 is much cheaper. It costs $4 input and $20 output per million tokens. GPT-6 Astra costs $10 and $50. For 1,000 support emails a month, Claude Opus 5.5 comes to about $16 and GPT-6 Astra about $40 at standard rates." },
    ],
    cta: { heading: "Want Claude Opus 5.5 working inside your tools?", ...standardCta, service: "agent-development", link: services.agent },
    related: [
      { slug: "claude-sonnet-5-5", line: "$2 / $10. Faster and half the price." },
      { slug: "claude-fable-5-2", line: "$8 / $40. For the hardest tasks." },
      { slug: "gpt-6-astra", line: "OpenAI's top model." },
    ],
  },
  {
    slug: "claude-sonnet-5-5",
    title: "Claude Sonnet 5.5 API Pricing, Context Window & Specs",
    description: "Claude Sonnet 5.5 costs $2 per 1M input and $10 per 1M output tokens. See the 1M context window, specs, cost calculator and how it compares.",
    h1: "Claude Sonnet 5.5 API pricing and specs",
    summary: "Claude Sonnet 5.5 is Anthropic's fast, mid-priced model for everyday coding, agents and business work. Claude Sonnet 5.5 costs $2 per million input tokens and $10 per million output tokens. It has a 1M token context window, 128K max output and adaptive thinking you can dial down for speed.",
    tiles: [
      { label: "Input", value: "$2 / 1M" },
      { label: "Output", value: "$10 / 1M" },
      { label: "Context", value: "1M tokens" },
      { label: "Max output", value: "128K tokens" },
    ],
    pricing: {
      columns: ["Price type", "Per 1M tokens"],
      rows: [["Input", "$2.00"], ["Output", "$10.00"], ["Cache read", "$0.10"], ["Cache write (5 min)", "$2.50"], ["Cache write (1 hour)", "$4.00"], ["Batch input", "$1.00"], ["Batch output", "$5.00"]],
      plain: "Output costs 5× input, so long answers drive the bill. Cached input costs 5% of the normal rate, half what Sonnet 5 charged.",
      source: anthropicSource,
    },
    calc: {
      intro: "Pick a job or enter your own numbers. We use the standard API rate.",
      note: "Uses standard rates. Ignores tax and batch discounts. Thinking tokens bill as output.",
      compare: ["claude-opus-5-5", "claude-haiku-5-5", "gpt-6-1-sol"],
      service: "support-agents",
    },
    specs: [["Context window", "1M tokens"], ["Max output", "128K tokens (300K on Batch, beta)"], ["Input types", "Text and images"], ["Output types", "Text"], ["Tool calling", "Yes"], ["Structured output", "Yes"], ["Reasoning", "Adaptive thinking, can skip up-front thinking"], ["Knowledge cutoff", "June 2026"], ["Release date", "September 28, 2026"], ["Open weights", "No"], ["API model ID", "claude-sonnet-5-5"]],
    access: {
      columns: accessColumns,
      rows: idRows("claude-sonnet-5-5", "anthropic.claude-sonnet-5-5", "anthropic/claude-sonnet-5.5", "$2.00", "$10.00"),
      line: "Cloud partners set their own prices. Regional endpoints on Bedrock and Google Cloud cost 10% more.",
    },
    free: {
      answer: "Yes, in the Claude app. Claude Sonnet 5.5 is on the Claude Free plan with usage limits. The API is paid per token.",
      rows: ["On the Claude Free plan", "Higher limits on Pro and up", "API billed per token"],
    },
    compare: {
      rows: [
        { name: "Claude Sonnet 5.5", slug: "claude-sonnet-5-5", input: "$2.00", output: "$10.00", context: "1M", why: "Fast, capable, fair price", current: true },
        { name: "Claude Opus 5.5", slug: "claude-opus-5-5", input: "$4.00", output: "$20.00", context: "1M", why: "Deeper thinking for hard tasks" },
        { name: "Claude Haiku 5.5", slug: "claude-haiku-5-5", input: "$0.10", output: "$0.50", context: "1M", why: "20× cheaper for simple jobs" },
        { name: "GPT-6.1 Sol", slug: "gpt-6-1-sol", input: "$2.00", output: "$10.00", context: "1.05M", why: "Same price, OpenAI stack" },
        { name: "Grok 4.7", slug: "grok-4-7", input: "$2.00", output: "$6.00", context: "500K", why: "Cheaper output, smaller window" },
      ],
      line: "Sonnet 5.5 costs half of Claude Opus 5.5. It matches GPT-6.1 Sol on list price, so pick on quality for your task.",
    },
    fit: {
      good: ["Customer support agents", "Everyday coding and data work", "Agents that call tools fast"],
      bad: ["The hardest multi-hour reasoning", "Bulk tagging at the lowest cost", "Setups that need temperature control"],
      take: "Sonnet 5.5 is our usual pick for support agents. It is quick enough for live replies and smart enough to use tools well.",
      links: [services.support],
    },
    versions: {
      heading: "Claude Sonnet versions",
      rows: [
        { name: "Claude Sonnet 5.5", slug: "claude-sonnet-5-5", released: "2026-09-28", input: "$2", output: "$10", status: "Latest" },
        { name: "Claude Sonnet 5", released: "2026-06-30", input: "$2", output: "$10", status: "Previous" },
        { name: "Claude Sonnet 4.6", released: "2026-02-17", input: "$3", output: "$15", status: "Previous" },
        { name: "Claude Sonnet 4.5", released: "2025-09-29", input: "$3", output: "$15", status: "Deprecated" },
      ],
      line: "Sonnet 5.5 kept the Sonnet 5 price and halved the cache read rate. Sonnet 4.5 retires on November 30, 2026.",
    },
    faqs: [
      { question: "How much does Claude Sonnet 5.5 cost?", answer: "Claude Sonnet 5.5 costs $2 per million input tokens and $10 per million output tokens on the Claude API. Cached input reads cost $0.10 per million. The Batch API halves both rates to $1 and $5. A typical support reply costs under one cent with Claude Sonnet 5.5." },
      { question: "Is Claude Sonnet 5.5 free?", answer: "Claude Sonnet 5.5 is free to use in the Claude app on the Free plan, with usage limits. Paid plans raise those limits. The API is not free and bills every token, though new accounts get small test credits to try Claude Sonnet 5.5." },
      { question: "What is the Claude Sonnet 5.5 context window?", answer: "Claude Sonnet 5.5 has a 1 million token context window and writes up to 128,000 tokens per reply. On the Batch API it can write up to 300,000 tokens with a beta header. The whole window is billed at the standard Claude Sonnet 5.5 rate." },
      { question: "When was Claude Sonnet 5.5 released?", answer: "Anthropic released Claude Sonnet 5.5 on September 28, 2026. It replaced Claude Sonnet 5 at the same $2 and $10 price, with cheaper cache reads. Claude Sonnet 5.5 has a June 2026 knowledge cutoff and stays available until at least September 28, 2027." },
      { question: "What is the Claude Sonnet 5.5 API model ID?", answer: "The Claude Sonnet 5.5 model ID is claude-sonnet-5-5 on the Claude API, Google Cloud and Microsoft Foundry. On Amazon Bedrock it is anthropic.claude-sonnet-5-5. On OpenRouter the Claude Sonnet 5.5 ID is anthropic/claude-sonnet-5.5. Each ID points to one fixed version." },
      { question: "Claude Sonnet 5.5 vs GPT-6.1 Sol, which is cheaper?", answer: "Neither on list price. Claude Sonnet 5.5 and GPT-6.1 Sol both cost $2 input and $10 output per million tokens. For 1,000 support emails a month, both come to about $8. Real bills differ by how many tokens each model uses and how much you cache." },
    ],
    cta: { heading: "Want Claude Sonnet 5.5 working inside your tools?", ...standardCta, service: "support-agents", link: services.support },
    related: [
      { slug: "claude-opus-5-5", line: "$4 / $20. Deeper thinking." },
      { slug: "gpt-6-1-sol", line: "OpenAI at the same price." },
      { slug: "claude-haiku-5-5", line: "$0.10 / $0.50. Built for volume." },
    ],
  },
  {
    slug: "claude-haiku-5-5",
    title: "Claude Haiku 5.5 API Pricing, Context Window & Specs",
    description: "Claude Haiku 5.5 costs $0.10 per 1M input and $0.50 per 1M output tokens up to 100K. See the 1M context window, specs and cost calculator.",
    h1: "Claude Haiku 5.5 API pricing and specs",
    summary: "Claude Haiku 5.5 is Anthropic's fastest and cheapest model, built for high-volume work. Claude Haiku 5.5 costs $0.10 per million input tokens and $0.50 per million output tokens for prompts up to 100K tokens. Longer prompts cost five times more. It has a 1M token context window and 128K max output.",
    tiles: [
      { label: "Input", value: "$0.10 / 1M" },
      { label: "Output", value: "$0.50 / 1M" },
      { label: "Context", value: "1M tokens" },
      { label: "Max output", value: "128K tokens" },
    ],
    tileFootnote: "Up to 100K-token prompts",
    pricing: {
      columns: ["Price type", "Prompt up to 100K", "Prompt over 100K"],
      rows: [["Input", "$0.10", "$0.50"], ["Output", "$0.50", "$2.50"], ["Cache read", "$0.01", "$0.05"], ["Cache write (5 min)", "$0.125", "$0.625"], ["Cache write (1 hour)", "$0.20", "$1.00"], ["Batch input", "$0.05", "$0.25"], ["Batch output", "$0.25", "$1.25"]],
      plain: "Output costs 5× input. Cross 100K prompt tokens and the whole request costs 5× more, cached tokens included. Keep prompts short to stay in the cheap tier.",
      source: anthropicSource,
    },
    calc: {
      intro: "Pick a job or enter your own numbers. We use the standard API rate.",
      note: "Uses standard rates up to 100K prompt tokens. Ignores tax and batch discounts. Thinking tokens bill as output.",
      compare: ["claude-sonnet-5-5", "gpt-6-luna", "gemini-3-8-flash"],
      service: "document-processing",
    },
    specs: [["Context window", "1M tokens"], ["Max output", "128K tokens (300K on Batch, beta)"], ["Input types", "Text and images"], ["Output types", "Text"], ["Tool calling", "Yes"], ["Structured output", "Yes"], ["Reasoning", "Adaptive thinking, effort control"], ["Knowledge cutoff", "June 2026"], ["Release date", "October 7, 2026"], ["Open weights", "No"], ["API model ID", "claude-haiku-5-5"]],
    access: {
      columns: accessColumns,
      rows: idRows("claude-haiku-5-5", "anthropic.claude-haiku-5-5", "anthropic/claude-haiku-5.5", "$0.10", "$0.50"),
      line: "Prices shown are for prompts up to 100K tokens. Cloud partners set their own prices.",
    },
    free: {
      answer: "In the Claude app, yes. Claude Haiku 5.5 is on the Claude Free plan. The API is paid, but at $0.10 per million input tokens it is close to free for small jobs.",
      rows: ["On the Claude Free plan", "1,000 support replies cost about $0.40", "Small free test credits on new API accounts"],
    },
    compare: {
      rows: [
        { name: "Claude Haiku 5.5", slug: "claude-haiku-5-5", input: "$0.10", output: "$0.50", context: "1M", why: "Cheapest Claude, fastest replies", current: true },
        { name: "Claude Sonnet 5.5", slug: "claude-sonnet-5-5", input: "$2.00", output: "$10.00", context: "1M", why: "Smarter, 20× the price" },
        { name: "Claude Haiku 4.5", input: "$1.00", output: "$5.00", context: "200K", why: "Older, 10× the price" },
        { name: "GPT-6 Luna", slug: "gpt-6-luna", input: "$0.10", output: "$0.50", context: "1.05M", why: "Same price, OpenAI stack" },
        { name: "Gemini 3.8 Flash", slug: "gemini-3-8-flash", input: "$0.75", output: "$3.75", context: "1M", why: "Google's fast model" },
      ],
      line: "Haiku 5.5 ties GPT-6 Luna on list price for short prompts. Above 100K prompt tokens its rate rises 5×, so long inputs change the math.",
    },
    fit: {
      good: ["Sorting and routing tickets", "Pulling fields from invoices and forms", "Scoring leads at volume"],
      bad: ["Prompts over 100K tokens", "Hard multi-step reasoning", "Long agent runs with many tools"],
      take: "We run Haiku 5.5 on the high-volume steps of a workflow, like reading documents and tagging leads, and pass hard cases to Sonnet.",
      links: [services.documents, services.leads],
    },
    versions: {
      heading: "Claude Haiku versions",
      rows: [
        { name: "Claude Haiku 5.5", slug: "claude-haiku-5-5", released: "2026-10-07", input: "$0.10", output: "$0.50", status: "Latest" },
        { name: "Claude Haiku 4.5", released: "2025-10-15", input: "$1", output: "$5", status: "Previous" },
      ],
      line: "Haiku 5.5 costs a tenth of Haiku 4.5 for short prompts. It counts about 30% more tokens for the same text.",
    },
    faqs: [
      { question: "How much does Claude Haiku 5.5 cost?", answer: "Claude Haiku 5.5 costs $0.10 per million input tokens and $0.50 per million output tokens when the prompt is 100,000 tokens or less. Longer prompts cost $0.50 and $2.50. The Batch API halves both tiers. Claude Haiku 5.5 is the cheapest model Anthropic sells." },
      { question: "Is Claude Haiku 5.5 free?", answer: "Claude Haiku 5.5 is available on the Claude Free plan in the app. The API is paid per token, but it is very cheap. Answering 1,000 support emails a month with Claude Haiku 5.5 costs about $0.40. New API accounts also get small free test credits." },
      { question: "What is the Claude Haiku 5.5 context window?", answer: "Claude Haiku 5.5 has a 1 million token context window and writes up to 128,000 tokens per reply. Using the full window costs more. Once a prompt passes 100,000 tokens, the whole Claude Haiku 5.5 request is billed at five times the base rate." },
      { question: "When was Claude Haiku 5.5 released?", answer: "Anthropic released Claude Haiku 5.5 on October 7, 2026. It replaced Claude Haiku 4.5 and cut the base price from $1 and $5 to $0.10 and $0.50 per million tokens. Claude Haiku 5.5 has a June 2026 knowledge cutoff and stays available until at least October 7, 2027." },
      { question: "What is the Claude Haiku 5.5 API model ID?", answer: "The Claude Haiku 5.5 model ID is claude-haiku-5-5 on the Claude API, Google Cloud and Microsoft Foundry. On Amazon Bedrock it is anthropic.claude-haiku-5-5. On OpenRouter the Claude Haiku 5.5 ID is anthropic/claude-haiku-5.5. Each ID points to one fixed version." },
      { question: "Claude Haiku 5.5 vs GPT-6 Luna, which is cheaper?", answer: "On short prompts they cost the same. Claude Haiku 5.5 and GPT-6 Luna both charge $0.10 input and $0.50 output per million tokens. For 1,000 support emails a month, both come to about $0.40. Claude Haiku 5.5 gets five times pricier above 100,000 prompt tokens." },
    ],
    cta: { heading: "Want Claude Haiku 5.5 working inside your tools?", body: "We build AI automations that handle high-volume work so your business can grow without adding headcount. On the call we tell you which model fits and what it costs at your volume.", service: "document-processing", link: services.documents },
    related: [
      { slug: "claude-sonnet-5-5", line: "$2 / $10. Smarter, still fast." },
      { slug: "gpt-6-luna", line: "OpenAI's low-cost model." },
      { slug: "gemini-3-8-flash", line: "Google's fast model." },
    ],
  },
];
