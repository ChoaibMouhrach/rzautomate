import type { ToolPage } from "./types";

const seats = [
  { units: 3000, monthly: 29.99 },
  { units: 4000, monthly: 39.99 },
  { units: 5000, monthly: 49.99 },
  { units: 6000, monthly: 59.99 },
  { units: 7000, monthly: 69.99 },
  { units: 8000, monthly: 79.99 },
  { units: 15000, monthly: 99.99 },
  { units: 20000, monthly: 149.99 },
  { units: 35000, monthly: 199.99 },
  { units: 45000, monthly: 299.99 },
];

export const lindy: ToolPage = {
  slug: "lindy",
  name: "Lindy",
  kind: "AI agent builders",
  status: "active",
  seo: {
    title: "Lindy Pricing, Plans & Features (2026)",
    description: "Lindy AI pricing in plain words. See what each seat costs, how credits work, whether Lindy is free, and what you'd pay with our cost calculator.",
  },
  checkedAt: "2026-11-14",
  checkedLabel: "November 14, 2026",
  vendorPricingUrl: "https://www.lindy.ai/pricing",
  hub: {
    freePlan: null,
    freeAllowance: null,
    startsAt: 29.99,
    startsAtLabel: "$29.99/user/mo",
    youPayFor: "Credits",
    selfHosting: false,
    openSource: false,
    ai: "AI agents, memory, phone calls, model choice",
    bestFor: "AI assistant for small teams in Slack and email",
    integrations: 1500,
  },
  hero: {
    h1: "Lindy pricing and features",
    summary: "Lindy is an AI agent builder that works like a teammate in Slack, email and text. Paid seats start at $29.99 a month per user with 3,000 credits. There's no lasting free plan, just $50 in free credits for 7 days. You pay in credits, and bigger jobs use more. Best for small teams that want an AI assistant.",
    primary: { label: "Try the cost calculator", href: "#calculator" },
    secondary: { label: "See alternatives →", href: "#alternatives" },
    tiles: [
      { label: "Free plan", value: "No, 7-day credits only" },
      { label: "Starts at", value: "$29.99 per user/mo" },
      { label: "You pay for", value: "Credits" },
      { label: "Self-hosting", value: "Not available" },
    ],
  },
  pricing: {
    heading: "Lindy pricing plans",
    intro: "Lindy charges per user each month. Each seat adds credits to one shared team pool. You can pick a bigger credit amount per seat. Other seat sizes run from 4,000 credits for $39.99 to 45,000 credits for $299.99.",
    hasBillingToggle: false,
    columns: ["Plan", "Price", "Includes", "Users", "Good to know"],
    rows: [
      { plan: "Free", monthly: "$0", yearly: "$0", includes: "$50 in credits for 7 days", users: "1", goodToKnow: "One time per person" },
      { plan: "Team", monthly: "$29.99 per user/mo", yearly: "$29.99 per user/mo", includes: "3,000 credits per user", users: "Per user", goodToKnow: "Entry seat, once called Plus" },
      { plan: "Team", monthly: "$99.99 per user/mo", yearly: "$99.99 per user/mo", includes: "15,000 credits per user", users: "Per user", goodToKnow: "Once called Pro, adds computer use" },
      { plan: "Team", monthly: "$199.99 per user/mo", yearly: "$199.99 per user/mo", includes: "35,000 credits per user", users: "Per user", goodToKnow: "Once called Max" },
      { plan: "Enterprise", monthly: "Custom", yearly: "Custom", includes: "Custom credits plus bonus", users: "Custom", goodToKnow: "SSO, HIPAA, audit logs" },
    ],
    overLimitLine: "Run out of credits and Lindy pauses until next month. Top up anytime at $10 per 1,000 credits.",
    sourceLine: "Prices checked November 14, 2026 on Lindy's pricing page.",
  },
  billing: {
    heading: "What counts as a credit in Lindy",
    body: "Lindy charges credits for the work its AI does. One credit costs about one cent. Small jobs use a few credits. Long jobs and smarter AI models use many more. Lindy doesn't publish a fixed price per step.",
    counts: [
      "Every task Lindy runs, at least 1 credit",
      "AI steps, about 1–3 on basic models",
      "Large-model steps, about 10 credits each",
      "Phone calls, from 25 credits a minute",
    ],
    doesntCount: ["Time when Lindy isn't working", "Heavy tasks you stop when Lindy asks"],
    example: {
      line: "A 5-step workflow that runs 1,000 times a month",
      steps: ["Workflow runs", "Lindy counts", "You pay"],
      values: ["1,000 runs", "About 15,000 credits", "$99.99 on the 15,000-credit seat"],
    },
  },
  calculator: {
    heading: "Lindy cost calculator",
    intro: "Lindy has no fixed price per step, so this gives an estimate. Pick the AI model you expect to use most.",
    defaults: { runs: 1000, steps: 5, yearly: false },
    extraInputs: [
      { id: "creditsPerStep", label: "Credits per step (3 for a basic model, 10 for a large model)", default: 3 },
      { id: "users", label: "Users on Lindy", default: 1 },
      { id: "phoneMinutes", label: "Phone minutes per month", default: 0 },
    ],
    note: "Ignores the phone number fee, premium data actions and Enterprise pricing. Real credit use varies by task.",
    calculate: ({ runs, steps, extra }) => {
      const creditsPerStep = extra.creditsPerStep ?? 3;
      const users = Math.max(1, extra.users ?? 1);
      const phoneMinutes = extra.phoneMinutes ?? 0;
      const credits = runs * steps * creditsPerStep + phoneMinutes * 25;
      let best = seats[0];
      let bestTopUps = 0;
      let bestCost = Infinity;
      seats.forEach((seat) => {
        const topUps = Math.ceil(Math.max(0, credits - users * seat.units) / 1000);
        const cost = users * seat.monthly + topUps * 10;
        if (cost <= bestCost) {
          best = seat;
          bestTopUps = topUps;
          bestCost = cost;
        }
      });
      const topUpLabel = bestTopUps > 0 ? ` + ${bestTopUps} top-up${bestTopUps === 1 ? "" : "s"}` : "";
      return {
        units: credits.toLocaleString("en-US"),
        plan: `Team, ${best.units.toLocaleString("en-US")}-credit seat${topUpLabel}`,
        cost: `$${bestCost.toFixed(2)}/mo`,
      };
    },
  },
  freePlan: {
    heading: "Is Lindy free?",
    answer: "Not for long. Lindy dropped its free plan in early 2026. New users get $50 in free credits that last 7 days, then every user needs a paid seat from $29.99 a month.",
    rows: ["$50 in free credits to start", "No credit card needed", "Credits expire after 7 days"],
  },
  features: {
    heading: "Lindy features",
    rows: [
      { label: "Integrations", value: "1,500+ apps, plus any MCP server" },
      { label: "AI features", value: "AI agents in Slack, email, text and phone, with memory. Pick OpenAI, Claude, Gemini or DeepSeek per task." },
      { label: "Self-hosting", value: "Not available, cloud only" },
      { label: "Open source", value: "No" },
      { label: "Code steps", value: "Python and JavaScript code action" },
      { label: "Error handling", value: "Asks before outside actions and pauses heavy tasks" },
      { label: "Team features", value: "Shared credit pool and spend caps per user" },
      { label: "SSO and compliance", value: "SOC 2 Type II and GDPR on all plans. SSO and HIPAA on Enterprise." },
      { label: "Data residency", value: "Not published" },
    ],
  },
  fit: {
    heading: "Who Lindy is for",
    goodTitle: "A good fit if",
    good: [
      "You want an AI assistant inside Slack, email and text",
      "Your team needs help with inbox, meetings and quick research",
      "You'd rather describe a task than build a workflow",
    ],
    notTitle: "Not a fit if",
    not: [
      "You need a fixed, predictable cost per run",
      "Many people need access, since every user pays a seat",
      "You need self-hosting or a set data region",
    ],
    ourTake: "We don't build client work on Lindy. It's a handy AI teammate for small teams, but credit use is hard to predict, so test it on real tasks during the free week.",
  },
  alternatives: {
    heading: "Lindy alternatives",
    intro: "These tools cost less per run or bill in a more predictable way. Prices are the lowest paid plan.",
    rows: [
      { name: "n8n", slug: "n8n", startsAt: "$20/mo, billed yearly", payFor: "Executions (full runs)", freePlan: "Self-hosted only", selfHosting: "Yes, free", whySwitch: "One price per run, any number of steps" },
      { name: "Zapier", slug: "zapier", startsAt: "$19.99/mo, billed yearly", payFor: "Tasks", freePlan: "Yes, 100 tasks/mo", selfHosting: "No", whySwitch: "Huge app library and clear task pricing" },
      { name: "Make", slug: "make", startsAt: "$9/mo, billed yearly", payFor: "Credits", freePlan: "Yes, 1,000 credits/mo", selfHosting: "No", whySwitch: "Low cost visual workflows with branching" },
      { name: "Gumloop", slug: "gumloop", startsAt: "$37/mo", payFor: "Credits", freePlan: "No", selfHosting: "No", whySwitch: "AI workflows with pay-as-you-go overage" },
    ],
  },
  faq: {
    heading: "Lindy FAQ",
    items: [
      { question: "How much does Lindy cost?", answer: "Lindy starts at $29.99 a month per user for 3,000 credits. Bigger seats cost $99.99 for 15,000 credits and $199.99 for 35,000 credits. Every active user pays a seat, and all credits go into one shared pool. Enterprise pricing is custom. Extra credits cost $10 per 1,000." },
      { question: "Is Lindy AI free?", answer: "No. Lindy dropped its free plan in early 2026. New users get $50 in free credits with no card needed, but they expire after 7 days. After that, each user needs a paid seat. The free week is one time only, so returning users go straight to a paid seat." },
      { question: "How do Lindy credits work?", answer: "Credits measure the work Lindy's AI does. One credit costs about one cent. Each task uses at least 1 credit. Simple steps on basic models use a few credits, and large models use about 10 per step. Phone calls start at 25 credits a minute. Unused plan credits don't roll over." },
      { question: "What happens when you run out of Lindy credits?", answer: "Lindy pauses any work that uses credits. You don't get a surprise overage bill. Work starts again when your credits reset next month, or sooner if an admin buys a top-up or picks a bigger seat. Top-ups cost $10 per 1,000 credits and never expire." },
      { question: "Does Lindy have yearly billing?", answer: "Not right now. Lindy only shows monthly prices per user. A yearly option that saved about 17% appeared in early 2026, then went away. If you need yearly billing or a bigger team deal, Lindy's Enterprise plan has custom pricing through their sales team." },
      { question: "Is Lindy cheaper than n8n?", answer: "Usually not for high-volume workflows. n8n Cloud charges per full run, from $20 a month billed yearly for 2,500 runs, and it's free to self-host. Lindy charges credits per AI step and per user. Lindy can make sense when you want an AI assistant more than a workflow." },
    ],
  },
  cta: {
    heading: "Not sure Lindy is the right fit?",
    body: "Tell us what you want to automate. We'll show you whether Lindy, a workflow tool or a custom AI agent gets you there for less, so your team does more without hiring more.",
  },
  related: {
    heading: "Compare more tools",
    tiles: [
      { name: "Gumloop", slug: "gumloop", line: "AI workflow builder that bills in credits" },
      { name: "n8n", slug: "n8n", line: "Pay per run, or self-host for free" },
      { name: "Zapier", slug: "zapier", line: "The biggest app library, billed per task" },
    ],
  },
};
