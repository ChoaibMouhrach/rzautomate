import type { FlowIcon } from "@/components/site/service-page/types";

export const path = "/services/ai-lead-generation";
export const bookHref = "/book?service=lead-generation";
export const auditHref = "/tools/what-to-automate-first";

export const seo = {
  title: "AI Lead Generation & CRM Automation",
  description:
    "AI lead generation and CRM automation that answers every lead in minutes, scores it, follows up and keeps your CRM up to date. Book a free 30-min call.",
  openGraphDescription:
    "AI lead generation and CRM automation that answers every lead in minutes, scores it, follows up and keeps your CRM up to date.",
  twitterDescription:
    "AI lead generation and CRM automation that answers every lead in minutes, scores it, follows up and keeps your CRM up to date.",
  serviceName: "AI lead generation & CRM automation",
  alternateNames: [
    "AI lead generation",
    "CRM automation",
    "Lead generation automation",
    "Automated lead follow-up",
  ],
  serviceDescription:
    "We build AI lead generation systems that answer every new lead in minutes, score it, follow up and keep your CRM up to date, so more leads turn into calls without adding reps.",
  imageAlt: "AI lead generation and CRM automation by RZ Automate",
};

export const hero = {
  title: "More booked calls, from the leads you already get.",
  subhead:
    "We build AI lead generation systems that answer every new lead in minutes, score it, follow up and keep your CRM up to date, so more leads turn into calls without adding reps.",
  secondary: "Find what to automate first →",
  flow: [
    { tag: "Step 1", title: "A lead arrives", meta: "Quote request from your website, 11:40 pm" },
    { tag: "Step 2", title: "AI checks the fit", meta: "Company researched. Score: 86 / 100" },
    { tag: "Step 3", title: "Reply sent, deal logged", meta: "Booking link sent, CRM updated" },
  ],
};


