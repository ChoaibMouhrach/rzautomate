export interface PageLink {
  label: string;
  href: string;
}

export interface AltRates {
  label: string;
  input: number;
  output: number;
  cached: number | null;
}

export interface ModelPageContent {
  slug: string;
  title: string;
  description: string;
  h1: string;
  summary: string;
  tiles: { label: string; value: string; sub?: string }[];
  tileFootnote?: string;
  notice?: { text: string; link?: PageLink };
  pricing: { columns: string[]; rows: string[][]; peakNote?: string; plain: string; extra?: string; source: string };
  calc: { intro: string; note: string; compare: (string | { name: string; monthly: string })[]; altRates?: AltRates[]; service: string };
  specs: [string, string][];
  access: { columns: string[]; rows: string[][]; line: string };
  free: { answer: string; rows: string[] };
  compare: { rows: { name: string; slug?: string; input: string; output: string; context: string; why: string; current?: boolean }[]; line: string };
  fit: { good: string[]; bad: string[]; take: string; links: PageLink[] };
  versions: { heading: string; rows: { name: string; slug?: string; released: string; input: string; output: string; status: string }[]; line: string };
  faqs: { question: string; answer: string }[];
  cta: { heading: string; body: string; service: string; link: PageLink };
  related: { slug: string; line: string }[];
}

export const services = {
  agent: { label: "AI agent development", href: "/services/ai-agent-development" },
  support: { label: "AI customer support agents", href: "/services/ai-customer-support-agents" },
  documents: { label: "AI document processing", href: "/services/ai-document-processing" },
  leads: { label: "AI lead generation & CRM automation", href: "/services/ai-lead-generation" },
} as const satisfies Record<string, PageLink>;
