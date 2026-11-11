import { button } from "@/components/ui/button";
import { bookingLabel, process } from "./content";
import { HomeSection, MonoLabel, SectionHeading } from "./section";

const heights = ["lg:min-h-[22rem]", "lg:min-h-[26rem]", "lg:min-h-[30rem]", "lg:min-h-[34rem]"];
const tones = [
  "bg-muted",
  "bg-tint",
  "bg-ink text-paper",
  "bg-primary text-primary-foreground",
];
const mutedTones = [
  "text-muted-foreground",
  "text-muted-foreground",
  "text-paper/70",
  "text-primary-foreground/80",
];

export const Process = () => (
  <HomeSection id="how-it-works">
    <div className="max-w-2xl">
      <MonoLabel>{process.label}</MonoLabel>
      <SectionHeading className="mt-4">{process.heading}</SectionHeading>
      <p className="mt-4 text-lg text-muted-foreground">
        {process.description}
      </p>
    </div>
    <div className="mt-12 lg:mt-16">
    <ol className="grid gap-4 lg:grid-cols-4 lg:items-end">
      {process.steps.map((step, index) => {
        const isLast = index === process.steps.length - 1;
        const card = (
          <div
            className={`flex flex-1 flex-col justify-between gap-10 rounded-3xl p-8 ${tones[index]} ${isLast ? "" : heights[index]}`}
          >
            <span className="text-7xl font-semibold leading-none tracking-tighter">
              {index + 1}
            </span>
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className={`mt-3 text-sm ${mutedTones[index]}`}>{step.line}</p>
            </div>
          </div>
        );

        if (!isLast) {
          return (
            <li key={step.title} className="flex flex-col">
              {card}
            </li>
          );
        }

        return (
          <li
            key={step.title}
            className={`flex flex-col gap-2 ${heights[index]}`}
          >
            {card}
            <a
              href="#book"
              className={button({
                size: "lg",
                className: "h-20 w-full rounded-3xl! text-lg",
              })}
            >
              {bookingLabel}
            </a>
          </li>
        );
      })}
    </ol>
    </div>
  </HomeSection>
);
