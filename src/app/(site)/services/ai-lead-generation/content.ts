export const path = "/services/ai-lead-generation";
export const bookHref = "/book?service=lead-generation";
export const auditHref = "/tools/what-to-automate-first";

export const hero = {
  "eyebrow": "AI lead generation & CRM automation for small and mid-sized businesses",
  "title": "AI lead generation agency: every new lead answered within minutes",
  "subline": "I'm a software engineer. I build systems that qualify each new lead, log it in your CRM and send follow-ups that don't depend on anyone remembering.",
  "trust": "Free · 30 min · No commitment. You talk to the engineer who builds it."
} as const;

export const fit = {
  "title": "Is AI lead generation right for your business?",
  "intro": "This works best when leads already come in and the slow part is what happens next. Here's how to tell if that's you.",
  "goodTitle": "Good fit if",
  "badTitle": "Not a fit if",
  "good": [
    "Leads already reach you through forms, email, LinkedIn or ads, but replies are slow or depend on who's around that day.",
    "You can describe your ideal customer: the industry, company size and role you want on a call, and the ones you don't.",
    "You use a CRM like HubSpot, Pipedrive, Salesforce or Airtable, or you're ready to start with one (a Google Sheet counts).",
    "You want a person to stay in control. I can set it up so you approve each first reply or follow-up before it goes out."
  ],
  "bad": [
    "You want someone to buy you lead lists or promise a number of booked meetings. I don't sell either.",
    "You don't have a clear offer or ideal customer yet. Automation makes a good process faster; it can't decide who you sell to.",
    "You want mass cold email blasts or LinkedIn bots that auto-connect and auto-message. I don't build those.",
    "You get almost no leads today and have no plan to do outbound. There's nothing for the system to respond to yet."
  ],
  "closing": "Not sure which side you're on?"
} as const;

export const pain = {
  "title": "Why do my leads go cold before anyone follows up?",
  "description": "They came to you. Then they waited.",
  "cards": [
    [
      "Leads wait hours for a reply",
      "They book with whoever answered first."
    ],
    [
      "Follow-up depends on memory",
      "One busy week and warm leads quietly drop off."
    ],
    [
      "Half-empty, out-of-date CRM",
      "Nobody logs calls, so nobody trusts the pipeline."
    ],
    [
      "Hours of research per outreach",
      "Your best seller is on LinkedIn, not on calls."
    ]
  ],
  "bridge": "Most of that is copying, pasting and remembering. That's the part I automate, so your people get back to selling."
} as const;

export const build = {
  "title": "The AI lead generation and CRM automation I build",
  "definition": "AI lead generation is using AI and automation to capture leads, enrich and qualify them, follow up on time and keep your CRM updated automatically. A custom build connects the tools you already use instead of adding one more tool for a single step.",
  "intro": "Six builds that plug into the forms, inbox and CRM you already use, each running from a trigger to a result you can check.",
  "cards": [
    {
      "title": "Instant lead response and AI lead qualification",
      "flow": "A lead comes in by form, email, chat or LinkedIn → it's enriched and scored against your ideal-customer criteria → a tailored reply or booking link goes out in minutes and the right rep is pinged.",
      "chips": "Typeform · Apollo · HubSpot"
    },
    {
      "title": "Lead enrichment and scoring",
      "flow": "A new contact lands in your CRM → company, size, role and website get filled from enrichment APIs and a scrape of their site → the AI scores the fit, so you see who's worth a call first.",
      "chips": "Apollo · Pipedrive · OpenAI"
    },
    {
      "title": "Automated lead follow-up sequences",
      "flow": "A lead goes quiet after a call or never books → a follow-up is drafted based on what they did, on your timing → the sequence stops the moment they reply or book.",
      "chips": "Gmail · Outlook · Cal.com"
    },
    {
      "title": "CRM automation and data hygiene",
      "flow": "An email, call or booking happens → it's logged on the right contact, deals get created or moved, duplicates get merged and blanks filled → a weekly pipeline summary lands in Slack.",
      "chips": "HubSpot · Pipedrive · Slack"
    },
    {
      "title": "Outbound research assistant",
      "flow": "You define who you want to reach → it builds the target list, researches each account and drafts a personal first line or email → your rep reviews it and sends from your own inbox.",
      "chips": "Apollo · Google Sheets · Claude"
    },
    {
      "title": "AI appointment setting with pre-call briefs",
      "flow": "A qualified lead gets your booking link and picks a time in Cal.com or Calendly → the AI researches the company and the person → your rep gets a one-page brief before the call.",
      "chips": "Cal.com · Calendly · Slack"
    }
  ],
  "guardrail": "You can approve every message before it sends. Sequences stop as soon as a lead replies, and anyone who opts out goes on a suppression list so they never hear from you again. Outbound always sends from your own tools and domain.",
  "closing": "Built with n8n plus Claude or OpenAI, and it runs on your own accounts, so every workflow, lead record and API key stays yours."
} as const;

