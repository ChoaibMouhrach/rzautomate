import { entitySentence } from "@/lib/site";

export const footer = {
  tagline: entitySentence,
  columns: [
    {
      title: "Services",
      links: [
        { label: "AI lead generation & CRM automation", href: "/services/ai-lead-generation" },
        { label: "AI customer support agents", href: "/services/ai-customer-support-agents" },
        { label: "AI document processing", href: "/services/ai-document-processing" },
        { label: "Automation maintenance", href: "/services/automation-maintenance" },
        { label: "AI agent development", href: "/services/ai-agent-development" },
        { label: "All services", href: "/services" },
      ],
    },
    {
      title: "Free tools",
      links: [
        { label: "ROI calculator", href: "/tools/automation-roi-calculator" },
        { label: "Compare AI model prices", href: "/models" },
        { label: "Compare automation tools", href: "/automation-tools" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "FAQ", href: "/faq" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ],
  entity: "RZ Automate is a Rizon LLC company · 30 N Gould St Ste N, Sheridan, WY 82801",
};
