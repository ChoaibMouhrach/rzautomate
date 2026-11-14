import type { ToolPage } from "./types";

export const tray: ToolPage = {
  slug: "tray",
  name: "Tray.io",
  kind: "Enterprise",
  status: "active",
  seo: {
    title: "Tray.io Pricing, Plans & Features (2026)",
    description: "Tray.io (now Tray.ai) pricing is quote-based. See reported costs, what counts as a task, the 30-day free trial and cheaper alternatives.",
  },
  checkedAt: "2026-11-14",
  checkedLabel: "November 14, 2026",
  vendorPricingUrl: "https://tray.ai/pricing",
  hub: {
    freePlan: null,
    freeAllowance: null,
    startsAt: null,
    startsAtLabel: "Custom",
    youPayFor: "Tasks",
    selfHosting: false,
    openSource: false,
    ai: "Merlin agents, MCP gateway, token-billed AI steps",
    bestFor: "Large teams with complex, governed integrations",
    integrations: 700,
  },
  hero: {
    h1: "Tray.io pricing and features",
    summary: "Tray.io, now called Tray.ai, is an enterprise integration platform. It has no public prices. Every workflow plan is a custom quote, and buyers report paying about $19,000 to $96,000 a year. There is no free plan, only a 30-day trial. You pay for tasks. It suits larger teams with complex integrations.",
    primary: { label: "Try the cost calculator", href: "#calculator" },
    secondary: { label: "See alternatives →", href: "#alternatives" },
    tiles: [
      { label: "Free plan", value: "No, 30-day trial" },
      { label: "Starts at", value: "Custom quote" },
      { label: "You pay for", value: "Tasks" },
      { label: "Self-hosting", value: "No" },
    ],
  },
  pricing: {
    heading: "Tray.io pricing plans",
    intro: "Tray doesn't list prices for its workflow plans. You sign a yearly contract for a set number of tasks. The figures below are reported by buyers, not by Tray.",
    hasBillingToggle: false,
    columns: ["Plan", "Price", "Includes", "Users", "Good to know"],
    rows: [
      { plan: "Pro", monthly: "Custom quote", yearly: "Custom quote", includes: "3 workspaces, 7-day logs", users: "No per-user fees", goodToKnow: "Reported from about $12,000 a year" },
      { plan: "Team", monthly: "Custom quote", yearly: "Custom quote", includes: "20 workspaces, 30-day insights", users: "No per-user fees", goodToKnow: "Most popular, add-ons available" },
      { plan: "Enterprise", monthly: "Custom quote", yearly: "Custom quote", includes: "Unlimited workspaces, SSO, HIPAA", users: "No per-user fees", goodToKnow: "Regional hosting and on-premise included" },
      { plan: "Helix Builder", monthly: "$50 a month", yearly: "$50 a month", includes: "Hosting for AI-built apps", users: "Unlimited builders", goodToKnow: "Separate product, plus $1 per HCU" },
    ],
    overLimitLine: "Go over your task volume and Tray bills the difference at a yearly true-up. The rate isn't published.",
    sourceLine: "Prices checked November 14, 2026 on Tray.io's pricing page.",
  },
  billing: {
    heading: "What counts as a task in Tray.io",
    body: "A task is one action Tray takes on your data. The trigger counts, every step counts, and every pass through a loop counts. Retries are free. There are no fees per user or per connection.",
    counts: ["Each time a trigger fires", "Each connector or service step", "Each loop pass and each boolean check", "AI steps, counted by tokens used"],
    doesntCount: ["Retries after a failed step", "Extra API calls inside one step", "Users, seats and connections"],
    example: {
      line: "A 5-step workflow that runs 1,000 times a month",
      steps: ["Workflow runs", "Tray.io counts", "You pay"],
      values: ["1,000 runs", "5,000 tasks", "Custom quote on Pro"],
    },
  },
  calculator: {
    heading: "Tray.io cost calculator",
    intro: "See how many tasks your workflows use. Tray prices by quote, so we show reported costs, not a list price.",
    defaults: { runs: 1000, steps: 5, yearly: true },
    extraInputs: [
      { id: "loop_items", label: "Items looped per run", default: 0 },
      { id: "loop_steps", label: "Steps inside the loop", default: 2 },
    ],
    note: "Real Tray prices depend on your contract, add-ons and AI token use. Get a quote before you budget.",
    calculate: ({ runs, steps, extra }) => {
      const loopItems = extra.loop_items ?? 0;
      const loopSteps = extra.loop_steps ?? 2;
      const tasks = runs * (steps + loopItems * loopSteps);
      return {
        units: tasks.toLocaleString("en-US"),
        plan: "Pro",
        cost: "Custom quote",
        selfHostLine: "Buyers report about $1,560 to $8,025 a month, billed yearly",
      };
    },
  },
  freePlan: {
    heading: "Is Tray.io free?",
    answer: "No. Tray.io has no free plan. You get a 30-day free trial with 1 million tasks, then you need a paid yearly contract.",
    rows: ["30 days with every feature", "1 million tasks to test with", "No card and no sales call"],
  },
  features: {
    heading: "Tray.io features",
    rows: [
      { label: "Integrations", value: "700+ prebuilt connectors, plus any API" },
      { label: "AI features", value: "Merlin agent builder, MCP gateway add-on, AI steps" },
      { label: "Self-hosting", value: "No, cloud only with on-premise connectivity" },
      { label: "Open source", value: "No" },
      { label: "Code steps", value: "JavaScript and Python script steps" },
      { label: "Error handling", value: "Auto retries, failure paths, alert workflows" },
      { label: "Team features", value: "Workspaces, shared workspaces, version control" },
      { label: "SSO and compliance", value: "SSO on Enterprise, SOC 2 Type 2, HIPAA" },
      { label: "Data residency", value: "US, EU or APAC hosting" },
    ],
  },
  fit: {
    heading: "Who Tray.io is for",
    goodTitle: "A good fit if",
    good: ["You connect many business systems across several departments", "You need SSO, HIPAA, audit trails and regional hosting", "You have a five-figure yearly budget for integration"],
    notTitle: "Not a fit if",
    not: ["You want a free plan or a published price", "You run a handful of simple workflows", "You need to self-host on your own servers"],
    ourTake: "Tray is a strong pick for big teams with strict security needs. For most growing businesses, a tool with public pricing gets the same workflows running for far less.",
  },
  alternatives: {
    heading: "Tray.io alternatives",
    intro: "These tools cover the same ground. Most publish their prices, and some have free plans or self-hosting.",
    rows: [
      { name: "Workato", slug: "workato", startsAt: "Custom quote", payFor: "Tasks", freePlan: "No", selfHosting: "No", whySwitch: "Closest enterprise rival, reported median $64,544 a year" },
      { name: "n8n", slug: "n8n", startsAt: "€20 a month, yearly", payFor: "Executions", freePlan: "No cloud plan", selfHosting: "Yes, free Community Edition", whySwitch: "Pay per full run, self-host free" },
      { name: "Zapier", slug: "zapier", startsAt: "$19.99 a month, yearly", payFor: "Tasks", freePlan: "Yes, 100 tasks", selfHosting: "No", whySwitch: "Public prices, quick setup" },
      { name: "Make", slug: "make", startsAt: "$9 a month, yearly", payFor: "Credits", freePlan: "Yes, 1,000 credits", selfHosting: "No", whySwitch: "Low price, visual builder" },
      { name: "Power Automate", slug: "power-automate", startsAt: "$15 per user a month", payFor: "Users or bots", freePlan: "Basic flows with Microsoft 365", selfHosting: "No", whySwitch: "Fits teams already on Microsoft 365" },
    ],
  },
  faq: {
    heading: "Tray.io FAQ",
    items: [
      { question: "How much does Tray.io cost?", answer: "Tray.io doesn't publish prices. Every workflow plan is a custom yearly quote based on how many tasks you need. Buyers report paying between $18,700 and $96,300 a year, with a median around $37,600. Add-ons like SSO, HIPAA or AI agents can raise the price." },
      { question: "Is Tray.io free?", answer: "No. Tray.io has no free plan. It offers a 30-day free trial with 1 million tasks and every feature. You don't need a card or a sales call to start. After the trial, you need a paid yearly contract to keep your workflows running." },
      { question: "What is a task in Tray.io?", answer: "A task is one action Tray takes on your data. The trigger counts as one, and so does every step after it. Loops count once per item for each step inside them. Retries are free, and a step that makes several API calls still counts as one task." },
      { question: "What are the best Tray.io alternatives?", answer: "Workato is the closest match for large companies. If you want public prices, look at Zapier or Make, which both have free plans. n8n is a good choice if you want to self-host for free. Teams already on Microsoft 365 often start with Power Automate." },
      { question: "Is Tray.io cheaper than Workato?", answer: "Usually, yes. Both sell custom yearly contracts, so it depends on your deal. Vendr reports a median of about $37,600 a year for Tray.io and about $64,500 a year for Workato. Ask both for quotes on the same task volume before you decide." },
      { question: "Tray.io vs Zapier, which should I pick?", answer: "Zapier suits small teams that want simple workflows and public prices from $19.99 a month. Tray.io suits large companies that need complex integrations, strict security and on-premise access. Tray.io costs far more, but it gives IT more control over data, access and hosting regions." },
    ],
  },
  cta: {
    heading: "Not sure Tray.io is the right fit?",
    body: "Tell us what you want to automate. We'll help you pick the tool that fits your budget and goals, then build workflows that save your team hours every week.",
  },
  related: {
    heading: "Compare more tools",
    tiles: [
      { name: "Workato", slug: "workato", line: "Enterprise integration with custom yearly pricing" },
      { name: "n8n", slug: "n8n", line: "Self-host free or pay per run in the cloud" },
      { name: "Power Automate", slug: "power-automate", line: "Microsoft's automation tool, priced per user" },
    ],
  },
};
