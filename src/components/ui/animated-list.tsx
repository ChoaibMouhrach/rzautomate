import {
  Children,
  useEffect,
  useMemo,
  useState,
  type ComponentPropsWithoutRef,
} from "react";
import { twMerge } from "tailwind-merge";

export const AnimatedList = ({
  children,
  className,
  delay = 1000,
  maxVisible = 4,
  ...props
}: ComponentPropsWithoutRef<"div"> & {
  delay?: number;
  maxVisible?: number;
}) => {
  const items = useMemo(() => Children.toArray(children), [children]);
  const [count, setCount] = useState(items.length);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = setInterval(() => setCount((value) => value + 1), delay);
    return () => clearInterval(interval);
  }, [delay]);

  const visible = Array.from(
    { length: Math.min(count, maxVisible) },
    (_, offset) => count - 1 - offset,
  );

  return (
    <div className={twMerge("flex flex-col gap-4", className)} {...props}>
      {visible.map((sequence) => (
        <div key={sequence} className="animate-list-in">
          {items[sequence % items.length]}
        </div>
      ))}
    </div>
  );
};
