import { Activity, FileText, KeyRound, Wrench } from "lucide-react";
import { why } from "./content";
import { LandingSection, LandingHeading } from "@/components/site/landing-section";

const icons = [Activity, KeyRound, FileText, Wrench];

const styles = [
  "bg-ink text-paper lg:col-span-2",
  "bg-muted",
  "bg-tint",
  "bg-primary text-primary-foreground lg:col-span-2",
];

const bodyStyles = [
  "text-paper/70",
  "text-muted-foreground",
  "text-muted-foreground",
  "text-primary-foreground/85",
];

const iconStyles = [
  "bg-primary text-primary-foreground",
  "bg-background text-primary",
  "bg-background text-primary",
  "bg-primary-foreground text-primary",
];

export const Why = () => (
  <LandingSection id="why">
    <LandingHeading className="max-w-3xl">{why.heading}</LandingHeading>
    <ul className="mt-14 grid gap-4 lg:grid-cols-3">
      {why.points.map((point, index) => {
        const Icon = icons[index];
        return (
          <li
            key={point.title}
            className={`flex min-h-72 flex-col justify-between gap-12 rounded-3xl p-8 md:p-10 ${styles[index]}`}
          >
            <div>
              <span
                className={`flex size-12 items-center justify-center rounded-full ${iconStyles[index]}`}
              >
                <Icon aria-hidden className="size-6" />
              </span>
              {point.chips && (
                <ul className="mt-6 flex flex-wrap gap-2">
                  {point.chips.map((chip) => (
                    <li
                      key={chip}
                      className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium"
                    >
                      {chip}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div>
              <h3 className="text-3xl font-semibold leading-tight tracking-tighter">
                {point.title}
              </h3>
              <p className={`mt-3 max-w-xl text-lg ${bodyStyles[index]}`}>
                {point.line}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  </LandingSection>
);
