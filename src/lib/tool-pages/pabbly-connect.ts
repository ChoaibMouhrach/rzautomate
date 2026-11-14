import type { ToolPage } from "./types";

export const pabblyConnect: ToolPage = {
  slug: "pabbly-connect",
  name: "Pabbly Connect",
  kind: "Workflow platforms",
  status: "active",
  seo: {
    title: "Pabbly Connect Pricing, Plans & Features (2026)",
    description: "See what Pabbly Connect costs in 2026. Monthly, yearly and lifetime plans, the free plan, and which steps count as tasks. Try our cost calculator.",
  },
  checkedAt: "2026-11-14",
  checkedLabel: "November 14, 2026",
  vendorPricingUrl: "https://www.pabbly.com/connect/pricing/",
  hub: {
    freePlan: "100 tasks a month",
    freeAllowance: 100,
    startsAt: 16,
    startsAtLabel: "$16/mo",
    youPayFor: "Tasks",
    selfHosting: false,
    openSource: false,
    ai: "AI Agent steps and MCP server",
    bestFor: "Budget automation with lots of tasks",
    integrations: 2000,
  },
  hero: {
    h1: "Pabbly Connect pricing and features",
    summary: "Pabbly Connect links your apps and runs tasks for you, with no code. Paid plans start at $19 a month, or $16 a month billed yearly. The free plan gives you 100 tasks a month. You pay per action step, and triggers, filters and formatters are free. It suits teams watching every dollar.",
    primary: { label: "Try the cost calculator", href: "#calculator" },
    secondary: { label: "See alternatives →", href: "#alternatives" },
    tiles: [
      { label: "Free plan", value: "100 tasks a month" },
      { label: "Starts at", value: "$19/mo" },
      { label: "You pay for", value: "Tasks" },
      { label: "Self-hosting", value: "Not offered" },
    ],
  },
  pricing: {
    heading: "Pabbly Connect pricing plans",
    intro: "Two subscription plans and three one-time lifetime plans. Yearly billing saves 15%, and longer terms save up to 25%.",
    hasBillingToggle: true,
    columns: ["Plan", "Price", "Includes", "Users", "Good to know"],
    rows: [
      { plan: "Free", monthly: "$0", yearly: "$0", includes: "100 tasks a month", users: "1", goodToKnow: "2 workflows, 2 steps each" },
      { plan: "Standard", monthly: "$19/mo", yearly: "$16/mo", includes: "10,000 tasks a month", users: "Team access on yearly only", goodToKnow: "Stack plans to add tasks" },
      { plan: "Unlimited", monthly: "$79/mo", yearly: "$69/mo", includes: "Unlimited tasks, fair use applies", users: "Unlimited on yearly", goodToKnow: "Resets by hand every 100,000 tasks" },
      { plan: "Standard Lifetime", monthly: "$349 once", yearly: "$349 once", includes: "3,000 tasks a month", users: "Unlimited", goodToKnow: "10 workflows, 2 steps, no support" },
      { plan: "Ultimate Lifetime", monthly: "$799 once", yearly: "$799 once", includes: "10,000 tasks a month", users: "Unlimited", goodToKnow: "No support included" },
      { plan: "Ultimate Plus Lifetime", monthly: "$1,298 once", yearly: "$1,298 once", includes: "20,000 tasks a month", users: "Unlimited", goodToKnow: "Multi-step workflows, 1 year support" },
    ],
    overLimitLine: "There's no overage fee. When your tasks run out, workflows pause until the monthly reset or you add a plan.",
    sourceLine: "Prices checked November 14, 2026 on Pabbly Connect's pricing page.",
  },
  billing: {
    heading: "What counts as a task in Pabbly Connect",
    body: "A task is one action that runs in another app, like adding a row to Google Sheets. The trigger that starts the workflow is free. So are Pabbly's own helper steps, like filters and formatters.",
    counts: ["Each action in an outside app", "Each item an action handles in a loop", "Failed actions that reached the app"],
    doesntCount: ["Triggers", "Filters, routers, formatters and iterators", "Delays, schedules and the email parser", "Code and API by Pabbly steps"],
    example: {
      line: "A 5-step workflow that runs 1,000 times a month",
      steps: ["Workflow runs", "Pabbly Connect counts", "You pay"],
      values: ["1,000 runs", "4,000 tasks", "$19 on Standard"],
    },
  },
  calculator: {
    heading: "Pabbly Connect cost calculator",
    intro: "Enter how often your workflow runs and how many steps it has. We'll show the tasks used and the cheapest plan.",
    defaults: { runs: 1000, steps: 5, yearly: false },
    extraInputs: [{ id: "freeSteps", label: "Filter, formatter or code steps", default: 0 }],
    note: "Ignores loops, failed retries and lifetime plans. Unlimited is subject to Pabbly's fair use policy.",
    calculate: ({ runs, steps, yearly, extra }) => {
      const freeSteps = extra.freeSteps ?? 0;
      const tasks = runs * Math.max(steps - 1 - freeSteps, 0);
      const units = tasks.toLocaleString("en-US");
      if (tasks <= 100 && steps - freeSteps <= 2) {
        return { units, plan: "Free", cost: "$0/mo" };
      }
      const blocks = Math.max(Math.ceil(tasks / 10000), 1);
      const standardCost = blocks * (yearly ? 16 : 19);
      const unlimitedCost = yearly ? 69 : 79;
      if (standardCost <= unlimitedCost) {
        return { units, plan: "Standard", cost: `$${standardCost}/mo` };
      }
      return { units, plan: "Unlimited", cost: `$${unlimitedCost}/mo` };
    },
  },
  freePlan: {
    heading: "Is Pabbly Connect free?",
    answer: "Yes, there's a free plan with 100 tasks a month and no end date. It's tight, though. You get 2 workflows with 2 steps each, so it's best for testing.",
    rows: ["100 tasks every month", "2 workflows, 2 steps each", "No credit card needed"],
  },
  features: {
    heading: "Pabbly Connect features",
    rows: [
      { label: "Integrations", value: "2,000+ apps, plus webhooks and API calls" },
      { label: "AI features", value: "AI Agent steps, OpenAI and Claude apps, MCP server" },
      { label: "Self-hosting", value: "Not offered, cloud only" },
      { label: "Open source", value: "No" },
      { label: "Code steps", value: "JavaScript and Python, no task cost" },
      { label: "Error handling", value: "Auto retry up to 5 times, skip failed steps" },
      { label: "Team features", value: "Team members on yearly and lifetime plans" },
      { label: "SSO and compliance", value: "No SSO. SOC 2 Type 2 and ISO 27001." },
      { label: "Data residency", value: "Not published" },
    ],
  },
  fit: {
    heading: "Who Pabbly Connect is for",
    goodTitle: "A good fit if",
    good: ["You run lots of simple app-to-app workflows", "You want a low, fixed monthly bill", "You use many filters and formatters"],
    notTitle: "Not a fit if",
    not: ["You need SSO or a named data region", "You want to self-host your automations", "You need fast live chat support"],
    ourTake: "We think Pabbly Connect is one of the cheapest ways to run high task volumes. Check the lifetime plan limits closely before you buy, since the cheaper ones cap steps and support.",
  },
  alternatives: {
    heading: "Pabbly Connect alternatives",
    intro: "These tools do the same job with different billing. Prices are the lowest paid plan, billed yearly.",
    rows: [
      { name: "n8n", slug: "n8n", startsAt: "€20/mo", payFor: "Workflow runs", freePlan: "Self-hosted only", selfHosting: "Yes, free", whySwitch: "Pay per run, not per step" },
      { name: "Zapier", slug: "zapier", startsAt: "$19.99/mo", payFor: "Tasks", freePlan: "100 tasks", selfHosting: "No", whySwitch: "Most app integrations and AI tools" },
      { name: "Make", slug: "make", startsAt: "$9/mo", payFor: "Credits", freePlan: "1,000 credits", selfHosting: "No", whySwitch: "Visual builder for complex logic" },
      { name: "Integrately", slug: "integrately", startsAt: "$19.99/mo", payFor: "Tasks", freePlan: "100 tasks", selfHosting: "No", whySwitch: "Ready-made one-click automations" },
      { name: "Activepieces", slug: "activepieces", startsAt: "$20/mo", payFor: "Credits", freePlan: "Yes", selfHosting: "Yes, open source", whySwitch: "Open source you can self-host" },
    ],
  },
  faq: {
    heading: "Pabbly Connect FAQ",
    items: [
      { question: "How much does Pabbly Connect cost?", answer: "Pabbly Connect Standard costs $19 a month for 10,000 tasks, or $16 a month billed yearly. The Unlimited plan costs $79 a month, or $69 a month billed yearly. There's also a free plan with 100 tasks a month and one-time lifetime plans from $349." },
      { question: "Is Pabbly Connect free?", answer: "Yes. The free plan gives you 100 tasks a month with no time limit and no credit card. You can build up to 2 workflows with 2 steps each. That's enough to test the tool, but most real workflows need a paid plan." },
      { question: "Does Pabbly Connect still sell a lifetime deal?", answer: "Yes, as of November 2026. You pay once and get a set number of tasks every month. Standard Lifetime costs $349 for 3,000 tasks, Ultimate $799 for 10,000 and Ultimate Plus $1,298 for 20,000. The cheaper ones limit steps and leave out support." },
      { question: "How does Pabbly Connect count tasks?", answer: "Each action that runs in another app counts as one task. Triggers are free. So are Pabbly's own steps like filters, routers, formatters, iterators, delays and code. A workflow with one trigger and four actions uses four tasks each time it runs." },
      { question: "Is Pabbly Connect cheaper than Zapier?", answer: "For most workloads, yes. Pabbly Connect gives you 10,000 tasks for $19 a month. Zapier's entry plan starts at $19.99 a month billed yearly for far fewer tasks. Zapier has more integrations and AI tools, so compare features too." },
      { question: "Is the Unlimited plan really unlimited?", answer: "Mostly. There's no fixed task cap, but a fair use policy applies. Your account starts with 100,000 tasks, and Pabbly resets the count when you ask or when you use most of it. Rate limits still apply to very heavy use." },
    ],
  },
  cta: {
    heading: "Not sure Pabbly Connect is the right fit?",
    body: "Tell us what you want to automate. We'll help you pick the tool that keeps costs low as you grow, and build workflows that save your team hours every week.",
  },
  related: {
    heading: "Compare more tools",
    tiles: [
      { name: "Zapier", slug: "zapier", line: "The biggest app library, priced per task" },
      { name: "Make", slug: "make", line: "Visual builder, priced per credit" },
      { name: "Integrately", slug: "integrately", line: "One-click automations, priced per task" },
    ],
  },
};
