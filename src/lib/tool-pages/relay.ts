import type { ToolPage } from "./types";

export const relay: ToolPage = {
  slug: "relay",
  name: "Relay.app",
  kind: "AI agent builders",
  status: "shut-down",
  seo: {
    title: "Relay.app Pricing, Shutdown & Alternatives (2026)",
    description: "Relay.app shut down in September 2026. See what it cost, how steps and AI credits worked, and the best Relay.app alternatives to move to.",
  },
  checkedAt: "2026-11-14",
  checkedLabel: "November 14, 2026",
  vendorPricingUrl: "https://www.relay.app/pricing",
  hub: {
    freePlan: null,
    freeAllowance: null,
    startsAt: 19,
    startsAtLabel: "$19/mo",
    youPayFor: "Steps + AI credits",
    selfHosting: false,
    openSource: false,
    ai: "AI steps, agents, approvals (shut down)",
    bestFor: "Closed. Was AI workflows with human approvals",
    integrations: 200,
  },
  hero: {
    h1: "Relay.app pricing and features",
    notice: "Relay.app shut down on September 14, 2026",
    summary: "Relay.app was an AI workflow tool known for human approval steps. It closed in September 2026 and all data was deleted. Before that, it had a free plan and paid plans from $19 a month billed yearly. You paid for steps and AI credits. Below are the old prices and the best places to move.",
    primary: { label: "See alternatives", href: "#alternatives" },
    secondary: { label: "Try the cost calculator →", href: "#calculator" },
    tiles: [
      { label: "Free plan", value: "Ended Aug 15" },
      { label: "Starts at", value: "Closed (was $19)" },
      { label: "You pay for", value: "Steps + AI credits" },
      { label: "Self-hosting", value: "No" },
    ],
  },
  pricing: {
    heading: "Relay.app pricing plans",
    intro: "These are Relay.app's last published prices from mid-2026. You can no longer buy any of these plans.",
    hasBillingToggle: true,
    columns: ["Plan", "Price", "Includes", "Users", "Good to know"],
    rows: [
      { plan: "Free", monthly: "$0", yearly: "$0", includes: "200 steps, 500 AI credits", users: "1", goodToKnow: "All features, lower limits" },
      { plan: "Professional", monthly: "$38/mo", yearly: "$19/mo", includes: "750 steps, 2,000 AI credits", users: "1", goodToKnow: "Unlimited workflows" },
      { plan: "Team", monthly: "—", yearly: "$59/mo", includes: "1,500 steps, 2,000 AI credits", users: "Up to 10", goodToKnow: "Shared workflows and connections" },
      { plan: "Enterprise", monthly: "Custom", yearly: "Custom", includes: "Custom limits", users: "Custom", goodToKnow: "SOC 2 and GDPR" },
    ],
    overLimitLine: "Going past your limits meant buying extra step or AI credit packs.",
    sourceLine: "Last published prices, checked November 14, 2026 from archived copies of Relay.app's pricing page.",
  },
  billing: {
    heading: "What counted as a step in Relay.app",
    body: "Relay.app billed two things. Steps were actions it ran in your apps. AI credits were a separate balance that AI steps used. Triggers and logic were free.",
    counts: ["Each app action, like sending a Slack message", "Each AI step, plus the AI credits it used", "Approval steps, once the request was sent"],
    doesntCount: ["Triggers", "Checking apps for new data", "Filters and paths"],
    example: {
      line: "A 5-step workflow that runs 1,000 times a month",
      steps: ["Workflow runs", "Relay.app counts", "You pay"],
      values: ["1,000 runs", "4,000 steps", "Above every published plan"],
    },
  },
  calculator: {
    heading: "Relay.app cost calculator",
    intro: "See what your workload would have cost on Relay.app, and what it costs today on tools you can still use.",
    defaults: { runs: 1000, steps: 5, yearly: true },
    note: "Ignores AI credits, add-on packs and filters or paths, which were free.",
    calculate: ({ runs, steps, yearly }) => {
      const used = runs * Math.max(steps - 1, 0);
      const plans = [
        { limit: 200, plan: "Free", monthly: "$0/mo", yearly: "$0/mo" },
        { limit: 750, plan: "Professional", monthly: "$38/mo", yearly: "$19/mo" },
        { limit: 1500, plan: "Team", monthly: "—", yearly: "$59/mo" },
      ];
      const match = plans.find((candidate) => used <= candidate.limit);
      return {
        units: used.toLocaleString("en-US"),
        plan: match ? `${match.plan} (Relay.app is closed)` : "None published (Relay.app is closed)",
        cost: match ? (yearly ? match.yearly : match.monthly) : "—",
      };
    },
  },
  freePlan: {
    heading: "Is Relay.app free?",
    answer: "No, not anymore. Relay.app's free plan ended on August 15, 2026, and the whole service closed on September 14. While it ran, the free plan gave one user 200 steps and 500 AI credits a month.",
    rows: ["200 steps a month", "500 AI credits a month", "1 user, all features"],
  },
  features: {
    heading: "Relay.app features",
    rows: [
      { label: "Integrations", value: "200+ app connectors" },
      { label: "AI features", value: "AI steps, agents, MCP servers" },
      { label: "Self-hosting", value: "No, cloud only" },
      { label: "Open source", value: "No" },
      { label: "Code steps", value: "—" },
      { label: "Error handling", value: "—" },
      { label: "Team features", value: "Shared workflows and connections" },
      { label: "SSO and compliance", value: "SOC 2 and GDPR on Enterprise" },
      { label: "Data residency", value: "—" },
    ],
  },
  fit: {
    heading: "Who Relay.app is for",
    goodTitle: "A good fit if",
    good: ["Nobody now, since the service is closed", "Before that, teams wanting human approvals in AI workflows", "Before that, light use that fit in 750 steps"],
    notTitle: "Not a fit if",
    not: ["You need a tool that still runs", "You run thousands of actions a month", "You need self-hosting or open source"],
    ourTake: "Relay.app made human approval steps easy, and that is why people liked it. If you are moving off it, rebuild the approval points first and test for a week before going live.",
  },
  alternatives: {
    heading: "Relay.app alternatives",
    intro: "These tools cover what Relay.app did, from simple app actions to AI steps and approvals.",
    rows: [
      { name: "Zapier", slug: "zapier", startsAt: "$19.99/mo yearly", payFor: "Tasks", freePlan: "100 tasks/mo", selfHosting: "No", whySwitch: "Closest match, with human approval steps" },
      { name: "Make", slug: "make", startsAt: "$12/mo yearly", payFor: "Credits", freePlan: "1,000 credits/mo", selfHosting: "No", whySwitch: "Visual builder, more runs per dollar" },
      { name: "n8n", slug: "n8n", startsAt: "€20/mo yearly", payFor: "Executions", freePlan: "Self-hosted only", selfHosting: "Yes, free", whySwitch: "One charge per run, any step count" },
      { name: "Activepieces", slug: "activepieces", startsAt: "$5 per active flow", payFor: "Active flows", freePlan: "10 active flows", selfHosting: "Yes, MIT license", whySwitch: "Unlimited runs, simple open-source option" },
    ],
  },
  faq: {
    heading: "Relay.app FAQ",
    items: [
      { question: "Is Relay.app shutting down?", answer: "Yes. Relay.app announced its shutdown on July 16, 2026 and closed new signups that day. Free accounts ended on August 15, 2026. Paid accounts ended on September 14, 2026. After each date, the accounts and their data were deleted for good." },
      { question: "How much did Relay.app cost?", answer: "Relay.app had a free plan with 200 steps and 500 AI credits a month. Professional cost $19 a month billed yearly for 750 steps. Team cost $59 a month billed yearly for 1,500 steps and up to 10 users. Enterprise was custom. None of these plans can be bought now." },
      { question: "Is Relay.app free?", answer: "Not anymore. The free plan ended on August 15, 2026. While it ran, it gave one user 200 steps and 500 AI credits a month with every feature included. If you want a free option today, Make, Zapier and Activepieces all have free plans, and n8n is free to self-host." },
      { question: "What counted as a step in Relay.app?", answer: "A step was one action Relay.app ran in another app, like adding a Notion row or sending a Slack message. Triggers, checking for new data, filters and paths were free. AI steps used one step plus AI credits, and approval steps counted once the request was sent." },
      { question: "Can I still export my Relay.app workflows?", answer: "No. Exports of workflows, run history and tables were open until each account's end date. After September 14, 2026, all accounts and data were deleted. If you missed it, you will need to rebuild your workflows from your own notes in a new tool." },
      { question: "What are the best Relay.app alternatives?", answer: "Zapier is the closest match, since it has human approval steps and a similar task-based model. Make costs less per run. n8n charges once per run and can be self-hosted. Activepieces charges per active flow with unlimited runs. Pick based on volume and how much control you need." },
    ],
  },
  cta: {
    heading: "Not sure Relay.app is the right fit?",
    body: "Moving off Relay.app is a good time to rebuild your workflows properly. We help you pick the right tool and set them up so they keep running as you grow.",
  },
  related: {
    heading: "Compare more tools",
    tiles: [
      { name: "Zapier", slug: "zapier", line: "The closest swap, with human approval steps" },
      { name: "Gumloop", slug: "gumloop", line: "AI-first workflows, billed in credits" },
      { name: "Lindy", slug: "lindy", line: "AI agents that handle tasks for you" },
    ],
  },
};
