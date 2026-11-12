import { entitySentence } from "@/lib/site";

export { entitySentence };

export const homeMeta = {
  title: "AI Automation Agency",
  description:
    "RZ Automate builds AI agents and automated workflows that let your business take on more leads, clients and orders without hiring for every new task. Book a free 30-min call.",
};

export const ctaLabel = "Book a free 30-min call";
export const bookingLabel = ctaLabel;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Free tools", href: "#free-tools" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  eyebrow: "AI automation agency",
  title: "Scale your business without scaling your headcount",
  description: `${entitySentence} Take on more leads, clients and orders while the follow-ups, data entry, support replies and reports run on their own.`,
  secondary: {
    label: "Not ready to talk? Find what to automate first",
    href: "/tools/what-to-automate-first",
  },
  trust: "Free · 30 min · No commitment",
};

// TODO: placeholder numbers. Replace with real figures before launch.
export const stats = [
  { value: "38", label: "automations running in production" },
  { value: "640 hrs", label: "of manual work taken off clients every month" },
  { value: "14", label: "businesses served" },
  { value: "9", label: "industries" },
];

export const logos = {
  label: "Trusted by teams at",
  items: [
    { name: "Launchlife", src: "/logos/clients/launchlife.svg", height: "h-8" },
    { name: "Ministère de la Santé et de la Protection Sociale", src: "/logos/clients/ministere-sante.png", height: "h-12" },
    { name: "Choice EMR Learning", src: "/logos/clients/choice-learning.png", height: "h-12" },
    { name: "CloudSDS", src: "/logos/clients/cloudsds.png", height: "h-8" },
    { name: "Akera", src: "/logos/clients/akera.png", height: "h-10" },
    { name: "AI Adoption", src: "/logos/clients/ai-adoption.png", height: "h-9" },
    { name: "Rizon", src: "/logos/clients/rizon.png", height: "h-10" },
  ],
};

export const pain = {
  label: "The growth trap",
  heading: "Growth breaks the way you work today",
  description:
    "More demand should mean more revenue. Instead it means more manual work, slower replies and another hire.",
  rows: [
    {
      title: "More leads, slower replies",
      line: "Leads wait hours for an answer and buy from whoever replied first.",
    },
    {
      title: "More clients, messier onboarding",
      line: "Each new client is set up by hand, and steps get missed in week one.",
    },
    {
      title: "More orders, more data entry",
      line: "Someone copies every order, invoice and form between tools, and one typo makes your systems disagree.",
    },
    {
      title: "More customers, more of the same questions",
      line: "Your team spends the day answering what your docs already say.",
    },
    {
      title: "More numbers, later reports",
      line: "The weekly report takes someone's Friday afternoon, and decisions wait for it.",
    },
    {
      title: "More work, another hire",
      line: "Every new task becomes a new role before the business can afford it.",
    },
  ],
  closing:
    "Growth shouldn't depend on headcount. We build the systems that carry the extra volume.",
};

const stack = (
  trigger: [string, string],
  decision: [string, string, string],
  result: [string, string],
) => [
  { tag: "Trigger", title: trigger[0], meta: trigger[1] },
  { tag: decision[0], title: decision[1], meta: decision[2] },
  { tag: "Done", title: result[0], meta: result[1] },
];

