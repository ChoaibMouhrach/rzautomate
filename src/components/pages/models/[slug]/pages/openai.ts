import { services, type ModelPageContent } from "../types";

const openaiSource = "Prices checked November 14, 2026 on OpenAI's pricing page.";
const accessColumns = ["Platform", "Model ID", "Input $/1M", "Output $/1M"];
const tiles = (input: string, output: string) => [
  { label: "Input", value: input },
  { label: "Output", value: output },
  { label: "Context", value: "1.05M tokens" },
  { label: "Max output", value: "128K tokens" },
];
const longRows = (input: string, output: string) => [["Input over 272K tokens", input], ["Output over 272K tokens", output]];

export const openaiPages: ModelPageContent[] = [
  {
    slug: "gpt-6-astra",
    title: "GPT-6 Astra API Pricing, Context Window & Specs",
    description: "GPT-6 Astra costs $10 per 1M input and $50 per 1M output tokens. See the 1.05M context window, long-context rates, a cost calculator and cheaper options.",
    h1: "GPT-6 Astra API pricing and specs",
    summary: "GPT-6 Astra is OpenAI's most capable model for hard reasoning, coding and agent work. GPT-6 Astra costs $10 per million input tokens and $50 per million output tokens. It reads up to 1.05 million tokens and writes up to 128,000. Prompts over 272K tokens are billed at higher rates.",
    tiles: tiles("$10 / 1M", "$50 / 1M"),
    pricing: {
      columns: ["Price type", "Per 1M tokens"],
      rows: [["Input", "$10.00"], ["Cached input", "$1.00"], ["Cache write (30 min)", "$12.50"], ["Cache write (12 hours)", "$25.00"], ["Output", "$50.00"], ["Batch or Flex input", "$5.00"], ["Batch or Flex output", "$25.00"], ...longRows("$20.00", "$75.00"), ["Fast mode input", "$20.00"], ["Fast mode output", "$100.00"]],
      plain: "Output costs 5× input, so long answers drive the bill. Once a prompt passes 272K tokens, the whole request moves to the higher rate.",
      source: openaiSource,
    },
    calc: {
      intro: "Pick a job or type your own numbers. We use the standard rate.",
      note: "Uses standard rates. Ignores tax, batch discounts and long-context surcharges.",
      compare: ["claude-fable-5-2", "claude-opus-5-5", "gpt-6-1-sol"],
      service: "agent-development",
    },
    specs: [["Context window", "1,050,000 tokens"], ["Max output", "128,000 tokens"], ["Input types", "Text, images"], ["Output types", "Text"], ["Tool calling", "Yes, through the Responses API"], ["Structured output", "Yes"], ["Reasoning", "Always on, five effort levels from low to max"], ["Knowledge cutoff", "April 30, 2026"], ["Release date", "September 3, 2026"], ["Open weights", "No"], ["API model ID", "gpt-6-astra"]],
    access: {
      columns: accessColumns,
      rows: [["OpenAI API", "gpt-6-astra", "$10.00", "$50.00"], ["Amazon Bedrock", "openai.gpt-6-astra", "—", "—"], ["Microsoft Azure", "—", "$10.00", "$50.00"], ["Google Cloud (private preview)", "gpt-6-astra", "—", "—"], ["OpenRouter", "openai/gpt-6-astra", "$10.00", "$50.00"]],
      line: "Most teams start on the OpenAI API. Bedrock or Azure make sense if your data and billing already live there.",
    },
    free: {
      answer: "No. GPT-6 Astra has no free API tier and is not on ChatGPT Free or Go. You pay per token on the API, or use it inside a paid ChatGPT plan.",
      rows: ["No free API tier", "ChatGPT Plus gets capped use", "Batch and Flex cut the price in half"],
    },
    compare: {
      rows: [
        { name: "GPT-6 Astra", slug: "gpt-6-astra", input: "$10.00", output: "$50.00", context: "1.05M", why: "OpenAI's top model for the hardest work", current: true },
        { name: "GPT-6.1 Sol", slug: "gpt-6-1-sol", input: "$2.00", output: "$10.00", context: "1.05M", why: "Near-Astra results at a fifth of the price" },
        { name: "Claude Fable 5.2", slug: "claude-fable-5-2", input: "$8.00", output: "$40.00", context: "1M", why: "Anthropic's top tier, a bit cheaper" },
        { name: "Claude Opus 5.5", slug: "claude-opus-5-5", input: "$4.00", output: "$20.00", context: "1M", why: "Strong agent and coding work for less" },
        { name: "Grok 4.7", slug: "grok-4-7", input: "$2.00", output: "$6.00", context: "500K", why: "Low output price for long answers" },
      ],
      line: "GPT-6 Astra is the priciest model here. Test GPT-6.1 Sol first and move up only where Sol falls short.",
    },
    fit: {
      good: ["Long, multi-step agent tasks", "Hard coding and debugging", "High-stakes analysis where errors cost money"],
      bad: ["High-volume email or ticket replies", "Simple extraction and tagging", "Fast chat where speed matters most"],
      take: "We use GPT-6 Astra for the one hard step in a workflow, like planning or a final check, and run the rest on cheaper models.",
      links: [services.agent],
    },
    versions: {
      heading: "OpenAI flagship versions",
      rows: [
        { name: "GPT-6 Astra", slug: "gpt-6-astra", released: "Sep 2026", input: "$10.00", output: "$50.00", status: "Latest" },
        { name: "GPT-5.6 Sol", released: "Jun 2026 (preview)", input: "$4.00", output: "$20.00", status: "Previous" },
        { name: "GPT-5.5", released: "—", input: "$5.00", output: "$30.00", status: "Previous" },
      ],
      line: "GPT-6 Astra replaced GPT-5.6 Sol as OpenAI's flagship. GPT-5.6 Sol is still on sale at a promo rate until late November 2026.",
    },
    faqs: [
      { question: "How much does GPT-6 Astra cost?", answer: "GPT-6 Astra costs $10 per million input tokens and $50 per million output tokens on the OpenAI API. Cached input is $1 per million. Batch and Flex jobs cost half. If a prompt goes over 272K tokens, GPT-6 Astra bills the whole request at $20 input and $75 output." },
      { question: "Is GPT-6 Astra free?", answer: "No, GPT-6 Astra is not free. OpenAI does not offer it on the free API tier, and ChatGPT Free and Go users do not get it. ChatGPT Plus includes capped use in ChatGPT Work and Codex. For full access to GPT-6 Astra you pay per token on the API." },
      { question: "What is the GPT-6 Astra context window?", answer: "The GPT-6 Astra context window is 1,050,000 tokens, and it can write up to 128,000 tokens in one reply. That fits whole codebases or long contract sets. Keep prompts under 272K tokens when you can, because GPT-6 Astra charges double input rates above that line." },
      { question: "When was GPT-6 Astra released?", answer: "OpenAI released GPT-6 Astra on September 3, 2026, as its new flagship model. GPT-6 Astra took over from GPT-5.6 Sol at the top of the lineup. Its knowledge cutoff is April 30, 2026, so it has no built-in knowledge of later events without web search." },
      { question: "What is the GPT-6 Astra API model ID?", answer: "The GPT-6 Astra API model ID is gpt-6-astra. On Amazon Bedrock it is openai.gpt-6-astra, and on OpenRouter it is openai/gpt-6-astra. Use the Responses API if you need GPT-6 Astra to call tools, because tool calling does not work through Chat Completions." },
      { question: "GPT-6 Astra vs Claude Opus 5.5, which is cheaper?", answer: "Claude Opus 5.5 is cheaper. It costs $4 input and $20 output per million tokens, while GPT-6 Astra costs $10 and $50. For 1,000 support emails a month, GPT-6 Astra comes to about $40 and Claude Opus 5.5 to about $16. Test both on your own tasks before choosing." },
    ],
    cta: { heading: "Want GPT-6 Astra working inside your tools?", body: "We build AI agents and automations that let your business take on more work without adding headcount. On the call we tell you where GPT-6 Astra is worth its price and what it would cost at your volume.", service: "agent-development", link: services.agent },
    related: [
      { slug: "gpt-6-1-sol", line: "Near-Astra quality at $2 / $10" },
      { slug: "claude-opus-5-5", line: "Anthropic's agent workhorse" },
      { slug: "claude-fable-5-2", line: "Anthropic's top model" },
    ],
  },
  {
    slug: "gpt-6-1-sol",
    title: "GPT-6.1 Sol API Pricing, Context Window & Specs",
    description: "GPT-6.1 Sol costs $2 per 1M input and $10 per 1M output tokens. See the 1.05M context window, long-context rates, a cost calculator and alternatives.",
    h1: "GPT-6.1 Sol API pricing and specs",
    summary: "GPT-6.1 Sol is OpenAI's balanced model for complex work, with results close to GPT-6 Astra. GPT-6.1 Sol costs $2 per million input tokens and $10 per million output tokens. It reads up to 1.05 million tokens and writes up to 128,000. Prompts over 272K tokens cost more.",
    tiles: tiles("$2 / 1M", "$10 / 1M"),
    pricing: {
      columns: ["Price type", "Per 1M tokens"],
      rows: [["Input", "$2.00"], ["Cached input", "$0.10"], ["Cache write (30 min)", "$2.50"], ["Cache write (12 hours)", "$5.00"], ["Output", "$10.00"], ["Batch or Flex input", "$1.00"], ["Batch or Flex output", "$5.00"], ...longRows("$4.00", "$15.00"), ["Fast mode input", "$4.00"], ["Fast mode output", "$20.00"]],
      plain: "Output costs 5× input, so long answers drive the bill. Cached input is 95% off, which pays off for agents that reuse the same long prompt.",
      source: openaiSource,
    },
    calc: {
      intro: "Pick a job or type your own numbers. We use the standard rate.",
      note: "Uses standard rates. Ignores tax, batch discounts and long-context surcharges.",
      compare: ["claude-sonnet-5-5", "grok-4-7", "gpt-6-1-terra"],
      service: "agent-development",
    },
    specs: [["Context window", "1,050,000 tokens"], ["Max output", "128,000 tokens"], ["Input types", "Text, images"], ["Output types", "Text"], ["Tool calling", "Yes, through the Responses API"], ["Structured output", "Yes"], ["Reasoning", "Always on, five effort levels from low to max"], ["Knowledge cutoff", "April 30, 2026"], ["Release date", "September 29, 2026"], ["Open weights", "No"], ["API model ID", "gpt-6.1-sol"]],
    access: {
      columns: accessColumns,
      rows: [["OpenAI API", "gpt-6.1-sol", "$2.00", "$10.00"], ["Amazon Bedrock (global)", "openai.gpt-6.1-sol", "$2.00", "$10.00"], ["Amazon Bedrock (US region)", "us.openai.gpt-6.1-sol", "$2.20", "$11.00"], ["Microsoft Azure", "gpt-6.1-sol", "$2.00", "$10.00"], ["Google Cloud (private preview)", "gpt-6.1-sol", "—", "—"], ["OpenRouter", "openai/gpt-6.1-sol", "$2.00", "$10.00"]],
      line: "The price is the same almost everywhere. Keeping data in one region adds about 10%.",
    },
    free: {
      answer: "No. GPT-6.1 Sol has no free API tier and is not on ChatGPT Free or Go. Paid ChatGPT plans include it in ChatGPT Work and Codex.",
      rows: ["No free API tier", "Included in ChatGPT Plus and up", "Batch and Flex cut the price in half"],
    },
    compare: {
      rows: [
        { name: "GPT-6.1 Sol", slug: "gpt-6-1-sol", input: "$2.00", output: "$10.00", context: "1.05M", why: "Near-Astra results at a mid price", current: true },
        { name: "GPT-6 Astra", slug: "gpt-6-astra", input: "$10.00", output: "$50.00", context: "1.05M", why: "For the hardest tasks Sol misses" },
        { name: "GPT-6.1 Terra", slug: "gpt-6-1-terra", input: "$1.00", output: "$5.00", context: "1.05M", why: "Half the price for clear, scoped jobs" },
        { name: "Claude Sonnet 5.5", slug: "claude-sonnet-5-5", input: "$2.00", output: "$10.00", context: "1M", why: "Same price, Anthropic's mid model" },
        { name: "Grok 4.7", slug: "grok-4-7", input: "$2.00", output: "$6.00", context: "500K", why: "Cheaper output for long replies" },
      ],
      line: "GPT-6.1 Sol and Claude Sonnet 5.5 cost the same, so pick on test results. If the task is simple, GPT-6.1 Terra does it for half.",
    },
    fit: {
      good: ["AI agents that plan and use tools", "Coding and technical work", "Support replies that need judgment"],
      bad: ["Huge volumes of simple tasks", "Instant replies with no reasoning", "The very hardest problems"],
      take: "GPT-6.1 Sol is our default OpenAI model for client agents. We drop to GPT-6.1 Terra or GPT-6 Luna for steps that don't need it.",
      links: [services.agent],
    },
    versions: {
      heading: "Sol versions",
      rows: [
        { name: "GPT-6.1 Sol", slug: "gpt-6-1-sol", released: "Sep 29, 2026", input: "$2.00", output: "$10.00", status: "Latest" },
        { name: "GPT-6 Sol", released: "Sep 22, 2026", input: "$2.00", output: "$10.00", status: "Previous" },
        { name: "GPT-5.6 Sol", released: "Jun 2026 (preview)", input: "$4.00", output: "$20.00", status: "Previous" },
      ],
      line: "GPT-6.1 Sol came out one week after GPT-6 Sol at the same price, with cheaper cached input. If you use gpt-6-sol, switch the ID and change any 'none' effort to 'low'.",
    },
    faqs: [
      { question: "How much does GPT-6.1 Sol cost?", answer: "GPT-6.1 Sol costs $2 per million input tokens and $10 per million output tokens on the OpenAI API. Cached input is $0.10 per million. Batch and Flex jobs cost half. If a prompt goes over 272K tokens, GPT-6.1 Sol bills the whole request at $4 input and $15 output." },
      { question: "Is GPT-6.1 Sol free?", answer: "No, GPT-6.1 Sol is not free. It is not on OpenAI's free API tier, and ChatGPT Free and Go users do not get it. Paid ChatGPT plans include GPT-6.1 Sol in ChatGPT Work and Codex. For apps and automations, you pay per token on the API." },
      { question: "What is the GPT-6.1 Sol context window?", answer: "The GPT-6.1 Sol context window is 1,050,000 tokens, and it can write up to 128,000 tokens in one reply. In ChatGPT Work and Codex the default is 500K. Keep API prompts under 272K tokens when you can, since GPT-6.1 Sol charges double input rates above that." },
      { question: "When was GPT-6.1 Sol released?", answer: "OpenAI released GPT-6.1 Sol on September 29, 2026, one week after GPT-6 Sol. GPT-6.1 Sol keeps the same $2 and $10 prices but cuts cached input to $0.10. Its knowledge cutoff is April 30, 2026, the same as GPT-6 Astra." },
      { question: "What is the GPT-6.1 Sol API model ID?", answer: "The GPT-6.1 Sol API model ID is gpt-6.1-sol. On Amazon Bedrock it is openai.gpt-6.1-sol, and on OpenRouter it is openai/gpt-6.1-sol. Use the Responses API if you need GPT-6.1 Sol to call tools, because Chat Completions does not support tool calling for this model." },
      { question: "GPT-6.1 Sol vs Claude Sonnet 5.5, which is cheaper?", answer: "They cost the same. GPT-6.1 Sol and Claude Sonnet 5.5 both charge $2 input and $10 output per million tokens. For 1,000 support emails a month, each comes to about $8. Cached input and output length on your real tasks will decide which one is cheaper for you." },
    ],
    cta: { heading: "Want GPT-6.1 Sol working inside your tools?", body: "We build AI agents and automations that let your business grow without adding headcount. On the call we tell you if GPT-6.1 Sol is the right model and what it would cost at your volume.", service: "agent-development", link: services.agent },
    related: [
      { slug: "gpt-6-astra", line: "OpenAI's top model" },
      { slug: "gpt-6-1-terra", line: "Half the price for scoped tasks" },
      { slug: "claude-sonnet-5-5", line: "Same price, different strengths" },
    ],
  },
  {
    slug: "gpt-6-1-terra",
    title: "GPT-6.1 Terra API Pricing, Context Window & Specs",
    description: "GPT-6.1 Terra costs $1 per 1M input and $5 per 1M output tokens. See the 1.05M context window, long-context rates, a cost calculator and alternatives.",
    h1: "GPT-6.1 Terra API pricing and specs",
    summary: "GPT-6.1 Terra is OpenAI's fast mid-size model for visual reasoning, computer use and clear writing. GPT-6.1 Terra costs $1 per million input tokens and $5 per million output tokens, half the price of GPT-6.1 Sol. It reads up to 1.05 million tokens and writes up to 128,000.",
    tiles: tiles("$1 / 1M", "$5 / 1M"),
    pricing: {
      columns: ["Price type", "Per 1M tokens"],
      rows: [["Input", "$1.00"], ["Cached input", "$0.05"], ["Cache write (30 min)", "$1.25"], ["Cache write (12 hours)", "$2.50"], ["Output", "$5.00"], ["Batch or Flex input", "$0.50"], ["Batch or Flex output", "$2.50"], ...longRows("$2.00", "$7.50"), ["Fast mode input", "$2.00"], ["Fast mode output", "$10.00"]],
      plain: "Output costs 5× input, so long answers drive the bill. Batch jobs, like overnight document runs, cost half.",
      source: openaiSource,
    },
    calc: {
      intro: "Pick a job or type your own numbers. We use the standard rate.",
      note: "Uses standard rates. Ignores tax, batch discounts and long-context surcharges.",
      compare: ["gpt-6-1-sol", "gemini-3-8-flash", "gpt-6-luna"],
      service: "document-processing",
    },
    specs: [["Context window", "1,050,000 tokens"], ["Max output", "128,000 tokens"], ["Input types", "Text, images"], ["Output types", "Text"], ["Tool calling", "Yes, through the Responses API"], ["Structured output", "Yes"], ["Reasoning", "Optional, six effort levels from none to max"], ["Knowledge cutoff", "June 1, 2026"], ["Release date", "October 26, 2026"], ["Open weights", "No"], ["API model ID", "gpt-6.1-terra"]],
    access: {
      columns: accessColumns,
      rows: [["OpenAI API", "gpt-6.1-terra", "$1.00", "$5.00"], ["Amazon Bedrock", "openai.gpt-6.1-terra", "$1.10", "$5.50"], ["Microsoft Azure", "—", "$1.00", "$5.00"], ["Google Cloud (private preview)", "gpt-6.1-terra", "—", "—"], ["OpenRouter", "openai/gpt-6.1-terra", "$1.00", "$5.00"]],
      line: "The OpenAI API is the cheapest route. Regional endpoints on Bedrock and Azure add about 10%.",
    },
    free: {
      answer: "No. GPT-6.1 Terra has no free API tier. It comes with paid ChatGPT plans in ChatGPT Work and Codex.",
      rows: ["No free API tier", "Included in ChatGPT Plus and up", "Batch and Flex cut the price in half"],
    },
    compare: {
      rows: [
        { name: "GPT-6.1 Terra", slug: "gpt-6-1-terra", input: "$1.00", output: "$5.00", context: "1.05M", why: "Visual and computer-use tasks at a low price", current: true },
        { name: "GPT-6.1 Sol", slug: "gpt-6-1-sol", input: "$2.00", output: "$10.00", context: "1.05M", why: "Deeper reasoning and harder coding" },
        { name: "GPT-6 Luna", slug: "gpt-6-luna", input: "$0.10", output: "$0.50", context: "1.05M", why: "Ten times cheaper for simple volume work" },
        { name: "Gemini 3.8 Flash", slug: "gemini-3-8-flash", input: "$0.75", output: "$3.75", context: "1M", why: "Slightly cheaper, price rises in January" },
        { name: "Qwen3.8-Max", slug: "qwen-3-8-max", input: "$2.00", output: "$6.00", context: "1M", why: "Strong rival from Alibaba" },
      ],
      line: "GPT-6.1 Terra sits between Sol and Luna. Use it when Luna isn't accurate enough and Sol is more than the job needs.",
    },
    fit: {
      good: ["Reading invoices, forms and screenshots", "Agents that click through web apps", "Clear customer-facing writing"],
      bad: ["Hard multi-step reasoning", "Large codebases and tricky bugs", "Millions of tiny tagging calls"],
      take: "We reach for GPT-6.1 Terra on document and screen-reading steps, where it is accurate enough and costs half of GPT-6.1 Sol.",
      links: [services.documents],
    },
    versions: {
      heading: "Terra versions",
      rows: [
        { name: "GPT-6.1 Terra", slug: "gpt-6-1-terra", released: "Oct 26, 2026", input: "$1.00", output: "$5.00", status: "Latest" },
        { name: "GPT-5.6 Terra", released: "Jun 2026 (preview)", input: "$2.00", output: "$12.00", status: "Previous" },
      ],
      line: "There was no GPT-6 Terra. GPT-6.1 Terra follows GPT-5.6 Terra and costs half as much on input.",
    },
    faqs: [
      { question: "How much does GPT-6.1 Terra cost?", answer: "GPT-6.1 Terra costs $1 per million input tokens and $5 per million output tokens on the OpenAI API. Cached input is $0.05 per million. Batch and Flex jobs cost half. If a prompt goes over 272K tokens, GPT-6.1 Terra bills the whole request at $2 input and $7.50 output." },
      { question: "Is GPT-6.1 Terra free?", answer: "No, GPT-6.1 Terra is not free. OpenAI does not offer it on the free API tier. Paid ChatGPT plans, from Plus up, include GPT-6.1 Terra in ChatGPT Work and Codex. For apps and automations you pay per token, starting at $1 per million input tokens." },
      { question: "What is the GPT-6.1 Terra context window?", answer: "The GPT-6.1 Terra context window is 1,050,000 tokens, and it can write up to 128,000 tokens in one reply. That is the same as GPT-6.1 Sol and GPT-6 Astra. Keep prompts under 272K tokens when you can, because GPT-6.1 Terra charges double input rates above that." },
      { question: "When was GPT-6.1 Terra released?", answer: "OpenAI released GPT-6.1 Terra on October 26, 2026. GPT-6.1 Terra is the newest model in the GPT-6 lineup, with a knowledge cutoff of June 1, 2026. It replaces GPT-5.6 Terra as OpenAI's balanced everyday model and costs half as much on input." },
      { question: "What is the GPT-6.1 Terra API model ID?", answer: "The GPT-6.1 Terra API model ID is gpt-6.1-terra. On Amazon Bedrock it is openai.gpt-6.1-terra, and on OpenRouter it is openai/gpt-6.1-terra. Use the Responses API if you need GPT-6.1 Terra to call tools, because Chat Completions does not support tool calling for it." },
      { question: "GPT-6.1 Terra vs GPT-6.1 Sol, which is cheaper?", answer: "GPT-6.1 Terra is cheaper. It costs $1 input and $5 output per million tokens, half of GPT-6.1 Sol at $2 and $10. For 1,000 support emails a month, GPT-6.1 Terra comes to about $4 and GPT-6.1 Sol to about $8. Sol is the stronger pick for hard reasoning." },
    ],
    cta: { heading: "Want GPT-6.1 Terra working inside your tools?", body: "We build AI agents and automations that let your business handle more documents and requests without adding headcount. On the call we tell you if GPT-6.1 Terra fits your work and what it would cost at your volume.", service: "document-processing", link: services.documents },
    related: [
      { slug: "gpt-6-1-sol", line: "More reasoning at $2 / $10" },
      { slug: "gpt-6-luna", line: "OpenAI's cheapest model" },
      { slug: "gemini-3-8-flash", line: "Google's fast mid-price model" },
    ],
  },
  {
    slug: "gpt-6-luna",
    title: "GPT-6 Luna API Pricing, Context Window & Specs",
    description: "GPT-6 Luna costs $0.10 per 1M input and $0.50 per 1M output tokens. See the 1.05M context window, long-context rates, a cost calculator and alternatives.",
    h1: "GPT-6 Luna API pricing and specs",
    summary: "GPT-6 Luna is OpenAI's cheapest and fastest GPT-6 model, built for focused, high-volume tasks. GPT-6 Luna costs $0.10 per million input tokens and $0.50 per million output tokens. It reads up to 1.05 million tokens, writes up to 128,000, and can skip reasoning for instant replies.",
    tiles: tiles("$0.10 / 1M", "$0.50 / 1M"),
    pricing: {
      columns: ["Price type", "Per 1M tokens"],
      rows: [["Input", "$0.10"], ["Cached input", "$0.01"], ["Cache write (30 min)", "$0.125"], ["Cache write (12 hours)", "$0.25"], ["Output", "$0.50"], ["Batch or Flex input", "$0.05"], ["Batch or Flex output", "$0.25"], ...longRows("$0.20", "$0.75"), ["Fast mode input", "$0.20"], ["Fast mode output", "$1.00"]],
      plain: "Output costs 5× input, so long answers drive the bill. Even so, a thousand typical requests cost well under a dollar.",
      source: openaiSource,
    },
    calc: {
      intro: "Pick a job or type your own numbers. We use the standard rate.",
      note: "Uses standard rates. Ignores tax, batch discounts and long-context surcharges.",
      compare: ["claude-haiku-5-5", "gemini-3-8-flash", "gpt-6-1-terra"],
      service: "support-agents",
    },
    specs: [["Context window", "1,050,000 tokens"], ["Max input", "922,000 tokens"], ["Max output", "128,000 tokens"], ["Input types", "Text, images"], ["Output types", "Text"], ["Tool calling", "Yes, best through the Responses API"], ["Structured output", "Yes"], ["Reasoning", "Optional, six effort levels from none to max"], ["Knowledge cutoff", "May 18, 2026"], ["Release date", "September 22, 2026"], ["Open weights", "No"], ["API model ID", "gpt-6-luna"]],
    access: {
      columns: accessColumns,
      rows: [["OpenAI API", "gpt-6-luna", "$0.10", "$0.50"], ["Amazon Bedrock (global)", "openai.gpt-6-luna", "$0.10", "$0.50"], ["Microsoft Azure", "—", "$0.10", "$0.50"], ["Google Cloud (private preview)", "gpt-6-luna", "—", "—"], ["OpenRouter", "openai/gpt-6-luna", "$0.10", "$0.50"]],
      line: "The price is the same on every major platform. Regional endpoints add 10%.",
    },
    free: {
      answer: "Yes in ChatGPT, no on the API. ChatGPT Free and Go users get GPT-6 Luna at no cost. API use is paid per token, but it is very cheap.",
      rows: ["Free in ChatGPT Free and Go", "No free API tier", "Batch and Flex cut the price in half"],
    },
    compare: {
      rows: [
        { name: "GPT-6 Luna", slug: "gpt-6-luna", input: "$0.10", output: "$0.50", context: "1.05M", why: "Lowest OpenAI price for volume work", current: true },
        { name: "GPT-6.1 Terra", slug: "gpt-6-1-terra", input: "$1.00", output: "$5.00", context: "1.05M", why: "Better with images and screens" },
        { name: "GPT-5.6 Luna", input: "$0.20", output: "$1.20", context: "1.05M", why: "Older Luna, now twice the price" },
        { name: "Claude Haiku 5.5", slug: "claude-haiku-5-5", input: "$0.10", output: "$0.50", context: "1M", why: "Same price under 100K tokens" },
        { name: "Gemini 3.8 Flash", slug: "gemini-3-8-flash", input: "$0.75", output: "$3.75", context: "1M", why: "Google's fast model, pricier" },
      ],
      line: "GPT-6 Luna and Claude Haiku 5.5 tie on price for short prompts. On long prompts GPT-6 Luna stays cheaper, because Haiku charges 5× past 100K tokens.",
    },
    fit: {
      good: ["Sorting and tagging emails or tickets", "Scoring and enriching leads", "Short, scripted support replies"],
      bad: ["Complex agents with many steps", "Messy documents and handwriting", "Hard coding work"],
      take: "We use GPT-6 Luna for the high-volume steps in client workflows, like routing and tagging, and hand the hard cases to GPT-6.1 Sol.",
      links: [services.support],
    },
    versions: {
      heading: "Luna versions",
      rows: [
        { name: "GPT-6 Luna", slug: "gpt-6-luna", released: "Sep 22, 2026", input: "$0.10", output: "$0.50", status: "Latest" },
        { name: "GPT-5.6 Luna", released: "Jun 2026 (preview)", input: "$0.20", output: "$1.20", status: "Previous" },
      ],
      line: "GPT-6 Luna cut the price in half from GPT-5.6 Luna. OpenAI has not released a GPT-6.1 Luna.",
    },
    faqs: [
      { question: "How much does GPT-6 Luna cost?", answer: "GPT-6 Luna costs $0.10 per million input tokens and $0.50 per million output tokens on the OpenAI API. Cached input is $0.01 per million. Batch and Flex jobs cost half. If a prompt goes over 272K tokens, GPT-6 Luna bills the whole request at $0.20 input and $0.75 output." },
      { question: "Is GPT-6 Luna free?", answer: "GPT-6 Luna is free inside ChatGPT for Free and Go users. On the API it is not free, because OpenAI has no free tier for it. API use is cheap, though. A thousand support emails on GPT-6 Luna cost about $0.40 at standard rates." },
      { question: "What is the GPT-6 Luna context window?", answer: "The GPT-6 Luna context window is 1,050,000 tokens. Up to 922,000 of those can be input, and GPT-6 Luna can write up to 128,000 tokens in one reply. Above 272K input tokens the whole request costs more, so trim long prompts where you can." },
      { question: "When was GPT-6 Luna released?", answer: "OpenAI released GPT-6 Luna on September 22, 2026, together with GPT-6 Sol. GPT-6 Luna halved the price of GPT-5.6 Luna. Its knowledge cutoff is May 18, 2026. OpenAI has not released a GPT-6.1 Luna, so GPT-6 Luna is still the newest Luna model." },
      { question: "What is the GPT-6 Luna API model ID?", answer: "The GPT-6 Luna API model ID is gpt-6-luna. On Amazon Bedrock it is openai.gpt-6-luna, called through global.openai.gpt-6-luna, and on OpenRouter it is openai/gpt-6-luna. For tool calls with reasoning turned on, use GPT-6 Luna through the Responses API, because Chat Completions only supports tools with reasoning off." },
      { question: "GPT-6 Luna vs Claude Haiku 5.5, which is cheaper?", answer: "For short prompts they cost the same, $0.10 input and $0.50 output per million tokens. For 1,000 support emails a month, both come to about $0.40. Past 100K tokens, Claude Haiku 5.5 charges five times more, so GPT-6 Luna is cheaper for long documents." },
    ],
    cta: { heading: "Want GPT-6 Luna working inside your tools?", body: "We build AI agents and automations that let your business answer more customers without adding headcount. On the call we tell you if GPT-6 Luna can handle your volume and what it would cost each month.", service: "support-agents", link: services.support },
    related: [
      { slug: "claude-haiku-5-5", line: "Same price from Anthropic" },
      { slug: "gpt-6-1-terra", line: "Next step up from OpenAI" },
      { slug: "gemini-3-8-flash", line: "Google's fast model" },
    ],
  },
];
