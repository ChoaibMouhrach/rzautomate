import type { ToolPage } from "./types";

export const gumloop: ToolPage = {
  slug: "gumloop",
  name: "Gumloop",
  kind: "AI agent builders",
  status: "active",
  seo: {
    title: "Gumloop Pricing, Plans & Features (2026)",
    description: "Gumloop costs $37 a month for 20,000 credits. No free plan, just a 14-day trial. See how credits work and what your workflows will really cost.",
  },
  checkedAt: "2026-11-14",
  checkedLabel: "November 14, 2026",
  vendorPricingUrl: "https://www.gumloop.com/pricing",
  hub: {
    freePlan: null,
    freeAllowance: null,
    startsAt: 37,
    startsAtLabel: "$37/mo",
    youPayFor: "Credits",
    selfHosting: false,
    openSource: false,
    ai: "AI agents, 35+ models, bring your own key",
    bestFor: "Teams building AI agents with many users",
    integrations: 300,
  },
  hero: {
    h1: "Gumloop pricing and features",
    summary: "Gumloop is an AI agent builder for teams. Pro costs $37 a month and includes 20,000 credits, with unlimited seats. There is no free plan, only a 14-day trial. You pay in credits, and AI steps cost more than simple app steps. It suits teams that want AI agents more than classic workflows.",
    primary: { label: "Try the cost calculator", href: "#calculator" },
    secondary: { label: "See alternatives →", href: "#alternatives" },
    tiles: [
      { label: "Free plan", value: "No, 14-day trial" },
      { label: "Starts at", value: "$37/month" },
      { label: "You pay for", value: "Credits" },
      { label: "Self-hosting", value: "No" },
    ],
  },
  pricing: {
    heading: "Gumloop pricing plans",
    intro: "Gumloop has two plans. Pro is one flat price with unlimited seats. Enterprise is priced on a call with their sales team.",
    hasBillingToggle: false,
    columns: ["Plan", "Price", "Includes", "Users", "Good to know"],
    rows: [
      { plan: "Pro", monthly: "$37/month", yearly: "$37/month", includes: "20,000 credits a month", users: "Unlimited seats", goodToKnow: "Unused credits expire each month" },
      { plan: "Enterprise", monthly: "Custom price", yearly: "Custom price", includes: "Custom credits", users: "Unlimited seats", goodToKnow: "Credits roll over, SSO, VPC option" },
    ],
    overLimitLine: "Run out of credits on Pro and your agents stop. Turn on pay-as-you-go and extra credits cost $0.005 each.",
    sourceLine: "Prices checked November 14, 2026 on Gumloop's pricing page.",
  },
  billing: {
    heading: "What counts as a credit in Gumloop",
    body: "One credit is worth half a cent. Each workflow run costs 1 credit, and most app steps are free. AI steps cost whatever the model charges, so a bigger model or a longer prompt uses more credits.",
    counts: [
      "1 base credit for every workflow run",
      "AI steps, priced by the model's token cost",
      "Data tools like scraping, search and enrichment",
      "Agent chats add tool calls, compute and an 8% fee",
    ],
    doesntCount: [
      "Most app steps like Sheets, Slack and Gmail",
      "Logic, loops and text formatting steps",
      "Failed tool calls and time waiting on you",
      "AI tokens when you use your own API key",
    ],
    example: {
      line: "A 5-step workflow that runs 1,000 times a month",
      steps: ["Workflow runs", "Gumloop counts", "You pay"],
      values: ["1,000 runs", "About 4,000 credits", "$37 on Pro"],
    },
  },
  calculator: {
    heading: "Gumloop cost calculator",
    intro: "Enter how often your workflow runs and how many AI steps it has. AI steps drive most of the cost.",
    defaults: { runs: 1000, steps: 5, yearly: false },
    extraInputs: [
      { id: "aiSteps", label: "AI steps per run", default: 1 },
      { id: "creditsPerAiStep", label: "Credits per AI step", default: 3 },
    ],
    note: "Covers workflow runs only. Agent chats also bill compute, tool calls and an 8% fee. Paid data tools like enrichment are not included.",
    calculate: ({ runs, steps, extra }) => {
      const aiSteps = Math.min(extra.aiSteps ?? 1, steps);
      const creditsPerAiStep = extra.creditsPerAiStep ?? 3;
      const credits = runs * (1 + aiSteps * creditsPerAiStep);
      const units = credits.toLocaleString("en-US");
      if (credits <= 20000) {
        return { units, plan: "Pro", cost: "$37/mo" };
      }
      if (credits <= 1020000) {
        const cost = Math.round(37 + (credits - 20000) * 0.005);
        return { units, plan: "Pro + pay-as-you-go", cost: `$${cost.toLocaleString("en-US")}/mo` };
      }
      return { units, plan: "Enterprise", cost: "Custom" };
    },
  },
  freePlan: {
    heading: "Is Gumloop free?",
    answer: "No. Gumloop dropped its free plan in July 2026. You can try Pro free for 14 days, but you need a card and it turns into a paid plan unless you cancel.",
    rows: [
      "14-day trial of the full Pro plan",
      "Card needed, one trial per customer",
      "Old free accounts keep leftover credits only",
    ],
  },
  features: {
    heading: "Gumloop features",
    rows: [
      { label: "Integrations", value: "300+ connectors, plus MCP servers" },
      { label: "AI features", value: "AI agents, 35+ models, bring your own API key" },
      { label: "Self-hosting", value: "No, private cloud (VPC) on Enterprise" },
      { label: "Open source", value: "No" },
      { label: "Code steps", value: "Python and shell in an agent sandbox" },
      { label: "Error handling", value: "Step logs, approval before writes, failed calls free" },
      { label: "Team features", value: "Unlimited seats, shared credentials, roles on Enterprise" },
      { label: "SSO and compliance", value: "SOC 2 Type II, HIPAA, GDPR. SSO on Enterprise" },
      { label: "Data residency", value: "Choose your region with Enterprise VPC" },
    ],
  },
  fit: {
    heading: "Who Gumloop is for",
    goodTitle: "A good fit if",
    good: [
      "You want AI agents that research, write and update your apps",
      "Many people on your team need access without paying per seat",
      "You already have AI API keys and want to use them",
    ],
    notTitle: "Not a fit if",
    not: [
      "You need a free plan or a long free trial",
      "You want to self-host or keep costs fully predictable",
      "Your workflows are simple app-to-app steps with no AI",
    ],
    ourTake: "Gumloop is strong when AI does the real work and the whole team joins in. For plain app-to-app automations, a step-based tool usually costs less and is easier to predict.",
  },
  alternatives: {
    heading: "Gumloop alternatives",
    intro: "These tools cover the same ground. Some charge per run, some per step, and some let you self-host.",
    rows: [
      { name: "n8n", slug: "n8n", startsAt: "€20/month, billed yearly", payFor: "Executions (full runs)", freePlan: "Free if self-hosted", selfHosting: "Yes, free Community Edition", whySwitch: "Pay per run, not per AI token" },
      { name: "Zapier", slug: "zapier", startsAt: "$19.99/month, billed yearly", payFor: "Tasks (action steps)", freePlan: "Yes, 100 tasks a month", selfHosting: "No", whySwitch: "Most app integrations, very easy to start" },
      { name: "Make", slug: "make", startsAt: "$9/month", payFor: "Credits (module actions)", freePlan: "Yes, 1,000 credits a month", selfHosting: "No", whySwitch: "Low price for high-volume app workflows" },
      { name: "Lindy", slug: "lindy", startsAt: "$29.99/user/month", payFor: "Credits per seat", freePlan: "No", selfHosting: "No", whySwitch: "AI assistant focus, simple per-seat price" },
    ],
  },
  faq: {
    heading: "Gumloop FAQ",
    items: [
      { question: "How much does Gumloop cost?", answer: "Gumloop Pro costs $37 a month and includes 20,000 credits, with unlimited seats and teams. There is no yearly plan. Enterprise has a custom price with custom credits, SSO and a private cloud option. If you run out on Pro, extra credits cost $0.005 each once you turn on pay-as-you-go." },
      { question: "Is Gumloop free?", answer: "No. Gumloop ended its free plan in July 2026. New users get a 14-day trial of Pro. You need a card to start it, and it becomes a paid $37 plan unless you cancel. Accounts from the old free plan keep any leftover credits, but they no longer refill each month." },
      { question: "How do Gumloop credits work?", answer: "One credit is worth $0.005. Each workflow run costs 1 credit, and most app steps are free. AI steps cost the model's token price in credits, so bigger models use more. Agent chats also pay for tool calls, active compute time and an 8% fee. Pro credits expire at the end of each month." },
      { question: "What happens when I run out of Gumloop credits?", answer: "Your agents and workflows stop until the next month. You can turn on pay-as-you-go to keep them running. Extra credits then cost $0.005 each, up to a default cap of $5,000 per period. You can set a lower cap, and Gumloop emails you at 75% and 90% of your credits." },
      { question: "Is Gumloop better than n8n?", answer: "It depends on the job. Gumloop is easier for AI agents and charges no seat fees, but bills by AI usage and can't be self-hosted. n8n charges per full run, so long workflows stay cheap, and you can self-host it for free. For steady app workflows, n8n is usually cheaper." },
      { question: "Is Gumloop cheaper than Zapier?", answer: "For AI-heavy work, often yes, because Zapier counts every action step as a task. For simple two or three step automations with no AI, Zapier's entry plan can cost less. Gumloop also gives unlimited seats on Pro. Run your numbers in the calculator above to compare." },
    ],
  },
  cta: {
    heading: "Not sure Gumloop is the right fit?",
    body: "Tell us what you want to automate. We'll show you which tool gets it done for the lowest monthly cost, and how much time it can free up for your team.",
  },
  related: {
    heading: "Compare more tools",
    tiles: [
      { name: "Lindy", slug: "lindy", line: "AI assistants that handle email, meetings and follow-ups" },
      { name: "n8n", slug: "n8n", line: "Workflow tool you can self-host, billed per run" },
      { name: "Relay.app", slug: "relay", line: "Simple workflows with AI steps and human approvals" },
    ],
  },
};