export const services = {
  label: "AI automation services",
  heading: "Five ways to handle more volume with the team you have",
  subhead: "Each one connects to the tools you already use.",
  items: [
    {
      name: "AI lead generation & CRM automation",
      body: "Every lead gets answered, scored and followed up, however many come in. Your reps spend their time on calls, not copy-paste.",
      tools: [{ name: "HubSpot", src: "/logos/hubspot.svg" }, { name: "Pipedrive", src: "/logos/pipedrive.png" }, { name: "Gmail", src: "/logos/gmail.svg" }, { name: "n8n", src: "/logos/n8n.svg" }],
      link: {
        label: "See AI lead generation & CRM automation",
        href: "/services/ai-lead-generation",
      },
      stack: stack(
        ["New form lead", "Source: website · 11:42 pm"],
        ["AI decision", "Scored 82 / 100", "Fit: strong · Owner assigned"],
        ["Added to HubSpot", "Follow-up drafted"],
      ),
    },
    {
      name: "AI customer support agents",
      body: "Support keeps up as your customer base grows. Routine questions get answered from your docs, and anything sensitive goes to a person with the context attached.",
      tools: [{ name: "Zendesk", src: "/logos/zendesk.svg" }, { name: "Help Scout", src: "/logos/helpscout.svg" }, { name: "Gmail", src: "/logos/gmail.svg" }, { name: "Slack", src: "/logos/slack.svg" }],
      link: {
        label: "See AI customer support agents",
        href: "/services/ai-customer-support-agents",
      },
      stack: stack(
        ["New ticket", "“Where's my order?”"],
        ["AI decision", "Routine question", "Answer found in help docs"],
        ["Reply sent", "With source link"],
      ),
    },
    {
      name: "AI document processing",
      body: "Twice the invoices, forms and PDFs, with no extra data-entry hire. AI reads the fields, enters them and flags anything unclear.",
      tools: [{ name: "QuickBooks", src: "/logos/quickbooks.svg" }, { name: "Xero", src: "/logos/xero.svg" }, { name: "Google Sheets", src: "/logos/googlesheets.svg" }, { name: "Airtable", src: "/logos/airtable.svg" }],
      link: {
        label: "See AI document processing",
        href: "/services/ai-document-processing",
      },
      stack: stack(
        ["Invoice received", "accounts@ inbox"],
        ["AI decision", "Fields extracted", "Vendor · amount · due date"],
        ["Draft bill in Xero", "1 field flagged for review"],
      ),
    },
    {
      name: "Automation maintenance",
      body: "Your n8n, Make and Zapier workflows monitored, fixed when apps change and updated as you grow.",
      tools: [{ name: "n8n", src: "/logos/n8n.svg" }, { name: "Make", src: "/logos/make.svg" }, { name: "Zapier", src: "/logos/zapier.svg" }, { name: "Slack", src: "/logos/slack.svg" }],
      link: {
        label: "See automation maintenance",
        href: "/services/automation-maintenance",
      },
      stack: stack(
        ["Run failed", "Lead workflow · 3:12 am"],
        ["We fix it", "Alert received", "Error and input logged"],
        ["Fixed and re-run", "No lead lost"],
      ),
    },
    {
      name: "AI agent development",
      body: "For the work no template covers. We build a custom agent around your systems, then hand it over running and documented.",
      tools: [{ name: "Claude", src: "/logos/claude.svg" }, { name: "OpenAI", src: "/logos/openai.svg" }, { name: "n8n", src: "/logos/n8n.svg" }, { name: "Make", src: "/logos/make.svg" }],
      link: {
        label: "See AI agent development",
        href: "/services/ai-agent-development",
      },
      stack: stack(
        ["Your process", "Any tool with an API"],
        ["Agent", "Researches, drafts, decides", "Within your rules"],
        ["Handed to your team", "Logged and documented"],
      ),
    },
  ],
  footer:
    "Not sure which fits? Tell us where growth is getting stuck. We'll point you to the right one, or tell you it isn't worth automating.",
};

export const running = {
  label: "While you grow",
  heading: "What our automations handle every day",
  tools: ["Gmail", "HubSpot", "Slack", "Xero", "Google Sheets"],
  items: [
    { icon: "mail", title: "New lead answered", meta: "[X] seconds after the form came in" },
    { icon: "user-plus", title: "Client onboarded", meta: "Folder, board and welcome email created" },
    { icon: "receipt", title: "Invoice entered", meta: "Vendor, amount and due date in your books" },
    { icon: "message", title: "Support question answered", meta: "With a link to the source" },
    { icon: "chart", title: "Weekly report posted", meta: "Numbers pulled from [N] tools" },
    { icon: "pen", title: "Follow-up drafted", meta: "From the deal notes, waiting for approval" },
  ] as const,
};

export const results = {
  label: "Results",
  heading: "Results from real builds",
  body: "Every result is measured against a number the client already tracked.",
  secondary: {
    label: "Work out your own number",
    href: "/tools/automation-roi-calculator",
  },
  // TODO: placeholder figures. Replace with measured client results before launch.
  tiles: [
    {
      number: "3x",
      label: "more leads handled",
      line: "B2B services firm. Every form lead is now scored and answered within minutes, with no extra sales hire.",
    },
    {
      number: "22 hrs",
      label: "saved every week",
      line: "Accounting practice. Invoices are read and entered automatically, and only unclear fields go to review.",
    },
    {
      number: "86%",
      label: "faster first replies",
      line: "E-commerce store. Routine support questions are answered from the help docs in under two minutes.",
    },
  ],
  summary: {
    figure: "45 → 5",
    figureLabel: "minutes per client onboarding",
    text: "A training company cut client onboarding from about 45 minutes to 5 by automating the folder, board and welcome email. Measured over 8 weeks.",
    link: { label: "Read the case study", href: "/case-studies" },
  },
};

