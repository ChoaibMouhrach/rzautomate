export const path = "/services/ai-customer-support-agents";
export const bookHref = "/book?service=support-agents";
export const auditHref = "/tools/what-to-automate-first";

export const hero = {
  eyebrow: "AI customer support agents for small and mid-sized businesses",
  title:
    "AI chatbot development for customer support: routine questions answered, hard ones escalated",
  subline:
    "I'm a software engineer. I build a custom AI customer service agent that answers your customers' repeat questions from your own docs and data, and hands the tricky ones to your team.",
  trust: "Free · 30 min · No commitment. You talk to the engineer who builds it.",
};

export const fit = {
  title: "Is an AI support agent right for your small business?",
  intro:
    "An AI support agent is good at one job: answering the questions your team has already answered many times. Here's how to tell if that describes your inbox.",
  goodTitle: "Good fit if",
  good: [
    'A big share of your inbound is the same questions: order status, pricing, returns, password resets, "how do I…".',
    "The answers already exist somewhere, in help docs, an FAQ, saved replies or your past emails.",
    "Your support runs through a tool I can connect to, like Gmail, Outlook, Help Scout, Zendesk, Intercom, Freshdesk, Gorgias or a chat widget.",
    "You want the routine questions handled and the angry, sensitive or unclear ones passed to a person with the full thread.",
  ],
  badTitle: "Not a fit if",
  bad: [
    "Most tickets are one-off, complex cases that need someone to dig into an account or investigate a problem.",
    "Nothing is written down, and nobody has time to share past replies or write the answers once.",
    "You want an AI to answer phone calls. Voice agents aren't what I build here.",
    "You want it sending every reply on its own from day one with nobody checking. I start with a review step and widen it once the replies prove themselves.",
  ],
  closing: "Not sure which side you're on?",
};

export const pain = {
  title: "Still answering support emails by hand?",
  description: "That's [X hrs/week] gone, and customers still wait.",
  cards: [
    ["Same 10 questions, all day", "Order status, pricing, how-to, refunds. Typed again, every time."],
    ["Replies sit overnight and all weekend", "By then they've complained or bought elsewhere."],
    ["Best people stuck copy-pasting", "Hard cases wait while they paste the refund policy."],
    ["Burned by a bad chatbot", "Canned, wrong answers made AI feel risky."],
  ],
  bridge:
    "An agent that answers from your docs and hands off when unsure fixes the first three, without the fourth.",
};

export const build = {
  title: "Custom AI chatbot and support agent development",
  definition:
    "An AI customer service agent is software that reads a customer's question, finds the answer in your docs and systems, and replies or hands the conversation to a person. Unlike an old rule-based chatbot, it doesn't follow a fixed script of buttons and keywords. It understands the question in plain language and can check real data, like an order status, before it answers.",
  intro:
    "Five builds, plugged into the inbox, chat and help desk you already use. Each one answers only from what you give it: your docs, your past replies and your customer data.",
  cards: [
    {
      title: "AI email reply agent",
      flow: "A customer email lands in Gmail or Outlook → the agent finds the answer in your docs, FAQs and past replies → a reply in your tone, sent or saved as a draft for you to approve.",
      chips: "Gmail · Outlook · Help Scout",
    },
    {
      title: "Website chat agent",
      flow: "A visitor asks a question in the chat widget on your site → the agent answers from the same knowledge base, day or night → simple questions get closed on the spot, anything else becomes a ticket.",
      chips: "Intercom · Crisp · Notion",
    },
    {
      title: "Ticket triage and routing",
      flow: "A new ticket arrives in Zendesk, Freshdesk or Help Scout → the agent tags the topic, sets priority and flags angry customers → it lands with the right person, urgent ones first, with a Slack ping.",
      chips: "Zendesk · Freshdesk · Slack",
    },
    {
      title: "Order and account lookups",
      flow: 'A customer asks "where\'s my order?" → the agent looks up their order in Shopify, Stripe or your CRM → a reply with the real status and tracking link. Refunds still wait for your approval.',
      chips: "Shopify · Stripe · HubSpot",
    },
    {
      title: "Human handoff and weekly report",
      flow: "Low confidence or a sensitive topic → it hands off to a person with the full thread and a suggested reply → the customer never repeats themselves. A weekly report shows top questions and gaps in your docs.",
      chips: "Slack · Gorgias · Google Docs",
    },
  ],
  guardrail:
    "You set the confidence threshold. Below it, the agent drafts and a person sends. You can launch in drafts-only mode and turn on auto-send topic by topic once you trust the answers.",
  closing:
    "Built with n8n plus Claude or OpenAI, and it runs on your own accounts, so every workflow, log and API key stays yours.",
};

