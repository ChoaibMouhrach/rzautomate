import { services, type ModelPageContent } from "../types";

const googleSource = "Prices checked November 14, 2026 on Google's Gemini API pricing page. Per 1M tokens, USD.";
const accessColumns = ["Platform", "Model ID", "Input $/1M", "Output $/1M"];
const dec1 = [{ label: "From Dec 1", input: 4, output: 20, cached: 0.2 }];
const geminiTiles = [
  { label: "Input", value: "$2 / 1M", sub: "$4 from Dec 1" },
  { label: "Output", value: "$10 / 1M", sub: "$20 from Dec 1" },
  { label: "Context", value: "1M tokens" },
  { label: "Max output", value: "65K tokens", sub: "Up to 1M with long decode" },
];
const geminiPricing = (plain: string) => ({
  columns: ["Price type", "Until Nov 30", "From Dec 1"],
  rows: [["Input", "$2.00", "$4.00"], ["Output (incl. thinking)", "$10.00", "$20.00"], ["Cached input", "$0.10", "$0.20"], ["Batch input", "$1.00", "$2.00"], ["Batch output", "$5.00", "$10.00"], ["Priority input", "$3.60", "$7.20"], ["Priority output", "$18.00", "$36.00"]],
  plain,
  source: googleSource,
});
const geminiVersions = (line: string) => ({
  heading: "Gemini 4 versions",
  rows: [
    { name: "Gemini 4 Hydrogen", released: "2026-11-12", input: "$1.50", output: "$7.50", status: "Latest" },
    { name: "Gemini 4 Carbon", slug: "gemini-4-carbon", released: "2026-11-10", input: "$2.00", output: "$10.00", status: "Latest" },
    { name: "Gemini 4 Argon", slug: "gemini-4-argon", released: "2026-10-13", input: "$2.00", output: "$10.00", status: "Latest" },
  ],
  line,
});
const geminiSpecs = (reasoning: string, release: string, id: string): [string, string][] => [["Context window", "1,048,576 tokens (input, thinking and output share it)"], ["Max output", "65,536 tokens. Up to 1M with long decode"], ["Input types", "Text, images, audio, video, PDF"], ["Output types", "Text"], ["Tool calling", "Yes"], ["Structured output", "Yes"], ["Reasoning", reasoning], ["Knowledge cutoff", "March 2026"], ["Release date", release], ["Open weights", "No"], ["API model ID", id]];