export const proof = {
  "eyebrow": "See it running",
  "title": "Watch AI lead qualification run on a real lead, from form to CRM",
  "description": "This is the same workflow I run for my own business, recorded start to finish. A lead fills in my contact form, and [X sec] later they're researched, scored and in my CRM with a follow-up already drafted.",
  "steps": [
    "Trigger: A new lead fills in the contact form on my site.",
    "AI decision: The workflow pulls company details from [ENRICHMENT TOOL], then Claude scores the lead against my criteria and explains why.",
    "Result: A new row appears in [CRM NAME] with the score and notes, and a personal follow-up sits in my drafts, ready for me to review and send."
  ],
  "card": {
    "label": "Internal build",
    "title": "[INTERNAL BUILD NAME]",
    "body": "My own outbound lead tool and a CRM I connected to AI over MCP. I use it every week to find, research and follow up with my own prospects.",
    "details": [
      "Before: [BEFORE: what you did by hand + time it took, e.g. \"researched each prospect and wrote first lines myself, X min per lead\"]",
      "After: [AFTER: what the system does now + measured result, e.g. \"X leads researched and drafted per hour, Y% of drafts sent with no edits\"]",
      "Period: [MEASUREMENT PERIOD: e.g. 4 weeks, Oct 2026]",
      "Tools: [TOOLS: e.g. n8n, Claude, MCP, your CRM, Gmail]",
      "How I measured it: [HOW MEASURED: e.g. timestamps from the workflow log vs. a 1-week manual baseline]"
    ]
  },
  "leadIn": "Want to see this on your own leads and your own CRM?",
  "microcopy": "You talk to me, the person who builds it. Bring a few recent leads and tell me what makes one worth a call. I'll show you what your version would look like."
} as const;

export const how = {
  "eyebrow": "How it works",
  "title": "How I set up your AI lead generation and CRM automation",
  "summary": "RZ Automate sets up AI lead generation and CRM automation in four steps: a free 30-minute audit of your lead sources and CRM, a written plan with a fixed price, an approve-before-send launch within [BUILD DAYS] days, and weekly monitoring once it's live.",
  "steps": [
    {
      "title": "Free 30-min call and workflow audit",
      "time": "30 minutes",
      "what": "We look at where your leads come from (forms, email, LinkedIn, ads), what your CRM looks like today and how long a new lead waits for a first reply. I point out where leads stall and which steps are worth automating first.",
      "get": "A straight answer on what an automation could take off your plate, and what has to be fixed in your process or CRM before it can.",
      "you": "Bring a sample of recent leads and a rough idea of who your best customers are."
    },
    {
      "title": "Scoped plan with a fixed price",
      "time": "[PLAN TURNAROUND]",
      "what": "I write down the scoring rules for your ideal customer, which lead sources and steps get automated, which messages need your approval before they go out, and the success criteria we'll judge it by, such as time to first reply and the share of leads enriched and scored correctly.",
      "get": "A written plan with one fixed price and a launch date. Keep it even if you don't go ahead.",
      "you": "Check the scoring rules. You know which leads turn into customers better than I do."
    },
    {
      "title": "Build and launch your first automation",
      "time": "[BUILD DAYS] days",
      "what": "I connect your forms, inbox and CRM, then launch in approve-before-send mode: every lead gets enriched, scored and written to your CRM, and each reply or follow-up waits for your OK. After the [TEST PERIOD], the steps you've approved run on their own.",
      "get": "A working lead pipeline, a short Loom walkthrough and a one-page runbook covering how leads are scored, what sends automatically and how to pause it.",
      "you": "Give me access to your CRM, inbox and lead forms, share your ideal-customer definition, approve drafts during the [TEST PERIOD], and sign off each step before it runs on its own."
    },
    {
      "title": "Run, monitor and improve",
      "time": "Ongoing, [SUPPORT TERMS]",
      "what": "I watch every run, get alerted when an enrichment call or CRM sync fails, and tune the scoring rules and follow-up timing as real leads come in.",
      "get": "[MONITORING REPORT], including a weekly pipeline report: new leads, how fast each got a first reply, how they scored, and where the automation stalled.",
      "you": "Tell me when your offer, pricing or ideal customer changes, and when you want new lead sources added."
    }
  ],
  "total": "From our first call to new leads getting enriched, scored and a drafted first reply: [TOTAL DAYS] days.",
  "microcopy": "Bring a few recent leads. You'll leave knowing where yours go cold and what to automate first, even if you never hire me."
} as const;

