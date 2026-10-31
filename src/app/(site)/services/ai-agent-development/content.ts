export const path = "/services/ai-agent-development";
export const bookHref = "/book?service=ai-agent-development";
export const auditHref = "/tools/what-to-automate-first";

export const hero = {
  "eyebrow": "AI agent development for small and mid-sized businesses",
  "title": "AI agent development services for real work across your tools",
  "subline": "I'm a software engineer. I build agents that answer from your docs, research, take approved actions and connect Claude or ChatGPT to your systems. Tested before launch, logged after.",
  "trust": "Free · 30 min · No commitment. You talk to the engineer who builds it."
} as const;

export const fit = {
  "title": "Are custom AI agents right for your small business?",
  "intro": "An AI agent earns its cost when a task needs reading and judgment, not just the same steps in the same order. Here's how to tell if your task is one of those.",
  "goodTitle": "Good fit if",
  "badTitle": "Not a fit if",
  "good": [
    "The task means reading something, making a call and taking several steps, like researching a prospect before a call or deciding which project a request belongs to. A fixed workflow can't handle that.",
    "What the agent needs to know already exists in your docs, wiki, Drive, CRM, database or tools with an API.",
    "You want your team using Claude or ChatGPT on your real company data, not pasting things into a chat window.",
    "You're fine with a person approving anything risky, like sending an email to a client or changing a record."
  ],
  "bad": [
    "A simple workflow or an off-the-shelf tool already does the job. If that's the case, I'll tell you on the call.",
    "You want an agent that moves money, signs things or deletes data on its own with nobody checking.",
    "You need your own model trained or fine-tuned. I build agents on top of Claude and OpenAI, not new models.",
    "You're rolling out an agent platform to thousands of users with on-prem or air-gapped requirements. A large consultancy is the better buy for that."
  ],
  "closing": "Not sure which side you're on?"
} as const;

export const pain = {
  "title": "Why doesn't ChatGPT know anything about my business?",
  "description": "So your best people fill the gaps by hand.",
  "cards": [
    [
      "Pasting company info into every chat",
      "Each chat starts from zero. Someone checks every answer."
    ],
    [
      "One person answers everything",
      "When they're out, the questions wait."
    ],
    [
      "Research and prep eat afternoons",
      "Account notes, competitor checks, reports: skilled hours gone."
    ],
    [
      "The agent demo broke on real data",
      "Fine on samples, odd the moment it touched a live record."
    ]
  ],
  "bridge": "I build agents that know your docs, do the prep and ask before anything risky."
} as const;

export const build = {
  "title": "Custom AI agent development: what I build for small and mid-sized businesses",
  "definition": "An AI agent is software that uses a language model to decide the next step, call tools like your apps and databases, and finish multi-step tasks, with a person approving anything risky. A chatbot only answers; a fixed workflow runs the same steps every time.",
  "intro": "What gets sold as agentic AI development comes down to six builds I actually make, each from a trigger to a result you can check.",
  "cards": [
    {
      "title": "Internal knowledge assistant that answers from your own docs",
      "flow": "A teammate asks a question in Slack, Teams or a web app → the agent searches your docs, wiki, Drive and past tickets → it answers with links to its sources, or says it doesn't know.",
      "chips": "Slack · Google Drive · pgvector"
    },
    {
      "title": "Research and analysis AI agents for business decisions",
      "flow": "You hand it a company, competitor, topic or dataset → the agent gathers from the web and your own data, then pulls out what matters → you get a structured brief or report draft to review.",
      "chips": "Claude · OpenAI · Google Sheets"
    },
    {
      "title": "Operations agents that take approved actions in your tools",
      "flow": "A request arrives by email or form → the agent decides what's needed, updates the CRM, creates the task or drafts the reply → allowed actions run; anything risky waits for your approval.",
      "chips": "HubSpot · ClickUp · Gmail"
    },
    {
      "title": "MCP server development and custom tool connections",
      "flow": "Your team asks Claude, ChatGPT or Cursor about a client → a custom MCP server connects it to your CRM, database or internal APIs → they work with live company data without leaving that tool.",
      "chips": "MCP · Claude · PostgreSQL"
    },
    {
      "title": "Multi-step agent workflows with human checkpoints",
      "flow": "A job comes in that needs judgment at more than one step → agents chained in n8n or code handle each step, with retries and fallbacks → a person signs off at each checkpoint.",
      "chips": "n8n · TypeScript · Python"
    },
    {
      "title": "Testing, guardrails and monitoring for every custom AI agent",
      "flow": "Before launch, the agent runs a test set of your real examples → it has to hit the pass rate you approved → after launch, every run is logged, with cost tracking and alerts.",
      "chips": "Test set · Run logs · Cost alerts"
    }
  ],
  "guardrail": "Agents aren't 100% reliable, so I scope them so mistakes get caught. You decide which actions an agent can take, anything risky like emailing a client or changing a record waits for a person, and no agent moves money, signs anything or deletes data on its own.",
  "closing": "Built on Claude or OpenAI, connected with n8n or TypeScript/Python where code is the better fit, and hosted on your own accounts. The code, prompts and API keys are yours."
} as const;

