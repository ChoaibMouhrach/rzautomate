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
    slug: "ai-customer-support-agents",
    title: "AI customer support agents",
    description:
      "AI agents that answer routine customer questions, triage support requests and hand off to your team when needed.",
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
    slug: "business-process-automation",
    title: "Business process automation",
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
    slug: "ai-lead-generation",
    title: "AI lead generation & CRM automation",
    description:
      "Research, score and add new leads to your CRM, with first follow-ups drafted for your team to review.",
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
    slug: "ai-document-processing",
    title: "AI document processing",
    description:
      "Read invoices, receipts, POs and forms, validate the extracted data and send it to your accounting tools, CRM or sheets. Unclear fields go to review.",
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
    slug: "ai-agent-development",
    title: "AI agent development",
    description:
      "Custom agents that answer from your docs, research, take approved actions and connect Claude or ChatGPT to your systems through MCP.",
    image: "/services/ai-agents.svg",
    imageAlt: "An AI agent connected to messages and business tools",
    overview:
      "I build custom AI agents for jobs that need reading, judgment and several steps across your tools. Each agent is tested on your real examples before launch, asks for approval before risky actions and logs every run.",
    features: [
      "Internal knowledge assistants that answer with source links",
      "Research and operations agents connected to your tools",
      "Custom MCP servers for Claude, ChatGPT and Cursor",
      "Test sets, approval steps, run logs and cost tracking",
    ],
    outcomes: [
      "Less time searching company documents and preparing research",
      "Approved actions across your CRM and internal tools",
      "Code, prompts and accounts that you own",
    ],
  },
];

export const getService = (slug: string) =>
  services.find((service) => service.slug === slug);
