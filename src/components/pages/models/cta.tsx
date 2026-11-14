import { BookCall } from "@/components/site/book-call";
import { Link } from "@/components/ui/link";
import { agentServiceHref } from "./content";

export const Cta = () => (
  <>
    <BookCall
      id="book"
      tone="dark"
      service="agent-development"
      source="models"
      title="Picking a model is the easy part"
      description="The hard part is getting it to do real work inside your tools. We build AI agents and automations that let your business take on more work without adding headcount. On the call we'll tell you which model fits your task and what it would cost at your volume."
    />
    <p className="page-container pb-16 text-sm text-muted-foreground">Want the full picture? See <Link href={agentServiceHref}>AI agent development</Link>.</p>
  </>
);
