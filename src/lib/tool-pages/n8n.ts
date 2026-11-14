import type { ToolPage } from "./types";

const formatEuro = (value: number) => `€${value}/mo`;

export const n8n: ToolPage = {
  slug: "n8n",
  name: "n8n",
  kind: "Workflow platforms",
  status: "active",
  seo: {
    title: "n8n Pricing, Plans & Features (2026)",
    description: "See n8n pricing for 2026. Cloud plans from €20 a month, the free self-hosted Community Edition, Business and Startup prices, and a cost calculator.",
  },
  checkedAt: "2026-11-14",
  checkedLabel: "November 14, 2026",
  vendorPricingUrl: "https://n8n.io/pricing/",
  hub: {
    freePlan: "Self-hosted Community Edition",
    freeAllowance: null,
    startsAt: 20,
    startsAtLabel: "€20/mo",
    youPayFor: "Executions",
    selfHosting: true,
    openSource: false,
    ai: "AI Agent node, any model, Python and JS code",
    bestFor: "Technical teams that want control and per-run pricing",
    integrations: 1400,
  },
  hero: {
    h1: "n8n pricing and features",
    summary: "n8n is a workflow automation tool you can use in the cloud or run on your own server. Cloud plans start at €20 a month, billed yearly. The self-hosted Community Edition is free. You pay per execution, so one full run counts once, no matter how many steps. Best for teams that want control.",
    primary: { label: "Try the cost calculator", href: "#calculator" },
    secondary: { label: "See alternatives →", href: "#alternatives" },
    tiles: [
      { label: "Free plan", value: "Self-hosted only" },
      { label: "Starts at", value: "€20/mo" },
      { label: "You pay for", value: "Executions" },
      { label: "Self-hosting", value: "Free or paid" },
    ],
  },
  pricing: {
    heading: "n8n pricing plans",
    intro: "Prices are in euros. Yearly billing saves about 17%. Watch the big jump from Pro at €50 to Business at €667 a month.",
    hasBillingToggle: true,
    columns: ["Plan", "Price", "Includes", "Users", "Good to know"],
    rows: [
      { plan: "Community Edition", monthly: "Free", yearly: "Free", includes: "Unlimited executions", users: "Unlimited", goodToKnow: "Self-hosted, you pay the server" },
      { plan: "Starter", monthly: "€24/mo", yearly: "€20/mo", includes: "2,500 executions a month", users: "Unlimited", goodToKnow: "Cloud, 5 runs at once" },
      { plan: "Pro", monthly: "€60/mo", yearly: "€50/mo", includes: "10,000 executions a month", users: "Unlimited", goodToKnow: "50,000 tier at €121/mo yearly" },
      { plan: "Business", monthly: "€800/mo", yearly: "€667/mo", includes: "40,000 executions a month", users: "Unlimited", goodToKnow: "Self-hosted only, adds SSO and Git" },
      { plan: "Startup", monthly: "—", yearly: "€333/mo", includes: "Business plan at half price", users: "Unlimited", goodToKnow: "Under 20 staff and €5M raised" },
      { plan: "Enterprise", monthly: "Custom", yearly: "Custom", includes: "Custom execution volume", users: "Unlimited", goodToKnow: "Cloud or self-hosted, with SLA" },
    ],
    overLimitLine: "On Starter and Pro, new runs stop at your limit until the monthly reset or an upgrade. Business keeps running but may bill overage.",
    sourceLine: "Prices checked November 14, 2026 on n8n's pricing page.",
  },
  billing: {
    heading: "What counts as an execution in n8n",
    body: "An execution is one full run of a workflow, from trigger to finish. A 2-step workflow and a 20-step workflow cost the same per run. Only live runs count, so testing in the editor is free.",
    counts: ["Each time a schedule trigger fires", "Each webhook request that starts a run", "Each poll that finds new data"],
    doesntCount: ["Test runs from the editor", "Sub-workflows called by a parent", "Error workflows and empty polls"],
    example: {
      line: "A 5-step workflow that runs 1,000 times a month",
      steps: ["Workflow runs", "n8n counts", "You pay"],
      values: ["1,000 runs", "1,000 executions", "€20/mo on Starter"],
    },
  },
  calculator: {
    heading: "n8n cost calculator",
    intro: "Enter how often your workflows run. We show the executions you'd use and the cheapest n8n plan that fits.",
    defaults: { runs: 1000, steps: 5, yearly: true },
    note: "Ignores taxes, overage on Business, AI credit top-ups and your own server time if you self-host.",
    calculate: ({ runs, yearly }) => {
      const tiers = [
        { limit: 2500, plan: "Starter", yearly: 20, monthly: 24 },
        { limit: 10000, plan: "Pro", yearly: 50, monthly: 60 },
        { limit: 50000, plan: "Pro (50,000 tier)", yearly: 121, monthly: 145 },
      ];
      const tier = tiers.find((candidate) => runs <= candidate.limit);
      return {
        units: runs.toLocaleString("en-US"),
        plan: tier ? tier.plan : "Business or Enterprise",
        cost: tier ? formatEuro(yearly ? tier.yearly : tier.monthly) : "From €667/mo",
        selfHostLine: "Self-hosted Community Edition €0 plus a server, about €4 to €12 a month.",
      };
    },
  },
  freePlan: {
    heading: "Is n8n free?",
    answer: "Yes, if you host it yourself. The Community Edition is free with no execution cap, but you pay for the server and handle updates. n8n Cloud has no free plan, only a free trial.",
    rows: ["Community Edition costs €0", "A small server costs about €4–12 a month", "Cloud trial includes 1,000 executions, no card"],
  },
  features: {
    heading: "n8n features",
    rows: [
      { label: "Integrations", value: "1,400+ nodes, plus an HTTP node for any API" },
      { label: "AI features", value: "AI Agent node, works with OpenAI, Anthropic, Gemini and more" },
      { label: "Self-hosting", value: "Yes, free Community Edition or paid Business licence" },
      { label: "Open source", value: "Source-available under the Sustainable Use License" },
      { label: "Code steps", value: "JavaScript and Python in the Code node" },
      { label: "Error handling", value: "Retry on fail, error workflows, re-run failed runs" },
      { label: "Team features", value: "Unlimited users, shared projects, Git from Business" },
      { label: "SSO and compliance", value: "SSO on Business and up, SOC 2 audited Cloud" },
      { label: "Data residency", value: "Cloud hosted in Frankfurt, or anywhere if self-hosted" },
    ],
  },
  fit: {
    heading: "Who n8n is for",
    goodTitle: "A good fit if",
    good: ["Your workflows have many steps and run often", "You want to self-host or keep data in the EU", "Someone on your team is happy with a bit of code"],
    notTitle: "Not a fit if",
    not: ["You want the simplest no-code setup possible", "You need SSO but can't justify €667 a month", "Nobody can look after a server or debug a workflow"],
    ourTake: "We build most client work on n8n. It bills per run, not per step, and clients can own it on their own server.",
  },
  alternatives: {
    compareLinks: [{ label: "n8n vs Make", slug: "make-vs-n8n" }, { label: "n8n vs Zapier", slug: "n8n-vs-zapier" }],
    heading: "n8n alternatives",
    intro: "These tools do a similar job with different pricing. Prices are the lowest paid plan, billed yearly where offered.",
    rows: [
      { name: "Zapier", slug: "zapier", startsAt: "$19.99/mo", payFor: "Tasks", freePlan: "100 tasks a month", selfHosting: "No", whySwitch: "Easiest setup, biggest app library" },
      { name: "Make", slug: "make", startsAt: "$9/mo", payFor: "Credits", freePlan: "1,000 credits a month", selfHosting: "No", whySwitch: "Visual builder, low entry price" },
      { name: "Activepieces", slug: "activepieces", startsAt: "$20/mo", payFor: "Credits", freePlan: "Yes, limited credits", selfHosting: "Yes, MIT-licensed core", whySwitch: "Open-source licence, simpler builder" },
      { name: "Power Automate", slug: "power-automate", startsAt: "$15/user/mo", payFor: "Users", freePlan: "No, 30-day trial", selfHosting: "No", whySwitch: "You already live in Microsoft 365" },
    ],
  },
  faq: {
    heading: "n8n FAQ",
    items: [
      { question: "How much does n8n cost?", answer: "n8n Cloud starts at €20 a month for Starter and €50 for Pro, billed yearly. Monthly billing is €24 and €60. The self-hosted Business plan is €667 a month yearly, or €800 monthly. Enterprise is custom. The self-hosted Community Edition is free, but you pay for the server." },
      { question: "Is n8n free?", answer: "The Community Edition is free to self-host, with unlimited workflows and no execution cap. You still pay for a server, usually a few euros a month, and you handle updates and backups. n8n Cloud has no free plan. It offers a free trial with 1,000 executions and no card needed." },
      { question: "How much does it cost to self-host n8n?", answer: "The software is free on the Community Edition. A small VPS usually costs about €4 to €12 a month, and managed hosting a bit more. Add your time for updates and backups. If you need SSO, Git or environments, the self-hosted Business licence is €667 a month billed yearly." },
      { question: "What counts as an execution in n8n?", answer: "One execution is one full run of a workflow, from trigger to finish. The number of steps doesn't matter. Schedule triggers count every time they fire. Test runs in the editor, sub-workflows, error workflows and polls that find nothing don't count toward your limit." },
      { question: "Why is n8n Business so much more than Pro?", answer: "Pro is €50 a month and Business is €667, both billed yearly. Business adds SSO, LDAP, Git version control, multiple environments and 40,000 executions. It is self-hosted only. Startups with under 20 staff and under €5M in funding can get it at half price, €333 a month." },
      { question: "What happens if I go over my n8n execution limit?", answer: "On Starter and Pro, new runs fail with an error once you hit the limit. Your workflows stay active and start running again after the monthly reset or when you upgrade. On Business, workflows keep running past the quota, but n8n may charge overage if you don't move up a tier." },
    ],
  },
  cta: {
    heading: "Want n8n workflows built for you?",
    body: "We design, build and look after n8n workflows that let your business grow without adding headcount. Tell us what slows you down and we'll show you what to automate first.",
  },
  related: {
    heading: "Compare more tools",
    tiles: [
      { name: "Zapier", slug: "zapier", line: "The easiest setup, billed per task." },
      { name: "Make", slug: "make", line: "Visual scenarios, billed per credit." },
      { name: "Activepieces", slug: "activepieces", line: "Open-source option you can self-host." },
    ],
  },
};
