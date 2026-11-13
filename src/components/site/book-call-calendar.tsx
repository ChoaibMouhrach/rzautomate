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
        <ScrollArea className="h-full max-h-full">
          <Cal
            namespace={namespace}
            calOrigin={origin}
            calLink={calLink}
            config={{
              layout: "month_view",
              theme: calTheme,
              ...(service && { "metadata[service]": service }),
            }}
            className={`w-[calc(100%+1rem)] max-w-none [&_cal-inline]:block [&_cal-inline]:w-full transition-opacity duration-300 ${isReady ? "opacity-100" : "opacity-0"}`}
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
