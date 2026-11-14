import { entitySentence } from "@/lib/site";

export const footer = {
  newsletterLabel: "Stay in the loop",
  newsletterHeading: "One practical automation idea a week. No spam.",
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
        { label: "What to automate first", href: "/tools/what-to-automate-first" },
        { label: "AI readiness check", href: "/tools/ai-readiness-check" },
        { label: "Compare AI model prices", href: "/models" },
        { label: "Compare automation tools", href: "/automation-tools" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Case studies", href: "/case-studies" },
        { label: "Blog", href: "/blog" },
        { label: "FAQ", href: "/faq" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ],
  entity: "RZ Automate is a Rizon LLC company · 30 N Gould St Ste N, Sheridan, WY 82801",
};
