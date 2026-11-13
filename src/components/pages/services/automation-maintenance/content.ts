import type {
  FlowIcon,
  HeroContent,
} from "@/components/site/service-page/types";

export const path = "/services/automation-maintenance";
export const bookHref = "/book?service=maintenance";
export const includedHref = "#included";

export const seo = {
  title: "Automation Maintenance for n8n, Make & Zapier",
  description:
    "Automation maintenance for n8n, Make, Zapier and AI agents. We monitor your workflows, fix what breaks and keep them up to date as you grow. Book a free call.",
  socialTitle: "Automation Maintenance for n8n, Make & Zapier",
  openGraphDescription:
    "We monitor your n8n, Make, Zapier and AI automations, fix what breaks when apps change, and update them as your business grows.",
  twitterDescription:
    "We monitor your n8n, Make, Zapier and AI automations, fix what breaks when apps change, and update them as your business grows.",
  serviceName: "Automation maintenance",
  alternateNames: [
    "Workflow automation maintenance",
    "n8n maintenance",
    "Zapier and Make support",
    "AI agent maintenance",
  ],
  serviceDescription:
    "We monitor your n8n, Make, Zapier and AI automations, fix what breaks when apps change, and update them as your business grows, whether we built them or someone else did.",
  imageAlt: "Automation maintenance by RZ Automate",
};

export const hero: HeroContent = {
  title: "Your automations keep running, so your business keeps growing.",
  subhead:
    "We monitor your n8n, Make, Zapier and AI automations, fix what breaks when apps change, and update them as your business grows. Whether we built them or someone else did.",
  secondary: "See what's included →",
  flow: [
    { tag: "Step 1", title: "An app changes", meta: "A HubSpot update breaks a step at 3:12 am" },
    { tag: "Step 2", title: "We catch it and fix it", meta: "Alert received, fix tested on real data" },
    { tag: "Step 3", title: "Back to normal", meta: "No lead lost, noted in your report" },
  ],
};

// TODO: placeholder figures and logos. Replace with real numbers before launch.
export const proof = {
  heading: "Automations we keep running every day",
  pills: [
    { number: "140", label: "automations monitored" },
    { number: "99%", label: "of runs successful" },
    { number: "2 hrs", label: "average time to fix" },
  ],
  logosLabel: "Trusted by teams at",
  logos: [
    { name: "Launchlife", src: "/logos/clients/launchlife.svg", height: "h-8" },
    { name: "Choice EMR Learning", src: "/logos/clients/choice-learning.png", height: "h-12" },
    { name: "CloudSDS", src: "/logos/clients/cloudsds.png", height: "h-8" },
    { name: "Akera", src: "/logos/clients/akera.png", height: "h-10" },
    { name: "AI Adoption", src: "/logos/clients/ai-adoption.png", height: "h-9" },
  ],
};

export const pain = {
  label: "Why automations stop",
  heading: "Automations break quietly, and growth makes it worse.",
  rows: [
    { title: "An app updates, a step fails", line: "Nothing tells you until something's missing." },
    { title: "Leads and orders slip through", line: "You find out from a customer, weeks later." },
    { title: "The person who built it is gone", line: "Nobody knows how it works or how to fix it." },
    { title: "Your process changed, the automation didn't", line: "New products, prices and steps get skipped." },
    { title: "AI answers drift over time", line: "Models change, and replies slowly get worse." },
  ],
  closing:
    "Automations need looking after like any system your business depends on. We do that every day, so they keep up as you grow.",
};

