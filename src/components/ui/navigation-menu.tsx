"use client";

import { NavigationMenu as BaseNavigationMenu } from "@base-ui/react/navigation-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { tv } from "@/lib/ui";

const trigger = tv({
  base: "flex cursor-pointer items-center gap-1 rounded-sm text-muted-foreground outline-0 transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring data-popup-open:text-foreground",
});

const link = tv({
  base: "block rounded-sm outline-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
  variants: {
    variant: {
      nav: "text-muted-foreground transition-colors hover:text-foreground",
      item: "rounded-ui p-3 transition-colors hover:bg-muted focus-visible:bg-muted focus-visible:outline-0",
    },
  },
  defaultVariants: { variant: "nav" },
});

export function NavigationMenu({ children }: { children: ReactNode }) {
  return (
    <BaseNavigationMenu.Root className="relative">
      <BaseNavigationMenu.List className="flex items-center gap-6">
        {children}
      </BaseNavigationMenu.List>
      <BaseNavigationMenu.Portal>
        <BaseNavigationMenu.Positioner
          sideOffset={12}
          align="start"
          className="z-50 h-(--positioner-height) w-(--positioner-width) max-w-(--available-width) transition-[top,left,right,bottom] duration-200 ease-out"
        >
          <BaseNavigationMenu.Popup className="relative h-(--popup-height) w-(--popup-width) origin-(--transform-origin) rounded-ui border border-border bg-background shadow-lg transition-[opacity,transform,width,height] duration-200 ease-out data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0">
            <BaseNavigationMenu.Viewport className="relative h-full w-full overflow-hidden" />
          </BaseNavigationMenu.Popup>
        </BaseNavigationMenu.Positioner>
      </BaseNavigationMenu.Portal>
    </BaseNavigationMenu.Root>
  );
}

export function NavigationMenuItem({ children }: { children: ReactNode }) {
  return <BaseNavigationMenu.Item>{children}</BaseNavigationMenu.Item>;
}

export function NavigationMenuTrigger({ children }: { children: ReactNode }) {
  return (
    <BaseNavigationMenu.Trigger className={trigger()}>
      {children}
      <BaseNavigationMenu.Icon className="transition-transform data-popup-open:rotate-180">
        <ChevronDown aria-hidden className="size-4" />
      </BaseNavigationMenu.Icon>
    </BaseNavigationMenu.Trigger>
  );
}

export function NavigationMenuContent({
  className,
  ...props
}: ComponentProps<typeof BaseNavigationMenu.Content>) {
  return (
    <BaseNavigationMenu.Content
      className={`p-2 transition-[opacity,transform] duration-200 ease-out data-ending-style:opacity-0 data-starting-style:opacity-0 ${className ?? ""}`}
      {...props}
    />
  );
}

export function NavigationMenuLink({
  href,
  variant,
  className,
  children,
}: {
  href: string;
  variant?: "nav" | "item";
  className?: string;
  children: ReactNode;
}) {
  return (
    <BaseNavigationMenu.Link
      render={<Link href={href} />}
      className={link({ variant, className })}
    >
      {children}
    </BaseNavigationMenu.Link>
  );
}
