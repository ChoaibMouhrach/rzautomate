"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const scrollToTop = () => {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.scrollTo(0, 0);
    return;
  }
  const stop = () => {
    cancelAnimationFrame(frame);
    window.removeEventListener("wheel", stop);
    window.removeEventListener("touchstart", stop);
  };
  const step = () => {
    const remaining = window.scrollY;
    if (remaining <= 1) {
      window.scrollTo(0, 0);
      stop();
      return;
    }
    window.scrollTo(0, remaining - Math.max(remaining * 0.12, 8));
    frame = requestAnimationFrame(step);
  };
  let frame = requestAnimationFrame(step);
  window.addEventListener("wheel", stop, { once: true, passive: true });
  window.addEventListener("touchstart", stop, { once: true, passive: true });
};

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 600);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <Button
      aria-label="Back to top"
      size="icon"
      isDisabled={!visible}
      excludeFromTabOrder={!visible}
      onPress={scrollToTop}
      className={`fixed right-4 bottom-4 z-40 shadow-lg transition-[opacity,translate] sm:right-6 sm:bottom-6 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0 disabled:opacity-0"
      }`}
    >
      <ArrowUp aria-hidden className="size-5" />
    </Button>
  );
};
