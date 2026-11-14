export type LinePart = string | { label: string; href: string };

const maintenance = { label: "Automation maintenance", href: "/services/automation-maintenance" };
const agents = { label: "AI agent development", href: "/services/ai-agent-development" };

const maintenanceTools = ["n8n", "make", "zapier"];
const agentTools = ["gumloop", "lindy", "relay"];

export const bookHrefFor = (slug: string) =>
  agentTools.includes(slug)
    ? `/book?service=agent-development&source=automation-tools&tool=${slug}`
    : `/book?service=maintenance&source=automation-tools&tool=${slug}`;

export const fitLineFor = (slug: string, name: string): LinePart[] | null => {
  if (maintenanceTools.includes(slug)) return ["We build and look after ", name, " workflows. See ", maintenance, "."];
  if (slug === "relay") return ["Moving off Relay.app? We rebuild workflows on tools that are still running. See ", agents, "."];
  if (agentTools.includes(slug)) return ["When an off-the-shelf builder can't do the job, we build custom agents. See ", agents, "."];
  return null;
};

export const ctaLineFor = (slug: string, name: string): LinePart[] => {
  if (maintenanceTools.includes(slug)) return ["Already running ", name, "? See ", maintenance, "."];
  if (agentTools.includes(slug)) return ["Need something more custom? See ", agents, "."];
  return ["We also look after automations on n8n, Make and Zapier. See ", maintenance, "."];
};
