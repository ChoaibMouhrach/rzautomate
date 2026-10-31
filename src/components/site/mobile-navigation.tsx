"use client";

import { useRef, type ReactNode } from "react";

export function MobileNavigation({ children }: { children: ReactNode }) {
  const menu = useRef<HTMLDetailsElement>(null);

  return (
    <nav aria-label="Mobile navigation" className="page-container pb-4 sm:hidden">
      <details
        ref={menu}
        className="group rounded-ui border border-border"
        onClick={(event) => {
          if (
            event.target instanceof Element &&
            event.target.closest("a[href]") &&
            menu.current
          ) {
            menu.current.open = false;
          }
        }}
      >
        <summary className="cursor-pointer px-4 py-3 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
          Menu
        </summary>
        {children}
      </details>
    </nav>
  );
}
