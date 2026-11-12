"use client";

import { useEffect, useRef, useState } from "react";

const pattern = /^(\D*)(\d[\d,]*)(.*)$/;

export const NumberTicker = ({ value }: { value: string }) => {
  const match = pattern.exec(value);
  const target = match ? Number(match[2].replaceAll(",", "")) : 0;
  const hasNumber = match !== null;
  const ref = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState(target);

  useEffect(() => {
    if (!hasNumber || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const element = ref.current;
    if (!element) return;
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / 1400, 1);
        setCurrent(Math.round(target * (1 - (1 - progress) ** 3)));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      setCurrent(0);
      frame = requestAnimationFrame(tick);
    });
    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [hasNumber, target]);

  if (!match) return <span>{value}</span>;

  return (
    <span ref={ref} className="tabular-nums">
      {match[1]}
      {current.toLocaleString("en-US")}
      {match[3]}
    </span>
  );
};