export const proof = {
  eyebrow: "See it running",
  title: "Watch an AI support agent answer, look up an order and hand off to a human",
  description:
    "This is a demo on a sample store's help docs and order data, not a client project. Three customer emails go in, and you see exactly what the agent does with each one.",
  steps: [
    'Auto-answer. "How long do returns take?" The agent finds the answer in the returns doc and sends the reply, because it scored above the confidence threshold.',
    'Order lookup. "Where\'s my order?" The agent pulls the order number, checks it in Shopify and replies with the status and tracking link.',
    'Handoff. An angry email about a double charge. The agent doesn\'t reply. It tags the ticket "billing", posts it to Slack with a summary and a suggested reply, and a person takes over.',
  ],
  card: {
    label: "Internal build",
    title: "[INTERNAL BUILD NAME]",
    body: "A system I built and run for my own business.",
    details: [
      "Before: [BEFORE]",
      "After: [AFTER]",
      "Period: [MEASUREMENT PERIOD]",
      "Tools: [TOOLS]",
      "How I measured it: [HOW MEASURED]",
    ],
  },
  benchmarkTitle: "Industry benchmarks (not my results)",
  benchmarks: [
    "74% of consumers say that, because of AI, they now expect customer service to be available 24/7. Source: Zendesk CX Trends 2026 (published Oct 2025).",
    "Service teams estimate AI handles 30% of their cases today and expect 50% by 2027. Source: Salesforce State of Service, 7th edition (survey of 6,500 service professionals, Apr-Jun 2025; published Nov 2025).",
  ],
  leadIn: "Want to see it run on your inbox and your docs?",
  microcopy:
    "You talk to me, the person who builds it. Bring a few real customer questions and we'll look at which ones an agent could answer and which should stay with you.",
  transcriptTitle: "Read the full transcript",
  transcript: [
    "This is an AI customer support agent I built on a sample store. It reads a shared inbox and answers from the store's own help docs and order data. Three emails just came in.",
    "First one. A customer asks how long returns take. The agent finds the returns page, writes the reply and sends it, because its confidence is above the threshold I set. You can see the source it used right here.",
    'Second. "Where\'s my order?" The agent pulls the order number, looks it up in Shopify and replies with the status and the tracking link. Nobody touched it.',
    "Third. Someone was charged twice, and they're angry. The agent doesn't try to fix that. Refunds need a human. So it tags the ticket as billing, posts it to Slack with a short summary and a suggested reply, and stops there.",
    "Every step goes into a log, and if something breaks, I get an alert.",
    "If you want this on your inbox, with your docs, book a free 30-minute call.",
  ],
};