export const proof = {
  "eyebrow": "See it running",
  "title": "Watch two custom AI agents answer from your docs, then work inside your CRM",
  "description": "This is a demo on sample data and test accounts, not a client project. An internal assistant answers a policy question in Slack with links to its sources. Then Claude, connected to a CRM through an MCP server, looks up a client and drafts a follow-up task that waits for a person to approve it.",
  "steps": [
    "Ask. A team member asks the internal assistant in Slack about refunds on annual plans. It searches the sample pricing policy and help center, answers in two lines and links both sources. Asked something the docs don't cover, it says it doesn't know.",
    "Look up. In Claude, connected to the demo CRM through an MCP server I built, I ask it to check on a sample client. It searches the CRM, reads the last three notes and summarizes where the deal stands.",
    "Draft, then wait. It drafts a follow-up task with a due date and owner. Nothing is written to the CRM until a person clicks approve. Every run is logged with the question, sources, action and cost."
  ],
  "leadIn": "Have a question your team answers ten times a week, or a tool you wish Claude could reach?",
  "microcopy": "You talk to me, the person who builds it. Bring two or three real questions or tasks and the tools involved. I'll tell you whether an agent fits, or whether a simple workflow does the job.",
  "transcriptTitle": "Demo narration draft",
  "transcript": [
    "These are two agents I built, running on sample data and test accounts.",
    "First, Slack. Someone on the team asks: \"What's our refund policy for annual plans?\" The assistant searches the policy docs and the help center, answers in two lines and links both sources. If I ask something the docs don't cover, it says it doesn't know. It doesn't guess.",
    "Now Claude. It's connected to the CRM through an MCP server I built. I ask it to check on this client. It searches the CRM, reads the last three notes and tells me where the deal stands.",
    "Then I ask for a follow-up. It drafts the task with a due date and an owner. But it doesn't save anything yet. It waits for me to approve.",
    "Every run is logged: the question, the sources it used, the action and what it cost.",
    "Before launch, I test agents like this against a set of your real questions.",
    "If you want one for your team, book a free 30-minute call."
  ],
  "internal": [
    {
      "title": "Client context MCP server",
      "body": "An MCP server that gives AI assistants per-client project context. Claude or another MCP-compatible assistant can pull a client's call transcripts, contracts and files on request, so answers come from that client's actual records instead of guesswork."
    },
    {
      "title": "AI-connected CRM and outbound tool",
      "body": "My own CRM with an AI connection through MCP, plus an outbound tool with AI steps. I can ask Claude about a lead, update records and create follow-ups from the chat, and the outbound tool researches prospects and drafts campaign emails for me to review before anything is sent."
    }
  ]
} as const;

