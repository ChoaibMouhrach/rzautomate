import type { FlowIcon } from "@/components/site/service-page/types";

export const path = "/services/ai-customer-support-agents";
export const bookHref = "/book?service=support-agents";
export const auditHref = "/tools/what-to-automate-first";

export const seo = {
  title: "AI Chatbot Development Services for Customer Support",
  description:
    "AI chatbot development services for customer support. Custom chatbots that answer from your docs, look up orders and hand hard cases to your team. Book a free call.",
  openGraphDescription:
    "Custom AI chatbots that answer your customers from your own docs, look up their orders and hand the hard cases to your team.",
  twitterDescription:
    "Custom AI chatbots that answer from your docs, look up orders and hand hard cases to your team.",
  imageAlt:
    "AI customer service agent answering a shipping question and handing a refund complaint to a person in Slack",
  serviceName: "AI customer support agents",
  alternateNames: [
    "AI chatbot development for customer support",
    "Custom AI customer service chatbot",
  ],
  serviceDescription:
    "We build custom AI chatbots that answer your customers from your own docs, look up their orders and hand the hard cases to your team.",
};

export const hero = {
  title: "Instant answers your customers can trust.",
  subhead:
    "We build custom AI chatbots that answer your customers from your own docs, look up their orders and hand the hard cases to your team. More customers, same team, faster replies.",
  secondary: "Find what to automate first →",
  flow: [
    { tag: "Step 1", title: "A customer asks", meta: "“Where's my order?” in your chat" },
    { tag: "Step 2", title: "The chatbot checks", meta: "Looks up the real order in your store" },
    { tag: "Step 3", title: "Answered in seconds", meta: "Status and tracking link sent" },
  ],
};