export const how = {
  eyebrow: "How it works",
  title: "How I set up your AI customer support automation",
  summary:
    "RZ Automate sets up an AI customer support agent in four steps: a free 30-minute workflow audit of your tickets and docs, a written plan with a fixed price, a launch in drafts-only mode within [BUILD DAYS] days, and weekly monitoring once it's live.",
  steps: [
    {
      title: "Free 30-min call and workflow audit",
      time: "30 minutes",
      what: "We look at a sample of your recent support emails or tickets and the docs you answer from. I sort out which questions repeat, which need a person, and whether your docs cover the answers.",
      get: "A straight answer on what share of your inbox an agent could handle, and what's missing before it can.",
      you: "Bring a few recent tickets and a link to your help docs, FAQ or saved replies.",
    },
    {
      title: "Scoped plan with a fixed price",
      time: "[PLAN TURNAROUND]",
      what: "I write down which question types the agent answers and which it hands to your team, the confidence level below which it drafts instead of sends, and the success criteria we'll judge it by.",
      get: "A written plan with one fixed price and a launch date. Keep it even if you don't go ahead.",
      you: "Check the handled and handed-off lists. You know your customers better than I do.",
    },
    {
      title: "Build and launch your first automation",
      time: "[BUILD DAYS] days",
      what: "I connect the agent to your inbox or help desk and your docs, then launch it in drafts-only mode: it writes replies, your team sends them. Once the drafts hold up, it goes live on the categories you approve.",
      get: "A working support agent, a short Loom walkthrough and a one-page runbook covering what it answers, what it hands off and how to pause it.",
      you: "Give me access to your inbox or help desk, review drafts during the [TEST PERIOD], and approve each category before it sends on its own.",
    },
    {
      title: "Run, monitor and improve",
      time: "Ongoing, [SUPPORT TERMS]",
      what: "I watch every run, get alerted when something fails, and update the knowledge base when the agent misses an answer or your policies change.",
      get: "[MONITORING REPORT], including a weekly gap report: what it answered, what it handed off and which questions your docs don't cover yet.",
      you: "Tell me when prices, policies or products change, and when you want more question types added.",
    },
  ],
  total: "From our first call to your support agent drafting real replies: [TOTAL DAYS] days.",
  microcopy:
    "Bring a few recent tickets. You'll leave knowing how much of your inbox an agent could take, even if you never hire me.",
};

export const scope = {
  title: "What's included in your customer support automation",
  intro: "Here's exactly what you get, what you don't, and the tools it works with.",
  includedTitle: "Included",
  included: [
    "The AI support agent, built and tested on your real questions",
    "Knowledge base setup from your existing docs, FAQs and past replies",
    "Integrations with your inbox, help desk, chat and order or account data",
    "Drafts-only launch mode, so your team approves every reply until you're ready to let it send",
    "Handoff rules for anything unclear, sensitive or angry, passed to a person with the full thread",
    "Logging, error alerts and a weekly summary of what customers asked",
    "Written documentation and a walkthrough video of how it works",
    "You own every account and workflow. Nothing runs on mine.",
    "[SUPPORT TERMS] after launch",
  ],
  excludedTitle: "Not included",
  excluded: [
    "Voice or phone agents",
    "Writing your knowledge base from scratch, unless we scope it in",
    "Replacing your help desk. The agent works inside the one you have.",
    "Refunds or account changes without approval, unless you set that up on purpose",
    "Ongoing model and API fees. These run on your own accounts, so you see every charge.",
  ],
  worksWithTitle: "Works with",
  worksWith: [
    ["Email", "Gmail, Outlook"],
    ["Help desks", "Zendesk, Freshdesk, Help Scout, Gorgias, Intercom"],
    ["Chat", "Intercom, Crisp, your website chat widget"],
    ["Data lookups", "Shopify, Stripe, HubSpot, your own database via API"],
    ["Knowledge", "Google Docs and Drive, Notion, your existing help center"],
    ["Team alerts", "Slack, email"],
    ["AI models", "Claude or OpenAI"],
    ["Orchestration", "n8n"],
  ],
  closing: "Using something else? If it has an API, I can likely connect it.",
};

export const pricing = {
  eyebrow: "Pricing",
  title: "What an AI customer support agent costs",
  intro:
    "You pay a fixed price for the build, then decide if you want me on maintenance. The model usage runs on your own accounts, so you see every cent and I don't mark it up.",
  columns: ["", "What it covers", "Price"],
  rows: [
    [
      "Build (one-time, fixed)",
      "Agent connected to your inbox, chat or help desk, trained on your docs and past replies, routing and human handoff, error alerts, launch in drafts-only mode first",
      "From [SUPPORT AGENT PRICE FROM]",
    ],
    [
      "Maintenance (optional, monthly)",
      "Fixes when a tool or API changes, answer tuning, knowledge base updates, the weekly summary of questions and gaps",
      "[MONTHLY RANGE]/month, cancel anytime",
    ],
    [
      "Running costs (paid by you, to the provider)",
      "Claude or OpenAI usage, plus your n8n plan if you host it in the cloud. Billed to your own accounts, not through me",
      "Typically [API COST RANGE]/month",
    ],
  ],
  footnote:
    "The exact build price goes in your written plan before any work starts. It doesn't change unless you add scope.",
  affectsTitle: "What affects the price",
  affects: [
    ["Channels.", "One inbox costs less than email plus live chat plus a contact form."],
    ["Lookups.", "Answering from your FAQ is simple. Pulling order status from Shopify or account details from Stripe or your CRM adds work."],
    ["Volume.", "More tickets a day means more routing rules, more edge cases and more testing before launch."],
    ["Languages.", "Each extra language needs its own testing against real customer questions."],
    ["Your knowledge base.", "Clean, current docs keep the price down. If the answers only live in people's heads or old email threads, I write them up first, and that's part of the scope."],
  ],
  payment:
    "[PAYMENT TERMS]. Maintenance is billed monthly and you can stop it at any time. Everything stays in your accounts either way.",
  guarantee:
    "The build is covered by [GUARANTEE NAME]: we write the success criteria first, and if the agent doesn't meet them within [GUARANTEE WINDOW], you choose a refund of that milestone or I keep working for free until it does.",
  microcopy:
    "Get a fixed quote for your setup. The plan is yours to keep even if you don't hire me.",
  secondary: "Not sure what to automate first?",
};