export const googleXaiPages: ModelPageContent[] = [
  {
    slug: "gemini-4-argon",
    title: "Gemini 4 Argon API Pricing, Context Window & Specs",
    description: "Gemini 4 Argon costs $2 per 1M input and $10 per 1M output tokens until Nov 30, then $4 and $20. See context window, specs and a cost calculator.",
    h1: "Gemini 4 Argon API pricing and specs",
    summary: "Gemini 4 Argon is Google's flagship Gemini 4 model. Gemini 4 Argon costs $2 per 1M input tokens and $10 per 1M output tokens until November 30, 2026, then $4 and $20 from December 1. It reads text, images, audio and video, with a 1M token context window.",
    tiles: geminiTiles,
    pricing: { ...geminiPricing("Output costs 5× input. Thinking tokens bill as output, so hard prompts cost more than they look. All rates double on December 1."), extra: "Same price at any prompt size. No long-context surcharge." },
    calc: {
      intro: "Pick a job or enter your own numbers. We show what Gemini 4 Argon would cost each month.",
      note: "Uses standard rates. Ignores tax, batch discounts and thinking tokens beyond your output estimate.",
      compare: ["claude-opus-5-5", "gpt-6-1-sol", "gemini-3-8-flash"],
      altRates: dec1,
      service: "agent-development",
    },
    specs: geminiSpecs("Built-in thinking", "October 13, 2026", "gemini-4-argon"),
    access: {
      columns: accessColumns,
      rows: [["Gemini API (Google AI Studio)", "gemini-4-argon", "$2.00", "$10.00"], ["Google Vertex AI", "gemini-4-argon", "$2.00", "$10.00"], ["OpenRouter", "google/gemini-4-argon", "$2.00", "$10.00"]],
      line: "Prices match across all three until November 30. Vertex regional endpoints cost 10% more.",
    },
    free: {
      answer: "No. Gemini 4 Argon is not on the Gemini API free tier, so every API call is billed. You can use it in the Gemini app with a paid Google AI Pro or Ultra plan.",
      rows: ["No free API tier", "Gemini app on paid Google AI plans", "5,000 free Search grounding calls a month"],
    },
    compare: {
      rows: [
        { name: "Gemini 4 Argon", slug: "gemini-4-argon", input: "$2.00", output: "$10.00", context: "1M", why: "Video and audio input, flat price", current: true },
        { name: "Gemini 4 Carbon", slug: "gemini-4-carbon", input: "$2.00", output: "$10.00", context: "1M", why: "More thinking for the hardest tasks" },
        { name: "Gemini 3.8 Flash", slug: "gemini-3-8-flash", input: "$0.75", output: "$3.75", context: "1M", why: "Cheaper for high volume" },
        { name: "Claude Opus 5.5", slug: "claude-opus-5-5", input: "$4.00", output: "$20.00", context: "1M", why: "Rival flagship for agents" },
        { name: "GPT-6.1 Sol", slug: "gpt-6-1-sol", input: "$2.00", output: "$10.00", context: "1.05M", why: "Same price, OpenAI stack" },
      ],
      line: "Argon matches GPT-6.1 Sol on price today. From December 1 it costs the same as Claude Opus 5.5.",
    },
    fit: {
      good: ["Agents that read video, audio and PDFs", "Long files up to 1M tokens", "Complex multi-step reasoning"],
      bad: ["High-volume simple replies", "Teams on the free API tier", "Fixed budgets after Dec 1"],
      take: "We reach for Argon when an agent has to read mixed media, like call recordings or scanned files. For routine volume we route to a Flash model.",
      links: [services.agent],
    },
    versions: geminiVersions("Gemini 4 uses element names, not Pro and Flash. Argon is the flagship. Carbon thinks longer. Hydrogen is the everyday tier."),
    faqs: [
      { question: "How much does Gemini 4 Argon cost?", answer: "Gemini 4 Argon costs $2 per 1M input tokens and $10 per 1M output tokens until November 30, 2026. From December 1 the price doubles to $4 and $20. Cached input is $0.10, then $0.20. Batch requests cost half. Thinking tokens are billed at the output rate." },
      { question: "Is Gemini 4 Argon free?", answer: "Gemini 4 Argon is not free on the API. Google lists it as not available on the Gemini API free tier, so every call is billed. People with a paid Google AI Pro or Ultra plan can use Gemini 4 Argon inside the Gemini app." },
      { question: "What is the Gemini 4 Argon context window?", answer: "Gemini 4 Argon has a 1,048,576 token context window. Input, thinking and output all share that one window. A single reply is capped at 65,536 tokens by default. With long decode in background mode, Gemini 4 Argon can write up to 1M tokens in one response." },
      { question: "When was Gemini 4 Argon released?", answer: "Google announced Gemini 4 Argon on September 30, 2026, first for trusted testers. Gemini 4 Argon became generally available on the paid Gemini API on October 13, 2026. It rolled out to paid Gemini app plans the same day. Its knowledge cutoff is March 2026." },
      { question: "What is the Gemini 4 Argon API model ID?", answer: "The Gemini 4 Argon API model ID is gemini-4-argon on the Gemini API and on Vertex AI. On OpenRouter it is google/gemini-4-argon. To try the harder-reasoning sibling, Google says you only swap the model string to gemini-4-carbon. No other request changes are needed." },
      { question: "Gemini 4 Argon vs Claude Opus 5.5, which is cheaper?", answer: "Gemini 4 Argon is cheaper until November 30, 2026, at $2 input and $10 output per 1M tokens. Claude Opus 5.5 costs $4 and $20. From December 1, Gemini 4 Argon rises to $4 and $20, so both cost the same per token. Real bills then depend on token use." },
    ],
    cta: { heading: "Want Gemini 4 Argon working inside your tools?", body: "We build AI agents and automations that let a business grow without adding headcount. On the call we tell you which model fits and what it costs at your volume.", service: "agent-development", link: services.agent },
    related: [
      { slug: "gemini-4-carbon", line: "Same price, thinks longer" },
      { slug: "claude-opus-5-5", line: "Anthropic's flagship at $4 / $20" },
      { slug: "gpt-6-1-sol", line: "OpenAI at $2 / $10" },
    ],
  },
  {
    slug: "gemini-4-carbon",
    title: "Gemini 4 Carbon API Pricing, Context Window & Specs",
    description: "Gemini 4 Carbon costs $2 per 1M input and $10 per 1M output tokens until Nov 30, then $4 and $20. See context window, specs and a cost calculator.",
    h1: "Gemini 4 Carbon API pricing and specs",
    summary: "Gemini 4 Carbon is Google's deepest-thinking Gemini 4 model, built on Gemini 4 Argon. Gemini 4 Carbon costs $2 per 1M input tokens and $10 per 1M output tokens until November 30, 2026, then $4 and $20. It has a 1M token context window.",
    tiles: geminiTiles,
    pricing: geminiPricing("Same per-token price as Argon. Carbon thinks longer, and thinking bills as output, so each task usually costs more."),
    calc: {
      intro: "Pick a job or enter your own numbers. Add extra output tokens for Carbon's longer thinking.",
      note: "Uses standard rates. Ignores tax, batch discounts and extra thinking tokens.",
      compare: ["gemini-4-argon", "claude-opus-5-5", "gpt-6-astra"],
      altRates: dec1,
      service: "agent-development",
    },
    specs: geminiSpecs("Extended thinking, more than Argon", "November 10, 2026", "gemini-4-carbon"),
    access: {
      columns: accessColumns,
      rows: [["Gemini API (Google AI Studio)", "gemini-4-carbon", "$2.00", "$10.00"], ["Google Vertex AI", "gemini-4-carbon", "$2.00", "$10.00"], ["Vercel AI Gateway", "google/gemini-4-carbon", "$2.00", "$10.00"]],
      line: "Already on Argon? Change the model string to gemini-4-carbon. Nothing else in the request changes.",
    },
    free: {
      answer: "No. Gemini 4 Carbon is not on the Gemini API free tier. In Google's own apps it is rolling out to Google AI Ultra subscribers.",
      rows: ["No free API tier", "Gemini app for Google AI Ultra", "Batch and Flex cut the price in half"],
    },
    compare: {
      rows: [
        { name: "Gemini 4 Carbon", slug: "gemini-4-carbon", input: "$2.00", output: "$10.00", context: "1M", why: "Deepest Gemini reasoning", current: true },
        { name: "Gemini 4 Argon", slug: "gemini-4-argon", input: "$2.00", output: "$10.00", context: "1M", why: "Same price, fewer thinking tokens" },
        { name: "Claude Opus 5.5", slug: "claude-opus-5-5", input: "$4.00", output: "$20.00", context: "1M", why: "Rival flagship for agents" },
        { name: "GPT-6 Astra", slug: "gpt-6-astra", input: "$10.00", output: "$50.00", context: "1.05M", why: "OpenAI's top model" },
        { name: "GPT-6.1 Sol", slug: "gpt-6-1-sol", input: "$2.00", output: "$10.00", context: "1.05M", why: "Same rate, OpenAI stack" },
      ],
      line: "Carbon is the cheapest top-tier reasoning model here per token. Its longer thinking narrows that gap on real bills.",
    },
    fit: {
      good: ["Hard analysis and planning", "Agents that must get it right first time", "Research over long files"],
      bad: ["Fast chat replies", "Simple sorting and tagging", "Tight per-task budgets"],
      take: "We start most client builds on Argon. We move a single hard step to Carbon only when tests show it fixes real errors.",
      links: [services.agent],
    },
    versions: geminiVersions("Gemini 4 uses element names, not Pro and Flash. Carbon sits on top of Argon. Hydrogen is the everyday tier."),
    faqs: [
      { question: "How much does Gemini 4 Carbon cost?", answer: "Gemini 4 Carbon costs $2 per 1M input tokens and $10 per 1M output tokens until November 30, 2026. From December 1 it rises to $4 and $20. Cached input is $0.10, then $0.20. Thinking tokens bill as output, and Gemini 4 Carbon thinks more than Argon." },
      { question: "Is Gemini 4 Carbon free?", answer: "Gemini 4 Carbon is not free on the API. Google's pricing page says it is not available on the free tier, so every call is billed. In Google's consumer apps, Gemini 4 Carbon is rolling out to people on the paid Google AI Ultra plan." },
      { question: "What is the Gemini 4 Carbon context window?", answer: "Gemini 4 Carbon has a 1,048,576 token context window, shared by input, thinking and output. A normal reply is capped at 65,536 tokens. With long decode in background mode, Gemini 4 Carbon can write up to 1M tokens. Long thinking uses part of the same window." },
      { question: "When was Gemini 4 Carbon released?", answer: "Google first opened Gemini 4 Carbon to a small group of cyber defenders on October 28, 2026. Gemini 4 Carbon became generally available on the Gemini API on November 10, 2026. Its knowledge cutoff is March 2026, the same as Gemini 4 Argon." },
      { question: "What is the Gemini 4 Carbon API model ID?", answer: "The Gemini 4 Carbon API model ID is gemini-4-carbon on the Gemini API and Vertex AI. Vercel AI Gateway lists it as google/gemini-4-carbon. If you already call gemini-4-argon, Google says you only change the model string. The request format stays the same." },
      { question: "Gemini 4 Carbon vs Claude Opus 5.5, which is cheaper?", answer: "Gemini 4 Carbon is cheaper per token until November 30, 2026, at $2 input and $10 output against $4 and $20 for Claude Opus 5.5. From December 1 both list at $4 and $20. Gemini 4 Carbon uses more thinking tokens, so test both on your own tasks." },
    ],
    cta: { heading: "Not sure Gemini 4 Carbon is the right fit?", body: "We build AI agents and automations that let a business grow without adding headcount. On the call we tell you which model fits and what it costs at your volume.", service: "agent-development", link: services.agent },
    related: [
      { slug: "gemini-4-argon", line: "Google's flagship, fewer thinking tokens" },
      { slug: "claude-opus-5-5", line: "Anthropic's flagship at $4 / $20" },
      { slug: "gpt-6-astra", line: "OpenAI's top model at $10 / $50" },
    ],
  },
  {
    slug: "gemini-3-8-flash",
    title: "Gemini 3.8 Flash API Pricing, Context Window & Specs",
    description: "Gemini 3.8 Flash costs $0.75 per 1M input and $3.75 per 1M output tokens, rising to $1.50 and $7.50 on Jan 1, 2027. Specs, free tier and calculator.",
    h1: "Gemini 3.8 Flash API pricing and specs",
    summary: "Gemini 3.8 Flash is Google's fast, low-cost Gemini model. Gemini 3.8 Flash costs $0.75 per 1M input tokens and $3.75 per 1M output tokens until December 31, 2026. On January 1, 2027 the price doubles to $1.50 and $7.50. It has a 1M token context window and a free tier.",
    tiles: [
      { label: "Input", value: "$0.75 / 1M", sub: "$1.50 from Jan 1" },
      { label: "Output", value: "$3.75 / 1M", sub: "$7.50 from Jan 1" },
      { label: "Context", value: "1M tokens" },
      { label: "Max output", value: "65K tokens" },
    ],
    pricing: {
      columns: ["Price type", "Until Dec 31", "From Jan 1, 2027"],
      rows: [["Input", "$0.75", "$1.50"], ["Output (incl. thinking)", "$3.75", "$7.50"], ["Cached input", "$0.075", "$0.15"], ["Cache storage (per hour)", "$0.50", "$1.00"], ["Batch input", "$0.375", "$0.75"], ["Batch output", "$1.875", "$3.75"], ["Priority input", "$1.35", "$2.70"], ["Priority output", "$6.75", "$13.50"], ["Free tier", "Free with limits", "Free with limits"]],
      plain: "Output costs 5× input. Budget for the January 1 rise now, since every tier doubles on the same day.",
      source: googleSource,
    },
    calc: {
      intro: "Pick a job or enter your own numbers. Flip the toggle to see the 2027 price.",
      note: "Uses standard rates. Ignores tax, batch discounts and cache storage fees.",
      compare: ["gemini-4-argon", "claude-haiku-5-5", "gpt-6-luna"],
      altRates: [{ label: "From Jan 1", input: 1.5, output: 7.5, cached: 0.15 }],
      service: "document-processing",
    },
    specs: [["Context window", "1,048,576 tokens"], ["Max output", "65,536 tokens"], ["Input types", "Text, images, audio, video, PDF"], ["Output types", "Text"], ["Tool calling", "Yes"], ["Structured output", "Yes"], ["Reasoning", "Thinking levels low, medium, high"], ["Knowledge cutoff", "Not published"], ["Release date", "September 2, 2026"], ["Open weights", "No"], ["API model ID", "gemini-3.8-flash"]],
    access: {
      columns: accessColumns,
      rows: [["Gemini API (Google AI Studio)", "gemini-3.8-flash", "$0.75", "$3.75"], ["Google Vertex AI", "—", "$0.75", "$3.75"], ["OpenRouter", "google/gemini-3.8-flash", "$0.75", "$3.75"]],
      line: "The old gemini-3.7-flash ID now routes to Gemini 3.8 Flash. Update your code before it stops working.",
    },
    free: {
      answer: "Yes, with limits. Gemini 3.8 Flash is on the Gemini API free tier in Google AI Studio. Paid use starts at $0.75 per 1M input tokens.",
      rows: ["Free tier in Google AI Studio", "Rate limits apply on free use", "Paid price doubles on Jan 1, 2027"],
    },
    compare: {
      rows: [
        { name: "Gemini 3.8 Flash", slug: "gemini-3-8-flash", input: "$0.75", output: "$3.75", context: "1M", why: "Video and audio at a low price", current: true },
        { name: "Gemini 4 Hydrogen", input: "$1.50", output: "$7.50", context: "1M", why: "Newer everyday Gemini 4 tier" },
        { name: "Gemini 4 Argon", slug: "gemini-4-argon", input: "$2.00", output: "$10.00", context: "1M", why: "Step up for hard tasks" },
        { name: "Claude Haiku 5.5", slug: "claude-haiku-5-5", input: "$0.10", output: "$0.50", context: "1M", why: "Far cheaper for text jobs" },
        { name: "GPT-6 Luna", slug: "gpt-6-luna", input: "$0.10", output: "$0.50", context: "1.05M", why: "Far cheaper, OpenAI stack" },
      ],
      line: "For plain text at volume, Haiku 5.5 and Luna cost far less. Gemini 3.8 Flash earns its price on audio and video.",
    },
    fit: {
      good: ["Reading invoices and scanned PDFs", "Call and video summaries", "Prototypes on the free tier"],
      bad: ["The cheapest text-only volume", "Hardest reasoning steps", "Budgets locked past Dec 31"],
      take: "We use Gemini 3.8 Flash for document intake where files mix text, tables and images. We re-price every client flow before the January rise.",
      links: [services.documents],
    },
    versions: {
      heading: "Gemini Flash versions",
      rows: [
        { name: "Gemini 3.8 Flash", slug: "gemini-3-8-flash", released: "2026-09-02", input: "$0.75", output: "$3.75", status: "Latest" },
        { name: "Gemini 3.7 Flash", released: "—", input: "$0.75", output: "$3.75", status: "Deprecated" },
        { name: "Gemini 3.6 Flash", released: "—", input: "$0.75", output: "$3.75", status: "Previous" },
        { name: "Gemini 3.5 Flash", released: "—", input: "$1.50", output: "$9.00", status: "Deprecated" },
      ],
      line: "Gemini 3.7 Flash calls now route to 3.8 Flash. Gemini 3.6 Flash keeps the same price and the same January rise.",
    },
    faqs: [
      { question: "How much does Gemini 3.8 Flash cost?", answer: "Gemini 3.8 Flash costs $0.75 per 1M input tokens and $3.75 per 1M output tokens until December 31, 2026. On January 1, 2027 Google doubles it to $1.50 and $7.50. Cached input is $0.075, and batch requests cost half the standard rate." },
      { question: "Is Gemini 3.8 Flash free?", answer: "Yes, Gemini 3.8 Flash has a free tier on the Gemini API through Google AI Studio. Free use has rate limits, shown in AI Studio. Above those limits, Gemini 3.8 Flash bills at $0.75 input and $3.75 output per 1M tokens, doubling on January 1, 2027." },
      { question: "What is the Gemini 3.8 Flash context window?", answer: "Gemini 3.8 Flash has a 1,048,576 token context window and can write up to 65,536 tokens in one reply. It reads text, images, audio, video and PDFs. Google charges the same rate at any prompt size, so long Gemini 3.8 Flash prompts carry no surcharge." },
      { question: "When was Gemini 3.8 Flash released?", answer: "Google released Gemini 3.8 Flash to general availability on September 2, 2026. Gemini 3.8 Flash replaced Gemini 3.7 Flash, whose API ID now routes to it. Google launched a Gemini 3.8 Flash Cyber variant alongside it for security teams. The knowledge cutoff is not published." },
      { question: "What is the Gemini 3.8 Flash API model ID?", answer: "The Gemini 3.8 Flash API model ID is gemini-3.8-flash on the Gemini API. On OpenRouter it is google/gemini-3.8-flash. Requests sent to the old gemini-3.7-flash ID are routed to Gemini 3.8 Flash for now, so we update that string in client code." },
      { question: "Gemini 3.8 Flash vs GPT-6 Luna, which is cheaper?", answer: "GPT-6 Luna is cheaper. It lists at $0.10 input and $0.50 output per 1M tokens. Gemini 3.8 Flash costs $0.75 and $3.75, rising to $1.50 and $7.50 in 2027. Gemini 3.8 Flash makes sense when you need audio, video or a free tier to start." },
    ],
    cta: { heading: "Want Gemini 3.8 Flash working inside your tools?", body: "We build AI agents and automations that let a business grow without adding headcount. On the call we tell you which model fits and what it costs at your volume, before and after the January price change.", service: "document-processing", link: services.documents },
    related: [
      { slug: "gemini-4-argon", line: "Google's flagship for hard tasks" },
      { slug: "claude-haiku-5-5", line: "Low-cost Claude at $0.10 / $0.50" },
      { slug: "gpt-6-luna", line: "Low-cost OpenAI at $0.10 / $0.50" },
    ],
  },
  {
    slug: "grok-4-7",
    title: "Grok 4.7 API Pricing, Context Window & Specs",
    description: "Grok 4.7 costs $2 per 1M input and $6 per 1M output tokens, doubling above 200K prompt tokens. See its 500K context window, specs and a cost calculator.",
    h1: "Grok 4.7 API pricing and specs",
    summary: "Grok 4.7 is xAI's current flagship model. Grok 4.7 costs $2 per 1M input tokens and $6 per 1M output tokens for prompts under 200K tokens. Larger prompts bill at $4 and $12. It has a 500K token context window and reads text and images.",
    tiles: [
      { label: "Input", value: "$2 / 1M" },
      { label: "Output", value: "$6 / 1M" },
      { label: "Context", value: "500K tokens" },
      { label: "Max output", value: "Not published" },
    ],
    pricing: {
      columns: ["Price type", "Under 200K prompt", "200K+ prompt"],
      rows: [["Input", "$2.00", "$4.00"], ["Cached input", "$0.50", "$1.00"], ["Output", "$6.00", "$12.00"], ["Batch input (20% off)", "$1.60", "—"], ["Batch output (20% off)", "$4.80", "—"]],
      plain: "Output costs 3× input, lower than most flagships. Once a prompt hits 200K tokens, the whole request bills at double.",
      source: "Prices checked November 14, 2026 on xAI's model docs. Per 1M tokens, USD.",
    },
    calc: {
      intro: "Pick a job or enter your own numbers. We show what Grok 4.7 would cost each month.",
      note: "Uses standard rates under 200K tokens. Ignores tax, batch discounts and reasoning tokens beyond your output estimate.",
      compare: ["gpt-6-1-sol", "claude-sonnet-5-5", "gemini-4-argon"],
      service: "agent-development",
    },
    specs: [["Context window", "500,000 tokens"], ["Max output", "Not published"], ["Input types", "Text, images"], ["Output types", "Text"], ["Tool calling", "Yes"], ["Structured output", "Yes"], ["Reasoning", "Low, medium, high, xhigh effort"], ["Knowledge cutoff", "May 2026"], ["Release date", "September 21, 2026"], ["Open weights", "No"], ["API model ID", "grok-4.7"]],
    access: {
      columns: accessColumns,
      rows: [["xAI API", "grok-4.7", "$2.00", "$6.00"], ["Amazon Bedrock", "—", "—", "—"]],
      line: "The xAI API is the direct route. Rate limits are 150 requests per second and 50M tokens per minute.",
    },
    free: {
      answer: "No. xAI lists no free tier for Grok 4.7 on its API, so every call is billed. Grok 4.7 starts at $2 per 1M input tokens.",
      rows: ["No free API tier listed", "Cached input at $0.50", "Batch API saves 20%"],
    },
    compare: {
      rows: [
        { name: "Grok 4.7", slug: "grok-4-7", input: "$2.00", output: "$6.00", context: "500K", why: "Lowest output price here", current: true },
        { name: "Grok 4.6", input: "$2.00", output: "$6.00", context: "500K", why: "Same price, older model" },
        { name: "GPT-6.1 Sol", slug: "gpt-6-1-sol", input: "$2.00", output: "$10.00", context: "1.05M", why: "Twice the context" },
        { name: "Claude Sonnet 5.5", slug: "claude-sonnet-5-5", input: "$2.00", output: "$10.00", context: "1M", why: "Strong agent tool use" },
        { name: "Gemini 4 Argon", slug: "gemini-4-argon", input: "$2.00", output: "$10.00", context: "1M", why: "Reads audio and video" },
      ],
      line: "All four rivals charge $2 input. Grok 4.7 wins on output price but has half the context.",
    },
    fit: {
      good: ["Long coding and agent runs", "Output-heavy drafting", "Reports from text and images"],
      bad: ["Prompts over 200K tokens", "Audio or video input", "Teams that need a free tier"],
      take: "We test Grok 4.7 when an agent writes a lot of text, since its output price is low. We keep prompts under 200K to avoid the double rate.",
      links: [services.agent],
    },
    versions: {
      heading: "Grok 4 versions",
      rows: [
        { name: "Grok 4.7", slug: "grok-4-7", released: "2026-09-21", input: "$2.00", output: "$6.00", status: "Latest" },
        { name: "Grok 4.6", released: "2026-08-12", input: "$2.00", output: "$6.00", status: "Previous" },
      ],
      line: "Grok 4.7 kept the Grok 4.6 price and its 200K pricing tier. Moving up costs nothing extra per token.",
    },
    faqs: [
      { question: "How much does Grok 4.7 cost?", answer: "Grok 4.7 costs $2 per 1M input tokens and $6 per 1M output tokens when the prompt is under 200K tokens. Cached input is $0.50. At 200K tokens or more, Grok 4.7 bills the whole request at $4 and $12. The Batch API takes 20% off." },
      { question: "Is Grok 4.7 free?", answer: "Grok 4.7 is not free on the API. xAI lists no free tier for it, so every request is billed from the first token. The lowest rate for Grok 4.7 is $2 per 1M input tokens, or $1.60 through the Batch API with its 20% discount." },
      { question: "What is the Grok 4.7 context window?", answer: "Grok 4.7 has a 500,000 token context window. xAI does not publish a separate max output limit. Prompts under 200K tokens get the standard rate. Once a Grok 4.7 prompt reaches 200K tokens, the whole request costs double, so we keep most prompts below that line." },
      { question: "When was Grok 4.7 released?", answer: "xAI released Grok 4.7 on September 21, 2026, at the same price as Grok 4.6, which came out on August 12, 2026. Grok 4.7 launched on the xAI API, Cursor and Grok Build. Its knowledge cutoff is May 2026, per third-party trackers." },
      { question: "What is the Grok 4.7 API model ID?", answer: "The Grok 4.7 API model ID is grok-4.7 on the xAI API. It supports function calling, structured outputs and the Batch API. Grok 4.7 takes a reasoning effort setting of low, medium, high or xhigh, and high is the default if you set nothing." },
      { question: "Grok 4.7 vs GPT-6.1 Sol, which is cheaper?", answer: "Grok 4.7 is cheaper on output. Both charge $2 per 1M input tokens, but Grok 4.7 charges $6 per 1M output tokens against $10 for GPT-6.1 Sol. GPT-6.1 Sol offers a 1M context window, twice the 500K that Grok 4.7 gives you." },
    ],
    cta: { heading: "Want Grok 4.7 working inside your tools?", body: "We build AI agents and automations that let a business grow without adding headcount. On the call we tell you which model fits and what it costs at your volume.", service: "agent-development", link: services.agent },
    related: [
      { slug: "gpt-6-1-sol", line: "OpenAI at $2 / $10 with 1M context" },
      { slug: "claude-sonnet-5-5", line: "Anthropic at $2 / $10" },
      { slug: "gemini-4-argon", line: "Google's flagship at $2 / $10" },
    ],
  },
];
