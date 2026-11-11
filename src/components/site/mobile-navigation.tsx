"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Logo } from "@/components/site/logo";
import { LinkButton } from "@/components/ui/link";
import { nav } from "@/lib/site";

const itemMotion =
  "transition-[opacity,transform,background-color] duration-150 ease-out motion-reduce:transition-none";

const rowClass =
  "flex items-center justify-between rounded-3xl bg-muted px-6 py-5 text-2xl font-semibold tracking-tighter text-foreground no-underline hover:bg-foreground/8 hover:no-underline";

export const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsShown(isOpen));
    return () => cancelAnimationFrame(frame);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const close = () => setIsOpen(false);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.documentElement.style.overflow = "hidden";
    addEventListener("keydown", onKeyDown);
    document.addEventListener("astro:before-swap", close);
    return () => {
      document.documentElement.style.overflow = "";
      removeEventListener("keydown", onKeyDown);
      document.removeEventListener("astro:before-swap", close);
    };
  }, [isOpen]);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={isOpen}
        onClick={() => {
          setHasOpened(true);
          setIsOpen(true);
        }}
        className="flex size-10 items-center justify-center rounded-full bg-muted text-foreground transition-colors hover:bg-foreground/8"
      >
        <Menu aria-hidden className="size-5" />
      </button>
      {hasOpened &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            inert={!isOpen}
            className={`fixed inset-0 z-50 flex h-dvh flex-col overflow-hidden bg-background transition-[opacity,transform,visibility] duration-150 ease-out motion-reduce:transition-none ${
              isShown
                ? "visible scale-100 opacity-100"
                : "invisible scale-[0.98] opacity-0"
            }`}
            onClick={(event) => {
              if (
                event.target instanceof Element &&
                event.target.closest("a[href]")
              ) {
                setIsOpen(false);
              }
            }}
          >
            <div className="flex h-20 shrink-0 items-center justify-between px-6">
              <a href="/" aria-label="Home">
                <Logo />
              </a>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setIsOpen(false)}
                className="flex size-10 items-center justify-center rounded-full bg-muted text-foreground transition-colors hover:bg-foreground/8"
              >
                <X aria-hidden className="size-5" />
              </button>
            </div>
            <nav
              aria-label="Mobile navigation"
              className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto overscroll-contain px-4 pb-4"
            >
              {nav.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  style={{ transitionDelay: isShown ? `${index * 30}ms` : "0ms" }}
                  className={`${rowClass} ${itemMotion} ${isShown ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}
                >
                  {item.label}
                  <ArrowRight aria-hidden className="size-5 text-primary" />
                </a>
              ))}
              <LinkButton
                href="/contact"
                size="lg"
                style={{ transitionDelay: isShown ? `${nav.length * 30}ms` : "0ms" }}
                className={`${itemMotion} ${isShown ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"} mt-auto h-auto min-h-16 shrink-0 rounded-3xl text-lg`}
              >
                Book a free call
              </LinkButton>
            </nav>
          </div>,
          document.body,
        )}
    </div>
  );
};