export const how = {
  "eyebrow": "How it works",
  "title": "How my AI agent development services work, step by step",
  "summary": "RZ Automate builds custom AI agents in four steps: a free 30-minute call that picks one job for the agent, a written plan with a fixed price and a test set of [N] real questions or tasks, a build that passes that test set and then runs with your team reviewing its outputs before wider use, all within [BUILD DAYS] days, and monthly reviews once it's live.",
  "steps": [
    {
      "title": "Free 30-min call and workflow audit",
      "time": "30 minutes",
      "what": "We pick one job for the agent, like answering staff questions from your docs or updating CRM records after a sales call. We look at real examples of that job, the data the agent would need to read, and what it should and shouldn't be allowed to do.",
      "get": "A straight answer on whether an agent is the right tool, or whether a simple workflow or an off-the-shelf tool would do the job for less.",
      "you": "Bring one job and a few real examples of it: questions your team asks, reports someone writes, records someone updates by hand."
    },
    {
      "title": "Scoped plan with a fixed price",
      "time": "[PLAN TURNAROUND]",
      "what": "I write down which tools and data the agent can use, what permissions it gets, and which actions wait for a person to approve. We agree on a test set of [N] real questions or tasks and the success criteria it has to meet: [X]% passed, every answer cites a source or says it doesn't know, and zero unapproved risky actions. The plan also estimates the monthly running cost on your own accounts.",
      "get": "A written plan with one fixed price, a launch date and an expected running cost of [API COST RANGE] a month. Keep it even if you don't go ahead.",
      "you": "Name one person who decides what a \"right\" answer looks like, and help collect the [N] real examples for the test set."
    },
    {
      "title": "Build and launch your first automation",
      "time": "[BUILD DAYS] days",
      "what": "I build the agent with Claude or OpenAI, n8n or code, and the tool connections it needs, then run it against the full test set until it meets the agreed criteria. Then it goes to a small group on your team, who review every output for the [TEST PERIOD] before anyone else gets access.",
      "get": "A working agent where your team already works (Slack, Teams, a web app or your AI tools via MCP), test results against your [N] examples, a short Loom walkthrough and a one-page runbook covering what it can do, what needs approval and how to switch it off.",
      "you": "Give me access to the data and tools involved (or get admin approval for it), have your reviewers check outputs during the [TEST PERIOD], and sign off before wider use."
    },
    {
      "title": "Run, monitor and improve",
      "time": "Ongoing, [SUPPORT TERMS]",
      "what": "Every run is logged and every API call's cost is tracked, with alerts if spend or error rates jump. Once a month I review what the agent got wrong, add those cases to the test set and update prompts or tools. When a new model version comes out, I re-run the test set before switching.",
      "get": "[MONITORING REPORT], including a monthly review: runs, cost, failures and how they were fixed, and what changed in the test set.",
      "you": "Flag wrong answers when you see them, and tell me when your docs, tools or rules change."
    }
  ],
  "total": "From our first call to an agent your team uses every day, tested against your own examples: [TOTAL DAYS] days.",
  "microcopy": "Bring one job you'd hand to an agent and a few real examples of it. You'll leave knowing if an agent is the right fit, even if you never hire me."
} as const;

export const scope = {
  "title": "What's included in custom AI agent development",
  "intro": "Here's exactly what you get, what you don't, and the tools it works with.",
  "includedTitle": "Included",
  "excludedTitle": "Not included",
  "worksWithTitle": "Works with",
  "included": [
    "Scoping one agent job: what it does, what it can touch, and what \"working\" means before I build anything",
    "Data connection and retrieval setup, so the agent answers from your docs and systems and links to the source",
    "Tool and API integrations with defined permissions. The agent can only take the actions we list.",
    "Approval steps for risky actions, like sending an email to a client or changing a record in bulk",
    "A test set of real questions or tasks you approve, with the agent evaluated against it before launch",
    "The interface your team uses: Slack, Microsoft Teams, a web app, or embedded in a tool you already have",
    "Logging of every run, cost tracking and error alerts, so you see what it did and what it spent",
    "Written documentation and a walkthrough video of how the agent works",
    "You own every account, all the code and all the prompts. Nothing runs on mine.",
    "[SUPPORT TERMS] after launch"
  ],
  "excluded": [
    "Training or fine-tuning foundation models. I build agents on top of Claude and OpenAI.",
    "Fully autonomous actions that move money, sign anything or delete data. Those always wait for a person.",
    "On-prem or air-gapped enterprise deployments. A large consultancy is the better fit there.",
    "Cleaning up years of messy data or docs, unless we scope it first. The agent is only as good as what it can read.",
    "Model, API, vector database and hosting fees. These run on your own accounts, so you see every charge.",
    "New agent jobs beyond the one we scoped. Each gets its own scope and quote."
  ],
  "worksWith": [
    [
      "Models",
      "Claude, OpenAI"
    ],
    [
      "Orchestration",
      "n8n, TypeScript, Python"
    ],
    [
      "Retrieval",
      "Supabase (pgvector), Pinecone"
    ],
    [
      "Connections",
      "MCP servers, REST and GraphQL APIs, webhooks"
    ],
    [
      "Where your team uses it",
      "Slack, Microsoft Teams, a web app, or inside Claude, ChatGPT or Cursor via MCP"
    ],
    [
      "Data sources",
      "Google Drive, Notion, Confluence, SharePoint, your database, your CRM"
    ],
    [
      "Monitoring",
      "run logs, cost tracking, alerts"
    ]
  ],
  "closing": "Using something else? If it has an API, I can likely connect it."
} as const;

