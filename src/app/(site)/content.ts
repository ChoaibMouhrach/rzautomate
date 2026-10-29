export const proof = {
  title: "Built by an engineer who ships software",
  shippedLabel: "What I've built before",
  shipped: [
    "Scheduling system",
    "LMS and LTI integrations",
    "WooCommerce to Moodle sync",
    "EHR simulation platform",
    "Outbound campaign tool",
    "CRM with AI (MCP) integration",
  ],
  stackLabel: "My build stack (tools, not partners)",
  stack: "n8n · Make · Claude · OpenAI",
  facts: "Built by Choaib Mouhrach · Rizon LLC, Wyoming",
};

export const pain = {
  title: "Sound familiar?",
  description:
    "Together they cost you [X hrs/week] and leads you never hear back from.",
  cards: [
    ["Copy-pasting data between tools", "One typo and your systems disagree."],
    ["Leads go cold before follow-up", "They buy from whoever replied first."],
    ["Answering the same questions daily", "Your team becomes a human FAQ."],
    ["Typing invoices into spreadsheets", "Month-end runs late, with errors."],
    ["Onboarding each client by hand", "Steps get missed in week one."],
    ["Building the weekly report manually", "Friday afternoon, gone."],
  ],
  bridge: "Every one of these can be automated. That's what I build.",
};

export const servicesCopy = {
  eyebrow: "What I automate",
  title: "AI automation services for small businesses",
  description:
    "Six kinds of repetitive work I take off small and mid-sized businesses. Each one connects to the tools you already use.",
  cards: [
    {
      title: "AI lead qualification and follow-up: every new lead answered and scored",
      body: "A form fill or inbound email lands. An AI agent scores the lead, writes back right away, and drops a qualified row into your CRM.",
      tools: "HubSpot · OpenAI · n8n",
      href: "/services/ai-lead-qualification",
      label: "AI lead qualification and follow-up",
    },
    {
      title: "AI customer support agents: routine questions answered, hard ones escalated",
      body: "A customer emails or opens a ticket. The agent answers from your docs and past replies, and hands anything tricky to a person with context.",
      tools: "Claude · Gmail · Slack",
      href: "/services/ai-support-agents",
      label: "AI customer support agents",
    },
    {
      title: "Client onboarding automation: new clients set up without the checklist",
      body: "A deal closes or a Stripe payment clears. The welcome email, shared folder and kickoff invite are created and sent without anyone touching them.",
      tools: "Stripe · Gmail · Make",
      href: "/services/client-onboarding-automation",
      label: "Client onboarding automation",
    },
    {
      title: "Operations and reporting automation: the weekly report builds itself",
      body: "Every Monday, numbers get pulled from your CRM, accounting and ad accounts into one sheet, with a plain-English summary posted to Slack.",
      tools: "Google Sheets · QuickBooks · n8n",
      href: "/services/ops-reporting-automation",
      label: "Operations and reporting automation",
    },
    {
      title: "Document and data entry automation: PDFs, invoices and forms entered for you",
      body: "An invoice or form lands in your inbox. AI reads the fields, flags anything unclear, and enters the rest into your CRM or books.",
      tools: "OpenAI · Xero · Google Sheets",
      href: "/services/document-data-automation",
      label: "Document and data entry automation",
    },
    {
      title: "Custom AI agents: built for the job no template fits",
      body: "A task eats hours and no off-the-shelf tool handles it. I build an agent around your systems, then hand it over running and documented.",
      tools: "Claude · OpenAI · n8n",
      href: "/services/custom-ai-agents",
      label: "Custom AI agents",
    },
  ],
  footer:
    "Not sure which one fits? Tell me where the hours go. I'll point you to the right one, or tell you if it isn't worth automating.",
};

export const demo = {
  eyebrow: "See it running",
  title: "Watch a new lead get researched, scored and followed up in [X sec]",
  description:
    "This is a real automation I run for my own business, recorded start to finish. A lead comes in, the workflow looks them up, AI decides if they're a fit, and the result lands in my CRM with a follow-up email already drafted. I built this for myself. I'll build yours.",
  steps: [
    "Trigger: A new lead fills in the contact form on my site.",
    "AI decision: The workflow pulls company details, then Claude scores the lead against my criteria and explains why.",
    "Result: A new row appears in my CRM with the score and notes, and a personal follow-up sits in my drafts, ready to send.",
  ],
  note: "Tell me which task eats your week. I'll show you what the version for your business looks like.",
};

