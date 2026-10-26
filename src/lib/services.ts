export interface Service {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  overview: string;
  features: readonly string[];
  outcomes: readonly string[];
}

export const services: readonly Service[] = [
  {
    slug: "ai-agents",
    title: "AI Agents",
    description:
      "Custom agents that handle support, research and operations tasks end to end, with humans in the loop where it matters.",
    image: "/services/ai-agents.svg",
    imageAlt: "A central AI agent connected to chat messages and tools",
    overview:
      "We build AI agents that take on whole tasks, not just single steps: answering support requests, researching prospects, triaging inboxes or preparing reports. Each agent is designed around your tools and your rules, with clear hand-offs to your team when a person should decide.",
    features: [
      "Agents connected to your helpdesk, CRM, inbox and internal tools",
      "Guardrails, approvals and escalation to a human where it matters",
      "Logging and review screens so you can see what the agent did",
      "Testing against your real cases before anything goes live",
    ],
    outcomes: [
      "Routine requests handled without manual effort",
      "Consistent answers and fewer dropped tasks",
      "A team that spends its time on judgement, not repetition",
    ],
  },
  {
    slug: "workflow-automation",
    title: "Workflow Automation",
    description:
      "Connect your CRM, inbox, billing and internal tools so repetitive handoffs run on their own.",
    image: "/services/workflow-automation.svg",
    imageAlt: "Tools connected in a branching automated workflow",
    overview:
      "Most teams lose hours to copying data between tools and chasing the next step. We connect the systems you already use so information moves on its own, with notifications and checks along the way.",
    features: [
      "Integrations between your CRM, email, billing and project tools",
      "Triggers, conditions and error handling that match how you work",
      "Alerts when something needs attention instead of silent failures",
      "Documentation so your team can understand and adjust each workflow",
    ],
    outcomes: [
      "Fewer manual hand-offs and copy-and-paste tasks",
      "Faster turnaround between steps",
      "Data that stays consistent across your tools",
    ],
  },
  {
    slug: "business-process-automation",
    title: "Business Process Automation",
    description:
      "Automate the internal processes that run your operations, from onboarding and approvals to invoicing and reporting.",
    image: "/services/business-process-automation.svg",
    imageAlt: "A process moving through checked steps",
    overview:
      "Some processes span several people, tools and approvals. We map the process as it works today, remove the steps that do not need a person, and automate the rest from start to finish.",
    features: [
      "Process mapping to find the steps worth automating first",
      "Automated onboarding, approvals, invoicing and reporting flows",
      "Role-based approvals and a clear audit trail",
      "Dashboards that show where each item is in the process",
    ],
    outcomes: [
      "Shorter cycle times on recurring processes",
      "Fewer errors and missed steps",
      "Clear visibility into what is waiting on whom",
    ],
  },
  {
    slug: "lead-and-sales-automation",
    title: "Lead & Sales Automation",
    description:
      "Capture, enrich, qualify and follow up with leads automatically, then route the good ones to your team.",
    image: "/services/lead-and-sales-automation.svg",
    imageAlt: "Leads flowing down a sales funnel",
    overview:
      "Good leads go cold when follow-up is slow or inconsistent. We automate the path from first contact to a booked conversation so every lead is handled quickly and the right ones reach your sales team.",
    features: [
      "Lead capture from forms, email and ad platforms into your CRM",
      "Enrichment and qualification based on your criteria",
      "Automated follow-up sequences and meeting booking",
      "Routing and alerts for high-intent leads",
    ],
    outcomes: [
      "Faster response times to new leads",
      "A cleaner CRM with less manual data entry",
      "More of your sales time spent on qualified conversations",
    ],
  },
  {
    slug: "data-and-document-processing",
    title: "Data & Document Processing",
    description:
      "Extract, classify and summarize documents, emails and records into structured data your systems can use.",
    image: "/services/data-and-document-processing.svg",
    imageAlt: "A document being turned into a structured table",
    overview:
      "Invoices, contracts, forms and emails hold information your systems cannot use until someone types it in. We build pipelines that read, classify and extract that information, then send it where it belongs.",
    features: [
      "Extraction of fields from invoices, forms, contracts and emails",
      "Classification and routing of incoming documents",
      "Summaries and structured records for review",
      "Validation rules and human review for low-confidence results",
    ],
    outcomes: [
      "Less manual data entry",
      "Structured data available as soon as a document arrives",
      "Fewer transcription errors",
    ],
  },
  {
    slug: "ai-strategy-and-audits",
    title: "AI Strategy & Audits",
    description:
      "Find the highest-return automation opportunities in your business and get a clear, costed roadmap.",
    image: "/services/ai-strategy-and-audits.svg",
    imageAlt: "Rising bars and a magnifier representing an audit and roadmap",
    overview:
      "Before building anything, it helps to know where automation will pay off. We review how your team works, identify the best opportunities and give you a prioritized plan with effort and expected impact for each.",
    features: [
      "Workshops and interviews to understand how work gets done",
      "An inventory of automation opportunities, ranked by impact and effort",
      "A costed roadmap you can act on with us or on your own",
      "Recommendations on tools, data and risks",
    ],
    outcomes: [
      "Clarity on where to start",
      "A plan you can budget and schedule",
      "Confidence that effort goes to the highest-return work first",
    ],
  },
];

export const getService = (slug: string) =>
  services.find((service) => service.slug === slug);
