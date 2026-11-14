import type { ToolPage } from "./types";

const formatPrice = (value: number) => `$${Number.isInteger(value) ? value : value.toFixed(2)}/mo`;

const professionalTiers = [
  { units: 750, monthly: 29.99, yearly: 19.99 },
  { units: 1500, monthly: 58.5, yearly: 39 },
  { units: 2000, monthly: 73.5, yearly: 49 },
  { units: 5000, monthly: 133.5, yearly: 89 },
  { units: 10000, monthly: 193.5, yearly: 129 },
  { units: 20000, monthly: 283.5, yearly: 189 },
  { units: 50000, monthly: 433.5, yearly: 289 },
  { units: 100000, monthly: 733.5, yearly: 489 },
  { units: 200000, monthly: 1149, yearly: 769 },
  { units: 300000, monthly: 1599, yearly: 1069 },
  { units: 400000, monthly: 1899, yearly: 1269 },
  { units: 500000, monthly: 2199, yearly: 1499 },
  { units: 750000, monthly: 2999, yearly: 1999 },
  { units: 1000000, monthly: 3299, yearly: 2199 },
  { units: 1250000, monthly: 3899, yearly: 2599 },
  { units: 1500000, monthly: 4499, yearly: 2999 },
  { units: 1750000, monthly: 4799, yearly: 3199 },
  { units: 2000000, monthly: 5099, yearly: 3389 },
];

const teamTiers = [
  { units: 2000, monthly: 103.5, yearly: 69 },
  { units: 5000, monthly: 178.5, yearly: 119 },
  { units: 10000, monthly: 253.5, yearly: 169 },
  { units: 20000, monthly: 373.5, yearly: 249 },
  { units: 50000, monthly: 598.5, yearly: 399 },
  { units: 100000, monthly: 898.5, yearly: 599 },
  { units: 200000, monthly: 1499, yearly: 999 },
  { units: 300000, monthly: 1799, yearly: 1199 },
  { units: 400000, monthly: 2099, yearly: 1399 },
  { units: 500000, monthly: 2699, yearly: 1799 },
  { units: 750000, monthly: 3299, yearly: 2199 },
  { units: 1000000, monthly: 3749, yearly: 2499 },
  { units: 1250000, monthly: 4499, yearly: 2999 },
  { units: 1500000, monthly: 5099, yearly: 3399 },
  { units: 1750000, monthly: 5699, yearly: 3799 },
  { units: 2000000, monthly: 5999, yearly: 3999 },
];