export const useCases = {
  eyebrow: "Use cases by team",
  title: "AI automation use cases for every team in your business",
  description:
    "Pick the team that loses the most hours to manual work. Here is what I build for each one, step by step, with the tools it runs on.",
  teams: [
    {
      title: "AI automation for sales teams",
      body: "Leads arrive from forms, inboxes and booking pages, and someone has to sort them before they go cold. I build the flow that enriches each lead, scores it against your criteria and routes it to the right rep, so your sales team spends its time on calls instead of copy-paste.",
      automations: [
        "New form submission → company and contact details enriched → scored lead created in your CRM with the rep assigned",
        "Lead goes quiet for [X days] → AI drafts a personal follow-up from the deal notes → rep approves and sends from Gmail",
        "Call booked → prospect research brief (company, role, past emails) posted to the rep in Slack before the call",
      ],
      tools: "HubSpot · Pipedrive · Gmail · Cal.com · Slack · Claude · n8n",
    },
    {
      title: "AI automation for customer support",
      body: "Most support tickets ask the same twenty questions. I build an AI support agent that answers those from your own help docs and past replies, and hands anything sensitive or unclear to a person with the full context attached. Your team handles the hard tickets, not the repeats.",
      automations: [
        "New ticket or email → AI checks your help docs → drafts or sends the answer, with a source link",
        "Angry, urgent or billing-related message → flagged and routed to the right person in Slack with a summary",
        "Ticket closed → tags, reason and summary logged to a sheet for your weekly support report",
      ],
      tools: "Zendesk · Help Scout · Intercom · Gmail · Slack · OpenAI · n8n",
    },
    {
      title: "AI automation for operations teams",
      body: "Operations work lives between tools: a signed contract here, a project board there, a report someone rebuilds every Monday. I connect those steps so new clients get set up the same way every time and the numbers show up without anyone exporting a CSV.",
      automations: [
        "Contract signed → client folder, project board and welcome email created → kickoff call link sent",
        "Every Monday at 8am → data pulled from your CRM, billing and project tools → summary posted to Slack",
        "Task overdue or step skipped in onboarding → owner reminded automatically, manager copied after [X days]",
      ],
      tools: "DocuSign · Google Drive · Notion · Asana · Google Sheets · Slack · n8n",
    },
    {
      title: "AI automation for finance and admin",
      body: "Invoices, receipts and forms still get typed in by hand at most small businesses. I build workflows that read those documents, pull out the fields that matter and put them where they belong, with a person checking anything the AI is unsure about.",
      automations: [
        "Invoice lands in the accounts inbox → vendor, amount and due date extracted → draft bill created in QuickBooks or Xero",
        "Stripe payment fails → customer gets a polite retry email → finance sees it in a daily list",
        "PDF form or receipt uploaded → fields parsed into a row in your spreadsheet or database, low-confidence fields flagged for review",
      ],
      tools: "Gmail · QuickBooks · Xero · Stripe · Google Sheets · Airtable · Claude",
    },
    {
      title: "AI automation for marketing teams",
      body: "Marketing teams repeat the same small jobs every week: repurposing content, tagging contacts, chasing reports. I build custom AI agents for the tasks that don't fit a template, trained on your brand voice and plugged into the tools you already pay for.",
      automations: [
        "New blog post published → AI drafts LinkedIn posts and a newsletter blurb in your voice → saved for review in Notion",
        "New subscriber or download → contact tagged by interest in your email tool → matching follow-up sequence starts",
        "First of the month → traffic, signups and campaign results pulled together → one-page summary emailed to you",
      ],
      tools: "WordPress · Mailchimp · HubSpot · Google Analytics · Notion · OpenAI · Make",
    },
  ],
  footer:
    "Don't see your exact task? Most automations are a version of one of these. Tell me what eats your week and I'll tell you on the call whether it's worth automating.",
};