export const build = {
  label: "What's included",
  heading: "Automation maintenance, every month",
  definition:
    "Automation maintenance means watching your workflows and AI agents, fixing them when the apps they connect to change, and updating them as your business changes, so they keep doing their job without anyone checking by hand.",
  items: [
    {
      name: "Monitoring and alerts",
      body: "Every workflow is watched. When a run fails, we know straight away, not when a customer complains.",
      stack: [
        { tag: "Happens", title: "Run fails at 3:12 am", meta: "Lead workflow" },
        { tag: "We see it", title: "Alert received", meta: "Error and input logged" },
        { tag: "Result", title: "Fixed and re-run", meta: "No lead lost" },
      ],
    },
    {
      name: "Fixes when apps change",
      body: "When HubSpot, Shopify, Gmail or any connected app changes, we update your automations to match.",
      stack: [
        { tag: "Happens", title: "App changes its API", meta: "Shopify" },
        { tag: "We update", title: "Affected steps", meta: "Tested on real data" },
        { tag: "Result", title: "Back to normal", meta: "Logged in your report" },
      ],
    },
    {
      name: "Updates as you grow",
      body: "New product, new price, new team member, new step. Your automations change with your business.",
      stack: [
        { tag: "Happens", title: "You add a new service", meta: "Needs its own onboarding" },
        { tag: "We update", title: "Onboarding workflow", meta: "New branch added" },
        { tag: "Result", title: "Live the same week", meta: "Documented" },
      ],
    },
    {
      name: "AI tuning and model updates",
      body: "We review what your AI agents get wrong, improve their instructions and keep them working as models change.",
      stack: [
        { tag: "Happens", title: "Replies miss a new policy", meta: "Support agent" },
        { tag: "We tune", title: "Knowledge + instructions", meta: "Tested before release" },
        { tag: "Result", title: "Correct answers again", meta: "Checked weekly" },
      ],
    },
    {
      name: "Taking over existing automations",
      body: "Built by a freelancer, an old agency or your own team? We audit it, document it and keep it running.",
      stack: [
        { tag: "Starts", title: "40 workflows, no docs", meta: "Make + Zapier" },
        { tag: "We audit", title: "Map, fix, document", meta: "Risks listed" },
        { tag: "Result", title: "Under monitoring", meta: "Plain-English guide" },
      ],
    },
  ],
};

export const flow = {
  label: "How the plan works",
  heading: "Everything you run, watched in one place",
  channels: ["n8n", "Make", "Zapier", "AI agents"],
  icons: ["workflow", "blocks", "zap", "bot"] as FlowIcon[],
  center: "RZ monitoring",
  outcomes: [
    { title: "Fixed", line: "Breaks repaired and re-run" },
    { title: "Improved", line: "Updates as your process changes" },
    { title: "Reported", line: "A plain-English summary every month" },
  ],
  footnote:
    "Everything stays on your accounts. We only get the access the plan needs.",
};

// TODO: placeholder results. Replace with measured numbers.
export const results = {
  label: "Results",
  heading: "We catch what breaks before it costs you",
  body: "Numbers from the automations we look after, measured month by month.",
  secondary: { label: "See what's included →", href: "#included" },
  tiles: [
    { number: "99%", label: "of runs successful", line: "Across 140 client automations" },
    { number: "2 hrs", label: "average time to fix", line: "From alert to back to normal" },
    { number: "310", label: "failures caught and fixed", line: "Last 12 months" },
  ],
  summary: {
    text: "A growing online school had 40 workflows built by a freelancer who had moved on, with no documentation and failures nobody noticed. We audited every one, fixed the broken steps, documented the setup and put it all under monitoring. Missed enrolments dropped to zero within a month.",
    link: { label: "Book a free call", href: "#book" },
  },
};

// TODO: placeholder quotes. Replace with real client quotes.
export const testimonials = {
  heading: "Teams that stopped worrying about broken workflows",
  subhead: "What clients say about having their automations looked after.",
  quotes: [
    {
      name: "Nadia Hassan",
      role: "Operations Manager, online school",
      quote: "We used to find out about failures from students. Now we hear about it from RZ first, and it's already fixed.",
    },
    {
      name: "Ben Whitaker",
      role: "Founder, e-commerce brand",
      quote: "Shopify changed something and our order flow broke overnight. It was fixed before our morning started.",
    },
    {
      name: "Léa Martin",
      role: "Head of Growth, SaaS company",
      quote: "They took over workflows nobody understood, documented all of it and now it just runs. The monthly report is clear.",
    },
  ],
};

