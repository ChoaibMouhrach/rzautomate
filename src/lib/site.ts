export const site = {
  name: "RZ Automate",
  description:
    "We design and build AI automation systems that remove manual work from your business.",
  // Placeholder: set to the real production domain.
  url: "https://rzautomate.com",
  email: "choaib.m@rizon.agency",
  bookingUrl: "https://cal.com/rizon.agency-cvbkll/30min",
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