export const scope = {
  "title": "What's included in your lead generation and CRM automation",
  "intro": "Here's exactly what you get, what you don't, and the tools it works with.",
  "includedTitle": "Included",
  "excludedTitle": "Not included",
  "worksWithTitle": "Works with",
  "included": [
    "Lead capture from your forms, inbox, LinkedIn replies and ad lead forms, all landing in one place",
    "Enrichment and scoring set up against your ideal-customer criteria, so each lead arrives with company, role and a fit score",
    "Follow-up workflows that remind your team or draft the next message, and stop when the lead replies or books",
    "CRM automations: logged emails, created and updated deals, deduped records, filled fields and current pipeline stages",
    "Outbound research drafts: account notes and personalised first lines for you to review and send from your own tools",
    "Booking links plus a one-page pre-call brief on the company and person, sent before every meeting",
    "Approve-before-send mode, so a person signs off on every message until you're ready to let it run",
    "Opt-out and suppression handling, so anyone who unsubscribes or says no stops getting messages",
    "Logging and error alerts, so a broken step gets flagged instead of failing quietly",
    "Written documentation and a walkthrough video of how it works",
    "You own every account and workflow. Nothing runs on mine.",
    "[SUPPORT TERMS] after launch"
  ],
  "excluded": [
    "Buying lead lists or contact data",
    "Sending mass cold email, or managing deliverability from my domains. Outbound goes through your own tools and domains.",
    "LinkedIn automation that breaks its terms. LinkedIn messages are drafted for a person to send.",
    "AI voice calling",
    "Writing your offer or sales copy strategy from scratch. The system makes a good process faster; it doesn't replace one.",
    "Enrichment, API and CRM subscription fees. These run on your own accounts, so you see every charge."
  ],
  "worksWith": [
    [
      "Lead sources",
      "web forms (Typeform, Webflow, WordPress), Gmail, Outlook, LinkedIn replies (sent manually), ad lead forms"
    ],
    [
      "CRM",
      "HubSpot, Pipedrive, Salesforce, Airtable, Google Sheets"
    ],
    [
      "Enrichment",
      "Apollo and similar enrichment APIs, website scraping"
    ],
    [
      "Booking",
      "Cal.com, Calendly"
    ],
    [
      "Team alerts",
      "Slack, email"
    ],
    [
      "AI models",
      "Claude or OpenAI"
    ],
    [
      "Orchestration",
      "n8n"
    ]
  ],
  "closing": "Using something else? If it has an API, I can likely connect it."
} as const;

