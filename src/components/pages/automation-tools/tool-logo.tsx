import { toolLogo, type AutomationTool } from "@/lib/automation-tools";

export const ToolLogo = ({ tool, className = "size-8" }: { tool: Pick<AutomationTool, "slug">; className?: string }) => (
  <img src={toolLogo(tool)} alt="" width={32} height={32} loading="lazy" className={`${className} shrink-0 rounded-lg object-contain`} />
);
