export type ToolKind = "Workflow platforms" | "AI agent builders" | "Enterprise";

export interface CalcInput {
  runs: number;
  steps: number;
  yearly: boolean;
  extra: Record<string, number>;
}

export interface CalcResult {
  units: string;
  plan: string;
  cost: string;
  costNote?: string;
  selfHostLine?: string;
}

export interface ToolPage {
  slug: string;
  name: string;
  kind: ToolKind;
  status: "active" | "shut-down";
  seo: { title: string; description: string };
  checkedAt: string;
  checkedLabel: string;
  vendorPricingUrl: string;
  hub: {
    freePlan: string | null;
    freeAllowance: number | null;
    startsAt: number | null;
    startsAtLabel: string;
    youPayFor: string;
    selfHosting: boolean;
    openSource: boolean;
    ai: string;
    bestFor: string;
    integrations: number | null;
  };
  hero: {
    h1: string;
    notice?: string;
    summary: string;
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
    tiles: { label: string; value: string }[];
  };
  pricing: {
    heading: string;
    intro: string;
    hasBillingToggle: boolean;
    columns: [string, string, string, string, string];
    rows: {
      plan: string;
      monthly: string;
      yearly: string;
      includes: string;
      users: string;
      goodToKnow: string;
    }[];
    overLimitLine?: string;
    sourceLine: string;
  };
  billing: {
    heading: string;
    body: string;
    counts: string[];
    doesntCount: string[];
    example: { line: string; steps: [string, string, string]; values: [string, string, string] };
  };
  calculator: {
    heading: string;
    intro: string;
    defaults: { runs: number; steps: number; yearly: boolean };
    extraInputs?: { id: string; label: string; default: number }[];
    note: string;
    calculate: (input: CalcInput) => CalcResult;
  };
  freePlan: { heading: string; answer: string; rows: string[] };
  features: { heading: string; rows: { label: string; value: string }[] };
  fit: {
    heading: string;
    goodTitle: string;
    good: string[];
    notTitle: string;
    not: string[];
    ourTake: string;
  };
  alternatives: {
    compareLinks?: { label: string; slug: string }[];
    heading: string;
    intro: string;
    rows: {
      name: string;
      slug: string;
      startsAt: string;
      payFor: string;
      freePlan: string;
      selfHosting: string;
      whySwitch: string;
    }[];
  };
  faq: { heading: string; items: { question: string; answer: string }[] };
  cta: { heading: string; body: string };
  related: { heading: string; tiles: { name: string; slug: string; line: string }[] };
}
