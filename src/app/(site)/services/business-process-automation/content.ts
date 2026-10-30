export const path = "/services/business-process-automation";
export const bookHref = "/book?service=business-process-automation";
export const auditHref = "/tools/what-to-automate-first";

export const hero = {
  "eyebrow": "Business process automation for small and mid-sized businesses",
  "title": "Business process automation services: your tools connected, no more copy-paste",
  "subline": "I'm a software engineer. I connect your CRM, Stripe, Slack and project tool so onboarding, reports, approvals and invoices run on their own, with an alert if anything fails.",
  "trust": "Free · 30 min · No commitment. You talk to the engineer who builds it."
} as const;

export const fit = {
  "title": "Is business process automation right for your business?",
  "intro": "This works best when the work repeats the same way every week and your tools can talk to each other. Here's how to tell if that's you.",
  "goodTitle": "Good fit if",
  "badTitle": "Not a fit if",
  "good": [
    "Someone on your team types the same client, deal or order details into your CRM, project tool, invoicing and a spreadsheet every week.",
    "You have a process that runs the same way each time, with steps you could write down: onboarding a new client, the weekly report, approvals or sending invoices.",
    "Your tools are cloud apps with APIs, like HubSpot, ClickUp, Stripe, QuickBooks, Slack or Google Workspace.",
    "You already run Zapier or Make zaps that break without telling anyone, or the per-task bill keeps going up."
  ],
  "bad": [
    "The process changes every time or needs a judgment call at every step. That work should stay with a person.",
    "You want a messy process automated exactly as it is. We'd simplify it together first, because automating a broken process only makes the mess run faster.",
    "Your core systems are legacy desktop software with no API. Bots that click through screens (RPA) are out of scope unless we've scoped them together first.",
    "You're planning an enterprise BPM rollout across hundreds of staff. A large consultancy is the better buy for that, and I'll tell you so."
  ],
  "closing": "Not sure which side you're on?"
} as const;

export const pain = {
  "title": "Why am I still copying data between my tools?",
  "description": "Your tools don't talk. So your team does.",
  "cards": [
    [
      "One order, typed into five tools",
      "Each retype is a chance for a typo."
    ],
    [
      "Onboarding is a manual checklist",
      "The skipped step is the one the client notices."
    ],
    [
      "Fridays go to the weekly report",
      "Exports and pasting until the afternoon's gone."
    ],
    [
      "Zaps nobody understands",
      "One fails silently. A client tells you first."
    ]
  ],
  "bridge": "Add lost approvals and invoices nobody chases. I automate that work, with alerts when anything breaks."
} as const;

export const build = {
  "title": "Workflow automation services I build for small businesses",
  "definition": "Business process automation (BPA) is using software to run repetitive, rule-based work that spans several steps and tools, with people only where judgment is needed. Unlike a single zap or an RPA bot that clicks through screens, it runs the whole process, trigger to result.",
  "intro": "Six builds that run the work between your forms, CRM, project tool, invoicing and sheets, each from a trigger to a result you can check.",
  "cards": [
    {
      "title": "Process automation across your CRM, project tool and invoicing",
      "flow": "A form comes in, a deal is won or an order lands → the data is checked and mapped once → your CRM, project tool, invoicing and sheet update together, with no copy-paste.",
      "chips": "Typeform · HubSpot · ClickUp"
    },
    {
      "title": "Client onboarding automation",
      "flow": "A contract is signed or the first payment clears → the welcome email, client folder, project from your template, kickoff link, intake form and task assignments are created → reminders run until the client completes intake.",
      "chips": "DocuSign · Stripe · Google Drive"
    },
    {
      "title": "Reporting automation with an AI-written weekly summary",
      "flow": "On your schedule → numbers are pulled from Stripe, your CRM, ad accounts and help desk, and AI writes a short plain-English summary of what changed → it's posted to Slack or email, or the source sheet or database feeding your dashboard updates.",
      "chips": "Stripe · Slack · Looker Studio"
    },
    {
      "title": "AI workflow automation for requests, approvals and reminders",
      "flow": "Someone submits a purchase, time-off, content or discount request → AI sorts it, adds context and routes it to the right approver in Slack → reminders and escalations go out until there's a decision, which gets logged.",
      "chips": "Tally · Slack · Airtable"
    },
    {
      "title": "Invoicing and overdue payment follow-up",
      "flow": "A project milestone or completed job is marked done → invoice details are prepared for you to review before the invoice is created and sent in Stripe, QuickBooks or Xero → overdue invoices get polite reminders until they are paid.",
      "chips": "Stripe · QuickBooks · Xero"
    },
    {
      "title": "Zapier and Make cleanup, rebuilt in n8n",
      "flow": "A zap breaks silently, or the task bill keeps climbing → I audit your zaps and rebuild the ones that matter in n8n → each is documented and monitored, and per-task fees drop where that makes sense.",
      "chips": "Zapier · Make · n8n"
    }
  ],
  "guardrail": "I simplify the process before I automate it. Every workflow gets retries, logging and an error alert. Anything involving money waits for a person to approve it: invoice details are reviewed before creation and sending, and the system never moves money.",
  "closing": "Built mainly in n8n (or in Make or Zapier if you already run them), with Claude or OpenAI only for steps that need to read, sort, summarize or draft. It all runs on your own accounts, so every workflow and API key stays yours."
} as const;