export const results = {
  eyebrow: "Results, in hours and dollars",
  title: "What manual work costs you, and what I've measured so far",
  stat: "Manual data entry costs US companies about $28,500 per employee per year (Parseur, Manual Data Entry Report, July 2025, survey of 500 US professionals). In a Smartsheet survey, over 40% of workers said they spend at least a quarter of their work week on manual, repetitive tasks (Smartsheet, [YEAR — verify]).",
  intro:
    "I don't have client case studies to show you yet. So here is what I've measured on my own systems, labelled as exactly that.",
  cards: [
    {
      label: "Internal build",
      title: "Outbound leads and campaigns",
      before:
        "Before: [X hrs/week] finding leads, checking emails and writing first lines by hand",
      after: "After: [Y hrs/week] reviewing a ready list and approving sends",
      meta: "Measured over [N weeks], [MONTH YEAR] · Tools: [TOOLS]",
    },
    {
      label: "Internal build",
      title: "CRM with an AI assistant plugged in (MCP)",
      before:
        "Before: [X min] per deal to update notes, stages and follow-up dates by hand",
      after:
        "After: [Y min] per deal. I ask the assistant, it reads and writes the CRM record",
      meta: "Measured over [N weeks], [MONTH YEAR] · Tools: [TOOLS]",
    },
    {
      label: "Industry benchmark",
      title: "Manual data entry across a team",
      before:
        "Before: About $28,500 per employee per year spent on manual data entry",
      after:
        "After: The part you automate comes off that bill. Your number depends on your volume, so run it in the calculator below",
      meta: "Per year · Parseur, Manual Data Entry Report, July 2025 (500 US professionals)",
    },
  ],
  measure:
    "I time the task by hand for [N] runs before I build anything, then time the same task for [N] runs after it goes live. Same person, same volume, numbers rounded down. Your results depend on your volume and your tools.",
  calculatorTitle: "What is your manual work costing you?",
  calculator:
    "Five numbers, no email needed. Every assumption is on the page and you can change all of them. People × hours per week × weeks × share automated = hours back. Hours back × hourly cost = dollars back. Build and running costs are not subtracted.",
  honesty:
    "These are my own internal numbers and published industry benchmarks, not client results. I'll replace them with client numbers once I have them, with permission.",
};

export const why = {
  eyebrow: "Why RZ Automate",
  title: "Why hire me instead of a freelancer, a big agency, or doing it yourself",
  description:
    "A lot of AI automation gets sold on big ROI promises and demos that break in week two. Here are four things you can check before you pay me anything.",
  cards: [
    [
      "You talk to the engineer who builds it",
      "I'm a software engineer, not a no-code course graduate. The person on your call writes the workflow, tests it and fixes it. No handoffs.",
    ],
    [
      "You own everything I build",
      "Code lives in your GitHub. Workflows run in your n8n or Make account. API keys stay in your name. Leave anytime and keep it all.",
    ],
    [
      "Fixed scope and price before work starts",
      "Written scope, one price, before I write a line. If I underestimate the work, that's my problem. New requests get their own quote.",
    ],
    [
      "Built for production, then maintained",
      "Every build ships with retries, logging and error alerts, so a failed run pings me instead of failing silently. [MAINTENANCE PLAN] covers it after launch.",
    ],
  ],
  tableTitle: "How I compare, honestly",
  caption:
    "How RZ Automate compares with freelancer marketplaces, big agencies and DIY for building AI automations.",
  columns: ["", "RZ Automate", "Freelancer marketplace", "Big agency", "DIY"],
  rows: [
    [
      "Who builds it",
      "Me, the software engineer you talk to on every call",
      "Anyone from a senior engineer to a recent course graduate. Hard to tell before you hire",
      "A team. You mostly talk to an account manager or project lead",
      "You, or whoever on your team has time",
    ],
    [
      "Pricing model",
      "Fixed price per scoped project, agreed upfront ([PRICE RANGE])",
      "Hourly or per gig. Often the cheapest option",
      "Large fixed projects or monthly retainers. Usually the most expensive",
      "Tool subscriptions (n8n, Make, Zapier, OpenAI) plus your own hours. Cheapest in cash",
    ],
    [
      "Code & account ownership",
      "Yours from day one: your GitHub, your n8n or Make account, your API keys",
      "Depends on the person. Check the contract and whose accounts it runs on",
      "Usually yours by contract, but sometimes built on the agency's accounts or platform",
      "Fully yours",
    ],
    [
      "Error handling & maintenance",
      "Retries, logging and error alerts built in. Ongoing care through [MAINTENANCE PLAN]",
      "Varies a lot. Support often ends at delivery",
      "Usually strong, with a support team and SLAs. This is where agencies win",
      "Whatever you set up. When it breaks, you're on call",
    ],
    [
      "Lock-in",
      "Low. Standard tools, documented, so any developer can take it over",
      "Low to medium, depending on documentation",
      "Can be high with proprietary platforms or long retainers",
      "None",
    ],
    [
      "Speed to first result",
      "[FIRST RESULT TIMEFRAME] after scope is signed, if I have a slot open",
      "Fast for small, well-defined fixes",
      "Slower. Discovery, contracts and scheduling come first",
      "Fastest for a simple two-step automation. Slow for anything with AI, branching or error handling",
    ],
    [
      "Best for",
      "Small and mid-sized businesses that want a production-grade workflow built by an engineer and owned outright",
      "Small one-off tasks with a clear spec and a tight budget",
      "Larger companies that need a full team, SLAs and many projects running at once",
      "Simple automations, someone technical in-house, and time to maintain it",
    ],
  ],
  note: "The honest limit: RZ Automate is one person. I take on [MAX ACTIVE PROJECTS] projects at a time, so you may wait for a slot, and I can't run ten builds in parallel the way an agency can.",
};

