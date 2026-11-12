import { Check, X } from "lucide-react";
import { LandingHeading, LandingSection } from "@/components/site/landing-section";
import { TextLink } from "@/components/ui/text-link";
import type { FitContent } from "./types";

const Column = ({
  title,
  items,
  good,
}: {
  title: string;
  items: readonly string[];
  good?: boolean;
}) => (
  <div>
    <h3 className="text-2xl font-semibold tracking-tighter">{title}</h3>
    <ul className="mt-6 flex flex-col gap-4">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            className={`mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full ${good ? "bg-primary text-primary-foreground" : "bg-foreground/10 text-foreground"}`}
          >
            {good ? <Check aria-hidden className="size-4" /> : <X aria-hidden className="size-4" />}
          </span>
          <span className="text-muted-foreground">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const Fit = ({
  fit,
  auditHref,
}: {
  fit: FitContent;
  auditHref: string;
}) => (
  <LandingSection className="bg-tint">
    <LandingHeading className="max-w-3xl">{fit.heading}</LandingHeading>
    <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-0">
      <div className="md:pr-12">
        <Column title={fit.goodTitle} items={fit.good} good />
      </div>
      <div className="md:border-l md:border-border md:pl-12">
        <Column title={fit.badTitle} items={fit.bad} />
      </div>
    </div>
    <TextLink href={auditHref} className="mt-12 inline-block text-primary">
      {fit.closing}
    </TextLink>
  </LandingSection>
);
