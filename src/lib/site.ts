export const site = {
  name: "RZ Automate",
  description:
    "We design and build AI automation systems that remove manual work from your business.",
  // Placeholder: set to the real production domain.
  url: "https://rzautomate.com",
  email: "hello@rzautomate.com",
};

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export const legalNav = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
] as const;

export const services = [
  {
    title: "AI Agents",
    description:
      "Custom agents that handle support, research and operations tasks end to end, with humans in the loop where it matters.",
  },
  {
    title: "Workflow Automation",
    description:
      "Connect your CRM, inbox, billing and internal tools so repetitive handoffs run on their own.",
  },
  {
    title: "Lead & Sales Automation",
    description:
      "Capture, enrich, qualify and follow up with leads automatically, then route the good ones to your team.",
  },
  {
    title: "Data & Document Processing",
    description:
      "Extract, classify and summarize documents, emails and records into structured data your systems can use.",
  },
  {
    title: "AI Strategy & Audits",
    description:
      "Find the highest-return automation opportunities in your business and get a clear, costed roadmap.",
  },
] as const;

export const faqs = [
  {
    question: "What does an AI automation agency actually do?",
    answer:
      "We find repetitive, rules-heavy work in your business and replace it with automated workflows and AI agents, then maintain them as your needs change.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most projects ship a first working version in two to four weeks. Larger systems are delivered in stages so you see value early.",
  },
  {
    question: "Which tools do you work with?",
    answer:
      "We are tool-agnostic. We use whatever fits: n8n, Make, Zapier, custom code, and the major LLM providers, integrated with your existing stack.",
  },
  {
    question: "Who owns the automations you build?",
    answer:
      "You do. We hand over the code, workflows and documentation, and you are never locked in to us.",
  },
  {
    question: "How do you handle our data?",
    answer:
      "We only access what a project needs, keep credentials in secure storage, and sign an NDA or data processing agreement on request.",
  },
  {
    question: "How much does it cost?",
    answer:
      "It depends on scope. We start with a short discovery call and send a fixed-price proposal for the project.",
  },
] as const;