export const pricing = {
  "eyebrow": "Pricing",
  "title": "What AI agent development costs",
  "intro": "You pay a fixed price for the build, then decide if you want me on maintenance. Model, vector database and hosting usage run on your own accounts, so you see every cent and I don't mark it up.",
  "columns": [
    "Service",
    "What it covers",
    "Price"
  ],
  "rows": [
    [
      "Build (one-time, fixed)",
      "The agent we agree on in your plan: its tools and allowed actions, connections to your data (docs, Drive, CRM, database), the interface your team uses (Slack/Teams, a web app or an MCP server), approval steps on risky actions, a test set of real questions or tasks, logging of every run, cost tracking from day one, and written documentation",
      "From [AGENT PRICE FROM]"
    ],
    [
      "Maintenance (optional, monthly)",
      "Keeping up with model changes (new versions, deprecations, price shifts), re-running the test set after any change, fixes when a tool or API changes, prompt and permission tweaks, new documents added to its knowledge, monitoring of failed runs and cost alerts",
      "[MONTHLY RANGE]/month, cancel anytime"
    ],
    [
      "Running costs (paid by you, to the provider)",
      "Claude or OpenAI usage, your vector database (e.g. Supabase/pgvector or Pinecone) and hosting on your own cloud account. Billed to your accounts, not through me. Your plan includes an estimate of the expected monthly cost",
      "Typically [API COST RANGE]/month"
    ]
  ],
  "footnote": "The exact build price goes in your written plan before any work starts. It doesn't change unless you add scope.",
  "comparison": "Many agent platforms and AI assistant add-ons charge per user per month, so the bill grows every time you add a person, whether they use the agent daily or once a month. A custom agent you own costs what it actually uses: model calls, storage and hosting, tracked from the first run. To be fair: if an off-the-shelf assistant already answers your team's questions well and only a few people need it, paying per seat is often the simpler choice, and I'll tell you to keep it. I'll show you which side you're on during the call.",
  "affectsTitle": "What affects the price",
  "affects": [
    [
      "Number of tools and actions.",
      "An agent that only reads and answers is light. One that can update CRM records, create tickets, schedule and draft emails needs each action built, limited and tested."
    ],
    [
      "Data sources and how messy they are.",
      "One clean Notion wiki is quick to index. Five sources with outdated docs, duplicate files and PDFs of scanned forms take cleanup before the agent can answer well."
    ],
    [
      "Interface.",
      "A Slack or Teams bot is the lightest option. An MCP server for Claude or ChatGPT sits in the middle. A custom web app with logins and a chat history is the most work."
    ],
    [
      "Approval and permission logic.",
      "If everyone can do everything, it's simple. Different access per team, approvals before risky actions and an audit trail of every decision add rules and testing."
    ],
    [
      "Test set size and accuracy target.",
      "Twenty sample questions at a modest target is quick to check. Two hundred real tasks at a high target means more tuning rounds before launch."
    ]
  ],
  "payment": "[PAYMENT TERMS]. Maintenance is billed monthly and you can stop it at any time. Everything stays in your accounts either way.",
  "guarantee": "[GUARANTEE NAME]: if your first automation misses the criteria we wrote down within [GUARANTEE WINDOW], you get the milestone fee back or I fix it free.",
  "microcopy": "Get a fixed quote and a monthly cost estimate for your agent. The plan is yours to keep even if you don't hire me.",
  "secondary": "Not sure an agent is the right fit?"
} as const;

