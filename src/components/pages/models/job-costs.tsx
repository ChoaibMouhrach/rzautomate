import { ArrowUpRight } from "lucide-react";
import { LandingHeading, LandingSection } from "@/components/site/landing-section";
import { NumberTicker } from "@/components/ui/number-ticker";
import { formatMonthly, jobCosts, workflowEstimates, workflows } from "./content";
import { ProviderChip } from "./provider-logo";

const tones = ["bg-ink text-paper", "bg-primary text-primary-foreground", "bg-tint"];
const mutedTones = ["text-paper/70", "text-primary-foreground/85", "text-muted-foreground"];
const ruleTones = ["border-paper/15", "border-primary-foreground/25", "border-foreground/10"];

export const JobCosts = () => (
  <LandingSection>
    <div className="max-w-2xl">
      <LandingHeading>{jobCosts.title}</LandingHeading>
      <p className="mt-4 text-lg text-muted-foreground">{jobCosts.body}</p>
    </div>
    <ul className="mt-12 grid gap-4 md:mt-14 md:grid-cols-3">
      {workflows.map((job, index) => {
        const estimates = workflowEstimates(job);
        const low = estimates[0];
        const high = estimates[estimates.length - 1];
        return (
          <li key={job.href} className={`flex min-h-112 flex-col justify-between gap-10 rounded-3xl p-8 md:p-10 ${tones[index]}`}>
            <div>
              <h3 className="text-2xl font-semibold leading-tight tracking-tight">{job.name}</h3>
              <p className={`mt-2 text-sm ${mutedTones[index]}`}>{job.input.toLocaleString("en-US")} tokens in and {job.output.toLocaleString("en-US")} out per item</p>
            </div>
            <div>
              <p className={`text-sm font-medium ${mutedTones[index]}`}>Cheapest</p>
              <p className="mt-1 text-7xl font-semibold leading-none tracking-tighter"><NumberTicker value={formatMonthly(low.cost)} /></p>
              <p className="mt-4 flex items-center gap-3 font-medium">
                <ProviderChip provider={low.model.provider} className="size-8" logoClassName="size-5" />
                {low.model.name}
              </p>
              <div className={`mt-6 border-t pt-6 ${ruleTones[index]}`}>
                <div className="flex items-end justify-between gap-4">
                  <div className="min-w-0">
                    <p className={`text-sm ${mutedTones[index]}`}>Priciest</p>
                    <p className="mt-1 truncate font-medium">{high.model.name}</p>
                  </div>
                  <p className="shrink-0 text-2xl font-semibold tracking-tight"><NumberTicker value={formatMonthly(high.cost)} /></p>
                </div>
                <a href={job.href} className="group mt-6 flex min-h-12 items-start justify-between gap-4 font-medium underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
                  <span>{job.service}</span>
                  <ArrowUpRight aria-hidden className="mt-1 size-5 shrink-0 opacity-70" />
                </a>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
    <p className="mt-4 text-sm text-muted-foreground">{jobCosts.formula}</p>
    <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{jobCosts.closing}</p>
  </LandingSection>
);
