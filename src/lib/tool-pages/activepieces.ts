import type { ToolPage } from "./types";

const formatDollars = (value: number) => `$${(Math.round(value * 100) / 100).toLocaleString("en-US")}/mo`;

export const activepieces: ToolPage = {
  slug: "activepieces",
  name: "Activepieces",
  kind: "Workflow platforms",
  status: "active",
  seo: {
    title: "Activepieces Pricing, Plans & Features (2026)",
    description: "Activepieces pricing for 2026. Free plan, Plus at $20 a month, Team at $200, how credits work, and the free open-source self-hosted edition.",
  },
  checkedAt: "2026-11-14",
  checkedLabel: "November 14, 2026",
  vendorPricingUrl: "https://www.activepieces.com/pricing",
  hub: {
    freePlan: "1,000 credits",
    freeAllowance: 1000,
    startsAt: 16,
    startsAtLabel: "$16/mo",
    youPayFor: "Credits",
    selfHosting: true,
    openSource: true,
    ai: "AI steps, agents and MCP, own keys on Plus",
    bestFor: "Cheap, high-volume flows with many steps",
    integrations: 770,
  },
  hero: {
    h1: "Activepieces pricing and features",
    summary: "Activepieces is an open-source automation tool with a hosted cloud and a free self-hosted edition. Paid cloud plans start at $20 a month, and the free plan gives you 1,000 credits. Each flow run costs one credit, no matter how many steps it has. It suits teams running many simple flows on a budget.",
    primary: { label: "Try the cost calculator", href: "#calculator" },
    secondary: { label: "See alternatives →", href: "#alternatives" },
    tiles: [
      { label: "Free plan", value: "1,000 credits" },
      { label: "Starts at", value: "$20/mo" },
      { label: "You pay for", value: "Credits, 1 per run" },
      { label: "Self-hosting", value: "Free, open source" },
    ],
  },
  pricing: {
    heading: "Activepieces pricing plans",
    intro: "Four cloud plans, an embed option and a free self-hosted edition. Yearly billing saves about two months on Plus and Team.",
    hasBillingToggle: true,
    columns: ["Plan", "Price", "Includes", "Users", "Good to know"],
    rows: [
      { plan: "Free", monthly: "$0", yearly: "$0", includes: "1,000 credits", users: "Up to 5", goodToKnow: "Runs pause when credits run out" },
      { plan: "Plus", monthly: "$20/mo", yearly: "$16/mo", includes: "10,000 credits a month", users: "Up to 5", goodToKnow: "Use your own AI keys" },
      { plan: "Team", monthly: "$200/mo", yearly: "$166/mo", includes: "50,000 credits a month", users: "25 included", goodToKnow: "SSO, projects and email support" },
      { plan: "Ultimate", monthly: "Custom", yearly: "Custom", includes: "Yearly credit pool", users: "Unlimited", goodToKnow: "Audit logs, SCIM, Git Sync" },
      { plan: "Embed", monthly: "Custom", yearly: "From $36,000/yr", includes: "Set in contract", users: "Custom", goodToKnow: "Builder inside your own product" },
      { plan: "Community (self-hosted)", monthly: "$0", yearly: "$0", includes: "No credit limit", users: "No limit", goodToKnow: "You run the server, no support" },
    ],
    overLimitLine: "On Plus and Team, extra credits cost $0.007 each. Free runs wait until credits refresh.",
    sourceLine: "Prices checked November 14, 2026 on Activepieces's pricing page.",
  },
  billing: {
    heading: "What counts as a credit in Activepieces",
    body: "Activepieces charges per run, not per step. A flow with two steps and a flow with twenty both use one credit each time they run. AI steps are the exception and add credits on top.",
    counts: ["Each flow run, 1 credit", "AI steps, 2 to 20 credits by model", "Each agentic action, 1 credit"],
    doesntCount: ["Normal steps inside a run", "How many flows you have switched on", "Users within your plan's limit"],
    example: {
      line: "A 5-step workflow that runs 1,000 times a month",
      steps: ["Workflow runs", "Activepieces counts", "You pay"],
      values: ["1,000 runs", "1,000 credits", "$0 on Free"],
    },
  },
  calculator: {
    heading: "Activepieces cost calculator",
    intro: "Enter your runs and AI steps. We show the credits you'd use and the cheapest plan.",
    defaults: { runs: 1000, steps: 5, yearly: false },
    extraInputs: [
      { id: "aiSteps", label: "AI steps per run", default: 0 },
      { id: "aiCredit", label: "Credits per AI step (2 fast, 10 smart, 20 frontier, 1 own key)", default: 2 },
    ],
    note: "Ignores your own AI provider bill, extra seats and the cost of self-hosting.",
    calculate: ({ runs, yearly, extra }) => {
      const aiSteps = extra.aiSteps ?? 0;
      const aiCredit = extra.aiCredit ?? 2;
      const credits = runs * (1 + aiSteps * aiCredit);
      const ownKey = aiSteps > 0 && aiCredit === 1;
      const units = credits.toLocaleString("en-US");
      if (credits <= 1000 && !ownKey) {
        return { units, plan: "Free", cost: "$0/mo" };
      }
      const plus = (yearly ? 16 : 20) + Math.max(0, credits - 10000) * 0.007;
      const team = (yearly ? 166 : 200) + Math.max(0, credits - 50000) * 0.007;
      const result =
        plus <= team
          ? { units, plan: "Plus", cost: formatDollars(plus) }
          : { units, plan: "Team", cost: formatDollars(team) };
      return credits > 1000000 ? { ...result, selfHostLine: "Ask about Ultimate volume rates" } : result;
    },
  },
  freePlan: {
    heading: "Is Activepieces free?",
    answer: "Yes. The cloud Free plan gives you 1,000 credits with no card and no time limit. The self-hosted Community Edition is free too, with no run limits, but you pay for and look after the server.",
    rows: ["1,000 credits, one per flow run", "Up to 5 users, unlimited flows and agents", "Runs pause at the limit, no surprise bill"],
  },
  features: {
    heading: "Activepieces features",
    rows: [
      { label: "Integrations", value: "770+ apps, plus HTTP and webhook steps" },
      { label: "AI features", value: "AI steps, agents, MCP servers, tables, own AI keys on Plus" },
      { label: "Self-hosting", value: "Yes, free Community Edition or paid enterprise license" },
      { label: "Open source", value: "Yes, MIT core with paid enterprise add-ons" },
      { label: "Code steps", value: "JavaScript and TypeScript, with packages" },
      { label: "Error handling", value: "Auto retry, continue on fail, failure alerts" },
      { label: "Team features", value: "Projects and roles on Team, audit logs and Git Sync on Ultimate" },
      { label: "SSO and compliance", value: "SSO from Team; SOC 2 in progress, not certified" },
      { label: "Data residency", value: "EU cloud in Frankfurt, other regions on request" },
    ],
  },
  fit: {
    heading: "Who Activepieces is for",
    goodTitle: "A good fit if",
    good: ["You run long flows and hate paying per step", "You want open source you can self-host for free", "You need EU hosting without an enterprise contract"],
    notTitle: "Not a fit if",
    not: ["Your buyers need a SOC 2 report today", "Your flows lean on heavy frontier-model AI steps", "You need Python code steps"],
    ourTake: "Per-run billing makes Activepieces one of the cheapest ways to run busy multi-step flows. We'd check the AI credit math and compliance needs before moving anything critical onto it.",
  },
  alternatives: {
    heading: "Activepieces alternatives",
    intro: "These tools bill in different ways. Check what each one counts before you compare prices.",
    rows: [
      { name: "n8n", slug: "n8n", startsAt: "$20/mo yearly", payFor: "Executions, one per run", freePlan: "No, 14-day trial", selfHosting: "Yes, free Community edition", whySwitch: "Deeper logic and a bigger community" },
      { name: "Zapier", slug: "zapier", startsAt: "$19.99/mo yearly", payFor: "Tasks, one per action", freePlan: "Yes, 100 tasks", selfHosting: "No", whySwitch: "Easiest setup and largest app list" },
      { name: "Make", slug: "make", startsAt: "$12/mo", payFor: "Credits, one per module run", freePlan: "Yes", selfHosting: "No", whySwitch: "Visual builder for branching scenarios" },
      { name: "Pipedream", slug: "pipedream", startsAt: "$99/mo yearly", payFor: "Credits, based on compute", freePlan: "Yes", selfHosting: "No", whySwitch: "Code-first flows for developers" },
    ],
  },
  faq: {
    heading: "Activepieces FAQ",
    items: [
      { question: "How much does Activepieces cost?", answer: "Activepieces has a Free plan with 1,000 credits. Plus costs $20 a month for 10,000 credits, or $16 a month billed yearly. Team costs $200 a month for 50,000 credits and 25 users. Ultimate and Embed are priced by sales, with Embed starting at $36,000 a year." },
      { question: "Is Activepieces free?", answer: "Yes, in two ways. The cloud Free plan gives you 1,000 credits with no card and no time limit. The self-hosted Community Edition is free to run with no run limits. You still pay for your own server and the time to keep it updated." },
      { question: "What is an Activepieces credit?", answer: "A credit is the unit Activepieces bills on. One flow run costs one credit, however many steps it has. AI steps cost more, 2 credits on a fast model, 10 on a smart model and 20 on a frontier model. With your own AI key on Plus, an AI step costs 1 credit." },
      { question: "Is Activepieces open source?", answer: "Yes. The core is open source under the MIT license, so you can use and change it, including for commercial work. Enterprise features such as SSO and audit logs sit in separate folders under a commercial license and need a paid license to run on your own servers." },
      { question: "Can I self-host Activepieces?", answer: "Yes. You can run the free Community Edition on your own server with Docker and PostgreSQL. A small server costs roughly $5 to $24 a month. You get no vendor support or SSO. For paid features on your own servers or an air-gapped setup, Activepieces sells an enterprise license." },
      { question: "Is Activepieces cheaper than n8n?", answer: "Often, yes. Both charge per run, not per step. Activepieces Plus gives 10,000 runs for $20 a month, while n8n Starter gives 2,500 executions for $20 a month billed yearly. n8n has no cloud free plan. AI-heavy flows can cost more on Activepieces because AI steps use extra credits." },
    ],
  },
  cta: {
    heading: "Not sure Activepieces is the right fit?",
    body: "Tell us what you want to automate. We'll map the workflow, compare the real monthly cost across tools, and help you pick one that keeps up as your business grows.",
  },
  related: {
    heading: "Compare more tools",
    tiles: [
      { name: "n8n", slug: "n8n", line: "Open-source workflows, billed per execution" },
      { name: "Make", slug: "make", line: "Visual scenarios, billed per module run" },
      { name: "Pipedream", slug: "pipedream", line: "Code-first automation for developers" },
    ],
  },
};
