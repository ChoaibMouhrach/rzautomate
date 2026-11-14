import type { ToolPage } from "./types";

const formatMoney = (value: number) => {
  const text = Number.isInteger(value) ? value.toLocaleString("en-US") : value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return `$${text}/mo`;
};

export const powerAutomate: ToolPage = {
  slug: "power-automate",
  name: "Power Automate",
  kind: "Workflow platforms",
  status: "active",
  seo: {
    title: "Power Automate Pricing, Plans & Features (2026)",
    description: "Power Automate pricing for 2026. Premium is $15 per user a month, Process is $150 per bot, and basic flows come free with Microsoft 365.",
  },
  checkedAt: "2026-11-14",
  checkedLabel: "November 14, 2026",
  vendorPricingUrl: "https://www.microsoft.com/en-us/power-platform/products/power-automate/pricing/",
  hub: {
    freePlan: "Included with Microsoft 365",
    freeAllowance: null,
    startsAt: 15,
    startsAtLabel: "$15/user/mo",
    youPayFor: "Users or bots",
    selfHosting: false,
    openSource: false,
    ai: "Copilot, AI Builder, Copilot Studio agents",
    bestFor: "Teams already on Microsoft 365",
    integrations: 1400,
  },
  hero: {
    h1: "Power Automate pricing and features",
    summary: "Power Automate is Microsoft's automation tool. Basic flows come free with most Microsoft 365 plans. Premium costs $15 per user a month, paid yearly. You pay per user or per bot, not per run, unless you choose pay-as-you-go. It fits teams that already work in Microsoft 365.",
    primary: { label: "Try the cost calculator", href: "#calculator" },
    secondary: { label: "See alternatives →", href: "#alternatives" },
    tiles: [
      { label: "Free plan", value: "With Microsoft 365" },
      { label: "Starts at", value: "$15/user/month" },
      { label: "You pay for", value: "Users or bots" },
      { label: "Self-hosting", value: "No" },
    ],
  },
  pricing: {
    heading: "Power Automate pricing plans",
    intro: "Microsoft sells every paid plan on a yearly term. You pay per person or per bot. Pay-as-you-go is the only option that charges per run.",
    hasBillingToggle: true,
    columns: ["Plan", "Price", "Includes", "Users", "Good to know"],
    rows: [
      { plan: "Microsoft 365", monthly: "Included", yearly: "Included", includes: "Cloud flows, standard connectors", users: "Each Microsoft 365 user", goodToKnow: "No premium connectors or RPA" },
      { plan: "Premium", monthly: "$15/user/month (Yearly term)", yearly: "$15/user/month", includes: "Premium connectors, attended desktop flows", users: "One person", goodToKnow: "40,000 actions a day each" },
      { plan: "Process", monthly: "$150/bot/month (Yearly term)", yearly: "$150/bot/month", includes: "One bot or up to 25 flows", users: "Anyone using that flow", goodToKnow: "250,000 actions a day" },
      { plan: "Hosted Process", monthly: "$215/bot/month (Yearly term)", yearly: "$215/bot/month", includes: "Process plus a Microsoft-hosted machine", users: "Anyone using that flow", goodToKnow: "No machine of your own needed" },
      { plan: "Pay-as-you-go", monthly: "$0.60 per run", yearly: "$0.60 per run", includes: "Premium cloud and attended desktop runs", users: "Anyone, billed through Azure", goodToKnow: "Unattended desktop runs cost $3" },
      { plan: "AI credits", monthly: "$200 per 25,000", yearly: "$200 per 25,000", includes: "AI Builder and Copilot Studio usage", users: "Shared across your company", goodToKnow: "Free AI Builder credits ended November 2026" },
    ],
    overLimitLine: "Go past your daily actions and flows slow down. You aren't charged extra.",
    sourceLine: "Prices checked November 14, 2026 on Power Automate's pricing page.",
  },
  billing: {
    heading: "What counts as a license in Power Automate",
    body: "Power Automate bills per user or per bot, not per run. One $15 Premium license covers unlimited runs for one person. Steps still matter, because each action counts toward a daily limit. Go past it and flows slow down.",
    counts: ["Each person who owns premium flows", "Each unattended bot or Process-licensed flow", "Each premium run on pay-as-you-go"],
    doesntCount: ["Runs on a licensed user or flow", "Standard-connector flows for Microsoft 365 users", "Steps and actions, which only hit the daily limit"],
    example: {
      line: "A 5-step workflow that runs 1,000 times a month",
      steps: ["Workflow runs", "Power Automate counts", "You pay"],
      values: ["1,000 runs", "1 license (5,000 actions)", "$15 on Premium"],
    },
  },
  calculator: {
    heading: "Power Automate cost calculator",
    intro: "Power Automate charges per person or per bot, not per run. Enter your workload to see which license is cheapest.",
    defaults: { runs: 1000, steps: 5, yearly: true },
    extraInputs: [
      { id: "owners", label: "People who own flows", default: 1 },
      { id: "premium", label: "Uses premium connectors (1 = yes, 0 = no)", default: 1 },
      { id: "unattended", label: "Runs desktop bots unattended (1 = yes, 0 = no)", default: 0 },
    ],
    note: "Ignores AI credits, extra Dataverse storage, Process Mining, taxes and negotiated discounts.",
    calculate: ({ runs, steps, extra }) => {
      const owners = Math.max(1, Math.floor(extra.owners ?? 1));
      const premium = (extra.premium ?? 1) > 0;
      const unattended = (extra.unattended ?? 0) > 0;
      const actionsPerDay = (runs * steps) / 30;
      const processCount = Math.max(1, Math.ceil(actionsPerDay / 250000));

      const options: { plan: string; cost: number; licenses: number }[] = [];
      if (!premium && !unattended && actionsPerDay <= 6000 * owners) {
        options.push({ plan: "Microsoft 365", cost: 0, licenses: 0 });
      }
      if (actionsPerDay <= 40000 * owners) {
        options.push({ plan: "Premium", cost: owners * 15, licenses: owners });
      }
      options.push({ plan: "Process", cost: processCount * 150, licenses: processCount });
      options.push({ plan: "Pay-as-you-go", cost: runs * 0.6, licenses: 0 });

      const best = options.reduce((lowest, option) => (option.cost < lowest.cost ? option : lowest));
      let { plan, cost, licenses } = best;

      if (unattended) {
        const payAsYouGo = runs * 3;
        if (payAsYouGo < 150) {
          cost += payAsYouGo;
          plan = `${plan} + pay-as-you-go desktop runs`;
        } else {
          cost += 150;
          licenses += 1;
          plan = `${plan} + Process bot`;
        }
      }

      return {
        units: licenses.toLocaleString("en-US"),
        plan,
        cost: formatMoney(cost),
      };
    },
  },
  freePlan: {
    heading: "Is Power Automate free?",
    answer: "Partly. Most Microsoft 365 business plans include Power Automate for standard connectors like Outlook, SharePoint and Teams. Premium connectors, unattended bots and AI features need a paid plan.",
    rows: ["Cloud flows with standard connectors", "6,000 actions a day per user", "Free desktop flows on Windows 10 and 11"],
  },
  features: {
    heading: "Power Automate features",
    rows: [
      { label: "Integrations", value: "1,400+ connectors, standard and premium, plus custom ones" },
      { label: "AI features", value: "Copilot builds flows from plain text. AI Builder and Copilot Studio agents" },
      { label: "Self-hosting", value: "No. Desktop bots can run on your own Windows machines" },
      { label: "Open source", value: "No" },
      { label: "Code steps", value: "Python, JavaScript, PowerShell and .NET in desktop flows. Expressions in cloud flows" },
      { label: "Error handling", value: "Retry policies, run-after settings, try and catch scopes, resubmit failed runs" },
      { label: "Team features", value: "Co-owners, shared flows, environments and solutions" },
      { label: "SSO and compliance", value: "Microsoft Entra ID sign-in. SOC 1 and 2, ISO 27001, HIPAA BAA" },
      { label: "Data residency", value: "Pick a region per environment. Supports the EU Data Boundary" },
    ],
  },
  fit: {
    heading: "Who Power Automate is for",
    goodTitle: "A good fit if",
    good: ["Your team already works in Outlook, Teams, SharePoint and Excel", "You need to automate old desktop apps with no API", "IT wants Microsoft sign-in, admin controls and compliance in one place"],
    notTitle: "Not a fit if",
    not: ["Most of your apps are outside Microsoft", "You want to self-host or own the code", "You want simple prices without license planning"],
    ourTake: "If your company runs on Microsoft 365, Power Automate is often the cheapest place to start. Once most of your work lives in other apps, we'd compare it with n8n or Make first.",
  },
  alternatives: {
    heading: "Power Automate alternatives",
    intro: "These tools charge per run, step or flow instead of per user. They often cost less when many people use the same automations.",
    rows: [
      { name: "n8n", slug: "n8n", startsAt: "$20/month, yearly", payFor: "Executions (full runs)", freePlan: "No cloud free plan", selfHosting: "Yes, free Community Edition", whySwitch: "Self-host free, one price per run" },
      { name: "Zapier", slug: "zapier", startsAt: "$19.99/month, yearly", payFor: "Tasks (each action)", freePlan: "100 tasks a month", selfHosting: "No", whySwitch: "Huge app catalog, quick setup" },
      { name: "Make", slug: "make", startsAt: "$9/month, yearly", payFor: "Credits (each module)", freePlan: "1,000 credits a month", selfHosting: "No", whySwitch: "Low price, visual builder" },
      { name: "Activepieces", slug: "activepieces", startsAt: "$0 up to 10 flows", payFor: "Active flows ($5 each)", freePlan: "Yes, 10 active flows", selfHosting: "Yes, MIT license", whySwitch: "Open source, unlimited runs" },
    ],
  },
  faq: {
    heading: "Power Automate FAQ",
    items: [
      { question: "How much does Power Automate cost?", answer: "Basic flows are included with most Microsoft 365 plans. Premium costs $15 per user a month, paid yearly. Process costs $150 per bot a month and Hosted Process $215. Pay-as-you-go charges $0.60 per premium run, or $3 per unattended desktop run, through Azure." },
      { question: "What does the Power Automate Premium license include?", answer: "Premium gives one person unlimited cloud flows, premium and custom connectors, and attended desktop flows. It also includes 250 MB of Dataverse database storage and up to 40,000 actions a day. It doesn't cover unattended bots. Those need a Process license." },
      { question: "Is Power Automate free?", answer: "Partly. If you have a Microsoft 365 business plan, you can build cloud flows with standard connectors at no extra cost. Power Automate for desktop is also free on Windows for local tasks. Premium connectors, unattended bots and AI features need a paid license." },
      { question: "Is Power Automate included in Office 365?", answer: "Yes, a limited version. Most Microsoft 365 and Office 365 business plans let each user run cloud flows with standard connectors like Outlook, SharePoint and Teams. Each user gets 6,000 actions a day. SQL Server, Salesforce, HTTP and other premium connectors need Premium." },
      { question: "Which connectors need Power Automate Premium?", answer: "Premium connectors include SQL Server, Azure services, Dynamics 365, Salesforce and the HTTP action, plus any custom connector you build. Standard connectors like Outlook, SharePoint, Teams, OneDrive and Excel work with Microsoft 365. Microsoft marks each connector as standard or premium." },
      { question: "Does Power Automate charge per run?", answer: "No, not on its main plans. Premium and Process are flat monthly licenses with unlimited runs. Each action counts toward a daily limit, and going over slows flows down. Only pay-as-you-go charges per run, at $0.60 for premium cloud flows." },
    ],
  },
  cta: {
    heading: "Not sure Power Automate is the right fit?",
    body: "Tell us what you want to automate. We'll tell you if Power Automate is the best fit or if another tool gets you there faster and for less, so your team can grow without more busywork.",
  },
  related: {
    heading: "Compare more tools",
    tiles: [
      { name: "n8n", slug: "n8n", line: "Open-source workflows you can self-host for free" },
      { name: "Zapier", slug: "zapier", line: "The easiest way to connect thousands of apps" },
      { name: "Make", slug: "make", line: "Visual scenarios at a low monthly price" },
    ],
  },
};
