import type { ToolPage } from "./types";

const formatUsd = (value: number) => `$${value.toLocaleString("en-US", { minimumFractionDigits: Number.isInteger(value) ? 0 : 2, maximumFractionDigits: 2 })}/mo`;

const coreTiers = [
  { units: 10000, monthly: 10.59, yearly: 9 },
  { units: 20000, monthly: 18.82, yearly: 16 },
  { units: 40000, monthly: 34.12, yearly: 29 },
  { units: 80000, monthly: 64.71, yearly: 55 },
  { units: 150000, monthly: 116.47, yearly: 99 },
  { units: 300000, monthly: 214.31, yearly: 182.16 },
];

const proTiers = [
  { units: 10000, monthly: 18.82, yearly: 16 },
  { units: 20000, monthly: 34.12, yearly: 29 },
  { units: 40000, monthly: 62.35, yearly: 53 },
  { units: 80000, monthly: 107.06, yearly: 91 },
  { units: 150000, monthly: 180.53, yearly: 153.45 },
  { units: 300000, monthly: 315.93, yearly: 268.54 },
  { units: 500000, monthly: 482.67, yearly: 410.27 },
  { units: 1000000, monthly: 880.86, yearly: 748.73 },
  { units: 8000000, monthly: 5660.47, yearly: 4811.4 },
];