// TODO: placeholder figures and logos. Replace with real numbers before launch.
export const proof = {
  heading: "Support bots running for growing teams",
  pills: [
    { number: "12", label: "chatbots live" },
    { number: "48,000", label: "conversations handled a month" },
    { number: "71%", label: "answered without a person" },
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
  label: "The support ceiling",
  heading: "More customers shouldn't mean longer queues.",
  rows: [
    { title: "Every new customer adds tickets", line: "Volume grows faster than you can hire." },
    { title: "The same questions, all day", line: "Order status, returns, pricing, how-to." },
    { title: "Nights and weekends go unanswered", line: "Customers wait, or buy somewhere else." },
    { title: "Your best people stuck on repeats", line: "Hard cases wait while easy ones pile up." },
    { title: "Off-the-shelf bots that guess", line: "Wrong answers cost more than slow ones." },
  ],
  closing:
    "A chatbot built on your docs and your data answers the repeats, around the clock, and knows when to hand off.",
};

export const build = {
  label: "What we build",
  heading: "Custom AI chatbots for customer support",
  definition:
    "An AI support chatbot reads a customer's question, finds the answer in your docs and systems, and replies or passes the conversation to a person. Unlike a scripted bot, it understands plain language and checks real data before it answers.",
  items: [
    {
      name: "Website chat",
      body: "A chatbot on your site that answers questions day and night from your help docs and FAQs.",
      stack: [
        { tag: "Visitor asks", title: "“Do you ship to Canada?”", meta: "Website chat · 2:14 am" },
        { tag: "Bot checks", title: "Shipping policy", meta: "Help center article" },
        { tag: "Answered", title: "Reply in seconds", meta: "Source linked" },
      ],
    },
    {
      name: "Email and help desk replies",
      body: "Incoming emails and tickets answered in your tone, or drafted for your team to approve.",
      stack: [
        { tag: "New ticket", title: "“How do I reset my password?”", meta: "Zendesk" },
        { tag: "Bot checks", title: "Saved replies + docs", meta: "Match found" },
        { tag: "Answered", title: "Reply sent", meta: "Ticket closed" },
      ],
    },
    {
      name: "Order and account lookups",
      body: "The chatbot checks real order and account data before it answers, so customers get facts, not guesses.",
      stack: [
        { tag: "Customer asks", title: "“Where's my order?”", meta: "Chat" },
        { tag: "Bot checks", title: "Order #4821", meta: "Shopify" },
        { tag: "Answered", title: "Status + tracking link", meta: "No agent needed" },
      ],
    },
    {
      name: "Triage and routing",
      body: "Every conversation tagged by topic and urgency, and sent to the right person first.",
      stack: [
        { tag: "New message", title: "“I was charged twice”", meta: "Email" },
        { tag: "Bot sorts", title: "Billing · urgent", meta: "Tagged" },
        { tag: "Routed", title: "To billing in Slack", meta: "With summary" },
      ],
    },
    {
      name: "Human handoff",
      body: "Angry, sensitive or unclear conversations go to your team with the full thread, so customers never repeat themselves.",
      stack: [
        { tag: "Customer writes", title: "“This is the third time…”", meta: "Chat" },
        { tag: "Bot detects", title: "Frustrated customer", meta: "Stops replying" },
        { tag: "Handed off", title: "Agent takes over", meta: "Thread + suggested reply" },
      ],
    },
  ],
};

export const flow = {
  label: "How it works on every conversation",
  heading: "One chatbot, every channel, three possible outcomes",
  channels: ["Website chat", "Email", "Help desk", "WhatsApp"],
  icons: ["message", "mail", "support", "chat"] as FlowIcon[],
  center: "Your chatbot",
  outcomes: [
    { title: "Answered", line: "From your docs, with the source" },
    { title: "Looked up", line: "Real order and account data" },
    { title: "Handed off", line: "To your team, with full context" },
  ],
  footnote:
    "You decide which topics it answers on its own and which always go to a person.",
};

// TODO: placeholder results. Replace with measured client numbers.
export const results = {
  label: "Results",
  heading: "More customers served, same support team",
  body: "Every result is measured against a number the client already tracked.",
  secondary: { label: "Calculate your number →", href: "/tools/automation-roi-calculator" },
  tiles: [
    { number: "68%", label: "of conversations answered by the chatbot", line: "Online course platform · E-learning" },
    { number: "12 sec", label: "average first reply", line: "Online course platform · E-learning. Down from 9 hours." },
    { number: "26 hrs", label: "of support time back every week", line: "Subscription store · E-commerce" },
  ],
  summary: {
    text: "Support volume had doubled in a year while the team stayed at three people. We built a chatbot on the help docs and the order system, launched it in review mode, then widened it. Most repeat questions now close without a person.",
    link: { label: "Book a free call", href: "#book" },
  },
};

// TODO: placeholder quotes. Replace with real client quotes.
export const testimonials = {
  heading: "Teams that stopped hiring for every ticket",
  subhead: "What clients say once their chatbot is live.",
  quotes: [
    {
      name: "Amira Benali",
      role: "Head of Support, online course platform",
      quote: "Ticket volume doubled and we didn't hire anyone. The chatbot takes the repeats and hands us the rest with the whole thread.",
    },
    {
      name: "Daniel Okafor",
      role: "Operations Lead, subscription store",
      quote: "First replies dropped from hours to seconds, and the answers match what we would have written.",
    },
    {
      name: "Claire Dubois",
      role: "Founder, training company",
      quote: "Review mode let us trust it slowly. Now it handles most questions and our team handles the people.",
    },
  ],
};

export const tools = {
  heading: "Works inside the tools you already use",
  centerTitle: "No new help desk",
  centerLine: "Your chatbot runs on your accounts. You own it.",
  logos: [
    { name: "Zendesk", src: "/logos/zendesk.svg" },
    { name: "Intercom", src: "/logos/intercom.svg" },
    { name: "Help Scout", src: "/logos/helpscout.svg" },
    { name: "Freshdesk", src: "/logos/freshdesk.png" },
    { name: "Gorgias", src: "/logos/gorgias.png" },
    { name: "Gmail", src: "/logos/gmail.svg" },
    { name: "Outlook", src: "/logos/outlook.jpg" },
    { name: "Shopify", src: "/logos/shopify.svg" },
    { name: "Stripe", src: "/logos/stripe.svg" },
    { name: "HubSpot", src: "/logos/hubspot.svg" },
    { name: "Slack", src: "/logos/slack.svg" },
    { name: "Notion", src: "/logos/notion.svg" },
    { name: "WhatsApp", src: "/logos/whatsapp.svg" },
    { name: "WooCommerce", src: "/logos/woocommerce.svg" },
    { name: "BigCommerce", src: "/logos/bigcommerce.svg" },
    { name: "Microsoft Teams", src: "/logos/teams.png" },
    { name: "Google Sheets", src: "/logos/googlesheets.svg" },
    { name: "Airtable", src: "/logos/airtable.svg" },
    { name: "Pipedrive", src: "/logos/pipedrive.png" },
    { name: "Twilio", src: "/logos/twilio.png" },
  ],
};

export const process = {
  label: "How we work",
  heading: "From first call to a chatbot your customers trust",
  steps: [
    { title: "Free call", line: "We look at your real tickets and find what a chatbot can answer." },
    { title: "Fixed-price plan", line: "What it answers, what it hands off, the price and launch date, in writing." },
    { title: "Launch in review mode", line: "It drafts replies, your team approves, until the answers hold up." },
    { title: "Grow with you", line: "Support after launch is included, then an optional monthly plan." },
  ],
};

export const fit = {
  heading: "Is an AI support chatbot right for you?",
  goodTitle: "A good fit if",
  good: [
    "Many of your questions repeat: orders, returns, pricing, how-to",
    "The answers already exist in docs, FAQs or past replies",
    "Support runs through email, chat or a help desk",
    "You want hard cases kept with your team",
  ],
  badTitle: "Not a fit if",
  bad: [
    "Most tickets are one-off investigations",
    "Nothing is written down anywhere yet",
    "You need phone or voice support",
    "You want every reply sent automatically from day one",
  ],
  closing: "Not sure? Find what to automate first →",
};

export const faq = {
  label: "FAQ",
  heading: "Before you put a chatbot in front of customers.",
  link: { label: "See all questions →", href: "/faq" },
  items: [
    {
      question: "Will the chatbot give customers wrong answers?",
      answer:
        "It only answers from your docs and data. When it isn't sure, it hands off instead of guessing, and it starts in review mode so your team approves replies first.",
    },
    {
      question: "Will customers know they're talking to AI?",
      answer:
        "Yes. The chatbot says it's an AI assistant and offers a person at any time. It still replies in your tone.",
    },
    {
      question: "What happens with angry or complex requests?",
      answer:
        "They go to your team with the full conversation and a short summary. Refunds and account changes always wait for a person unless you decide otherwise.",
    },
    {
      question: "Does it work with our help desk?",
      answer:
        "Almost always. It works inside Zendesk, Intercom, Help Scout, Freshdesk, Gorgias, Gmail and more. You don't switch tools.",
    },
    {
      question: "Is our customer data safe?",
      answer:
        "It runs on your own accounts and reads only what each step needs. The AI providers we use don't train on your data.",
    },
    {
      question: "Will it replace our support team?",
      answer:
        "No. It takes the repeat questions so your team can handle the conversations that need a person, and keep up as you grow.",
    },
  ],
};

// TODO: confirm the plan turnaround before launch.
export const book = {
  eyebrow: "Free 30-min call",
  plain: "See how much of your support ",
  muted: "a chatbot can take",
  body: "Bring a few real customer questions. We'll show you which ones a chatbot can answer and which should stay with your team. You keep the plan either way.",
  planLabel: "Written plan",
  plan: "In your inbox within one business day",
  embedTitle: "Book a free 30-minute call",
  service: "support-agents",
};

export const related = {
  heading: "Related services",
  tiles: [
    { title: "AI lead generation & CRM automation", line: "Every lead answered, scored and followed up.", href: "/services/ai-lead-generation" },
    { title: "Business process automation", line: "Onboarding, reporting and handoffs that run themselves.", href: "/services/business-process-automation" },
    { title: "AI agent development", line: "Custom agents for work no template covers.", href: "/services/ai-agent-development" },
  ],
};
