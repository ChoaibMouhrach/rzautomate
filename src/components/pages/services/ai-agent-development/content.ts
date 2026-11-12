import type {
  FlowIcon,
  HeroContent,
} from "@/components/site/service-page/types";

export const path = "/services/ai-agent-development";
export const bookHref = "/book?service=agent-development";
export const auditHref = "/tools/what-to-automate-first";

export const seo = {
  title: "AI Agent Development Company | Custom AI Agents",
  description:
    "AI agent development for work no off-the-shelf tool covers. Custom AI agents that use your systems, complete multi-step tasks and ask before anything risky. Book a free call.",
  socialTitle: "AI Agent Development Company | Custom AI Agents",
  openGraphDescription:
    "Custom AI agents that use your systems, complete multi-step tasks and ask before anything risky.",
  twitterDescription:
    "Custom AI agents that use your systems, complete multi-step tasks and ask before anything risky.",
  serviceName: "AI agent development",
  alternateNames: [
    "AI agent development company",
    "Custom AI agent development",
    "Custom AI agents",
    "MCP server development",
  ],
  serviceDescription:
    "We're an AI agent development company. We build custom agents that use your systems, complete multi-step work from start to finish and check with your team before anything risky.",
  imageAlt:
    "AI agent development by RZ Automate: custom agents that use your systems and ask before anything risky",
};

export const hero: HeroContent = {
  title: "AI agents that do the work, with your team in control.",
  subhead:
    "We're an AI agent development company. We build custom agents that use your systems, complete multi-step work from start to finish and check with your team before anything risky, so you can take on more without hiring for it.",
  secondary: "Find what to automate first →",
  flow: [
    { tag: "Step 1", title: "A task arrives", meta: "Quote request for 12 pallets, by email" },
    {
      tag: "Step 2",
      title: "The agent does the work",
      meta: "Checks your rate card and works out the price",
    },
    { tag: "Step 3", title: "Waits for your approval", meta: "Quote drafted, one click to send" },
  ],
};