export const proof = {
  "eyebrow": "See it running",
  "title": "Watch business process automation onboard a new client, then post the weekly report",
  "description": "This is a demo on sample data and test accounts, not a client project. A contract gets signed, and five setup tasks happen without anyone touching them. Then Friday's report shows up in Slack on its own.",
  "steps": [
    "Trigger. A sample client signs the contract in [SIGNING TOOL] (or pays the first invoice in Stripe). That one event starts the workflow.",
    "Set up. It creates the client folder in Google Drive, creates the project from a template in [PROJECT TOOL], sends the welcome email with the kickoff link, updates the deal in [CRM] and pings the team in Slack.",
    "Report. On schedule, it pulls the week's numbers from Stripe and [CRM], writes a short plain-English summary and posts it to Slack. If any step fails, it sends an alert instead of failing quietly."
  ],
  "leadIn": "Want to see what your onboarding or weekly report would look like automated?",
  "microcopy": "You talk to me, the person who builds it. Bring the checklist you run for each new client, or last week's report, and the tools involved. I'll show you which steps can run on their own and which should stay with a person.",
  "transcriptTitle": "Demo narration draft",
  "transcript": [
    "This is a client onboarding workflow I built, running on sample data and test accounts.",
    "A new client just signed the contract. That's the only thing a person did here.",
    "Watch what happens next. The workflow creates their folder in Google Drive. It creates the project in [PROJECT TOOL] from the template, with the tasks already assigned. It sends the welcome email with the kickoff booking link. It moves the deal to \"Won\" in [CRM]. And it posts in Slack so the team knows a new client is in.",
    "Five steps, nobody copying anything between tools.",
    "Now jump to Friday. Nobody built this report. The workflow pulled the week's numbers from Stripe and the CRM, wrote a short summary in plain English and posted it here.",
    "If a step fails, say a tool is down, it doesn't fail quietly. It sends an alert so someone can fix it.",
    "If you want this for your own onboarding or reporting, book a free 30-minute call."
  ],
  "pastWork": "Before RZ Automate, I built production systems that move data between tools for real businesses, including scheduling systems and a WooCommerce–Moodle integration that turns each order into a course enrollment."
} as const;

export const how = {
  "eyebrow": "How it works",
  "title": "How I set up business process automation services for your team",
  "summary": "RZ Automate sets up business process automation in four steps: a free 30-minute audit that maps one process end to end, a written plan with a fixed price, a build that runs alongside your manual process before switching over within [BUILD DAYS] days, and weekly monitoring once it's live.",
  "steps": [
    {
      "title": "Free 30-min call and workflow audit",
      "time": "30 minutes",
      "what": "We walk through one process from start to finish, like onboarding a new client or building the weekly report: who does each step, in which tool, and what triggers the next one. I point out where data gets copied by hand and where work sits waiting on someone.",
      "get": "A straight answer on which steps an automation could take over, and which ones should stay with a person.",
      "you": "Bring one process you're tired of running by hand, plus the person who actually runs it if you can."
    },
    {
      "title": "Scoped plan with a fixed price",
      "time": "[PLAN TURNAROUND]",
      "what": "I simplify the process first, cutting steps that only exist because things were done by hand. Then I write down the trigger, each step and the tool it runs in, the approvals that stay with people, and what happens when a step fails. It also sets the success criteria: steps done on time, numbers that match the source, and zero silent failures.",
      "get": "A written plan with one fixed price and a launch date. Keep it even if you don't go ahead.",
      "you": "Name a process owner who can confirm the steps and say who approves what."
    },
    {
      "title": "Build and launch your first automation",
      "time": "[BUILD DAYS] days",
      "what": "I build the workflow in n8n and test it with your real data. Then it runs in parallel with your manual process for the [TEST PERIOD], so we can compare every output against what your team produced. Once the results match, we switch over.",
      "get": "A working workflow with retries, logging and error alerts, a short Loom walkthrough and a one-page runbook covering what triggers it, what it updates and how to pause it.",
      "you": "Give me access to the tools involved (or get admin approval for it), share a few real examples of the process as it runs today, keep the manual process going during the [TEST PERIOD], and sign off before we switch over."
    },
    {
      "title": "Run, monitor and improve",
      "time": "Ongoing, [SUPPORT TERMS]",
      "what": "I watch every run and get alerted when a step still fails after retries or a record does not sync. When your business changes, I adjust the workflow to match.",
      "get": "[MONITORING REPORT], including a weekly run report: how many times each workflow ran, what failed and how it was fixed, and anything that needed a person.",
      "you": "Tell me when you add a tool, change a step or bring on a new kind of client, so the workflow changes with you."
    }
  ],
  "total": "From our first call to your process running on its own, checked against the manual version: [TOTAL DAYS] days.",
  "microcopy": "Bring one process your team runs by hand every week. You'll leave knowing which steps to automate first, even if you never hire me."
} as const;

