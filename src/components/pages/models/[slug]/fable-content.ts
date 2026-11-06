export const pricing = [
  ["Input", "$10.00"], ["Output (thinking tokens included)", "$50.00"],
  ["Cache read", "$0.25"], ["Cache write, 5-minute", "$12.50"],
  ["Cache write, 1-hour", "$20.00"], ["Batch input", "$5.00"], ["Batch output", "$25.00"],
];
export const specs = [
  ["Context window", "1,000,000 tokens"], ["Max output", "128,000 tokens"],
  ["Input types", "Text, images, PDFs"], ["Output types", "Text"],
  ["Tool calling", "Yes"], ["Structured output", "Yes"],
  ["Reasoning", "Adaptive thinking, always on (default effort: high)"],
  ["Knowledge cutoff", "June 2026"], ["Release date", "September 1, 2026"],
  ["Open weights", "No (proprietary)"],
];
export const platforms = [
  ["Claude API (Anthropic)", "claude-fable-5-1"],
  ["Amazon Bedrock", "anthropic.claude-fable-5-1"],
  ["Google Vertex AI", "claude-fable-5-1"],
  ["Microsoft Foundry", "claude-fable-5-1"],
];
export const freeAnswer = "Claude Fable 5.1 has no free API tier. API use is billed per token. In the Claude apps, Pro offers Fable through paid usage credits; Max includes Fable up to half your weekly limit, and Ultra inherits Max features. Plan limits and subscriptions are separate from standard API pricing.";
export const faqs = [
  { question: "How much does Claude Fable 5.1 cost?", answer: "Claude Fable 5.1 costs $10 per 1M input tokens and $50 per 1M output tokens on the Claude API. Cache reads cost $0.25 per 1M tokens, and the Batch API halves input and output rates to $5 and $25. A request with 100,000 input and 20,000 output tokens costs $2.00." },
  { question: "Is Claude Fable 5.1 free?", answer: freeAnswer },
  { question: "What is the Claude Fable 5.1 context window?", answer: "Claude Fable 5.1 has a 1,000,000-token context window and can write up to 128,000 tokens in a single response. That supports large codebases and document collections, but every input token is billed. One million uncached input tokens cost $10, with generated output billed separately." },
  { question: "When was Claude Fable 5.1 released?", answer: "Claude Fable 5.1 was released on September 1, 2026. It follows Claude Fable 5, released June 9, 2026. Fable 5.1 kept the same input and output prices, reduced cache-read pricing from $1 to $0.25 per million tokens, and has a June 2026 knowledge cutoff." },
  { question: "What is the Claude Fable 5.1 API model ID?", answer: "Use claude-fable-5-1 on the Claude API, Google Vertex AI and Microsoft Foundry. Amazon Bedrock uses anthropic.claude-fable-5-1. Check the platform’s deployment documentation for region availability and any inference-profile prefix required for your endpoint." },
  { question: "Claude Fable 5.1 vs Opus 5.5: which should I use?", answer: "Claude Opus 5.5 costs $4/$20 per million input/output tokens, 60% less than Fable 5.1’s $10/$50. For most business automation, start with Opus 5.5 or Sonnet 5.5. Move to Fable 5.1 when evaluations on your own tasks show that the additional cost is justified." },
  { question: "What’s the difference between Claude Fable 5.1 and Claude Mythos 5.1?", answer: "Claude Mythos 5.1 shares Claude Fable 5.1’s specifications and pricing. Mythos access is restricted to organizations verified through Anthropic’s verification programs, such as the Cyber Verification Program. Contact Anthropic or your cloud account team about eligibility for your specific use case." },
];
