import { DirectorySection } from "@/components/site/directory";
import { Link } from "@/components/ui/link";
import { ToolsTable } from "./tools-table";

export const ToolsSection = () => (
  <DirectorySection id="tools" title="Workflow automation tools by price" intro="Every tool side by side. Filter the list and click a tool to see its full pricing.">
    <ToolsTable />
    <p className="text-muted-foreground">Paying for AI models too? See <Link href="/models">AI model prices</Link>.</p>
  </DirectorySection>
);