export const guarantee = {
  title:
    "The [GUARANTEE NAME]: your support agent passes the checks we wrote down, or you get your money back",
  body: [
    'Before I build anything, we write down what "working" means for your first automation. Plain checks you can test yourself. We both sign off on that list.',
    "If the first automation doesn't meet those written criteria within [GUARANTEE WINDOW] of kickoff, you choose one of two options: a full refund of the first milestone fee, paid within [REFUND SPEED], or I keep working on it at no charge until it passes.",
  ],
  leadIn: "For a support agent, the criteria could look like this:",
  criteria: [
    "Drafts a correct reply for [X]% of [QUESTION TYPE] emails in drafts-only review over [PERIOD].",
    "Average first reply under [TIME] for covered categories.",
    "Every [ESCALATION TRIGGER] goes to a human with the full thread attached.",
  ],
  closing:
    "It covers the agent doing the job we agreed on, not revenue or ticket volume.",
  link: "Read the full [GUARANTEE NAME] terms",
};

export const why = {
  eyebrow: "Why me",
  title: "Why hire me instead of an off-the-shelf AI help desk agent",
  cards: [
    [
      "Built around the help desk you already use",
      "I plug the agent into the inbox or help desk you already run. Your team keeps its tools, and model costs bill to your own API account, not per resolution.",
    ],
    [
      "You own the agent, not a vendor",
      "The agent runs in your n8n account on your own OpenAI or Claude keys, with your docs and logs. Stop working with me and it keeps answering tickets.",
    ],
    [
      "An engineer who plans for the bad answer",
      "You talk to me, the person who builds it. Every agent ships with human handoff for unclear or angry messages, full logging, and an alert when a run fails.",
    ],
  ],
  buyTitle: "When to buy a tool instead",
  buy: "If you already use Intercom, Zendesk or Gorgias and its built-in AI agent handles your common questions well, stick with it. You probably don't need me. A custom build makes sense when answers depend on data outside your help desk, like Shopify orders or CRM records, or when usage-based AI fees grow faster than your ticket savings.",
  link: "How an AI automation agency compares with a freelancer",
};