export const scope = {
  "title": "What's included in your workflow automation services",
  "intro": "Here's exactly what you get, what you don't, and the tools it works with.",
  "includedTitle": "Included",
  "excludedTitle": "Not included",
  "worksWithTitle": "Works with",
  "included": [
    "Process mapping for the workflows we agree on, and simplifying them before anything gets automated",
    "The build in n8n, or in Make or Zapier if your team already runs on them",
    "Integrations between the tools you already use, so data is entered once and lands everywhere it needs to",
    "AI steps only where they help, like sorting a request, summarizing numbers for a report or drafting an email",
    "Approval steps, reminders and escalations, with every decision logged",
    "Error handling with retries, logging and alerts, so a failed run gets flagged instead of failing silently",
    "Migration of the existing zaps or scenarios we agree on, rebuilt and documented",
    "Written documentation and a walkthrough video of how each workflow runs",
    "You own every account and workflow. Nothing runs on mine.",
    "[SUPPORT TERMS] after launch"
  ],
  "excluded": [
    "Moving money or signing anything on your behalf. Invoice details are reviewed before creation and sending, and anything binding waits for a person to approve it.",
    "RPA bots that click through old desktop apps, unless we scope it first. I connect through APIs wherever they exist.",
    "Enterprise BPM rollouts at SAP or ServiceNow scale. A large consultancy is the better fit there.",
    "Replacing your CRM, accounting or project software. The workflows connect the tools you already have.",
    "Software subscriptions, API fees and n8n hosting. These run on your own accounts, so you see every charge.",
    "New workflows or changes beyond [SUPPORT TERMS]. Those get their own scope and quote."
  ],
  "worksWith": [
    [
      "Workspace",
      "Google Workspace, Microsoft 365, Slack"
    ],
    [
      "CRM",
      "HubSpot, Pipedrive, Airtable"
    ],
    [
      "Projects",
      "ClickUp, Asana, Notion, Monday.com, Trello"
    ],
    [
      "Finance",
      "Stripe, QuickBooks Online, Xero"
    ],
    [
      "Forms & signatures",
      "Typeform, Jotform, Tally, DocuSign, PandaDoc"
    ],
    [
      "Scheduling",
      "Cal.com, Calendly"
    ],
    [
      "Reporting",
      "Google Sheets, Excel, Looker Studio"
    ],
    [
      "Automation",
      "n8n, Make, Zapier"
    ],
    [
      "AI",
      "Claude, OpenAI"
    ]
  ],
  "closing": "Using something else? If it has an API, I can likely connect it."
} as const;