export const guarantee = {
  eyebrow: "The guarantee",
  title:
    "The [GUARANTEE NAME]: if your first automation doesn't work, you get your money back",
  opener:
    "Paying a new agency before you've seen anything run is a fair thing to worry about, so I carry that risk instead of you.",
  body: [
    "Before I build anything, we write down what \"working\" means for your first automation. Plain checks you can test yourself, like \"every new form lead lands in the CRM with the right owner assigned.\" We both sign off on that list.",
    "Then I build it. If the first automation doesn't meet those written criteria within [GUARANTEE WINDOW] of kickoff, you choose one of two options: a full refund of the first milestone fee, paid within [REFUND SPEED], or I keep working on it at no charge until it passes. Either way, you keep the plan, the workflow map and the documentation.",
    "This covers what I control: the system does the job we agreed on. I don't promise revenue or sales numbers, because those depend on things outside the build. It also needs three things from you: access to your tools by [ACCESS DEADLINE], the success criteria agreed in writing before work starts, and the scope we signed. If the scope changes mid-build, we rewrite the criteria together.",
  ],
  claimTitle: "How to claim it",
  claim: [
    "Email contact@rizon.agency with \"[GUARANTEE NAME] claim\" in the subject and tell me which criterion isn't met.",
    "We check it together against the written list, on a short call or a screen recording.",
    "You pick: the refund, sent within [REFUND SPEED], or free work until it passes.",
  ],
  confidence:
    "I agree the criteria with you before I take any money, so I only sign up for builds I know I can make run.",
};

export const founderCopy = {
  eyebrow: "Who you'll work with",
  title: "You talk to the engineer who builds it",
  role: "Choaib Mouhrach, software engineer and founder of RZ Automate",
  story:
    "I'm Choaib, a software engineer based in Morocco, and I run RZ Automate through Rizon LLC, a Wyoming company. Before automation, I spent [X years] shipping production software at an agency and as a freelancer: scheduling systems, LMS/LTI integrations, a WooCommerce–Moodle integration and an EHR simulation platform. I also build automations for my own business, including an outbound lead tool and a CRM my AI assistant can read and update. When you hire RZ Automate, the person on your call is the person writing your workflow.",
  proof: [
    [
      "Production systems shipped.",
      "Scheduling tools, LTI integrations, a WooCommerce–Moodle integration and an EHR simulation platform, used by [CLIENT NAME] and [CLIENT NAME]. See the work history on LinkedIn.",
    ],
    [
      "Code you can read.",
      "My public repositories are on GitHub, including [REPO NAME].",
    ],
    [
      "I run on my own automations.",
      "My outbound lead tool and AI-connected CRM run my own pipeline every week. I'll show you both live on the call.",
    ],
  ],
  howTitle: "How I work",
  how: [
    [
      "No handoffs.",
      "You get my email and my calendar. There's no account manager between you and the build.",
    ],
    [
      "You see progress [UPDATE CADENCE].",
      "A short Loom or written update: what shipped, what's next, what I need from you.",
    ],
    [
      "Plain timing.",
      "I'm in Morocco (GMT+1), which gives us [X hrs] of overlap with US East Coast mornings. I reply within [RESPONSE TIME].",
    ],
  ],
};

export const tools = {
  eyebrow: "Free tools",
  title: "Free tools to find what to automate first",
  description:
    "Not ready to talk yet? Run one of these. Your result shows on screen, and you never need an email to see it.",
  cards: [
    {
      title: "Automation ROI calculator",
      description:
        "Enter five numbers about one task and see the hours and dollars automation could give back each year.",
      time: "[TIME]",
      button: "Calculate my savings",
      href: "/tools/automation-roi-calculator",
    },
    {
      title: "What to automate first quiz",
      description:
        "Answer [N] quick questions about your week and get a ranked list of the tasks to automate first. Your free workflow audit.",
      time: "[TIME]",
      button: "Get a free workflow audit",
      href: "/tools/what-to-automate-first",
    },
    {
      title: "n8n workflow template library",
      description:
        "Copy n8n workflows for leads, invoices, support tickets and reporting, then import them into your own n8n.",
      time: "[TIME]",
      button: "Browse the templates",
      href: "/tools/n8n-templates",
    },
    {
      title: "AI readiness check",
      description:
        "Check whether your data, tools and processes are ready for AI, and see what to fix before you build.",
      time: "[TIME]",
      button: "Check my readiness",
      href: "/tools/ai-readiness-check",
    },
  ],
  note: "Want the detailed report? Leave your email after you see your result. That part is optional.",
};