export const testimonials = {
  heading: "What clients say",
  subhead: "What clients say after the first build goes live.",
  // TODO: placeholder testimonials. Replace with real, named client quotes before launch.
  quotes: [
    {
      quote: "We used to lose leads over the weekend. Now every form gets a reply in under two minutes, and our reps only touch the ones that are scored as a good fit.",
      name: "Sarah M.",
      role: "Operations Manager, B2B services firm",
    },
    {
      quote: "Invoice entry took our bookkeeper about 20 hours a week. It now runs on its own and she only checks the few that get flagged.",
      name: "David R.",
      role: "Owner, accounting practice",
    },
    {
      quote: "Support volume doubled after our spring launch and we didn't hire anyone. Most questions are answered from our docs before a person sees them.",
      name: "Amira K.",
      role: "Head of Support, e-commerce store",
    },
    {
      quote: "Onboarding a new client went from 45 minutes of copy-paste to a few clicks. Nothing gets missed in week one anymore.",
      name: "Tom L.",
      role: "Founder, training company",
    },
    {
      quote: "The Monday report used to eat someone's morning. It now lands in Slack at 8:00 with numbers from four tools, and we just read it.",
      name: "Priya S.",
      role: "COO, marketing agency",
    },
    {
      quote: "We talked to the engineer who built it from the first call to launch. Fixed price, written plan, and it was live within a few weeks.",
      name: "Marc D.",
      role: "Managing Director, logistics company",
    },
  ],
};

export const process = {
  label: "How it works",
  heading: "How our AI automation process works",
  description:
    "We work in four steps: a free 30-minute call, a written plan with a fixed price, a build that puts your first automation live, and support once it runs.",
  steps: [
    {
      title: "Free 30-min call",
      line: "You show us where growth is getting stuck. You leave with a short list of what's worth automating first, and an honest answer on anything that isn't.",
    },
    {
      title: "Written plan, fixed price",
      line: "We write down exactly what we'll build: the trigger, the steps, the tools, what the AI decides and where a person stays in the loop. You get one price and a launch date in writing. If it doesn't make sense for you, keep the plan.",
    },
    {
      title: "Build and launch",
      line: "We build it inside your accounts, test it on your real data, and switch it on once you've seen it work. You get a short video walkthrough and a one-page guide.",
    },
    {
      title: "Support after launch",
      line: "We watch the runs, fix errors when an app changes, and tune the AI as your volume grows. Support after launch is included. After that, you can keep us on a monthly plan.",
    },
  ],
};

export const why = {
  heading: "Why growing businesses build with us",
  points: [
    {
      title: "Built to handle volume",
      chips: ["Retries", "Logging", "Error alerts"],
      line: "Every build ships with retries, logging and error alerts, so it holds up at 10x the runs and a failed run alerts us instead of failing silently.",
    },
    {
      title: "You own everything",
      line: "It runs on your accounts, under your API keys. If you stop working with us, it keeps running and it's documented.",
    },
    {
      title: "Fixed price before work starts",
      line: "You get the scope and price in writing. If we underestimate the work, that's on us.",
    },
    {
      title: "You talk to the engineer who builds it",
      line: "No sales rep and no handoffs. The person on your call scopes the work, writes it and supports it.",
    },
  ],
  centerTitle: "Built on the tools you already use",
  centerLine: "No new platform to learn.",
  logos: [
    { name: "HubSpot", src: "/logos/hubspot.svg" },
    { name: "Gmail", src: "/logos/gmail.svg" },
    { name: "Slack", src: "/logos/slack.svg" },
    { name: "Xero", src: "/logos/xero.svg" },
    { name: "QuickBooks", src: "/logos/quickbooks.svg" },
    { name: "Google Sheets", src: "/logos/googlesheets.svg" },
    { name: "Notion", src: "/logos/notion.svg" },
    { name: "Stripe", src: "/logos/stripe.svg" },
    { name: "Zendesk", src: "/logos/zendesk.svg" },
    { name: "n8n", src: "/logos/n8n.svg" },
    { name: "Make", src: "/logos/make.svg" },
    { name: "Clay", src: "/logos/clay.png" },
    { name: "Tavily", src: "/logos/tavily.png" },
    { name: "FullEnrich", src: "/logos/fullenrich.png" },
    { name: "Twenty CRM", src: "/logos/twenty.svg" },
    { name: "Zapier", src: "/logos/zapier.svg" },
    { name: "Instantly", src: "/logos/instantly.png" },
    { name: "lemlist", src: "/logos/lemlist.png" },
    { name: "Monid", src: "/logos/monid.png" },
    { name: "OpenAI", src: "/logos/openai.svg" },
    { name: "Anthropic", src: "/logos/anthropic.svg" },
    { name: "DeepSeek", src: "/logos/deepseek.svg" },
    { name: "Perplexity", src: "/logos/perplexity.svg" },
    { name: "Gemini", src: "/logos/gemini.svg" },
    { name: "Mistral AI", src: "/logos/mistral.svg" },
    { name: "Hugging Face", src: "/logos/huggingface.svg" },
    { name: "ElevenLabs", src: "/logos/elevenlabs.svg" },
    { name: "Replicate", src: "/logos/replicate.svg" },
    { name: "Ollama", src: "/logos/ollama.svg" },
    { name: "Meta", src: "/logos/meta.svg" },
    { name: "OpenRouter", src: "/logos/openrouter.svg" },
    { name: "LangChain", src: "/logos/langchain.svg" },
  ],
};

