import { CtaCard, CtaCardAction, CtaCardContent, CtaCardDescription, CtaCardTitle } from "@/components/ui/cta-card";
import { Link } from "@/components/ui/link";
import { directorySectionClass } from "@/components/site/directory";
import { bookHref } from "./content";

export const Cta = () => (
  <div className={directorySectionClass}>
  <CtaCard>
    <CtaCardContent>
      <CtaCardTitle>Picking the tool is the easy part</CtaCardTitle>
      <CtaCardDescription>The hard part is building workflows that keep running as you grow. We design, build and look after automations so your team can take on more work without adding more people.</CtaCardDescription>
    </CtaCardContent>
    <CtaCardAction href={bookHref}>Book a free 30-min call</CtaCardAction>
  </CtaCard>
  <p className="mt-4 text-sm text-muted-foreground">Building AI agents? See <Link href="/services/ai-agent-development">AI agent development</Link>.</p>
  </div>
);
