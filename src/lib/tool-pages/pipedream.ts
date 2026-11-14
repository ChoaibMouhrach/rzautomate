import type { ToolPage } from "./types";

const formatMoney = (value: number) => `$${value.toLocaleString("en-US", { minimumFractionDigits: Number.isInteger(value) ? 0 : 2, maximumFractionDigits: 2 })}`;

export const pipedream: ToolPage = {
  slug: "pipedream",
  name: "Pipedream",
  kind: "Enterprise",
  status: "active",
  seo: {
    title: "Pipedream Pricing, Plans & Features (2026)",
    description: "Pipedream pricing for 2026. Free to build, $99/mo yearly to go live with 10,000 credits. What a credit costs, a calculator and the Workflows shutdown.",
  },
  checkedAt: "2026-11-14",
  checkedLabel: "November 14, 2026",
  vendorPricingUrl: "https://pipedream.com/pricing",
  hub: {
    freePlan: "Development only, no live use",
    freeAllowance: null,
    startsAt: 99,
    startsAtLabel: "$99/mo",
    youPayFor: "Credits (compute time)",
    selfHosting: false,
    openSource: false,
    ai: "MCP server with 10,000+ tools",
    bestFor: "Developers adding integrations to their own app or AI agent",
    integrations: 3000,
  },
  hero: {
    h1: "Pipedream pricing and features",
    summary: "Pipedream is a developer platform that connects apps and AI agents to 3,000+ APIs. Its Workflows product takes no new signups and shuts down March 31, 2027. What you can buy today is Pipedream Connect. It's free to build and test, then $99 a month billed yearly. You pay in credits for compute time.",
    primary: { label: "Try the cost calculator", href: "#calculator" },
    secondary: { label: "See alternatives →", href: "#alternatives" },
    tiles: [
      { label: "Free plan", value: "Testing only" },
      { label: "Starts at", value: "$99/mo yearly" },
      { label: "You pay for", value: "Credits (compute time)" },
      { label: "Self-hosting", value: "No" },
    ],
  },
  pricing: {
    heading: "Pipedream pricing plans",
    intro: "New users can only buy Pipedream Connect. The old Workflows plans are closed. Every plan has all features. You pay for live use, credits and users.",
    hasBillingToggle: true,
    columns: ["Plan", "Price", "Includes", "Users", "Good to know"],
    rows: [
      { plan: "Free", monthly: "$0", yearly: "$0", includes: "All features, building and testing", users: "Unlimited team members", goodToKnow: "Can't run live for real users" },
      { plan: "Startup", monthly: "$150/mo", yearly: "$99/mo", includes: "10,000 credits a month", users: "100 external users", goodToKnow: "Extra credits $0.012 each" },
      { plan: "Business", monthly: "Custom", yearly: "Custom", includes: "Volume credits", users: "Custom", goodToKnow: "SSO, SCIM, HIPAA and SLAs" },
    ],
    overLimitLine: "Go past 10,000 credits and each extra one costs $0.012. Each user past 100 costs $2.",
    sourceLine: "Prices checked November 14, 2026 on Pipedream's pricing page.",
  },
  billing: {
    heading: "What counts as a credit in Pipedream",
    body: "One credit buys 30 seconds of compute at 256MB of memory. A call that takes 2 seconds still uses one full credit. Double the memory and every 30 seconds costs two credits.",
    counts: ["Each action your app or agent runs", "Each MCP tool call from an AI agent", "Each request sent through the Connect proxy", "Every extra 30 seconds a call runs"],
    doesntCount: ["Building and testing in the editor", "Listing apps, actions and accounts", "Setting up triggers and actions", "Workflows that never run"],
    example: {
      line: "A 5-step workflow that runs 1,000 times a month",
      steps: ["Workflow runs", "Pipedream counts", "You pay"],
      values: ["1,000 runs", "5,000 credits", "$150 on Startup"],
    },
  },
  calculator: {
    heading: "Pipedream cost calculator",
    intro: "Enter how often your app or agent calls Pipedream. We work out the credits and the cheapest plan that covers them.",
    defaults: { runs: 1000, steps: 5, yearly: false },
    extraInputs: [
      { id: "seconds", label: "Seconds per step", default: 5 },
      { id: "memory", label: "Memory in MB (256, 512, 1024 or 2048)", default: 256 },
      { id: "users", label: "External users", default: 1 },
      { id: "workflows", label: "Product (0 = Connect, 1 = Workflows, closing)", default: 0 },
    ],
    note: "Ignores Business volume deals, dedicated workers and taxes. Old Workflows bill per run, not per step.",
    calculate: ({ runs, steps, extra }) => {
      const seconds = extra.seconds ?? 5;
      const memory = extra.memory ?? 256;
      const users = extra.users ?? 1;
      const workflows = (extra.workflows ?? 0) === 1;
      const mem = memory / 256;
      const credits = workflows
        ? runs * Math.ceil((steps * seconds) / 30) * mem
        : runs * steps * Math.ceil(seconds / 30) * mem;
      const extraCredits = Math.max(0, credits - 10000);
      const extraUsers = Math.max(0, users - 100);
      const surcharge = extraCredits * 0.012 + extraUsers * 2;
      const monthly = 150 + surcharge;
      const yearly = 99 + surcharge;
      return {
        units: credits.toLocaleString("en-US"),
        plan: credits > 1000000 ? "Startup (ask Pipedream about Business volume pricing)" : "Startup",
        cost: `${formatMoney(monthly)}/mo`,
        costNote: `${formatMoney(yearly)}/mo if billed yearly`,
      };
    },
  },
  freePlan: {
    heading: "Is Pipedream free?",
    answer: "Only for building and testing. The free plan has every feature, but it can't run live for real users. To go live you need Startup at $99 a month billed yearly.",
    rows: ["All features while you build", "Unlimited team members", "No live use for real users"],
  },
  features: {
    heading: "Pipedream features",
    rows: [
      { label: "Integrations", value: "3,000+ apps and 10,000+ prebuilt tools" },
      { label: "AI features", value: "MCP server that gives AI agents 10,000+ tools" },
      { label: "Self-hosting", value: "No, cloud only" },
      { label: "Open source", value: "No, components are source-available" },
      { label: "Code steps", value: "Node.js, Python, Go and Bash in Workflows" },
      { label: "Error handling", value: "Workflows retried failed steps up to 8 times" },
      { label: "Team features", value: "Unlimited team members and projects" },
      { label: "SSO and compliance", value: "SOC 2 Type 2, GDPR, HIPAA BAA, SSO on Business" },
      { label: "Data residency", value: "US only, on AWS us-east-1" },
    ],
  },
  fit: {
    heading: "Who Pipedream is for",
    goodTitle: "A good fit if",
    good: ["You're a developer adding app integrations to your product", "You're building an AI agent that needs many app tools", "You want sign-in to your users' apps handled for you"],
    notTitle: "Not a fit if",
    not: ["You want a no-code tool to automate your own work", "You need to self-host or keep data outside the US", "You planned to start fresh on Pipedream Workflows"],
    ourTake: "Pipedream Connect is a strong pick for developers building integrations into a product. For automating your own business, new users can't start on Workflows anymore, so we'd look at n8n, Make or Zapier.",
  },
  alternatives: {
    heading: "Pipedream alternatives",
    intro: "Moving off Pipedream Workflows before March 31, 2027? These tools run the same kind of workflows and are still open to new users.",
    rows: [
      { name: "n8n", slug: "n8n", startsAt: "$20/mo yearly", payFor: "Workflow runs", freePlan: "No, 14-day trial", selfHosting: "Yes, free community edition", whySwitch: "Code steps and full self-hosting" },
      { name: "Zapier", slug: "zapier", startsAt: "$19.99/mo yearly", payFor: "Tasks (action steps)", freePlan: "Yes, 100 tasks a month", selfHosting: "No", whySwitch: "Easiest for people who don't code" },
      { name: "Make", slug: "make", startsAt: "$12/mo yearly", payFor: "Credits (module actions)", freePlan: "Yes, 1,000 credits a month", selfHosting: "No", whySwitch: "Visual builder, low cost per step" },
      { name: "Activepieces", slug: "activepieces", startsAt: "$20/mo", payFor: "Credits", freePlan: "Yes, with a daily credit cap", selfHosting: "Yes, MIT open source", whySwitch: "Open source and easy to self-host" },
    ],
  },
  faq: {
    heading: "Pipedream FAQ",
    items: [
      { question: "How much does Pipedream cost?", answer: "Pipedream Connect is free while you build and test. Live use starts on the Startup plan at $150 a month, or $99 a month billed yearly. That includes 10,000 credits and 100 external users. Extra credits cost $0.012 each. Business plans with SSO and HIPAA are custom priced." },
      { question: "Is Pipedream free?", answer: "Only for building and testing. The free plan has every feature and unlimited team members, but it can't run live for real users. To go live you need the Startup plan. The old free plan with 100 credits a month was removed in October 2026." },
      { question: "What is a Pipedream credit?", answer: "One credit pays for 30 seconds of compute at 256MB of memory. A call that finishes in 2 seconds still uses one full credit. A call that runs 35 seconds uses two. Give it 512MB of memory and every 30 seconds costs two credits instead of one." },
      { question: "Is Pipedream shutting down?", answer: "Part of it is. Pipedream Workflows and its String AI builder shut down on March 31, 2027. They take no new signups, and all Workflows data is deleted by April 30, 2027. Paid plans get a prorated refund. Pipedream Connect, its API, MCP servers and proxy keep running." },
      { question: "Did Workday change Pipedream's pricing?", answer: "Workday agreed to buy Pipedream in November 2025 and closed the deal by January 2026. In October 2026 Pipedream dropped its $29 Basic and $49 Advanced plans. Connect became the Startup plan, with a new $150 monthly option. The $99 yearly price stayed the same." },
      { question: "Is Pipedream open source or self-hosted?", answer: "No to both. You can't self-host Pipedream, and it runs on AWS in the US. Its prebuilt app components are public on GitHub under the Pipedream Source Available License, which is not an open-source license. If you need self-hosting, look at n8n or Activepieces." },
    ],
  },
  cta: {
    heading: "Not sure Pipedream is the right fit?",
    body: "Moving off Pipedream Workflows, or picking your first tool? We'll look at what you run today and help you choose a tool that stays cheap as you grow. Then we can build it for you.",
  },
  related: {
    heading: "Compare more tools",
    tiles: [
      { name: "n8n", slug: "n8n", line: "Workflow tool with code steps that you can self-host for free." },
      { name: "Activepieces", slug: "activepieces", line: "Open-source automation tool with a simple builder and AI steps." },
      { name: "Make", slug: "make", line: "Visual scenario builder that charges a credit per module action." },
    ],
  },
};