export const guarantee = {
  "title": "The [GUARANTEE NAME]: your agent passes the tests we wrote down, or you get your money back",
  "body": [
    "Before I build anything, we write down what \"working\" means for your first agent.",
    "If the first automation doesn't meet those written criteria within [GUARANTEE WINDOW] of kickoff, you choose one of two options: a full refund of the first milestone fee, paid within [REFUND SPEED], or I keep working on it at no charge until it passes."
  ],
  "leadIn": "For AI agent development, the criteria could look like this:",
  "criteria": [
    "The agent gets [X]% of a test set of [N] real questions or tasks right, judged by your team, before launch.",
    "Every answer links its source or says it doesn't know.",
    "Zero risky actions taken without approval over [PERIOD]."
  ],
  "closing": "Agents can still get things wrong, so approvals on risky actions and a log of every run are part of every build.",
  "link": "Read the full [GUARANTEE NAME] terms"
} as const;

export const why = {
  "eyebrow": "Why me",
  "title": "Why hire me as your AI agent development company instead of a no-code builder or a big consultancy",
  "cards": [
    [
      "Engineered and tested, not demoed",
      "Before launch it runs against a test set of your real questions and tasks. Defined permissions, approvals on risky actions, a log of every run and cost tracking come standard."
    ],
    [
      "Connected to your real systems, and you own it",
      "It works in your CRM, database and internal tools through their APIs or an MCP server. Code, prompts and accounts are yours. Change developers later and it keeps running."
    ],
    [
      "I run AI agents in my own business",
      "I built a client context MCP server that gives AI assistants per-client project context, and my own CRM, connected to Claude the same way. The engineer on your call builds yours."
    ]
  ],
  "buyTitle": "When a no-code builder is enough",
  "buy": "If your team needs simple Q&A over a handful of documents, a custom GPT will do it for the cost of a subscription. Same if your company already runs on Microsoft 365 or ChatGPT Enterprise and the built-in agent covers the job. Bring me in when the agent has to act in your other systems.",
  "link": "How an AI agency compares with a freelancer"
} as const;