export const zapier: ToolPage = {
  slug: "zapier",
  name: "Zapier",
  kind: "Workflow platforms",
  status: "active",
  seo: {
    title: "Zapier Pricing, Plans & Features (2026)",
    description: "Zapier pricing for 2026. Free plan, Professional from $19.99/mo, Team from $69/mo, the full task price ladder, what counts as a task and a cost calculator.",
  },
  checkedAt: "2026-11-14",
  checkedLabel: "November 14, 2026",
  vendorPricingUrl: "https://zapier.com/pricing",
  hub: {
    freePlan: "100 tasks a month",
    freeAllowance: 100,
    startsAt: 19.99,
    startsAtLabel: "$19.99/mo",
    youPayFor: "Tasks",
    selfHosting: false,
    openSource: false,
    ai: "AI steps, Agents, Chatbots, MCP",
    bestFor: "Non-technical teams who want fast setup",
    integrations: 9000,
  },
  hero: {
    h1: "Zapier pricing and features",
    summary: "Zapier is a cloud workflow tool that links 9,000+ apps without code. The Free plan gives you 100 tasks a month. Paid plans start at $19.99 a month billed yearly. You pay per task, which is each successful action step. It suits teams that want quick, no-code automations.",
    primary: { label: "Try the cost calculator", href: "#calculator" },
    secondary: { label: "See alternatives →", href: "#alternatives" },
    tiles: [
      { label: "Free plan", value: "Yes, 100 tasks/mo" },
      { label: "Starts at", value: "$19.99/mo" },
      { label: "You pay for", value: "Tasks" },
      { label: "Self-hosting", value: "No" },
    ],
  },
  pricing: {
    heading: "Zapier pricing plans",
    intro: "Zapier prices each plan by how many tasks you need a month. Pick a higher task tier and the price goes up. Yearly billing saves 33%.",
    hasBillingToggle: true,
    columns: ["Plan", "Price", "Includes", "Users", "Good to know"],
    rows: [
      { plan: "Free", monthly: "$0", yearly: "$0", includes: "100 tasks/mo", users: "1", goodToKnow: "Two-step Zaps only" },
      { plan: "Professional", monthly: "From $29.99/mo", yearly: "From $19.99/mo", includes: "750 to 2M tasks/mo", users: "1", goodToKnow: "Multi-step Zaps, premium apps, webhooks" },
      { plan: "Team", monthly: "From $103.50/mo", yearly: "From $69/mo", includes: "2,000 to 2M tasks/mo", users: "Up to 25", goodToKnow: "Shared workspace and SAML SSO" },
      { plan: "Enterprise", monthly: "Custom", yearly: "Custom", includes: "Yearly task pool", users: "Unlimited", goodToKnow: "SCIM, log streams, account manager" },
    ],
    overLimitLine: "Go over your tasks and Zaps keep running at a higher per-task rate, up to 3x your plan.",
    sourceLine: "Prices checked November 14, 2026 on Zapier's pricing page.",
  },
  billing: {
    heading: "What counts as a task in Zapier",
    body: "Zapier counts one task each time an action step finishes. The trigger that starts a Zap is free. So are built-in tools like Filter and Formatter. AI steps cost more since June 2026.",
    counts: ["Each successful action step", "Code steps, 1 task plus long runs", "AI steps, 1 to 5 tasks each", "Each MCP tool call, 2 tasks"],
    doesntCount: ["Triggers, even when they poll", "Filter, Paths, Formatter, Delay, Looping", "Zapier Tables and Forms", "Steps that fail or get skipped"],
    example: {
      line: "A 5-step workflow that runs 1,000 times a month",
      steps: ["Workflow runs", "Zapier counts", "You pay"],
      values: ["1,000 runs", "4,000 tasks", "$89/mo on Professional (yearly)"],
    },
  },
  calculator: {
    heading: "Zapier cost calculator",
    intro: "Enter how often your workflow runs and how many steps it has. We show the tasks you use and the cheapest plan.",
    defaults: { runs: 1000, steps: 5, yearly: false },
    extraInputs: [
      { id: "freeSteps", label: "Filter or Formatter steps", default: 0 },
      { id: "aiSteps", label: "AI steps per run", default: 0 },
      { id: "aiRate", label: "AI model tier rate (Standard 1, Advanced 3, Premium 5, own API key 1)", default: 3 },
      { id: "users", label: "Users", default: 1 },
    ],
    note: "Assumes every action succeeds, no AI tool calls, no Code runs over 30 seconds, and no pay-per-task overage.",
    calculate: ({ runs, steps, yearly, extra }) => {
      const freeSteps = extra.freeSteps ?? 0;
      const aiSteps = extra.aiSteps ?? 0;
      const aiRate = extra.aiRate ?? 3;
      const users = extra.users ?? 1;
      const plainSteps = Math.max(steps - 1 - freeSteps - aiSteps, 0);
      const tasksPerRun = plainSteps + aiSteps * aiRate;
      const tasks = runs * tasksPerRun;
      const units = tasks.toLocaleString("en-US");

      if (tasks <= 100 && steps <= 2 && aiSteps === 0 && users === 1) {
        return { units, plan: "Free", cost: "$0/mo" };
      }

      const tiers = users === 1 ? professionalTiers : teamTiers;
      const planName = users === 1 ? "Professional" : "Team";
      const tier = tiers.find((candidate) => candidate.units >= tasks);

      if (!tier) {
        return { units, plan: "Enterprise", cost: "Contact Zapier sales" };
      }

      return {
        units,
        plan: `${planName}, ${tier.units.toLocaleString("en-US")} tasks`,
        cost: formatPrice(yearly ? tier.yearly : tier.monthly),
      };
    },
  },
  freePlan: {
    heading: "Is Zapier free?",
    answer: "Yes, Zapier has a free plan with 100 tasks a month. It only runs two-step Zaps, one trigger and one action. You can also try Professional free for 14 days without a card.",
    rows: ["100 tasks a month, 1 user", "Two-step Zaps, checked every 15 minutes", "No premium apps, webhooks or published AI steps"],
  },
  features: {
    heading: "Zapier features",
    rows: [
      { label: "Integrations", value: "9,000+ apps" },
      { label: "AI features", value: "AI steps, Agents, Chatbots, Copilot and an MCP server" },
      { label: "Self-hosting", value: "No, cloud only" },
      { label: "Open source", value: "No" },
      { label: "Code steps", value: "JavaScript and Python, 1 task per run" },
      { label: "Error handling", value: "Error handler paths and replay of held runs" },
      { label: "Team features", value: "Shared workspace, connections and folders on Team" },
      { label: "SSO and compliance", value: "SAML SSO on Team, SOC 2 Type II, GDPR" },
      { label: "Data residency", value: "US only (AWS)" },
    ],
  },
  fit: {
    heading: "Who Zapier is for",
    goodTitle: "A good fit if",
    good: ["Your team doesn't write code and wants results this week", "You need niche apps that other tools don't connect to", "Your workflows are short and run a few thousand times a month"],
    notTitle: "Not a fit if",
    not: ["Your workflows have many steps and run at high volume", "You need to self-host or keep data in the EU", "You plan heavy AI steps with tool calls on Premium models"],
    ourTake: "Zapier is the fastest way to get simple automations live. Costs climb with long Zaps and AI tool calls, so we check task use before you scale.",
  },
  alternatives: {
    compareLinks: [{ label: "Zapier vs Make", slug: "make-vs-zapier" }, { label: "Zapier vs n8n", slug: "n8n-vs-zapier" }],
    heading: "Zapier alternatives",
    intro: "These tools charge in different ways. Some bill per run instead of per step, which can cost much less for long workflows.",
    rows: [
      { name: "n8n", slug: "n8n", startsAt: "$20/mo (yearly)", payFor: "Workflow runs", freePlan: "Self-hosted only", selfHosting: "Yes, free", whySwitch: "One charge per run, any step count" },
      { name: "Make", slug: "make", startsAt: "$9/mo (yearly)", payFor: "Credits per module", freePlan: "1,000 credits/mo", selfHosting: "No", whySwitch: "Lower price per step" },
      { name: "Activepieces", slug: "activepieces", startsAt: "$20/mo", payFor: "Credits", freePlan: "1,000 credits/mo", selfHosting: "Yes, free (MIT)", whySwitch: "Open source with a cheap cloud plan" },
      { name: "Power Automate", slug: "power-automate", startsAt: "$15/user/mo (yearly)", payFor: "Users", freePlan: "With Microsoft 365", selfHosting: "No", whySwitch: "Your team already lives in Microsoft 365" },
    ],
  },
  faq: {
    heading: "Zapier FAQ",
    items: [
      { question: "How much does Zapier cost?", answer: "Zapier has a free plan with 100 tasks a month. Professional starts at $19.99 a month billed yearly, or $29.99 billed monthly, for 750 tasks. Team starts at $69 a month billed yearly for 2,000 tasks and up to 25 users. Prices rise with task volume, up to 2 million tasks." },
      { question: "Is Zapier free?", answer: "Yes. The Free plan costs nothing and includes 100 tasks a month for one user. Zaps can only have two steps, a trigger and one action, and apps are checked every 15 minutes. Premium apps and webhooks are not included. You can also try Professional free for 14 days." },
      { question: "What counts as a task in Zapier?", answer: "A task is one action step that runs successfully. Triggers don't count. Neither do Filter, Paths, Formatter, Delay, Looping, Tables or Forms. Steps that fail or get skipped are free too. Code steps use 1 task, AI steps use 1 to 5 tasks, and each Zapier MCP tool call uses 2." },
      { question: "How much do AI steps cost in Zapier?", answer: "Since June 15, 2026, AI by Zapier steps cost tasks based on the model tier. Standard models use 1 task per run, Advanced models use 3 and Premium models use 5. Each tool call the AI makes costs the same again. Using your own AI key keeps it at 1 task per step and per call." },
      { question: "What happens if I go over my Zapier task limit?", answer: "With pay-per-task on, your Zaps keep running and extra tasks cost more than plan tasks. Usage stops at three times your plan's limit. If pay-per-task is off, new runs are held until your next billing cycle. Held runs can be replayed later, so you don't lose them." },
      { question: "Is n8n cheaper than Zapier?", answer: "Usually, for workflows with many steps. n8n charges once per workflow run, not per step, and its Starter cloud plan is $20 a month billed yearly for 2,500 runs. You can also self-host n8n for free. Zapier is quicker to start with if no one on your team writes code." },
    ],
  },
  cta: {
    heading: "Want Zapier workflows built for you?",
    body: "We design and build Zapier workflows that let your business grow without adding headcount. We also keep task use lean, so your bill grows slower than your business. Tell us what you want automated.",
  },
  related: {
    heading: "Compare more tools",
    tiles: [
      { name: "n8n", slug: "n8n", line: "Pay per workflow run, or self-host for free." },
      { name: "Make", slug: "make", line: "Visual builder that bills in credits per module." },
      { name: "Power Automate", slug: "power-automate", line: "Microsoft's automation tool, priced per user." },
    ],
  },
};