// TODO: placeholder figures and logos. Replace with real numbers before launch.
export const proof = {
  heading: "Lead systems running for growing teams",
  pills: [
    { number: "9,500", label: "leads handled a month" },
    { number: "4 min", label: "average first reply" },
    { number: "1,200", label: "calls booked for clients" },
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
  label: "Where deals slip",
  heading: "More leads shouldn't mean more missed deals.",
  rows: [
    { title: "Leads wait hours for a reply", line: "By then they've booked with someone else." },
    { title: "Follow-up depends on memory", line: "The ones who said 'send me details' hear nothing." },
    { title: "Your CRM is half empty", line: "Nobody likes typing notes after every call." },
    { title: "Every lead looks the same", line: "Your team can't tell who's worth a call first." },
    { title: "Research eats the morning", line: "Hours of looking people up before each call." },
  ],
  closing:
    "A lead system built around your sales process answers, sorts and follows up on every lead, and keeps your CRM current while it does.",
};

export const build = {
  label: "What we build",
  heading: "AI lead generation and CRM automation, built around your pipeline",
  definition:
    "AI lead generation uses software to capture, research, score and follow up with leads automatically. CRM automation keeps every contact, deal and next step updated in your CRM without anyone typing it in.",
  items: [
    {
      name: "Instant lead response",
      body: "Every form, email or booking request gets a personal reply in minutes, day or night.",
      stack: [
        { tag: "Lead arrives", title: "Quote request", meta: "Website form · 11:40 pm" },
        { tag: "System writes", title: "Personal reply", meta: "Answers their question" },
        { tag: "Sent", title: "Reply + booking link", meta: "In 3 minutes" },
      ],
    },
    {
      name: "Lead enrichment and scoring",
      body: "Each lead is researched and scored against your ideal customer, so your team knows who to call first.",
      stack: [
        { tag: "New lead", title: "j.ortiz@company.com", meta: "Inbound email" },
        { tag: "System checks", title: "Company, size, role", meta: "Public data" },
        { tag: "Scored", title: "91 / 100 · Call first", meta: "With the reason why" },
      ],
    },
    {
      name: "Automated follow-up",
      body: "Leads who go quiet get timely, personal follow-ups written from their history, not a generic sequence.",
      stack: [
        { tag: "No reply", title: "5 days since proposal", meta: "Deal stage: Proposal" },
        { tag: "System drafts", title: "Follow-up from deal notes", meta: "In your tone" },
        { tag: "Ready", title: "Waiting for approval", meta: "One click to send" },
      ],
    },
    {
      name: "CRM automation",
      body: "Contacts, deals, stages and notes update themselves after every email, form and call.",
      stack: [
        { tag: "Call ends", title: "Discovery call", meta: "Calendar event" },
        { tag: "System logs", title: "Notes + next step", meta: "From the call summary" },
        { tag: "Updated", title: "Deal moved to Proposal", meta: "Pipedrive" },
      ],
    },
    {
      name: "Call prep briefs",
      body: "Before each call, your rep gets a short brief on the company, the person and past conversations.",
      stack: [
        { tag: "Call booked", title: "Tomorrow · 10:00", meta: "Cal.com" },
        { tag: "System researches", title: "Company + past emails", meta: "CRM + web" },
        { tag: "Delivered", title: "One-page brief in Slack", meta: "1 hour before" },
      ],
    },
  ],
};

export const flow = {
  label: "How it works on every lead",
  heading: "Every lead, every source, one clear next step",
  channels: ["Website forms", "Email", "Ad lead forms", "Booking pages"],
  icons: ["form", "mail", "megaphone", "calendar"] as FlowIcon[],
  center: "Your lead system",
  outcomes: [
    { title: "Booked", line: "Strong fits get a call on the calendar" },
    { title: "Nurtured", line: "Not-ready leads get timely follow-ups" },
    { title: "Routed", line: "The right rep, with full context" },
  ],
  footnote:
    "You set what counts as a good lead, and which messages need your approval before they go out.",
};

// TODO: placeholder results. Replace with measured client numbers.
export const results = {
  label: "Results",
  heading: "More calls from the same lead flow",
  body: "Every result is measured against a number the client already tracked.",
  secondary: { label: "Calculate your number →", href: "/tools/automation-roi-calculator" },
  tiles: [
    { number: "3x", label: "more calls booked", line: "B2B consultancy · Professional services" },
    { number: "4 min", label: "average first reply", line: "B2B consultancy · Professional services. Down from 6 hours." },
    { number: "96%", label: "of leads followed up", line: "Training provider · Education. Up from 40%." },
  ],
  summary: {
    text: "Leads came in from the website and ads, but replies took most of a day and follow-up depended on one person's memory. We built a system that answers, scores and follows up on every lead and keeps the CRM current. Booked calls tripled in three months.",
    link: { label: "Book a free call", href: "#book" },
  },
};

// TODO: placeholder quotes. Replace with real client quotes.
export const testimonials = {
  heading: "Teams that turned more leads into calls",
  subhead: "What clients say once their lead system is live.",
  quotes: [
    {
      name: "Tom Hargreaves",
      role: "Managing Director, B2B consultancy",
      quote: "Leads used to wait until the next morning. Now they get a real reply in minutes and our calendar fills itself.",
    },
    {
      name: "Priya Nair",
      role: "Head of Sales, training provider",
      quote: "Our CRM is finally accurate without anyone typing notes, and we know exactly who to call first.",
    },
    {
      name: "Marc Lefèvre",
      role: "Founder, software agency",
      quote: "Same team, three times the calls. The follow-ups sound like us, and we approve them in one click.",
    },
  ],
};

export const tools = {
  heading: "Works with the CRM and tools you already use",
  centerTitle: "No new CRM to learn",
  centerLine: "It runs on your accounts. You own it.",
  logos: [
    { name: "HubSpot", src: "/logos/hubspot.svg" },
    { name: "Pipedrive", src: "/logos/pipedrive.png" },
    { name: "Salesforce", src: "/logos/salesforce.svg" },
    { name: "Close", src: "/logos/close.png" },
    { name: "Gmail", src: "/logos/gmail.svg" },
    { name: "Outlook", src: "/logos/outlook.jpg" },
    { name: "Cal.com", src: "/logos/caldotcom.svg" },
    { name: "Calendly", src: "/logos/calendly.svg" },
    { name: "Apollo", src: "/logos/apollo.png" },
    { name: "Clay", src: "/logos/clay.png" },
    { name: "Meta Lead Ads", src: "/logos/meta.svg" },
    { name: "Slack", src: "/logos/slack.svg" },
    { name: "Zapier", src: "/logos/zapier.svg" },
    { name: "Airtable", src: "/logos/airtable.svg" },
    { name: "Google Sheets", src: "/logos/googlesheets.svg" },
    { name: "Notion", src: "/logos/notion.svg" },
    { name: "Stripe", src: "/logos/stripe.svg" },
    { name: "Typeform", src: "/logos/typeform.svg" },
    { name: "Mailchimp", src: "/logos/mailchimp.svg" },
    { name: "WhatsApp", src: "/logos/whatsapp.svg" },
  ],
};

export const process = {
  label: "How we work",
  heading: "From first call to a pipeline that runs every day",
  steps: [
    { title: "Free call", line: "We map where your leads come from and where they stall." },
    { title: "Fixed-price plan", line: "What it does, what needs your approval, the price and launch date, in writing." },
    { title: "Launch in review mode", line: "Your team approves messages until you trust them to send." },
    { title: "Grow with you", line: "Support after launch is included, then an optional monthly plan." },
  ],
};

export const fit = {
  heading: "Is AI lead generation right for you?",
  goodTitle: "A good fit if",
  good: [
    "Leads come in from forms, email, ads or booking pages",
    "Replies sometimes take hours, or don't happen at all",
    "You use a CRM, or are ready to",
    "You know what a good lead looks like for you",
  ],
  badTitle: "Not a fit if",
  bad: [
    "You have no leads yet and need ads or traffic first",
    "You want mass cold email blasts",
    "You want LinkedIn messages sent automatically",
    "Every deal is a one-off with no repeatable process",
  ],
  closing: "Not sure? Find what to automate first →",
};

export const faq = {
  label: "FAQ",
  heading: "Before you automate your sales follow-up.",
  link: { label: "See all questions →", href: "/faq" },
  items: [
    {
      question: "Will it send emails without our approval?",
      answer:
        "Only if you want it to. It starts in review mode, where your team approves every message. You switch topics to automatic once you trust them.",
    },
    {
      question: "Will the messages sound robotic?",
      answer:
        "No. Each reply is written from the lead's own message and your notes, in your tone, and reads like a person wrote it.",
    },
    {
      question: "Does it work with our CRM?",
      answer:
        "Almost always. We work with HubSpot, Pipedrive, Salesforce, Close and others. If yours has an API, we can usually connect it.",
    },
    {
      question: "Do you buy lead lists or run ads?",
      answer:
        "No. We make sure the leads you already get are answered, scored and followed up, and that your CRM stays up to date.",
    },
    {
      question: "What about opt-outs and email rules?",
      answer:
        "Every follow-up includes an opt-out, and unsubscribes are respected automatically. You stay the sender, on your own accounts.",
    },
    {
      question: "Will it replace our sales team?",
      answer:
        "No. It handles the replies, follow-ups and data entry so your team spends its time on calls and closing.",
    },
  ],
};

// TODO: confirm the plan turnaround before launch.
export const book = {
  eyebrow: "Free 30-min call",
  plain: "Find out how many more calls ",
  muted: "your leads could bring",
  body: "We look at where your leads come from and where they stall, then show you what to automate first. You keep the plan either way.",
  planLabel: "Written plan",
  plan: "In your inbox within one business day",
  embedTitle: "Book a free 30-minute call",
  service: "lead-generation",
};

export const related = {
  heading: "Related services",
  tiles: [
    { title: "AI customer support agents", line: "Every customer answered, however fast you grow.", href: "/services/ai-customer-support-agents" },
    { title: "Business process automation", line: "Onboarding, reporting and handoffs that run themselves.", href: "/services/business-process-automation" },
    { title: "AI agent development", line: "Custom agents for work no template covers.", href: "/services/ai-agent-development" },
  ],
};