export const pricing = {
  "eyebrow": "Pricing",
  "title": "What AI lead generation and CRM automation costs",
  "intro": "You pay a fixed price for the build, then decide if you want me on maintenance. The AI and enrichment usage runs on your own accounts, so you see every cent and I don't mark it up.",
  "columns": [
    "Service",
    "What it covers",
    "Price"
  ],
  "rows": [
    [
      "Build (one-time, fixed)",
      "Lead capture from your forms, inbox and booking tool, enrichment and AI scoring against your ideal-customer criteria, writes and updates in your CRM, drafted first replies and follow-ups, error alerts, launch in approve-before-send mode first",
      "From [LEAD GEN PRICE FROM]"
    ],
    [
      "Maintenance (optional, monthly)",
      "Fixes when a tool or API changes, scoring and prompt tuning, new lead sources or fields, the weekly pipeline summary",
      "[MONTHLY RANGE]/month, cancel anytime"
    ],
    [
      "Running costs (paid by you, to the provider)",
      "Claude or OpenAI usage, enrichment API credits (e.g. Apollo), plus your n8n plan if you host it in the cloud. Billed to your own accounts, not through me",
      "Typically [API COST RANGE]/month"
    ]
  ],
  "footnote": "The exact build price goes in your written plan before any work starts. It doesn't change unless you add scope.",
  "comparison": "Many teams stack a data tool, an enrichment tool, a sequencing tool and CRM add-ons, each billed per seat or per credit. With a custom build you pay once for the workflow, it runs in accounts you own, and you only pay the providers for what you actually use.",
  "affectsTitle": "What affects the price",
  "affects": [
    [
      "Lead sources.",
      "One web form costs less than a form plus a shared inbox plus LinkedIn replies plus a booking tool."
    ],
    [
      "Your CRM.",
      "A clean HubSpot or Pipedrive setup is quick to connect. Duplicates, missing fields or a pipeline nobody trusts mean cleanup first, and that's part of the scope."
    ],
    [
      "Enrichment depth.",
      "Company size and website is simple. Role, tech stack, recent news and a written research note per lead take more steps and more testing."
    ],
    [
      "Outbound research volume.",
      "Researching [X] accounts a week is a different build from a few hundred, with more list rules and more checks on what the AI writes."
    ],
    [
      "Approval steps.",
      "Sending everything automatically is the lightest setup. Routing drafts to the right rep for review, with edits tracked, adds work."
    ]
  ],
  "payment": "[PAYMENT TERMS]. Maintenance is billed monthly and you can stop it at any time. Everything stays in your accounts either way.",
  "guarantee": "[GUARANTEE NAME]: if your first automation misses the criteria we wrote down within [GUARANTEE WINDOW], you get the milestone fee back or I fix it free.",
  "microcopy": "Get a fixed quote for your setup. The plan is yours to keep even if you don't hire me.",
  "secondary": "Not sure what to automate first?"
} as const;

export const guarantee = {
  "title": "The [GUARANTEE NAME]: your lead system passes the checks we wrote down, or you get your money back",
  "body": [
    "Before I build anything, we write down what \"working\" means for your first automation. Plain checks you can test yourself.",
    "If the first automation doesn't meet those written criteria within [GUARANTEE WINDOW] of kickoff, you choose one of two options: a full refund of the first milestone fee, paid within [REFUND SPEED], or I keep working on it at no charge until it passes."
  ],
  "leadIn": "For lead generation, the criteria could look like this:",
  "criteria": [
    "Every new form lead gets a first reply within [TIME].",
    "[X]% of new leads enriched and scored correctly against your criteria in a [TEST PERIOD] test.",
    "Zero leads lost between form and CRM over [PERIOD]."
  ],
  "closing": "I don't guarantee meetings or revenue, because those depend on your offer and your market. It covers the system doing the job we agreed on.",
  "link": "Read the full [GUARANTEE NAME] terms"
} as const;

export const why = {
  "eyebrow": "Why me",
  "title": "Why hire me as your AI lead generation agency instead of buying more tools",
  "cards": [
    [
      "One connected system, not five tools you stitch together",
      "A form lead gets enriched, scored, written to your CRM and sent a booking link in one workflow. You stop wiring Apollo, Zapier and spreadsheets together yourself."
    ],
    [
      "You own the workflows, the data and the accounts",
      "It runs in your n8n, your CRM and your enrichment accounts, so lead data stays with you. No per-meeting fees. Stop working with me and everything keeps running."
    ],
    [
      "An engineer who runs this setup on his own pipeline",
      "You talk to the person who builds it. Every run is logged and a failed one alerts me. I use this same system for my own outbound in [INTERNAL BUILD NAME]."
    ]
  ],
  "buyTitle": "When to buy a tool or hire instead",
  "buy": "If HubSpot workflows or Apollo sequences already cover what you need, keep them. If you need a person making calls and running discovery, hire an SDR; I don't build AI calling. A custom build fits when leads come from several places and your forms, inbox and CRM don't talk to each other.",
  "link": "How an AI automation agency compares with a freelancer"
} as const;

