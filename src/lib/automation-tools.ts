import { toolPages } from "./tool-pages";
import type { ToolKind } from "./tool-pages/types";

export const toolTypes = ["Workflow platforms", "AI agent builders", "Enterprise"] as const;
export type ToolType = ToolKind;

const latest = [...toolPages].map((page) => page.checkedAt).sort().at(-1)!;
export const toolsCheckedAt = latest;
export const toolsCheckedLabel = toolPages.find((page) => page.checkedAt === latest)!.checkedLabel;

export interface AutomationTool {
  slug: string;
  name: string;
  type: ToolType;
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
}

export const automationTools: readonly AutomationTool[] = toolPages
  .filter((page) => page.status === "active")
  .map((page) => ({ slug: page.slug, name: page.name, type: page.kind, ...page.hub }));

const byName = (a: AutomationTool, b: AutomationTool) => a.name.localeCompare(b.name);

export const sortedByPrice = [...automationTools].sort(
  (a, b) => (a.startsAt ?? Infinity) - (b.startsAt ?? Infinity) || byName(a, b),
);

export const cheapestPaid = sortedByPrice.find((tool) => tool.startsAt !== null)!;
export const bestFree = [...automationTools]
  .filter((tool) => tool.freeAllowance !== null)
  .sort((a, b) => b.freeAllowance! - a.freeAllowance! || byName(a, b))[0];
export const bestSelfHosted = [...automationTools]
  .filter((tool) => tool.selfHosting)
  .sort((a, b) => (b.integrations ?? 0) - (a.integrations ?? 0) || byName(a, b))[0];
export const mostIntegrations = [...automationTools]
  .filter((tool) => tool.integrations !== null)
  .sort((a, b) => b.integrations! - a.integrations! || byName(a, b))[0];

export const toolLogo = (tool: Pick<AutomationTool, "slug">) =>
  `/logos/tools/${tool.slug}.${["zapier", "make", "n8n"].includes(tool.slug) ? "svg" : "png"}`;

export const toolHref = (tool: Pick<AutomationTool, "slug">) => `/automation-tools/${tool.slug}`;
