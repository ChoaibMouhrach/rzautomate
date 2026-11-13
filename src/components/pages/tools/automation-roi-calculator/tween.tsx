import { useEffect, useRef, useState } from "react";

const durationMs = 350;

const prefersReducedMotion = () =>
  typeof matchMedia !== "undefined" &&
  matchMedia("(prefers-reduced-motion: reduce)").matches;

const useTween = (target: number) => {
  const [value, setValue] = useState(target);
  const current = useRef(target);
  const isInstant = prefersReducedMotion();

  useEffect(() => {
    const from = current.current;
    if (isInstant) {
      current.current = target;
      return;
    }
    if (from === target) return;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      const next = from + (target - from) * (1 - (1 - progress) ** 3);
      current.current = next;
      setValue(next);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, isInstant]);

  return isInstant ? target : value;
};

export const Tween = ({
  value,
  format,
}: {
  value: number;
  format: (value: number) => string;
}) => <span className="tabular-nums">{format(useTween(value))}</span>;