export const faq = {
  "title": "AI lead generation FAQ",
  "intro": "Straight answers to what owners ask before they let a system touch their leads and their CRM.",
  "items": [
    {
      "question": "Is AI lead generation legal, or will it get my domain or LinkedIn account banned?",
      "answer": "It's legal when it follows the rules, and I build it to. Emails go out from your own Gmail or Outlook with an opt-out line and a suppression list, so anyone who unsubscribes isn't contacted again (CAN-SPAM, GDPR). I don't automate LinkedIn. Messages there are drafted for you to send by hand. No mass blasts."
    },
    {
      "question": "Will automated lead follow-up sound robotic to my leads?",
      "answer": "Not if it's set up properly. Each draft uses what the lead actually wrote, their company and role, and your own past emails as a style guide. Follow-ups stop as soon as someone replies or books. During the [TEST PERIOD] you approve every message, so you see how it sounds before anything sends on its own."
    },
    {
      "question": "How does AI lead qualification decide which leads are qualified?",
      "answer": "It scores each lead against rules you sign off on: industry, company size, role and what they asked for. The AI reads the form or email, checks the enriched data and writes a score with a one-line reason into your CRM, so you can see why. You set the cut-off. Borderline leads go to a person, not a guess."
    },
    {
      "question": "Can you guarantee booked meetings or revenue?",
      "answer": "No. Meetings and revenue depend on your offer, your price and who you sell to, and nobody building automation controls those. What I commit to is the system working: new leads answered within the response time we agree in the plan, enriched and scored correctly, and logged in your CRM. Those are the success criteria [GUARANTEE NAME] covers."
    },
    {
      "question": "Should I use Apollo, Clay or HubSpot workflows instead of a custom setup?",
      "answer": "Use them if they already cover what you need, because they're quicker to start. Apollo is mainly a contact database, Clay is built for enrichment and list building, and HubSpot workflows run inside HubSpot. A custom setup fits when leads arrive through several tools or you want replies written around your process. I often build on top of them."
    },
    {
      "question": "What does AI lead generation cost to run each month?",
      "answer": "Two parts, on top of the one-time build from [LEAD GEN PRICE FROM]. AI model and enrichment API usage, plus your n8n plan if it's cloud-hosted, typically costs [API COST RANGE] a month, billed to your own accounts. Optional maintenance covers fixes, scoring tweaks and the weekly pipeline report for [MONTHLY RANGE] a month, cancel anytime."
    }
  ],
  "closing": "Not sure what a system like this would do with your leads? Bring a few recent ones to the call and I'll show you how each would be scored and answered."
} as const;

export const book = {
  "title": "Let's trace one of your leads from form to CRM",
  "subhead": "A free 30-min call with me, the engineer who builds it. Bring one real lead that came in recently and we'll follow it step by step to see where it stalls.",
  "bullets": [
    "We follow one real lead from your form or inbox to your CRM, not a generic demo.",
    "You leave knowing which steps to automate first and which should stay with a person.",
    "You keep the plan either way. Use it with me, someone else, or on your own."
  ],
  "next": "After the call, I send you the written plan within [PLAN TURNAROUND].",
  "capacity": "I take on [N] builds a month. Next opening is [MONTH].",
  "email": "Rather not get on a call? Email me at contact@rizon.agency, forward one recent lead and tell me how long it took someone to reply.",
  "relatedTitle": "Related services",
  "related": [
    {
      "title": "AI customer support agents",
      "href": "/services/ai-customer-support-agents",
      "body": "Agents that answer customer emails and chats from your docs, and hand off the rest."
    },
    {
      "title": "Business process automation",
      "href": "/services/business-process-automation",
      "body": "Invoices, onboarding, reports and data entry moved into n8n workflows that run on their own."
    },
    {
      "title": "AI agent development",
      "href": "/services/ai-agent-development",
      "body": "Custom AI agents for jobs outside support and sales, connected to your tools and data."
    }
  ]
} as const;

export const seo = {
  "title": "AI Lead Generation Agency & CRM Automation",
  "description": "AI lead generation agency for small businesses: every new lead enriched, qualified and logged in your CRM within minutes, plus automated follow-up.",
  "openGraphDescription": "Every new lead enriched, qualified and logged in your CRM within minutes, with follow-ups that don't depend on anyone remembering. Built by an engineer.",
  "serviceName": "AI lead generation & CRM automation",
  "alternateNames": [
    "AI lead generation agency",
    "CRM automation",
    "AI lead qualification",
    "Automated lead follow-up"
  ],
  "serviceDescription": "Custom systems that qualify each new lead, log it in the CRM and send follow-ups automatically, built by a software engineer for small and mid-sized businesses.",
  "imageAlt": "AI lead generation and CRM automation by RZ Automate",
  "twitterDescription": "Every new lead enriched, qualified and logged in your CRM within minutes, with follow-ups that don't depend on anyone remembering. Built by an engineer."
} as const;