export const testimonials = {
  eyebrow: "Client work",
  title: "Software I've shipped and what it did",
  description:
    "I don't have AI automation reviews yet, so here is real software work I've built, described plainly.",
  snippets: [
    {
      title: "Scheduling tool for [CLIENT NAME]",
      problem: "[WHAT WAS MANUAL]",
      build: "[WHAT I BUILT]",
      result: "[RESULT]",
    },
    {
      title: "WooCommerce to Moodle integration for [CLIENT NAME]",
      problem:
        "Every paid order needed someone to set up the customer's access by hand.",
      build:
        "An integration that gives the buyer the right access as soon as the order is paid.",
      result: "[RESULT]",
    },
    {
      title: "EHR simulation platform for [CLIENT NAME]",
      problem: "Trainees had no safe way to practise with patient records.",
      build: "A simulated electronic health record system used in training.",
      result: "[RESULT]",
    },
  ],
};

export const faq = {
  title: "Questions owners ask before booking a call",
  description:
    "Straight answers on price, timelines, data and what happens after launch.",
  items: [
    {
      question: "How much does an AI automation project cost?",
      answer:
        "Most projects cost [PRICE RANGE], as a fixed price agreed in writing before I start. The price depends on how many tools are involved and how many steps the workflow has. Running costs are separate: tool subscriptions like n8n and AI usage from OpenAI or Anthropic, typically [MONTHLY RANGE] a month, billed to your own accounts.",
    },
    {
      question: "How long until my first automation is live?",
      answer:
        "Your first automation is usually live [BUILD DAYS] days after you approve the written plan, or about [TOTAL DAYS] days from our first call. Bigger builds with several connected workflows ship in stages, so something useful runs early and the rest follows on a schedule we agree on before I start.",
    },
    {
      question: "What if it doesn't save the time you said it would?",
      answer:
        "Then I keep working for free or refund the milestone fee, under the [GUARANTEE NAME]. Before kickoff we agree in writing what the first automation must do and how we'll measure the time it saves. If it misses that within [GUARANTEE WINDOW], you choose: more work at no cost, or a refund within [REFUND SPEED]. You keep the docs.",
    },
    {
      question: "Do I own the workflows and accounts?",
      answer:
        "Yes. Every workflow, API key and tool account is set up under your company's name and billing, and you get the exported workflow files and docs at handover. If we stop working together, everything keeps running, and you or another developer can pick it up. Nothing sits on my accounts.",
    },
    {
      question: "What happens if something breaks after launch?",
      answer:
        "I fix it. Every build ships with retries, logging and error alerts, so a failed run notifies me instead of failing silently. Bugs in what I built are fixed at no charge under [SUPPORT TERMS]. After that, [MAINTENANCE PLAN] covers monitoring, fixes and updates when a connected tool changes its API.",
    },
    {
      question: "Will it work with the tools I already use?",
      answer:
        "Almost always, yes. n8n and Make connect to hundreds of apps out of the box, including Gmail, Outlook, Slack, Stripe, QuickBooks, HubSpot, Google Sheets and Airtable. If a tool has an API or webhooks, I can usually connect it. If it has neither, I'll tell you on the free call, before you pay anything.",
    },
  ],
  closing:
    "Have a question that isn't here? Ask me directly. It's one engineer, so you'll get the answer from the person who builds it.",
};

export const finalCta = {
  bullets: [
    "You talk to the person who builds it. No sales rep, no handoff.",
    "We map your repetitive work and rank what to automate first.",
    "You keep the plan either way. Use it with me, someone else, or on your own.",
    "No pitch deck. Your tools, your tasks, straight answers.",
  ],
  next: "Pick a time below. After the call, I send you the written plan within [PLAN TURNAROUND].",
  capacity: "I take on [N] builds a month. Next opening is [MONTH].",
  email: "Rather not get on a call? Email me at contact@rizon.agency and tell me what you want off your plate.",
};
