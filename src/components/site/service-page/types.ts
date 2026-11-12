export interface ProofContent {
  heading: string;
  pills: readonly { number: string; label: string }[];
  logosLabel: string;
  logos: readonly { name: string; src: string; height: string }[];
}

export interface PainContent {
  label: string;
  heading: string;
  rows: readonly { title: string; line: string }[];
  closing: string;
}

export interface BuildContent {
  label: string;
  heading: string;
  definition: string;
  items: readonly {
    name: string;
    body: string;
    stack: readonly { tag: string; title: string; meta: string }[];
  }[];
}

export type FlowIcon =
  | "message"
  | "mail"
  | "support"
  | "chat"
  | "form"
  | "megaphone"
  | "calendar"
  | "upload"
  | "scan"
  | "folder"
  | "database"
  | "workflow"
  | "blocks"
  | "zap"
  | "bot";

export interface FlowContent {
  label: string;
  heading: string;
  channels: readonly string[];
  icons: readonly FlowIcon[];
  center: string;
  outcomes: readonly { title: string; line: string }[];
  footnote: string;
}

export interface ResultsContent {
  label: string;
  heading: string;
  body: string;
  secondary: { label: string; href: string };
  tiles: readonly { number: string; label: string; line: string }[];
  summary: { text: string; link: { label: string; href: string } };
}

export interface TestimonialsContent {
  heading: string;
  subhead: string;
  quotes: readonly { name: string; role: string; quote: string }[];
}

export interface ToolsContent {
  heading: string;
  centerTitle: string;
  centerLine: string;
  logos: readonly { name: string; src: string }[];
}

export interface ProcessContent {
  label: string;
  heading: string;
  steps: readonly { title: string; line: string }[];
  note?: string;
}

export interface FitContent {
  heading: string;
  goodTitle: string;
  good: readonly string[];
  badTitle: string;
  bad: readonly string[];
  note?: string;
  closing: string;
}

export interface FaqContent {
  label: string;
  heading: string;
  link: { label: string; href: string };
  items: readonly { question: string; answer: string }[];
}

export interface RelatedContent {
  heading: string;
  tiles: readonly { title: string; line: string; href: string }[];
}

export interface HeroContent {
  title: string;
  subhead: string;
  secondary: string;
  flow: readonly {
    tag: string;
    title: string;
    meta: string;
  }[];
}