export const faq = {
  title: "AI customer service agent FAQ",
  intro:
    "Straight answers to what owners ask before they let an AI reply to customers.",
  items: [
    {
      question: "Will an AI customer service agent give wrong answers to my customers?",
      answer:
        "It can, so I build it to hold back when it's unsure. The agent answers only from your docs, FAQs, past replies and order data. Below the confidence threshold you set, it drafts a reply for your team instead of sending. You can launch in drafts-only mode, where a person approves every reply. Quality depends on your docs.",
    },
    {
      question: "Can customers tell they're talking to AI, and should they?",
      answer:
        "Yes, and they should. I set the agent to say it's an AI assistant and to offer a person at any point. It's more honest, it protects trust when a reply misses, and in some places it's the law: the EU AI Act has required it since August 2026. Replies still match your tone and sign-off.",
    },
    {
      question: "What happens with angry or complicated customer requests?",
      answer:
        "They go to a person. The agent spots anger, refund disputes, legal or sensitive topics and anything outside your docs, then hands the ticket to your team in Slack or your help desk with the full thread, the customer's order details and a short summary. It doesn't make refunds or account changes unless you approve them.",
    },
    {
      question: "Does the AI support agent work with my help desk or email inbox?",
      answer:
        "Yes, in most cases. The agent works inside the tools you already use, including Gmail, Outlook, Zendesk, Freshdesk, Help Scout, Gorgias, Intercom and Crisp. It reads new tickets, posts replies or internal notes, and adds tags. You don't switch help desks. If yours isn't listed but has an API, I'll confirm on the free call.",
    },
    {
      question: "How is customer data handled? Is it GDPR compliant?",
      answer:
        "Your customers' data stays in accounts you own. The agent reads only the inboxes, tickets and order fields it needs. AI steps run through the OpenAI or Anthropic business APIs, which don't train on API data by default, and n8n can be self-hosted on an EU server. For GDPR, I'll sign a data processing agreement before launch.",
    },
    {
      question: "What does an AI customer service agent cost to run each month?",
      answer:
        "Usually [MONTHLY RANGE] a month, on top of the one-time build from [SUPPORT AGENT PRICE FROM]. That covers n8n hosting, AI model usage and maintenance. Model costs grow with ticket volume, so a few hundred tickets a month cost far less than thousands. API fees bill to your own accounts, so you see every charge.",
    },
    {
      question: "Should I use Fin or Zendesk AI, or a custom AI agent?",
      answer:
        "Use your help desk's built-in agent if it already covers your common questions, because it's quicker to switch on. A custom agent makes sense when answers need data from several tools, you want to keep your current help desk without per-resolution fees, or you want to own the workflows. I'll tell you which fits on the call.",
    },
    {
      question: "Will an AI support agent replace my support team?",
      answer:
        "No. It handles the repeat questions, like order status, return policy and opening hours, and drafts the rest for your team to check. People stay on the conversations that need judgment: complaints, edge cases and anything involving money. It also doesn't do phone or voice support, which is out of scope.",
    },
  ],
  closing:
    "Not sure your questions are a good fit for an AI agent? Bring a few real tickets to the call and I'll tell you honestly which ones it could handle.",
};

export const book = {
  title: "See which support questions an agent can take off your plate",
  subhead:
    "A free 30-min call with me, the engineer who builds it. Bring a few real tickets or emails and we'll go through them together.",
  bullets: [
    "We read a few of your real support emails or tickets together, not a generic demo.",
    "You leave knowing which questions an agent can answer and which it shouldn't touch.",
    "You keep the plan either way. Use it with me, someone else, or on your own.",
  ],
  next: "Pick a time below. After the call, I send you the written plan within [PLAN TURNAROUND].",
  capacity: "I take on [N] builds a month. Next opening is [MONTH].",
  email:
    "Rather not get on a call? Email me at contact@rizon.agency and forward two or three questions customers ask you every week.",
  relatedTitle: "Related services",
  related: [
    {
      title: "AI lead generation & CRM automation",
      body: "New leads researched, scored and added to your CRM, with first follow-ups drafted for you.",
      href: "/services/ai-lead-generation",
    },
    {
      title: "Business process automation",
      body: "Invoices, onboarding, reports and data entry moved into n8n workflows that run on their own.",
      href: "/services/business-process-automation",
    },
    {
      title: "AI agent development",
      body: "Custom AI agents for jobs outside support and sales, connected to your tools and data.",
      href: "/services/ai-agent-development",
    },
  ],
};

export const seo = {
  title: "AI Chatbot Development for Customer Support",
  description:
    "AI chatbot development for customer support: a custom AI customer service agent trained on your docs, with human handoff. No per-resolution fees.",
  openGraphDescription:
    "A custom AI customer service agent that answers repeat questions from your own docs and hands the tricky ones to your team. Built by an engineer.",
  twitterDescription:
    "A custom AI customer service agent that answers repeat questions from your own docs and hands the tricky ones to your team.",
  imageAlt:
    "AI customer service agent answering a shipping question and handing a refund complaint to a person in Slack",
  serviceName: "AI customer support agents",
  alternateNames: [
    "AI chatbot development for customer support",
    "Custom AI customer service agent",
  ],
  serviceDescription:
    "I build a custom AI customer service agent that answers your customers' repeat questions from your own docs and data, and hands the tricky ones to your team.",
};
