import Cal, { getCalApi } from "@calcom/embed-react";
import { Loader2 } from "lucide-react";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { site } from "@/lib/site";

const namespace = "book-call";
const { origin, pathname } = new URL(site.bookingUrl);
const calLink = pathname.slice(1);
const fallbackMs = 10000;
const holdMs = 900;
const interactionMs = 1500;
const settleMs = 300;
const guardMs = 1500;
const holdActions = ["__dimensionChanged", "__routeChanged"] as const;

const subscribeToTheme = (callback: () => void) => {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
};

const readIsDark = () => document.documentElement.classList.contains("dark");

export const BookCallCalendar = ({
  tone = "light",
  service,
}: {
  tone?: "light" | "dark";
  service?: string;
}) => {
  const [isReady, setIsReady] = useState(false);
  const isDark = useSyncExternalStore(subscribeToTheme, readIsDark, () => false);
  const calTheme = isDark ? "dark" : "light";
  const container = useRef<HTMLDivElement>(null);
  const isGuarding = useRef(true);

  useEffect(() => {
    if (!isReady) return;
    const timeout = setTimeout(() => {
      isGuarding.current = false;
    }, guardMs);
    return () => clearTimeout(timeout);
  }, [isReady]);

  useEffect(() => {
    let guardY = window.scrollY;
    let userUntil = 0;
    let isPointerDown = false;
    const allow = (ms: number) => {
      userUntil = Date.now() + ms;
    };
    const guard = () => {
      if (!isGuarding.current) return;
      if (isPointerDown || Date.now() < userUntil) {
        guardY = window.scrollY;
        return;
      }
      if (Math.abs(window.scrollY - guardY) > 2) {
        window.scrollTo({ top: guardY, behavior: "instant" });
      }
    };
    const onWheel = () => allow(250);
    const onKey = () => allow(800);
    const onClick = () => allow(1500);
    const onTouchEnd = () => allow(1500);
    const onPointerDown = () => {
      isPointerDown = true;
    };
    const onPointerUp = () => {
      isPointerDown = false;
      allow(500);
    };
    window.addEventListener("scroll", guard, { passive: true });
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("keydown", onKey);
    window.addEventListener("click", onClick);
    window.addEventListener("touchmove", onTouchEnd, { passive: true });
    window.addEventListener("touchend", onTouchEnd);
    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);
    return () => {
      window.removeEventListener("scroll", guard);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("click", onClick);
      window.removeEventListener("touchmove", onTouchEnd);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
    };
  }, []);

  useEffect(() => {
    getCalApi({ namespace }).then((cal) => {
      cal("ui", { theme: calTheme } as never);
    });
  }, [calTheme]);

  useEffect(() => {
    let isActive = true;
    let holdY = 0;
    let holdUntil = 0;
    let interactedAt = 0;

    const markInteraction = () => {
      if (container.current?.contains(document.activeElement)) {
        interactedAt = Date.now();
      }
    };

    const hold = () => {
      if (Date.now() - interactedAt > interactionMs) return;
      holdY = window.scrollY;
      holdUntil = Date.now() + holdMs;
      const inline = container.current?.querySelector("cal-inline");
      if (inline) inline.scrollIntoView = () => {};
    };
    const restore = () => {
      if (Date.now() < holdUntil && Math.abs(window.scrollY - holdY) > 2) {
        window.scrollTo(0, holdY);
      }
    };
    window.addEventListener("scroll", restore, { passive: true });
    window.addEventListener("blur", markInteraction);

    let isLinked = false;
    let settle: ReturnType<typeof setTimeout> | undefined;
    const scheduleReady = () => {
      if (!isLinked) return;
      clearTimeout(settle);
      settle = setTimeout(() => setIsReady(true), settleMs);
    };

    const timeout = setTimeout(() => setIsReady(true), fallbackMs);
    getCalApi({ namespace }).then((cal) => {
      if (!isActive) return;
      cal("on", {
        action: "linkReady",
        callback: () => {
          isLinked = true;
          scheduleReady();
        },
      });
      cal("on", {
        action: "__dimensionChanged",
        callback: scheduleReady,
      } as never);
      for (const action of holdActions) {
        cal("on", { action, callback: hold } as never);
      }
    });
    return () => {
      isActive = false;
      clearTimeout(timeout);
      clearTimeout(settle);
      window.removeEventListener("scroll", restore);
      window.removeEventListener("blur", markInteraction);
    };
  }, []);

  return (
    <div
      className={`flex h-full flex-col rounded-3xl p-4 sm:p-6 lg:absolute lg:inset-0 ${tone === "dark" ? "bg-white/5" : "bg-muted"}`}
    >
      <div
        ref={container}
        className="relative min-h-0 flex-1 overflow-hidden rounded-2xl bg-paper text-ink dark:bg-[#101010] dark:text-paper"
      >
        {!isReady && (
          <span
            role="status"
            className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-sm text-ink/60 dark:text-paper/60"
          >
            <Loader2
              aria-hidden
              className="size-6 animate-spin motion-reduce:animate-none"
            />
            Loading the calendar…
          </span>
        )}
        <ScrollArea className="h-full max-h-full [&>div]:overflow-x-hidden!">
          <Cal
            namespace={namespace}
            calOrigin={origin}
            calLink={calLink}
            config={{
              layout: "month_view",
              theme: calTheme,
              ...(service && { "metadata[service]": service }),
            }}
            className={`w-full max-w-full [&_cal-inline]:block [&_cal-inline]:w-full [&_cal-inline]:max-w-full transition-opacity duration-300 ${isReady ? "opacity-100" : "opacity-0"}`}
          />
        </ScrollArea>
      </div>
      <p
        className={`mt-4 text-sm ${tone === "dark" ? "text-paper/60" : "text-muted-foreground"}`}
      >
        After the call, we send you a written plan. You keep it either way.{" "}
        <a
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`font-medium underline-offset-4 hover:underline ${tone === "dark" ? "text-paper" : "text-foreground"}`}
        >
          Book a free 30-minute call on Cal.com
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </p>
    </div>
  );
};