export const team = {
  label: "Built by software engineers",
  text: "Every RZ Automate project is led by a software engineer from the first call to launch and beyond. Our team has shipped production software for [N] clients, including scheduling systems, e-commerce integrations and training platforms. We run our own sales pipeline on the automations we build.",
  links: [
    {
      label: "RZ Automate on LinkedIn",
      href: "https://www.linkedin.com/in/choaib-mouhrach",
    },
    { label: "Our code on GitHub", href: "https://github.com/ChoaibMouhrach" },
  ],
};

export const midCta = {
  pill: "3 spots open in December",
  lineOne: "Grow faster.",
  plain: "Hire ",
  italic: "slower.",
  body: "Find out which tasks to hand off first, in one 30-minute call.",
  secondary: { label: "See our services", href: "/services" },
  fullCircle: ["Akera", "Rizon"],
  avatars: ["Launchlife", "Choice EMR Learning", "CloudSDS", "Akera", "Rizon"],
  proof: "Trusted by 14 growing businesses",
};

export const freeTools = {
  heading: "Free tools to find what to automate first",
  subhead: "Your result shows on screen. You don't need an email to see it.",
  tiles: [
    {
      icon: "calculator",
      name: "Automation ROI calculator",
      line: "Enter five numbers about one task and see the hours and dollars you'd get back each year.",
      tag: "Free · 2 min",
      href: "/tools/automation-roi-calculator",
    },
    {
      icon: "list-ordered",
      name: "What to automate first",
      line: "Answer 8 questions about your week and get a ranked list of tasks to hand off.",
      tag: "Free · 4 min",
      href: "/tools/what-to-automate-first",
    },
    {
      icon: "gauge",
      name: "AI readiness check",
      line: "See whether your data, tools and processes are ready for AI, and what to fix first.",
      tag: "Free · 5 min",
      href: "/tools/ai-readiness-check",
    },
    {
      icon: "scale",
      name: "Compare AI model prices",
      line: "See what each AI model costs per task before you build.",
      tag: "Free",
      href: "/models",
    },
  ] as const,
  footerLink: { label: "See all free tools", href: "/tools" },
};

export const faq = {
  label: "FAQ",
  heading: "Questions before you book",
  link: { label: "See all questions", href: "/faq" },
  items: [
    {
      question: "How much will this cost us?",
      answer:
        "You get one fixed price in writing before we start. It doesn't go up if the build takes us longer.",
    },
    {
      question: "How long until something is actually running?",
      answer:
        "Most single automations go live in weeks, not months. You get the launch date in writing before you agree to anything.",
    },
    {
      question: "Will this work with the tools we already use?",
      answer:
        "Almost always. If your tool can share data with other apps, we can connect it, and if it can't, we'll tell you before you pay anything.",
    },
    {
      question: "Will this replace our staff?",
      answer:
        "No. It takes the repetitive work off your team so they can focus on the work that needs a person.",
    },
    {
      question: "What happens if something breaks?",
      answer:
        "We're alerted the moment something fails, and we fix it. Support after launch is included.",
    },
    {
      question: "Do we own what you build?",
      answer:
        "Yes. It's built on your accounts and belongs to you from day one.",
    },
  ],
};

export const book = {
  eyebrow: "Free 30-min call",
  plain: "Find out where automation lets you ",
  muted: "grow next",
  body: "Talk to the engineer who would build it. We find where growth is getting stuck and rank what to automate first. You keep the plan, whether you work with us or not.",
  planLabel: "Written plan",
  plan: "In your inbox within [PLAN TURNAROUND]",
  embedTitle: "Book a free 30-minute call",
};
