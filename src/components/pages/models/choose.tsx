import { ArrowUpRight } from "lucide-react";
import { LandingHeading, LandingSection, SectionLabel } from "@/components/site/landing-section";
import { bookHref, choose } from "./content";

export const Choose = () => (
  <LandingSection>
    <div className="grid gap-10 lg:grid-cols-[2fr_3fr] lg:gap-16">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <SectionLabel>Before you pick</SectionLabel>
        <LandingHeading className="mt-4">{choose.title}</LandingHeading>
        <p className="mt-4 text-lg text-muted-foreground">{choose.intro}</p>
      </div>
      <ol className="space-y-4">
        {choose.rows.map((row, index) => (
          <li key={row.n} className={`flex gap-6 rounded-3xl p-8 ${index % 2 ? "bg-tint" : "bg-muted"}`}>
            <span className="w-16 shrink-0 text-5xl font-semibold leading-none tracking-tighter text-primary tabular-nums">{row.n}</span>
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">{row.title}</h3>
              <p className="mt-2 text-muted-foreground">{row.line}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
    <div className="mt-4 grid gap-4 lg:grid-cols-[3fr_2fr]">
      <div className="flex flex-col justify-between gap-10 rounded-3xl bg-ink p-8 text-paper md:p-12">
        <span className="inline-flex w-fit rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground">{choose.take.title}</span>
        <p className="text-balance text-2xl leading-snug tracking-tight md:text-3xl">{choose.take.body}</p>
      </div>
      <a href={bookHref} className="group flex flex-col justify-between gap-10 rounded-3xl bg-primary p-8 text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:p-10">
        <span className="flex size-10 items-center justify-center self-end rounded-full bg-white/15"><ArrowUpRight aria-hidden className="size-5" /></span>
        <span>
          <span className="block text-sm font-medium text-primary-foreground/85">Not sure which one fits?</span>
          <span className="mt-2 block text-4xl font-semibold leading-tight tracking-tighter">{choose.take.label}</span>
        </span>
      </a>
    </div>
  </LandingSection>
);