// TODO: placeholder figures and logos. Replace with real numbers before launch.
export const proof = {
  heading: "AI agents running for growing teams",
  pills: [
    { number: "18", label: "agents in production" },
    { number: "14,000", label: "tasks completed a month" },
    { number: "520 hrs", label: "of work handled monthly" },
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
  label: "When tools run out",
  heading: "Some work is too complex for a simple automation.",
  rows: [
    { title: "The task takes hours, every time", line: "Reading, checking, deciding, writing it up." },
    { title: "It needs judgment, not fixed steps", line: "Every case is a little different." },
    { title: "It spans several tools", line: "Email, CRM, spreadsheets, documents." },
    { title: "No off-the-shelf tool fits", line: "Templates break on how you actually work." },
    { title: "Only one person knows how to do it", line: "Growth stalls when they're busy or away." },
  ],
  closing:
    "An AI agent built around your process does the reading, checking and drafting, follows your rules, and hands the final call to your team.",
};

export const build = {
  label: "What we build",
  heading: "AI agent development for the work no template covers",
  definition:
    "An AI agent is software that uses a language model to decide what to do next, use your tools and finish multi-step tasks, checking with a person before anything risky. A chatbot only answers questions, and a fixed workflow repeats the same steps. An agent works through the task. This is also called agentic AI.",
  items: [
    {
      name: "Operations agents",
      body: "Agents that run multi-step jobs across your tools, like turning requests into quotes, orders or schedules.",
      stack: [
        { tag: "Task", title: "Quote request", meta: "Email" },
        { tag: "Agent works", title: "Prices from your rate card", meta: "Applies your rules" },
        { tag: "Result", title: "Quote drafted", meta: "Waiting for approval" },
      ],
    },
    {
      name: "Internal knowledge assistants",
      body: "An assistant your team can ask anything, answering from your own docs, policies and past work.",
      stack: [
        { tag: "Question", title: "“What's our refund policy for B2B?”", meta: "Slack" },
        { tag: "Agent searches", title: "Policies + past decisions", meta: "Your Drive and Notion" },
        { tag: "Answer", title: "Reply with sources", meta: "In seconds" },
      ],
    },
    {
      name: "Research and reporting agents",
      body: "Agents that gather information from the web and your systems and write it up in your format.",
      stack: [
        { tag: "Task", title: "Weekly competitor update", meta: "Every Monday" },
        { tag: "Agent researches", title: "Prices, launches, news", meta: "10 competitors" },
        { tag: "Result", title: "One-page report", meta: "Posted to Slack" },
      ],
    },
    {
      name: "MCP servers for your AI assistant",
      body: "We connect your systems to Claude or ChatGPT through an MCP server, so your team's AI assistant can read and update your CRM, docs and data safely.",
      stack: [
        { tag: "Ask", title: "“Update the Acme deal after today's call”", meta: "Claude" },
        { tag: "Assistant uses", title: "Your CRM via MCP", meta: "Only allowed actions" },
        { tag: "Result", title: "Deal updated", meta: "Notes + next step" },
      ],
    },
    {
      name: "AI features in your product",
      body: "Agents built into your own app or platform, so your customers get AI features that use your data.",
      stack: [
        { tag: "Customer", title: "Uses your app", meta: "Asks for a summary" },
        { tag: "Agent works", title: "On their account data", meta: "Inside your product" },
        { tag: "Result", title: "Feature delivered", meta: "Logged and monitored" },
      ],
    },
  ],
};

export const flow = {
  label: "How it works on every task",
  heading: "Every task ends one of three ways",
  channels: ["Email", "Slack or Teams", "Your CRM", "Documents"],
  icons: ["mail", "message", "database", "form"] as FlowIcon[],
  center: "Your AI agent",
  outcomes: [
    { title: "Done", line: "Finished within the rules you set" },
    { title: "Approval", line: "Risky steps wait for a person" },
    { title: "Handed off", line: "Anything outside its rules goes to your team" },
  ],
  footnote: "Every step is logged, so you can see what the agent did and why.",
};

// TODO: placeholder results. Replace with measured client numbers.
export const results = {
  label: "Results",
  heading: "Take on more work, without taking on more hires",
  body: "Every result is measured against a number the client already tracked.",
  secondary: { label: "Calculate your number →", href: "/tools/automation-roi-calculator" },
  tiles: [
    { number: "32 hrs", label: "of work handled every week", line: "Freight forwarder · Logistics" },
    { number: "1,100", label: "tasks completed a month", line: "Freight forwarder · Logistics. Up from 300 by hand." },
    { number: "91%", label: "approved without edits", line: "Insurance broker · Financial services" },
  ],
  summary: {
    text: "Every quote took a coordinator most of an hour: reading the email, checking rates, working out insurance and tax, writing it up. We built an agent that does all of it and waits for one approval. The team now sends three times as many quotes.",
    link: { label: "Book a free call", href: "#book" },
  },
};

// TODO: placeholder quotes. Replace with real client quotes.
export const testimonials = {
  heading: "Teams that handed the hard work to an agent",
  subhead: "What clients say once their agent is live.",
  quotes: [
    {
      name: "Vikram Rao",
      role: "Operations Director, freight forwarder",
      quote: "Quotes used to take a coordinator an hour. The agent drafts them in a minute and we approve in one click.",
    },
    {
      name: "Elena Fischer",
      role: "COO, insurance brokerage",
      quote: "We took on a third more clients without hiring. Every step is logged, so nothing happens that we can't see.",
    },
    {
      name: "James O'Connell",
      role: "Founder, SaaS company",
      quote: "It works across our CRM, docs and Slack like a new team member who never forgets the process.",
    },
  ],
};

export const tools = {
  heading: "Built on models and tools you can trust",
  centerTitle: "Yours from day one",
  centerLine: "Your accounts, your API keys, your data.",
  logos: [
    { name: "Claude", src: "/logos/claude.svg" },
    { name: "OpenAI", src: "/logos/openai.svg" },
    { name: "n8n", src: "/logos/n8n.svg" },
    { name: "Make", src: "/logos/make.svg" },
    { name: "Slack", src: "/logos/slack.svg" },
    { name: "Microsoft Teams", src: "/logos/teams.png" },
    { name: "Gmail", src: "/logos/gmail.svg" },
    { name: "Notion", src: "/logos/notion.svg" },
    { name: "Google Drive", src: "/logos/googledrive.svg" },
    { name: "HubSpot", src: "/logos/hubspot.svg" },
    { name: "Airtable", src: "/logos/airtable.svg" },
    { name: "PostgreSQL", src: "/logos/postgresql.svg" },
    { name: "Gemini", src: "/logos/gemini.svg" },
    { name: "LangChain", src: "/logos/langchain.svg" },
    { name: "Zapier", src: "/logos/zapier.svg" },
    { name: "Google Sheets", src: "/logos/googlesheets.svg" },
    { name: "Salesforce", src: "/logos/salesforce.svg" },
    { name: "Stripe", src: "/logos/stripe.svg" },
    { name: "Zendesk", src: "/logos/zendesk.svg" },
    { name: "Asana", src: "/logos/asana.svg" },
  ],
};

export const process = {
  label: "How we work",
  heading: "From first call to an agent your team relies on",
  steps: [
    { title: "Free call", line: "Walk us through the task. We tell you honestly if an agent is the right fit." },
    { title: "Fixed-price plan", line: "What it does, what it asks before doing, the price and launch date, in writing." },
    { title: "Test on real cases", line: "It runs on your real examples, with your team reviewing every result first." },
    { title: "Grow with you", line: "Support after launch is included, then an optional monthly plan as models and needs change." },
  ],
};

export const fit = {
  heading: "Is a custom AI agent right for you?",
  goodTitle: "A good fit if",
  good: [
    "The task takes hours and has several steps",
    "It needs some judgment, but follows clear rules",
    "It touches more than one tool or system",
    "You'd hire someone for it if you could",
  ],
  badTitle: "Not a fit if",
  bad: [
    "The task is the same simple steps every time",
    "You want it moving money with no one checking",
    "We can't get access to the data it needs",
    "You're after an AI strategy deck, not a working build",
  ],
  note: "Need support, leads or documents handled? Those have their own pages below.",
  closing: "Not sure? Find what to automate first →",
};

export const faq = {
  label: "FAQ",
  heading: "Before you build an AI agent.",
  link: { label: "See all questions →", href: "/faq" },
  items: [
    {
      question: "What's the difference between an agent and an automation?",
      answer:
        "An automation repeats the same steps every time. An agent decides what to do next based on the situation, uses your tools and works through the task, within rules you set.",
    },
    {
      question: "Will it do things without our permission?",
      answer:
        "Only what you allow. Anything risky, like sending, paying or deleting, waits for a person until you decide otherwise.",
    },
    {
      question: "What if the agent makes a mistake?",
      answer:
        "It's tested on your real cases before launch, every step is logged, and you're alerted when something fails. We fix it and tune it.",
    },
    {
      question: "Can it connect to our internal systems?",
      answer:
        "Usually. If a system has an API or a database we can safely access, the agent can use it. We confirm this on the first call.",
    },
    {
      question: "Is our data safe?",
      answer:
        "It runs on your own accounts and only gets the access each step needs. The AI providers we use don't train on your data.",
    },
    {
      question: "What happens when AI models change?",
      answer:
        "We keep your agent working as models update. Support after launch is included, then an optional monthly plan.",
    },
  ],
};

// TODO: confirm the plan turnaround before launch.
export const book = {
  eyebrow: "Free 30-min call",
  plain: "Tell us the task. ",
  muted: "We'll tell you if an agent can do it.",
  body: "Walk us through the work that eats the most time. You'll leave knowing whether an agent fits, what it would do and what it would ask before doing. You keep the plan either way.",
  planLabel: "Written plan",
  plan: "In your inbox within one business day",
  embedTitle: "Book a free 30-minute call",
  service: "agent-development",
};

export const related = {
  heading: "Related services",
  tiles: [
    { title: "AI customer support agents", line: "Every customer answered, however fast you grow.", href: "/services/ai-customer-support-agents" },
    { title: "AI lead generation & CRM automation", line: "More booked calls, from the leads you already get.", href: "/services/ai-lead-generation" },
    { title: "Business process automation", line: "Onboarding, reporting and handoffs that run themselves.", href: "/services/business-process-automation" },
  ],
};
