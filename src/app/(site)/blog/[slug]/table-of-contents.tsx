"use client";

import { useEffect, useState } from "react";
import { Link } from "@/components/ui/link";

export interface TocItem {
  id: string;
  label: string;
  level: 2 | 3 | 4;
}

const indent = { 2: "pl-4", 3: "pl-8", 4: "pl-12" } as const;

export function TableOfContents({ items }: { items: readonly TocItem[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "0px 0px -70% 0px" },
    );
    for (const { id } of items) {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    }
    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav aria-label="On this page" className="text-sm">
      <p className="font-medium">On this page</p>
      <ul className="mt-3 flex flex-col gap-2 border-l border-border">
        {items.map((item) => (
          <li key={item.id}>
            <Link
              href={`#${item.id}`}
              variant="muted"
              aria-current={activeId === item.id ? "location" : undefined}
              className={`-ml-px block border-l py-0.5 no-underline ${indent[item.level]} ${
                activeId === item.id
                  ? "border-primary text-foreground"
                  : "border-transparent"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