export const pricing = {
  "eyebrow": "Pricing",
  "title": "What business process automation costs",
  "intro": "You pay a fixed price for the build, then decide if you want me on maintenance. n8n hosting and any AI usage run on your own accounts, so you see every cent and I don't mark it up.",
  "columns": [
    "Service",
    "What it covers",
    "Price"
  ],
  "rows": [
    [
      "Build (one-time, fixed)",
      "The workflows we agree on in your plan, connected across your tools (CRM, project tool, Stripe or your invoicing tool, Slack, sheets), retries and error alerts on every step, a run log, written documentation for each workflow, tested on real records from your accounts before launch",
      "From [BPA PRICE FROM]"
    ],
    [
      "Maintenance (optional, monthly)",
      "Fixes when a tool or API changes, small changes to steps and rules, new fields or templates, monitoring of failed runs, the weekly report on runs, errors and time saved",
      "[MONTHLY RANGE]/month, cancel anytime"
    ],
    [
      "Running costs (paid by you, to the provider)",
      "Your n8n plan (cloud) or a small server if you self-host it, plus Claude or OpenAI usage for any AI steps such as summaries or classification. Billed to your own accounts, not through me",
      "Typically [API COST RANGE]/month"
    ]
  ],
  "footnote": "The exact build price goes in your written plan before any work starts. It doesn't change unless you add scope.",
  "comparison": "Running costs depend on your platform, plan, workflow complexity and volume. I'll compare keeping your existing Zapier or Make setup with a move to n8n, including hosting and any AI usage. A custom build runs in accounts you own, with provider costs billed directly to you. If a few simple zaps already do the job, I'll tell you to keep them.",
  "affectsTitle": "What affects the price",
  "affects": [
    [
      "Number of workflows and steps.",
      "One form-to-CRM sync is quick. A client onboarding flow that creates folders, projects, accounts and reminders, plus a weekly report, is several builds."
    ],
    [
      "Tools and integrations.",
      "Connecting two tools with good APIs is simple. Six tools, or one with a limited API that needs a workaround, adds real build and test time."
    ],
    [
      "Approvals and branching logic.",
      "A straight line from trigger to result is light. Routing requests by amount or team, waiting on an approver, escalating and logging the decision takes more rules and more testing."
    ],
    [
      "Data cleanup.",
      "If your CRM has duplicates and your sheets use three date formats, we fix that first so the automation doesn't copy the mess faster."
    ],
    [
      "Migrating existing zaps.",
      "Rebuilding a few zaps in n8n is a small job. Auditing a tangle of 30+ zaps and Make scenarios nobody documented, then rebuilding the important ones, is a project of its own."
    ]
  ],
  "payment": "[PAYMENT TERMS]. Maintenance is billed monthly and you can stop it at any time. Everything stays in your accounts either way.",
  "guarantee": "[GUARANTEE NAME]: if your first automation misses the criteria we wrote down within [GUARANTEE WINDOW], you get the milestone fee back or I fix it free.",
  "microcopy": "Get a fixed quote for your setup. The plan is yours to keep even if you don't hire me.",
  "secondary": "Not sure what to automate first?"
} as const;

export const guarantee = {
  "title": "The [GUARANTEE NAME]: your workflows pass the checks we wrote down, or you get your money back",
  "body": [
    "Before I build anything, we write down what \"working\" means for your first automation. Plain checks you can test yourself.",
    "If the first automation doesn't meet those written criteria within [GUARANTEE WINDOW] of kickoff, you choose one of two options: a full refund of the first milestone fee, paid within [REFUND SPEED], or I keep working on it at no charge until it passes."
  ],
  "leadIn": "For business process automation, the criteria could look like this:",
  "criteria": [
    "Every new client gets all onboarding steps done within [ONBOARDING TIME] of payment, over [PERIOD].",
    "The weekly report arrives on [DAY] by [REPORT TIME], with numbers matching the source tools.",
    "Zero silent failures: any failed step alerts you within [ALERT TIME]."
  ],
  "closing": "Steps that need a judgment call stay with a person. We agree which ones in the plan, so they never count against the criteria.",
  "link": "Read the full [GUARANTEE NAME] terms"
} as const;

export const why = {
  "eyebrow": "Why me",
  "title": "Why hire me as your business process automation company instead of DIY zaps or a big consultancy",
  "cards": [
    [
      "The process gets simpler first, then automated end to end",
      "I map the process with you and cut the steps that shouldn't exist. Then one workflow runs it from signed contract to CRM, project, invoice and Slack."
    ],
    [
      "Built like software, so nothing fails silently",
      "It runs in your own n8n with retries, logging, error alerts and written docs. A failed run pings me instead of quietly dropping a new client's onboarding."
    ],
    [
      "One engineer, sized for small and mid-sized businesses",
      "You talk to me, the engineer who builds and fixes it. No account manager. Projects are sized for small and mid-sized teams, with no enterprise discovery phase or long retainer."
    ]
  ],
  "buyTitle": "When to DIY or use your platform instead",
  "buy": "If you need a few simple zaps, like form to sheet to Slack, set them up yourself in Zapier or Make. Same if everything lives in HubSpot or Monday and its built-in workflows cover it. Bring me in when a process crosses four or five tools, or your zaps keep breaking and the usage bill keeps climbing.",
  "link": "How an AI automation agency compares with a freelancer"
} as const;

