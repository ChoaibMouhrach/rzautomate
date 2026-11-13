"use client";

import {
  Label,
  Slider as AriaSlider,
  SliderOutput,
  SliderThumb,
  SliderTrack,
  composeRenderProps,
  type SliderProps as AriaSliderProps,
} from "react-aria-components";
import { focusRing, tv } from "@/lib/ui";

const thumb = tv({
  extend: focusRing,
  base: "top-1/2 size-6 cursor-grab rounded-full bg-primary shadow-md ring-4 ring-background",
  variants: {
    isDragging: { true: "cursor-grabbing" },
  },
});

export interface SliderProps extends Omit<AriaSliderProps<number>, "children"> {
  label: string;
  suffix?: string;
  description?: string;
}

export const Slider = ({
  label,
  suffix = "",
  description,
  className,
  ...props
}: SliderProps) => (
  <AriaSlider
    {...props}
    className={composeRenderProps(className, (className) =>
      `flex flex-col gap-2 ${className ?? ""}`,
    )}
  >
    <div className="flex items-baseline justify-between gap-4">
      <Label className="text-sm font-medium">{label}</Label>
      <SliderOutput className="text-sm font-medium tabular-nums">
        {({ state }) => `${state.getThumbValue(0)}${suffix}`}
      </SliderOutput>
    </div>
    <SliderTrack className="relative h-8 w-full">
      {({ state }) => (
        <>
          <span
            data-slider-track
            className="absolute top-1/2 h-2 w-full -translate-y-1/2 rounded-full bg-muted"
          />
          <span
            className="absolute top-1/2 h-2 -translate-y-1/2 rounded-full bg-primary"
            style={{ width: `${state.getThumbPercent(0) * 100}%` }}
          />
          <SliderThumb
            className={({ isDragging, isFocusVisible }) =>
              thumb({ isDragging, isFocusVisible })
            }
          />
        </>
      )}
    </SliderTrack>
    {description && (
      <p className="text-sm text-muted-foreground">{description}</p>
    )}
  </AriaSlider>
);
