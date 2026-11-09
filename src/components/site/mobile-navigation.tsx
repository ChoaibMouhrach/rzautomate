"use client";

import { Menu } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetHeader, SheetTrigger } from "@/components/ui/sheet";

export const MobileNavigation = ({
  pathname,
  children,
}: {
  pathname: string;
  children: ReactNode;
}) => {
  const [openedOn, setOpenedOn] = useState<string | null>(null);
  const isOpen = openedOn === pathname;
  const setIsOpen = (open: boolean) => setOpenedOn(open ? pathname : null);

  return (
    <div className="sm:hidden">
      <SheetTrigger isOpen={isOpen} onOpenChange={setIsOpen}>
        <Button variant="secondary" size="icon" aria-label="Open menu">
          <Menu aria-hidden className="size-5" />
        </Button>
        <Sheet position="end" aria-label="Mobile navigation">
          <nav
            aria-label="Mobile navigation"
            onClickCapture={(event) => {
              if (
                event.target instanceof Element &&
                event.target.closest("a[href]")
              ) {
                setIsOpen(false);
              }
            }}
          >
            <SheetHeader>Menu</SheetHeader>
            {children}
          </nav>
        </Sheet>
      </SheetTrigger>
    </div>
  );
};
