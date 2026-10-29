export const site = {
  name: "RZ Automate",
  description:
    "RZ Automate builds AI agents and n8n workflows that take lead follow-up, data entry, support replies and reporting off your team. Free 30-min call.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://rzautomate.com",
  email: "choaib.m@rizon.agency",
  bookingUrl: "https://cal.com/rizon.agency-cvbkll/30min",
};

export const company = {
  legalName: "Rizon LLC",
  description:
    "RZ Automate is an AI automation agency that builds AI agents and n8n workflows that take repetitive work off small and mid-sized businesses.",
  foundingDate: "2026-05",
  email: "contact@rizon.agency",
  logo: "/logo.png",
  sameAs: [] as readonly string[],
  areaServed: "Worldwide",
  address: {
    streetAddress: "30 N Gould St Ste N",
    addressLocality: "Sheridan",
    addressRegion: "WY",
    postalCode: "82801",
    addressCountry: "US",
  },
} as const;

export const founder = {
  name: "Choaib Mouhrach",
  jobTitle: "Founder and AI Automation Engineer",
  sameAs: [
    "https://www.linkedin.com/in/choaib-mouhrach",
    "https://github.com/ChoaibMouhrach",
  ],
  knowsAbout: ["AI Automation", "Full-Stack Development"],
} as const;

export const absoluteUrl = (path: string) => new URL(path, site.url).toString();

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