export const faq = {
  "title": "Business process automation FAQ",
  "intro": "Straight answers to what owners ask before they let a workflow run part of their business.",
  "items": [
    {
      "question": "What's the difference between workflow automation and business process automation?",
      "answer": "Workflow automation handles one sequence of tasks, like sending a welcome email when a form comes in. Business process automation connects several workflows across tools and people into one end-to-end process, such as client onboarding from signed contract to kickoff, with approvals, error handling and logging. Most small businesses start with one workflow and grow from there."
    },
    {
      "question": "Why do you use n8n instead of Zapier or Make?",
      "answer": "Three technical reasons. n8n can be self-hosted on a server you control. It connects several tools in one workflow, with branching, retries and logs. And it supports code steps when no-code steps can't do the job. The platform choice still depends on your tools, volume and budget. If your team lives in Zapier or Make, I'll build there."
    },
    {
      "question": "Can you fix or take over our existing Zapier or Make automations?",
      "answer": "Yes. I start with an audit of your Zapier zaps and Make scenarios: what each one does, which ones fail quietly and what they cost per month. The important ones get rebuilt in n8n with retries, logging and error alerts, or fixed in place if moving them isn't worth it. Each one gets a one-page runbook your team can follow."
    },
    {
      "question": "What happens when a tool changes or an automation breaks?",
      "answer": "It doesn't fail silently. Every workflow has retries for temporary errors and sends an alert when a step still fails after retries or a record does not sync. On maintenance, I fix it, and the weekly run report shows what failed and how it was fixed. Without maintenance, the runbook shows your team how to pause it."
    },
    {
      "question": "How long before the first automated workflow is live?",
      "answer": "[TOTAL DAYS] days from our first call to the process running on its own. The build takes [BUILD DAYS] days once you approve the written plan. Then the workflow runs alongside your manual process for the [TEST PERIOD], so we can compare every output. We switch over when the results match, not before."
    },
    {
      "question": "What does business process automation cost to run each month?",
      "answer": "Two parts, on top of the one-time build from [BPA PRICE FROM]. Running costs, meaning your n8n hosting plus any AI usage, typically come to [API COST RANGE] a month, billed to your own accounts with no markup. Optional maintenance covers fixes, workflow changes and the weekly run report for [MONTHLY RANGE] a month, cancel anytime."
    }
  ],
  "closing": "Got a process your team runs by hand every week? Bring it to the call and I'll tell you which steps to automate first, and which to leave with people."
} as const;

export const book = {
  "title": "Let's map one process you repeat every week",
  "subhead": "A free 30-min call with me, the engineer who builds it. Pick one process, like onboarding a new client or building the weekly report, and we'll map it step by step, marking every copy-paste and every wait.",
  "bullets": [
    "We map your real process, step by step, and mark where people copy-paste data or wait on someone.",
    "You leave knowing which part to automate first and what to simplify before anything gets built.",
    "You keep the map either way. Use it with me, someone else, or on your own."
  ],
  "next": "After the call, I send you the written plan within [PLAN TURNAROUND].",
  "capacity": "I take on [N] builds a month. Next opening is [MONTH].",
  "email": "Rather not get on a call? Email me at contact@rizon.agency with the steps of one process you repeat every week and the tools involved. A rough list is fine.",
  "relatedTitle": "Related services",
  "related": [
    {
      "title": "AI document processing",
      "href": "/services/ai-document-processing",
      "body": "Invoices, receipts and forms read by AI, checked, then entered into QuickBooks, Xero or sheets."
    },
    {
      "title": "AI lead generation & CRM automation",
      "href": "/services/ai-lead-generation",
      "body": "New leads researched, scored and added to your CRM, with first follow-ups drafted for you."
    },
    {
      "title": "AI agent development",
      "href": "/services/ai-agent-development",
      "body": "Custom AI agents for judgment-heavy work a fixed workflow can't handle, connected to your tools."
    }
  ]
} as const;

export const seo = {
  "title": "Business Process Automation Services for SMBs",
  "description": "Business process automation services for small businesses: onboarding, reporting, approvals and invoicing run across your tools, with alerts on failure.",
  "socialTitle": "Business Process Automation Services",
  "openGraphDescription": "Your tools connected so onboarding, reports, approvals and invoices run on their own, with an alert if anything fails. Built by an engineer.",
  "serviceName": "Business process automation",
  "alternateNames": [
    "Business process automation services",
    "Workflow automation services",
    "Process automation services"
  ],
  "serviceDescription": "Custom systems connecting a CRM, Stripe, Slack and project tools so onboarding, reports, approvals and invoices run across the tools a business already uses, with alerts if a step fails.",
  "imageAlt": "Business process automation services by RZ Automate",
  "twitterDescription": "Your tools connected so onboarding, reports, approvals and invoices run on their own, with an alert if anything fails. Built by an engineer."
} as const;