export const tools = {
  heading: "We maintain automations on the platforms you use",
  centerTitle: "Built by us or someone else",
  centerLine: "We'll audit it, document it and keep it running.",
  logos: [
    { name: "n8n", src: "/logos/n8n.svg" },
    { name: "Make", src: "/logos/make.svg" },
    { name: "Zapier", src: "/logos/zapier.svg" },
    { name: "Claude", src: "/logos/claude.svg" },
    { name: "OpenAI", src: "/logos/openai.svg" },
    { name: "HubSpot", src: "/logos/hubspot.svg" },
    { name: "Shopify", src: "/logos/shopify.svg" },
    { name: "Gmail", src: "/logos/gmail.svg" },
    { name: "Slack", src: "/logos/slack.svg" },
    { name: "Airtable", src: "/logos/airtable.svg" },
    { name: "Google Sheets", src: "/logos/googlesheets.svg" },
    { name: "QuickBooks", src: "/logos/quickbooks.svg" },
    { name: "Notion", src: "/logos/notion.svg" },
    { name: "Stripe", src: "/logos/stripe.svg" },
    { name: "Salesforce", src: "/logos/salesforce.svg" },
    { name: "Zendesk", src: "/logos/zendesk.svg" },
    { name: "Asana", src: "/logos/asana.svg" },
    { name: "Google Drive", src: "/logos/googledrive.svg" },
    { name: "Gemini", src: "/logos/gemini.svg" },
    { name: "Pipedrive", src: "/logos/pipedrive.png" },
  ],
};

export const process = {
  label: "How we start",
  heading: "From first call to automations you don't have to think about",
  steps: [
    { title: "Free call", line: "Tell us what you run and what keeps breaking." },
    { title: "Audit and plan", line: "We map every automation, list the risks and send a fixed monthly price in writing." },
    { title: "Fix and set up monitoring", line: "Urgent issues fixed first, then every workflow watched." },
    { title: "Ongoing care", line: "Fixes, updates and a monthly report, for as long as you need it." },
  ],
  note: "Built with us? Support after launch is included, and this plan picks up from there.",
};

export const fit = {
  heading: "Is automation maintenance right for you?",
  goodTitle: "A good fit if",
  good: [
    "Leads, orders, billing or support run through automations",
    "They were built by someone who's no longer around",
    "You use n8n, Make, Zapier or AI agents",
    "Your business changes often, so your workflows need to",
  ],
  badTitle: "Not a fit if",
  bad: [
    "You run one or two simple automations",
    "You only want help once a year, by the hour",
    "We can't get access to the accounts they run on",
    "You want brand-new automations built (see our services below)",
  ],
  closing: "Not sure? Book a free 30-min call →",
};

export const faq = {
  label: "FAQ",
  heading: "Before you hand over your automations.",
  link: { label: "See all questions →", href: "/faq" },
  items: [
    {
      question: "Can you maintain automations someone else built?",
      answer:
        "Yes. We start with an audit, document how everything works, fix what's urgent and then keep it running.",
    },
    {
      question: "Which platforms do you support?",
      answer:
        "n8n, Make and Zapier, plus AI agents built on Claude or OpenAI. If you use something else, ask us on the call.",
    },
    {
      question: "How fast do you fix things?",
      answer:
        "We're alerted the moment a run fails and start on it straight away. Your plan sets out response times in writing.",
    },
    {
      question: "What's in the monthly report?",
      answer:
        "What ran, what failed, what we fixed, what we changed and anything we recommend next, in plain English.",
    },
    {
      question: "Do we still own everything?",
      answer:
        "Yes. Your automations stay on your accounts. If you stop the plan, everything keeps running and it's documented.",
    },
    {
      question: "What if we need new automations?",
      answer:
        "Small changes are part of the plan. New builds are scoped separately with a fixed price before we start.",
    },
  ],
};

// TODO: confirm the plan turnaround before launch.
export const book = {
  title: "Find out what's at risk in the automations you run",
  description:
    "Tell us what you have and what keeps breaking. We'll show you where the risks are and what a maintenance plan would cover. You keep the notes either way.",
  service: "maintenance",
};

export const related = {
  heading: "Related services",
  tiles: [
    { title: "AI agent development", line: "AI agents that do the work, with your team in control.", href: "/services/ai-agent-development" },
    { title: "AI lead generation & CRM automation", line: "More booked calls, from the leads you already get.", href: "/services/ai-lead-generation" },
    { title: "AI document processing", line: "More invoices and forms, no extra data entry.", href: "/services/ai-document-processing" },
  ],
};