export const make: ToolPage = {
  slug: "make",
  name: "Make",
  kind: "Workflow platforms",
  status: "active",
  seo: {
    title: "Make Pricing, Plans & Features (2026)",
    description: "Make pricing in 2026. Free plan with 1,000 credits, paid plans from $9 a month billed yearly, how credits are counted, and a cost calculator.",
  },
  checkedAt: "2026-11-14",
  checkedLabel: "November 14, 2026",
  vendorPricingUrl: "https://www.make.com/en/pricing",
  hub: {
    freePlan: "1,000 credits a month",
    freeAllowance: 1000,
    startsAt: 9,
    startsAtLabel: "$9/mo",
    youPayFor: "Credits",
    selfHosting: false,
    openSource: false,
    ai: "AI agents, AI Toolkit, Maia builder, MCP",
    bestFor: "Visual, branching workflows without hosting",
    integrations: 3000,
  },
  hero: {
    h1: "Make pricing and features",
    summary: "Make is a visual workflow platform with a free plan of 1,000 credits a month. Paid plans start at $9 a month billed yearly for 10,000 credits. You pay in credits, and most steps use one credit each time they run. It suits teams that want branching workflows without hosting anything.",
    primary: { label: "Try the cost calculator", href: "#calculator" },
    secondary: { label: "See alternatives →", href: "#alternatives" },
    tiles: [
      { label: "Free plan", value: "1,000 credits/mo" },
      { label: "Starts at", value: "$9/mo yearly" },
      { label: "You pay for", value: "Credits" },
      { label: "Self-hosting", value: "Not offered" },
    ],
  },
  pricing: {
    heading: "Make pricing plans",
    intro: "Every paid plan starts at 10,000 credits a month. You pick more credits with a slider, and the price goes up with it.",
    hasBillingToggle: true,
    columns: ["Plan", "Price", "Includes", "Users", "Good to know"],
    rows: [
      { plan: "Free", monthly: "$0", yearly: "$0", includes: "1,000 credits a month", users: "—", goodToKnow: "Only 2 active scenarios" },
      { plan: "Core", monthly: "$10.59/mo", yearly: "$9/mo", includes: "10,000 credits, up to 300,000", users: "—", goodToKnow: "Unlimited scenarios, 1-minute schedule" },
      { plan: "Pro", monthly: "$18.82/mo", yearly: "$16/mo", includes: "10,000 credits, up to 8 million", users: "—", goodToKnow: "Priority runs and custom variables" },
      { plan: "Teams", monthly: "$34.12/mo", yearly: "$29/mo", includes: "10,000 credits, up to 8 million", users: "Team roles", goodToKnow: "Shared templates for the team" },
      { plan: "Enterprise", monthly: "Custom", yearly: "Custom", includes: "Custom credits", users: "Custom", goodToKnow: "Own SSO and overage protection" },
    ],
    overLimitLine: "Run out of credits and your scenarios pause. Extra credits cost 25% more than your plan rate.",
    sourceLine: "Prices checked November 14, 2026 on Make's pricing page.",
  },
  billing: {
    heading: "What counts as a credit in Make",
    body: "Each module uses one credit when it runs. Actions use one credit per item they handle, so a loop over 50 rows costs 50 credits per step. Code and AI steps can use more.",
    counts: [
      "Every trigger check, even when nothing is new",
      "Each action, once per item it processes",
      "Make Code, 2 credits per second it runs",
      "Make AI steps, 1 credit plus token use",
    ],
    doesntCount: [
      "Routers and filters",
      "Error handlers like Resume and Ignore",
      "Calling another scenario",
      "Make Functions modules",
    ],
    example: {
      line: "A 5-step workflow that runs 1,000 times a month",
      steps: ["Workflow runs", "Make counts", "You pay"],
      values: ["1,000 runs", "5,000 credits", "$9/mo on Core"],
    },
  },
  calculator: {
    heading: "Make cost calculator",
    intro: "Enter how often your workflow runs and how many steps it has. We show the credits you use and the cheapest plan.",
    defaults: { runs: 1000, steps: 5, yearly: true },
    extraInputs: [
      { id: "loopItems", label: "Items per loop", default: 0 },
      { id: "loopSteps", label: "Steps inside the loop", default: 0 },
    ],
    note: "Ignores empty polling checks, Make Code time, AI token credits and failed runs. Use webhooks to avoid empty checks.",
    calculate: ({ runs, steps, yearly, extra }) => {
      const loopItems = extra.loopItems ?? 0;
      const loopSteps = extra.loopSteps ?? 0;
      const credits = runs * steps + runs * loopItems * loopSteps;
      const units = credits.toLocaleString("en-US");
      const price = (tier: { monthly: number; yearly: number }) => ({
        cost: formatUsd(yearly ? tier.yearly : tier.monthly),
        costNote: yearly ? `${formatUsd(tier.monthly)} if billed monthly` : `${formatUsd(tier.yearly)} if billed yearly`,
      });
      if (credits <= 1000) {
        return { units, plan: "Free (2 active scenarios)", cost: "$0/mo" };
      }
      const core = coreTiers.find((tier) => credits <= tier.units);
      if (core) {
        return { units, plan: `Core, ${core.units.toLocaleString("en-US")} credits`, ...price(core) };
      }
      const pro = proTiers.find((tier) => credits <= tier.units);
      if (pro) {
        return { units, plan: `Pro, ${pro.units.toLocaleString("en-US")} credits`, ...price(pro) };
      }
      return { units, plan: "Enterprise", cost: "Custom" };
    },
  },
  freePlan: {
    heading: "Is Make free?",
    answer: "Yes. Make has a free plan with 1,000 credits a month and no time limit. It is fine for testing and one or two small workflows, but it caps you at 2 active scenarios.",
    rows: [
      "1,000 credits every month",
      "2 active scenarios at a time",
      "Scheduled runs every 15 minutes at most",
    ],
  },
  features: {
    heading: "Make features",
    rows: [
      { label: "Integrations", value: "3,000+ apps, plus HTTP and custom apps" },
      { label: "AI features", value: "AI agents, AI Toolkit, Maia builder, MCP server" },
      { label: "Self-hosting", value: "Not available, cloud only" },
      { label: "Open source", value: "No, proprietary" },
      { label: "Code steps", value: "JavaScript and Python on paid plans" },
      { label: "Error handling", value: "Error routes, retries and stored incomplete runs" },
      { label: "Team features", value: "Team roles and shared templates on Teams" },
      { label: "SSO and compliance", value: "Own SSO on Enterprise, SOC 2 Type II, ISO 27001" },
      { label: "Data residency", value: "EU or US hosting" },
    ],
  },
  fit: {
    heading: "Who Make is for",
    goodTitle: "A good fit if",
    good: [
      "You want to see your whole workflow on one visual canvas",
      "Your workflows branch, loop and handle errors in different ways",
      "You want low entry prices without running a server",
    ],
    notTitle: "Not a fit if",
    not: [
      "You need to self-host for data or compliance reasons",
      "Your workflows loop over thousands of items every run",
      "You want a flat price that never changes with volume",
    ],
    ourTake: "Make gives you a lot of control for a low starting price. Watch your loops and polling triggers, because that is where credits add up fast.",
  },
  alternatives: {
    compareLinks: [{ label: "Make vs n8n", slug: "make-vs-n8n" }, { label: "Make vs Zapier", slug: "make-vs-zapier" }],
    heading: "Make alternatives",
    intro: "These tools do a similar job but charge in different ways. Compare what you pay for before you switch.",
    rows: [
      { name: "n8n", slug: "n8n", startsAt: "€20/mo yearly", payFor: "Workflow runs", freePlan: "Self-hosted only", selfHosting: "Yes, free", whySwitch: "One run costs the same at any length" },
      { name: "Zapier", slug: "zapier", startsAt: "$19.99/mo yearly", payFor: "Tasks", freePlan: "100 tasks a month", selfHosting: "No", whySwitch: "More app integrations and simpler setup" },
      { name: "Activepieces", slug: "activepieces", startsAt: "$5 per active flow", payFor: "Active flows", freePlan: "10 active flows", selfHosting: "Yes, free (MIT)", whySwitch: "Unlimited runs per flow" },
      { name: "Pipedream", slug: "pipedream", startsAt: "$99/mo yearly", payFor: "Credits", freePlan: "Development only", selfHosting: "No", whySwitch: "Built for developers who write code" },
    ],
  },
  faq: {
    heading: "Make FAQ",
    items: [
      { question: "How much does Make cost?", answer: "Make has a free plan with 1,000 credits a month. Paid plans start at $9 a month billed yearly, or $10.59 billed monthly, for 10,000 credits on Core. Pro starts at $16 and Teams at $29 a month billed yearly. Prices rise as you add credits, and Enterprise is priced on request." },
      { question: "Is Make free?", answer: "Yes. The free plan gives you 1,000 credits a month with no end date and no card needed. You can run only 2 active scenarios, and scheduled runs happen every 15 minutes at most. It works for testing or one small workflow, but most businesses outgrow it quickly." },
      { question: "What is a credit in Make?", answer: "A credit is what Make charges for. Most modules use one credit each time they run, and actions use one credit per item they handle. Trigger checks use a credit even when nothing is new. Routers, filters and error handlers are free. Code and AI steps can use extra credits." },
      { question: "What happens when I run out of Make credits?", answer: "Your scenarios stop running until you add credits or the month resets. You can buy extra credits in steps of 1,000, or turn on auto-purchase for packs of 10,000. Extra credits cost 25% more than your plan rate, so upgrade if you run out often." },
      { question: "Is Make cheaper than Zapier?", answer: "For most multi-step workflows, yes. Make starts at $9 a month billed yearly for 10,000 credits, while Zapier Professional starts at $19.99 a month billed yearly. Zapier does not charge for triggers, but Make charges for each trigger check, so compare using your own workflow in the calculator above." },
      { question: "What is the difference between Make and n8n?", answer: "Make is cloud only and charges a credit for most steps. n8n charges once per workflow run, however many steps it has, and you can self-host it for free. Make has a friendlier visual builder. n8n is often cheaper for long workflows that run many times." },
    ],
  },
  cta: {
    heading: "Want Make workflows built for you?",
    body: "We plan, build and look after Make workflows that save your team hours every week. Tell us what you want to automate and we will map the fastest way to get there.",
  },
  related: {
    heading: "Compare more tools",
    tiles: [
      { name: "n8n", slug: "n8n", line: "Pay per workflow run, or self-host it for free" },
      { name: "Zapier", slug: "zapier", line: "The biggest app library, priced by tasks" },
      { name: "Activepieces", slug: "activepieces", line: "Open source, priced per active flow" },
    ],
  },
};
