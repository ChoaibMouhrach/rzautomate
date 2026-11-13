import { LandingHeading, LandingSection } from "@/components/site/landing-section";
import { workedExample } from "@/components/pages/tools/automation-roi-calculator/content";
import {
  calcRoi,
  defaultInputs,
  formatHours,
  formatMoney,
} from "@/lib/roi";

const example = calcRoi(defaultInputs);

const figures = [
  { value: `${formatHours(example.manualHoursMonth)} hrs`, label: "by hand each month" },
  { value: `${formatHours(example.hoursSavedMonth)} hrs`, label: "saved each month" },
  { value: formatMoney(example.valueYear), label: "back each year" },
  { value: formatMoney(example.netYear), label: "after running costs" },
];

export const RoiWorkedExample = () => (
  <LandingSection id="worked-example">
    <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
      <div>
        <LandingHeading>{workedExample.heading}</LandingHeading>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          {workedExample.body}
        </p>
      </div>
      <ul className="grid grid-cols-2 gap-3 self-start">
        {figures.map((figure) => (
          <li
            key={figure.label}
            className="flex flex-col justify-between gap-10 rounded-3xl bg-muted p-6 md:p-8"
          >
            <span className="text-4xl font-semibold tracking-tighter md:text-5xl">
              {figure.value}
            </span>
            <span className="text-muted-foreground">{figure.label}</span>
          </li>
        ))}
      </ul>
    </div>
  </LandingSection>
);
