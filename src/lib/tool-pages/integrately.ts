import type { ToolPage } from "./types";

const plans = [
  { limit: 100, plan: "Free", yearly: 0, monthly: 0 },
  { limit: 2000, plan: "Starter", yearly: 19.99, monthly: 29.99 },
  { limit: 10000, plan: "Professional", yearly: 39, monthly: 49 },
  { limit: 30000, plan: "Growth", yearly: 99, monthly: 124 },
  { limit: 150000, plan: "Business", yearly: 239, monthly: 299 },
];

const formatPrice = (value: number) => `$${value}/mo`;

export const integrately: ToolPage = {
  slug: "integrately",
  name: "Integrately",
  kind: "Workflow platforms",
  status: "active",
  seo: {
    title: "Integrately Pricing, Plans & Features (2026)",
    description: "Integrately pricing for 2026. See every plan from free to $239 a month, how tasks are counted, what the free plan includes, and a cost calculator.",
  },
  checkedAt: "2026-11-14",
  checkedLabel: "November 14, 2026",
  vendorPricingUrl: "https://integrately.com/pricing",
  hub: {
    freePlan: "100 tasks a month, 5 automations, single-step workflows only",
    freeAllowance: 100,
    startsAt: 19.99,
    startsAtLabel: "$19.99/mo",
    youPayFor: "Tasks",
    selfHosting: false,
    openSource: false,
    ai: "AI app connectors, no native AI steps",
    bestFor: "Simple app-to-app automations from templates",
    integrations: 1200,
  },
  hero: {
    h1: "Integrately pricing and features",
    summary: "Integrately is a no-code automation tool with one-click templates for 1,200+ apps. Paid plans start at $19.99 a month billed yearly. The free plan gives you 100 tasks a month. You pay per task, and triggers are free. It suits people who want simple app-to-app automations running fast.",
    primary: { label: "Try the cost calculator", href: "#calculator" },
    secondary: { label: "See alternatives →", href: "#alternatives" },
    tiles: [
      { label: "Free plan", value: "100 tasks/mo" },
      { label: "Starts at", value: "$19.99/mo" },
      { label: "You pay for", value: "Tasks" },
      { label: "Self-hosting", value: "Not offered" },
    ],
  },
  pricing: {
    heading: "Integrately pricing plans",
    intro: "Five plans, each with a fixed number of tasks a month. Paying yearly saves about 20%, or 33% on Starter.",
    hasBillingToggle: true,
    columns: ["Plan", "Price", "Includes", "Users", "Good to know"],
    rows: [
      { plan: "Free", monthly: "$0", yearly: "$0", includes: "100 tasks a month", users: "1", goodToKnow: "5 automations, single-step only" },
      { plan: "Starter", monthly: "$29.99/mo", yearly: "$19.99/mo", includes: "2,000 tasks a month", users: "1", goodToKnow: "Multi-step, webhooks, 3 premium apps" },
      { plan: "Professional", monthly: "$49/mo", yearly: "$39/mo", includes: "10,000 tasks a month", users: "1", goodToKnow: "Paths, iterator, auto-retry" },
      { plan: "Growth", monthly: "$124/mo", yearly: "$99/mo", includes: "30,000 tasks a month", users: "Unlimited", goodToKnow: "Team workspace, folder permissions" },
      { plan: "Business", monthly: "$299/mo", yearly: "$239/mo", includes: "150,000 tasks a month", users: "Unlimited", goodToKnow: "Premium support" },
    ],
    overLimitLine: "There are no overage fees. When you run out of tasks, actions pause until you upgrade or the month resets.",
    sourceLine: "Prices checked November 14, 2026 on Integrately's pricing page.",
  },
  billing: {
    heading: "What counts as a task in Integrately",
    body: "Integrately bills by the task. A task is one step that runs after the trigger, like adding a contact or sending an email. The trigger itself is free. Searches, data edits and conditions each count as a task too.",
    counts: ["Each action that runs successfully", "Each search step", "Each modify-data step", "Each condition or path check"],
    doesntCount: ["The trigger that starts the workflow", "Failed actions", "Checks for new data that find nothing"],
    example: {
      line: "A 5-step workflow that runs 1,000 times a month",
      steps: ["Workflow runs", "Integrately counts", "You pay"],
      values: ["1,000 runs", "5,000 tasks", "$39/mo on Professional"],
    },
  },
  calculator: {
    heading: "Integrately cost calculator",
    intro: "Enter how often your workflow runs and how many steps it has. We show the tasks used and the cheapest plan.",
    defaults: { runs: 1000, steps: 5, yearly: true },
    note: "Ignores loops, paths that skip steps, failed runs and sales tax.",
    calculate: ({ runs, steps, yearly }) => {
      const tasks = runs * steps;
      const units = tasks.toLocaleString("en-US");
      const plan = plans.find((candidate) => {
        if (candidate.plan === "Free") return steps === 1 && tasks <= candidate.limit;
        return tasks <= candidate.limit;
      });
      if (!plan) return { units, plan: "Contact Integrately", cost: "Custom" };
      if (plan.plan === "Free") return { units, plan: plan.plan, cost: "$0/mo" };
      return {
        units,
        plan: plan.plan,
        cost: formatPrice(yearly ? plan.yearly : plan.monthly),
      };
    },
  },
  freePlan: {
    heading: "Is Integrately free?",
    answer: "Yes. Integrately has a free plan with no time limit. You get 100 tasks a month, but each automation can only have one step. Paid plans come with a 14-day free trial.",
    rows: ["100 tasks a month", "Up to 5 automations", "Single-step workflows, checked every 15 minutes"],
  },
  features: {
    heading: "Integrately features",
    rows: [
      { label: "Integrations", value: "1,200+ apps with one-click templates" },
      { label: "AI features", value: "ChatGPT and AI apps with your own key. No native AI steps." },
      { label: "Self-hosting", value: "Not offered. Cloud only." },
      { label: "Open source", value: "No" },
      { label: "Code steps", value: "No code steps. Webhooks and HTTP requests on Starter and up." },
      { label: "Error handling", value: "Auto-retry on Professional and up, plus run history" },
      { label: "Team features", value: "Unlimited users and folder permissions on Growth and up" },
      { label: "SSO and compliance", value: "No SSO or certifications published" },
      { label: "Data residency", value: "Not published" },
    ],
  },
  fit: {
    heading: "Who Integrately is for",
    goodTitle: "A good fit if",
    good: ["You want ready-made templates you switch on in one click", "Your workflows are simple app-to-app tasks", "You want more tasks per dollar than most entry plans"],
    notTitle: "Not a fit if",
    not: ["You need native AI steps or AI agents", "You need self-hosting or full control of your data", "You need SSO, audit logs or published compliance reports"],
    ourTake: "We don't build client work on Integrately, but it's a fair pick for simple automations on a small budget. Once workflows need AI or many steps, the task count adds up quickly.",
  },
  alternatives: {
    heading: "Integrately alternatives",
    intro: "These tools cover similar ground. Some charge per run instead of per step, which can cost less for long workflows.",
    rows: [
      { name: "Zapier", slug: "zapier", startsAt: "$19.99/mo", payFor: "Tasks", freePlan: "100 tasks/mo", selfHosting: "No", whySwitch: "More apps and built-in AI steps" },
      { name: "Make", slug: "make", startsAt: "$12/mo yearly", payFor: "Credits", freePlan: "1,000 credits/mo", selfHosting: "No", whySwitch: "Visual builder for complex logic" },
      { name: "Pabbly Connect", slug: "pabbly-connect", startsAt: "$15/mo yearly", payFor: "Tasks (triggers and internal steps free)", freePlan: "100 tasks/mo", selfHosting: "No", whySwitch: "More tasks per dollar" },
      { name: "n8n", slug: "n8n", startsAt: "€20/mo yearly", payFor: "Executions (one per run)", freePlan: "Free when self-hosted", selfHosting: "Yes, free Community edition", whySwitch: "Pay per run, not per step" },
    ],
  },
  faq: {
    heading: "Integrately FAQ",
    items: [
      { question: "How much does Integrately cost?", answer: "Integrately has a free plan with 100 tasks a month. Paid plans start at $19.99 a month billed yearly for Starter, or $29.99 month to month. Professional is $39, Growth is $99 and Business is $239 a month when billed yearly. Each plan includes a fixed number of tasks." },
      { question: "Is Integrately free?", answer: "Yes. The free plan has no time limit and includes 100 tasks a month and up to 5 automations. Each automation can only have one step, and it checks for new data every 15 minutes. Webhooks and premium apps need a paid plan. Paid plans come with a 14-day free trial." },
      { question: "How does Integrately count tasks?", answer: "Each step that runs after the trigger counts as one task. That includes actions, searches, data edits and conditions. The trigger is free, and failed actions don't count. So a workflow with 5 steps after the trigger uses 5 tasks every time it runs." },
      { question: "What happens when you run out of tasks?", answer: "Integrately doesn't charge overage fees. Your automations stay in place, but their actions stop running and new records wait in a queue. Once you upgrade or your monthly tasks reset, you can resume them from the History page. Unused tasks don't roll over to the next month." },
      { question: "Is Integrately cheaper than Zapier?", answer: "At the entry level, yes. Integrately Starter gives 2,000 tasks for $19.99 a month billed yearly. Zapier's Professional plan starts at about the same price with 750 tasks. Zapier has more apps and built-in AI steps, so the better pick depends on what your workflows need." },
      { question: "Does Integrately have AI features?", answer: "Integrately connects to ChatGPT and other AI apps, but you use your own API key and pay for tokens on top of your tasks. It also has an AI workflow builder. It doesn't offer native AI steps, AI agents or an MCP server like some newer tools do." },
    ],
  },
  cta: {
    heading: "Not sure Integrately is the right fit?",
    body: "Tell us what you want to automate. We'll help you pick the tool that fits your workflows and budget, and show you how much time it can free up each month.",
  },
  related: {
    heading: "Compare more tools",
    tiles: [
      { name: "Zapier", slug: "zapier", line: "The biggest app library, priced per task" },
      { name: "Pabbly Connect", slug: "pabbly-connect", line: "Low-cost tasks with free internal steps" },
      { name: "Make", slug: "make", line: "Visual scenarios priced by credits" },
    ],
  },
};