export const faq = {
  "title": "AI agent development FAQ",
  "intro": "Straight answers to what owners ask before they let an AI agent work inside their tools.",
  "items": [
    {
      "question": "What's the difference between an AI agent, a chatbot and an automation?",
      "answer": "An AI agent decides its next step. It uses a language model to pick which tools to call (your CRM, docs, APIs) and works through multi-step tasks, with a person approving anything risky. A chatbot only answers questions. An automation follows the same fixed steps every time, which is cheaper and better when the job never changes."
    },
    {
      "question": "What can a custom AI agent do for a small business?",
      "answer": "Four jobs cover most requests. An internal assistant answers your team's questions from company docs, with source links. A research agent turns a company name or dataset into a draft brief. An operations agent updates CRM records, creates tasks and drafts emails. And an MCP server lets Claude or ChatGPT work with your live company data."
    },
    {
      "question": "How do you stop an AI agent from making mistakes or taking the wrong action?",
      "answer": "No agent is 100% reliable, so I build mine so mistakes get caught. It can only take the actions we list, and it never moves money or deletes data. Anything risky, like sending a client email, waits for a person's approval. Before launch it must pass [X]% of [N] real tasks you approve. Every run is logged."
    },
    {
      "question": "Can an AI agent use our own documents and data safely?",
      "answer": "Yes, within limits we set together. The agent gets read-only access to the sources we agree on, and it all runs on your own Claude or OpenAI and database accounts. Both providers say API data isn't used to train their models by default. Ask about something outside those sources and it says it doesn't know."
    },
    {
      "question": "What is an MCP server and do I need one?",
      "answer": "An MCP server is a connector that lets AI tools like Claude, ChatGPT or Cursor use your own systems, such as your CRM, database or internal API, through the Model Context Protocol. You need one if your team already works in those AI tools and keeps copying company data into them. If not, an agent in Slack may fit better."
    },
    {
      "question": "Which AI models do you use, and can we switch later?",
      "answer": "Mostly Claude and OpenAI, picked per task by what passes your test set at the lowest cost. Yes, you can switch. The model sits behind one setting in code or n8n, and the prompts and test set are yours, so moving to a newer or cheaper model means rerunning the tests and tuning prompts, not rebuilding the agent."
    },
    {
      "question": "How long does it take to build an AI agent?",
      "answer": "[TOTAL DAYS] days from our first call to the agent running for your team. The build takes [BUILD DAYS] days once you approve the written plan. Then it runs on [N] real questions or tasks during the [TEST PERIOD], with a person checking every output and approving every action. It goes live once it passes, not before."
    },
    {
      "question": "How much does an AI agent cost to run each month?",
      "answer": "Typically [API COST RANGE] a month in running costs: model usage, the vector database and hosting, billed to your own accounts with no markup. That's on top of the one-time build from [AGENT PRICE FROM]. Optional maintenance, covering fixes, prompt and test updates and cost monitoring, is [MONTHLY RANGE] a month, cancel anytime. Every run's cost is logged."
    }
  ],
  "closing": "Got a job you'd hand to an agent if you could trust it? Bring it to the call and I'll tell you whether it needs an agent, a simple workflow or a tool you can buy off the shelf."
} as const;

export const book = {
  "title": "Bring the one job you'd hand to an agent",
  "subhead": "A free 30-min call with me, the engineer who builds it. Pick one job, like answering policy questions from your docs or updating the CRM after every sales call, and bring a few real examples of it.",
  "bullets": [
    "We look at real examples of the job and the docs, data and tools the agent would need to reach.",
    "You leave knowing whether an agent, a simple workflow or an existing tool fits best, and what it would cost to run.",
    "You keep the plan either way. Use it with me, someone else, or on your own."
  ],
  "next": "After the call, I send you the written plan within [PLAN TURNAROUND].",
  "capacity": "I take on [N] builds a month. Next opening is [MONTH].",
  "relatedTitle": "Related services",
  "related": [
    {
      "title": "AI customer support agents",
      "href": "/services/ai-customer-support-agents",
      "body": "Support agents that answer customers from your help docs, escalate tricky tickets and log everything."
    },
    {
      "title": "AI lead generation & CRM automation",
      "href": "/services/ai-lead-generation",
      "body": "New leads researched, scored and added to your CRM, with first follow-ups drafted for you."
    },
    {
      "title": "Business process automation",
      "href": "/services/business-process-automation",
      "body": "Repeated processes like onboarding, reporting and approvals run as n8n workflows across your existing tools."
    }
  ]
} as const;

export const seo = {
  "title": "AI Agent Development Company for SMBs",
  "description": "AI agent development services for small businesses: custom agents that answer from your docs, research and act in your tools. Tested, then logged.",
  "socialTitle": "AI Agent Development Services",
  "openGraphDescription": "Custom AI agents that answer from your docs, research, take approved actions and connect Claude or ChatGPT to your systems. Built by an engineer.",
  "twitterDescription": "Custom AI agents that answer from your docs, research, take approved actions and connect Claude or ChatGPT to your systems. Built by an engineer.",
  "serviceName": "AI agent development",
  "alternateNames": [
    "AI agent development services",
    "Custom AI agent development",
    "MCP server development"
  ],
  "serviceDescription": "Custom AI agents that answer from a business’s own documents, research and draft, take approved actions in its CRM and other tools, and connect Claude or ChatGPT to its systems through MCP, tested before launch and logged after.",
  "imageAlt": "AI agent development by RZ Automate: answers with sources, actions with approval"
} as const;
