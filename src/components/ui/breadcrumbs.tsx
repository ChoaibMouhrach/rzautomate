"use client";

import {
  Breadcrumb,
  Breadcrumbs as AriaBreadcrumbs,
} from "react-aria-components";
import { Link } from "@/components/ui/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: readonly BreadcrumbItem[] }) {
  return (
    <AriaBreadcrumbs className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <Breadcrumb key={item.label} className="flex items-center gap-2">
            {isLast ? (
              <Link
                className="cursor-default text-foreground hover:no-underline"
              >
                {item.label}
              </Link>
            ) : (
              <Link href={item.href} variant="muted">
                {item.label}
              </Link>
            )}
            {!isLast && <span aria-hidden>/</span>}
          </Breadcrumb>
        );
      })}
    </AriaBreadcrumbs>
  );
}
