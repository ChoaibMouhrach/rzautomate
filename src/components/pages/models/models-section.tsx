import { LandingHeading, LandingSection } from "@/components/site/landing-section";
import { Link } from "@/components/ui/link";
import { site } from "@/lib/site";
import { modelsCheckedAt, modelsCheckedLabel } from "@/lib/models";
import { ModelsTable } from "./models-table";

export const ModelsSection = () => (
  <LandingSection id="models" className="pt-4 md:pt-4">
    <div className="max-w-2xl">
      <LandingHeading>AI model pricing comparison</LandingHeading>
      <p className="mt-4 text-lg text-muted-foreground">Prices are per 1 million tokens in US dollars. Sort any column or open a model for its full specs.</p>
    </div>
    <div className="mt-12 space-y-4 md:mt-14">
      <ModelsTable />
      <p className="text-sm text-muted-foreground">Prices checked <time dateTime={modelsCheckedAt}>{modelsCheckedLabel}</time> on each provider&apos;s pricing page. Spot a wrong number? Tell us at <Link href={`mailto:${site.email}`}>{site.email}</Link> and we&apos;ll fix it.</p>
      <p className="text-muted-foreground">Comparing automation platforms too? See <Link href="/automation-tools">workflow automation tools</Link>.</p>
    </div>
  </LandingSection>
);
