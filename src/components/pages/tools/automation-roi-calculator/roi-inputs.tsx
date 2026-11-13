import { ChevronDown } from "lucide-react";
import { NumberField } from "@/components/ui/number-field";
import { Select, SelectItem } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import {
  isOutOfRange,
  limits,
  taskIds,
  taskPresets,
  type NumericField,
  type RoiInputs,
  type TaskId,
} from "@/lib/roi";

interface RoiInputsProps {
  inputs: RoiInputs;
  onTask: (task: TaskId) => void;
  onField: (field: NumericField, value: number) => void;
}

const numberProps = (
  field: NumericField,
  value: number | null,
  onField: RoiInputsProps["onField"],
) => ({
  value: value ?? Number.NaN,
  minValue: limits[field].min,
  maxValue: limits[field].max,
  step: limits[field].step,
  isInvalid: value !== null && isOutOfRange(field, value),
  onChange: (next: number) => onField(field, next),
});

export const RoiInputsForm = ({ inputs, onTask, onField }: RoiInputsProps) => (
  <form
    className="flex flex-col gap-6"
    onSubmit={(event) => event.preventDefault()}
  >
    <Select
      label="Which task?"
      value={inputs.task}
      onChange={(key) => onTask(key as TaskId)}
    >
      {taskIds.map((id) => (
        <SelectItem key={id} id={id} textValue={taskPresets[id].label}>
          {taskPresets[id].label}
        </SelectItem>
      ))}
    </Select>

    <div className="grid gap-6 sm:grid-cols-2">
      <NumberField
        label="How many times does it happen a month?"
        description="Count each time the task is done, e.g. each invoice, each lead, each ticket."
        formatOptions={{ maximumFractionDigits: 0 }}
        {...numberProps("volume", inputs.volume, onField)}
      />
      <NumberField
        label="How many minutes does it take each time?"
        description="Include the small stuff: opening tools, copy-pasting, checking."
        {...numberProps("minutes", inputs.minutes, onField)}
      />
    </div>

    <NumberField
      label="What does an hour of that person's time cost you?"
      description="Use the fully loaded cost: pay plus benefits and taxes. Not sure? Hourly pay × 1.4 is a fair estimate."
      prefix="$"
      formatOptions={{ maximumFractionDigits: 0 }}
      {...numberProps("hourlyCost", inputs.hourlyCost, onField)}
    />

    <Slider
      label="How much of the task can be automated?"
      description="Rarely 100%. Someone usually still checks exceptions. The default for each task is a starting point, change it."
      suffix="%"
      minValue={limits.automationShare.min}
      maxValue={limits.automationShare.max}
      step={limits.automationShare.step}
      value={inputs.automationShare}
      onChange={(next) => onField("automationShare", next)}
    />

    <NumberField
      label="Monthly running cost of the automation"
      description="Software and AI usage, e.g. n8n or Make plan plus AI model costs. Usually small next to the time saved."
      prefix="$"
      formatOptions={{ maximumFractionDigits: 0 }}
      {...numberProps("runningCost", inputs.runningCost, onField)}
    />

    <details className="group rounded-3xl bg-muted [&_[data-slider-track]]:bg-background [&_[data-number-group]]:bg-background">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-base font-semibold outline-0 marker:hidden focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring [&::-webkit-details-marker]:hidden">
        Add more detail (optional)
        <ChevronDown
          aria-hidden
          className="size-5 transition-transform group-open:rotate-180 motion-reduce:transition-none"
        />
      </summary>
      <div className="flex flex-col gap-6 px-5 pb-6">
        <Slider
          label="Expected growth in this task's volume over the next 12 months"
          suffix="%"
          minValue={limits.growth.min}
          maxValue={limits.growth.max}
          step={limits.growth.step}
          value={inputs.growth}
          onChange={(next) => onField("growth", next)}
        />
        <NumberField
          label="One-time build cost (if you have a quote)"
          description="From any agency, freelancer or your own team's estimate. Leave empty to skip payback."
          prefix="$"
          formatOptions={{ maximumFractionDigits: 0 }}
          {...numberProps("buildCost", inputs.buildCost, onField)}
        />
      </div>
    </details>
  </form>
);
