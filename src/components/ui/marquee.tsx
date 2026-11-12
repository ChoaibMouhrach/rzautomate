import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  reverse?: boolean;
  pauseOnHover?: boolean;
  repeat?: number;
  contentClassName?: string;
}

export const Marquee = ({
  className,
  reverse = false,
  pauseOnHover = false,
  repeat = 4,
  contentClassName,
  children,
  ...props
}: MarqueeProps) => (
  <div
    {...props}
    className={twMerge(
      "group flex flex-row gap-(--gap) overflow-hidden [--duration:40s] [--gap:1rem]",
      className,
    )}
  >
    {Array.from({ length: repeat }, (_, index) => (
      <div
        key={index}
        aria-hidden={index > 0}
        className={twMerge(
          "flex shrink-0 animate-marquee flex-row items-center justify-around gap-(--gap) motion-reduce:animate-none",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
          reverse && "[animation-direction:reverse]",
          contentClassName,
        )}
      >
        {children}
      </div>
    ))}
  </div>
);
