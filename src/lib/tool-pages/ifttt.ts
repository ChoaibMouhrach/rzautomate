import type { ToolPage } from "./types";

const plans = [
  { name: "Free", allowance: 1000, maxSpeed: 0, monthly: "$0/mo", yearly: "$0/mo" },
  { name: "Starter", allowance: 5000, maxSpeed: 1, monthly: "$2.99/mo", yearly: "$2.09/mo" },
  { name: "Pro", allowance: 20000, maxSpeed: 2, monthly: "$7.99/mo", yearly: "$5.49/mo" },
  { name: "Pro+", allowance: 100000, maxSpeed: 2, monthly: "$19.99/mo", yearly: "$13.99/mo" },
];

export const ifttt: ToolPage = {
  slug: "ifttt",
  name: "IFTTT",
  kind: "Workflow platforms",
  status: "active",
  seo: {
    title: "IFTTT Pricing, Plans & Features (2026)",
    description: "IFTTT pricing for 2026. Free, Starter, Pro and Pro+ plans, how credits work, what happens when they run out, and a free cost calculator.",
  },
  checkedAt: "2026-11-14",
  checkedLabel: "November 14, 2026",
  vendorPricingUrl: "https://ifttt.com/plans",
  hub: {
    freePlan: "1,000 credits a month, unlimited Applets",
    freeAllowance: 1000,
    startsAt: 2.09,
    startsAtLabel: "$2.09/mo",
    youPayFor: "Credits",
    selfHosting: false,
    openSource: false,
    ai: "AI Agent service and MCP access",
    bestFor: "Personal and smart home automation",
    integrations: 1000,
  },
  hero: {
    h1: "IFTTT pricing and features",
    summary: "IFTTT links apps and smart devices with simple Applets. Since October 2026 you pay with monthly credits, not Applet limits. The free plan gives 1,000 credits and unlimited Applets. Paid plans start at $2.99 a month, or $2.09 billed yearly. It suits personal and smart home automation.",
    primary: { label: "Try the cost calculator", href: "#calculator" },
    secondary: { label: "See alternatives →", href: "#alternatives" },
    tiles: [
      { label: "Free plan", value: "1,000 credits/mo" },
      { label: "Starts at", value: "$2.99/mo" },
      { label: "You pay for", value: "Credits" },
      { label: "Self-hosting", value: "Not offered" },
    ],
  },
  pricing: {
    heading: "IFTTT pricing plans",
    intro: "Every plan has unlimited Applets and all services. You pick a plan by how many credits you need and how fast Applets should run.",
    hasBillingToggle: true,
    columns: ["Plan", "Price", "Includes", "Users", "Good to know"],
    rows: [
      { plan: "Free", monthly: "$0", yearly: "$0", includes: "1,000 credits a month", users: "1 account", goodToKnow: "Checks for new events every hour" },
      { plan: "Starter", monthly: "$2.99/mo", yearly: "$2.09/mo, $25.08 a year", includes: "5,000 credits a month", users: "1 account", goodToKnow: "Checks every 15 minutes" },
      { plan: "Pro", monthly: "$7.99/mo", yearly: "$5.49/mo, $65.88 a year", includes: "20,000 credits a month", users: "1 account", goodToKnow: "Checks every 5 minutes, priority support" },
      { plan: "Pro+", monthly: "$19.99/mo", yearly: "$13.99/mo, $167.88 a year", includes: "100,000 credits a month", users: "1 account", goodToKnow: "Multiple accounts per service, dedicated support" },
      { plan: "Business", monthly: "Custom", yearly: "Custom", includes: "Tailored to your usage", users: "Custom", goodToKnow: "Talk to IFTTT sales" },
    ],
    overLimitLine: "Run out of credits and your Applets pause until next month or until you upgrade. There are no surprise charges.",
    sourceLine: "Prices checked November 14, 2026 on IFTTT's pricing page.",
  },
  billing: {
    heading: "What counts as a credit in IFTTT",
    body: "IFTTT used to cap how many Applets you could turn on. Now Applets are unlimited and each run uses credits. Every step that runs costs credits. The Applet builder shows the cost before you turn it on.",
    counts: ["A trigger that fires", "An action that completes", "A query or filter that runs", "AI features and MCP actions"],
    doesntCount: ["Checks that find nothing new", "Failed or skipped actions", "Applets that are switched off", "Building or editing Applets"],
    example: {
      line: "A 5-step workflow that runs 1,000 times a month",
      steps: ["Workflow runs", "IFTTT counts", "You pay"],
      values: ["1,000 runs", "5,000 credits", "$2.99 on Starter"],
    },
  },
  calculator: {
    heading: "IFTTT cost calculator",
    intro: "Enter how often your Applets run and how many steps they have. We show the credits you'll use and the cheapest plan.",
    defaults: { runs: 1000, steps: 5, yearly: false },
    extraInputs: [
      { id: "speed", label: "Check speed: 0 = within an hour, 1 = within 15 minutes, 2 = within 5 minutes", default: 0 },
      { id: "multiAccount", label: "Need two accounts on one service? 1 = yes, 0 = no", default: 0 },
    ],
    note: "AI steps may cost more than 1 credit. Check the Applet builder for the exact cost.",
    calculate: ({ runs, steps, yearly, extra }) => {
      const credits = runs * steps;
      const speed = extra.speed ?? 0;
      const multi = (extra.multiAccount ?? 0) > 0;
      const chosen = plans.find((candidate) => credits <= candidate.allowance && speed <= candidate.maxSpeed && (!multi || candidate.name === "Pro+"));
      return {
        units: credits.toLocaleString("en-US"),
        plan: chosen ? chosen.name : "Business",
        cost: chosen ? (yearly ? chosen.yearly : chosen.monthly) : "Custom",
      };
    },
  },
  freePlan: {
    heading: "Is IFTTT free?",
    answer: "Yes. The free plan costs nothing and has unlimited Applets with 1,000 credits a month. That covers light use, like a few daily smart home routines. Applets check for new events once an hour.",
    rows: ["Unlimited Applets and all services", "1,000 credits every month", "Applets pause if credits run out"],
  },
  features: {
    heading: "IFTTT features",
    rows: [
      { label: "Integrations", value: "1,000+ apps and devices, strong on smart home" },
      { label: "AI features", value: "AI Agent service, chat builder, MCP for AI assistants" },
      { label: "Self-hosting", value: "Not offered, cloud only" },
      { label: "Open source", value: "No" },
      { label: "Code steps", value: "JavaScript filter code, no full code step" },
      { label: "Error handling", value: "Failed actions use no credits, activity log" },
      { label: "Team features", value: "No shared workspaces or roles" },
      { label: "SSO and compliance", value: "Not published for self-serve plans" },
      { label: "Data residency", value: "Not published" },
    ],
  },
  fit: {
    heading: "Who IFTTT is for",
    goodTitle: "A good fit if",
    good: ["You want to link smart home devices and apps", "Your automations are simple, one trigger and a few actions", "You want a very low monthly price"],
    notTitle: "Not a fit if",
    not: ["You need branching logic or long multi-step workflows", "A team needs to share and manage automations", "You need instant reactions or high run volume"],
    ourTake: "IFTTT is the easiest way to connect devices and personal apps. For business processes with logic, data and a team, we usually reach for other tools.",
  },
  alternatives: {
    heading: "IFTTT alternatives",
    intro: "These tools handle longer workflows, branching and team use. Each one bills in its own way.",
    rows: [
      { name: "n8n", slug: "n8n", startsAt: "$20/mo yearly", payFor: "Workflow executions", freePlan: "Free when self-hosted", selfHosting: "Yes, free Community edition", whySwitch: "Complex logic, code and AI agents" },
      { name: "Zapier", slug: "zapier", startsAt: "$19.99/mo yearly", payFor: "Tasks", freePlan: "100 tasks a month", selfHosting: "No", whySwitch: "Biggest app library for business tools" },
      { name: "Make", slug: "make", startsAt: "$9/mo yearly", payFor: "Credits", freePlan: "1,000 credits a month", selfHosting: "No", whySwitch: "Visual builder with branching and routers" },
      { name: "Pabbly Connect", slug: "pabbly-connect", startsAt: "$16/mo yearly", payFor: "Tasks", freePlan: "100 tasks a month", selfHosting: "No", whySwitch: "Low price for multi-step workflows" },
    ],
  },
  faq: {
    heading: "IFTTT FAQ",
    items: [
      { question: "How much does IFTTT cost?", answer: "IFTTT has a free plan and three paid plans. Starter is $2.99 a month, Pro is $7.99 and Pro+ is $19.99. Paying yearly saves about 30%, so Starter drops to $2.09 a month. Each plan includes more monthly credits and faster Applets. Business plans are priced on request." },
      { question: "Is IFTTT free?", answer: "Yes. The free plan costs nothing and has no time limit. You get unlimited Applets, every service and 1,000 credits a month. Applets check for new events once an hour. If you use up your credits, Applets pause until next month. You can upgrade any time for more credits." },
      { question: "What do you get with IFTTT Pro?", answer: "IFTTT Pro costs $7.99 a month, or $5.49 a month billed yearly. It includes 20,000 credits a month. Applets check for new events every 5 minutes, and you get priority support. Pro+ adds 100,000 credits, the fastest runs and more than one account per service." },
      { question: "Did IFTTT remove the Applet limit?", answer: "Yes. In October 2026 IFTTT dropped the old caps of 2 Applets on Free and 20 on Pro. Every plan now has unlimited Applets. Instead, each plan has a monthly credit allowance. Existing Pro and Pro+ members kept their old price, according to IFTTT's announcement." },
      { question: "What happens when IFTTT credits run out?", answer: "Your Applets pause. IFTTT doesn't charge extra fees. They start again when your credits reset next month, or right away if you upgrade. Events that happen during the pause are not run later. Unused credits don't carry over, so pick a plan with some room to spare." },
      { question: "Is IFTTT better than Zapier?", answer: "It depends on the job. IFTTT is cheaper and great for smart home devices and personal apps. Zapier costs more but connects more business tools and handles longer workflows with branching. If your automation runs part of your business, Zapier or a similar tool is usually the safer choice." },
    ],
  },
  cta: {
    heading: "Not sure IFTTT is the right fit?",
    body: "Tell us what you want to automate. We'll help you pick the right tool and build workflows that save your team hours every week, so you can grow without hiring for busywork.",
  },
  related: {
    heading: "Compare more tools",
    tiles: [
      { name: "Zapier", slug: "zapier", line: "The biggest app library, priced by tasks." },
      { name: "Make", slug: "make", line: "Visual workflows with branching, priced by credits." },
      { name: "n8n", slug: "n8n", line: "Open source, free to self-host, priced by executions." },
    ],
  },
};
