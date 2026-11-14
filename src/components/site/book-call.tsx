import { Clock, Mail } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { BookCallStats } from "@/components/site/book-call-stats";
import { BookCallCalendar } from "@/components/site/book-call-calendar";
import { CopyButton } from "@/components/ui/copy-button";
import { FreeText } from "@/components/ui/free-text";
import { site } from "@/lib/site";

const entrance = (animated: boolean, delay: number) =>
  animated
    ? {
        className: "animate-fade-slide-in",
        style: { animationDelay: `${delay}s` },
      }
    : { className: "", style: undefined };

export const bookCallCopy = {
  title: "Book a free 30-minute call",
  description:
    "We’ll go through how your business runs today, find the bottlenecks that slow down your leads, customers or operations, and show you exactly where automation would help you grow. No slide deck and no sales pitch, just a working session with the people who’d build it. Afterwards you get a written plan you can use, whether we work together or not.",
} as const;

export interface BookCallProps {
  title?: string;
  description?: string;
  headingAs?: "h1" | "h2";
  id?: string;
  service?: string;
  source?: string;
  model?: string;
  animated?: boolean;
  tone?: "light" | "dark";
  className?: string;
}

export const BookCall = ({
  title = bookCallCopy.title,
  description = bookCallCopy.description,
  headingAs: Heading = "h2",
  id,
  service,
  source,
  model,
  animated = false,
  tone = "light",
  className,
}: BookCallProps) => {
  const isDark = tone === "dark";
  const muted = isDark ? "text-paper/60" : "text-muted-foreground";
  const chip = isDark ? "bg-white/10" : "bg-muted";
  const card = isDark ? "bg-white/10" : "bg-background";
  const first = entrance(animated, 0);
  const second = entrance(animated, 0.15);
  const third = entrance(animated, 0.3);

  return (
    <section
      id={id}
      className={twMerge(
        "scroll-mt-16 pb-16 pt-12 md:pb-24 md:pt-20",
        isDark && "py-16 md:py-24",
        className,
      )}
    >
      <div className="page-container">
        <div
          className={twMerge(
            "grid gap-12 lg:grid-cols-[5fr_6fr] lg:gap-16",
            isDark && "rounded-[2rem] bg-ink p-6 text-paper sm:p-10 md:p-14",
          )}
        >
          <div className="flex flex-col">
            <Heading
              className={twMerge(
                "text-balance font-semibold tracking-tighter",
                Heading === "h1"
                  ? "text-5xl leading-[1.02] sm:text-6xl"
                  : "text-4xl leading-[1.05] md:text-5xl",
                first.className,
              )}
            >
              <FreeText>{title}</FreeText>
            </Heading>
            <p
              className={twMerge(
                "mt-6 max-w-lg text-lg",
                isDark ? "text-paper/70" : "text-muted-foreground",
                second.className,
              )}
              style={second.style}
            >
              {description}
            </p>
            <ul
              className={twMerge(
                "mt-10 grid grid-cols-6 gap-2 rounded-3xl p-2",
                isDark ? "bg-white/5" : "bg-muted",
                third.className,
              )}
              style={third.style}
            >
              <li className={twMerge("col-span-4 flex flex-col justify-between gap-6 rounded-2xl p-4 sm:p-5", card)}>
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={twMerge(
                      "flex size-10 shrink-0 items-center justify-center rounded-full",
                      chip,
                    )}
                  >
                    <Mail aria-hidden className="size-5" />
                  </span>
                  <CopyButton
                    text={site.email}
                    label="Copy email address"
                    className={isDark ? "bg-white/10 text-paper hover:bg-white/20 pressed:bg-white/25" : undefined}
                  />
                </div>
                <div className="min-w-0">
                  <p className={twMerge("text-sm", muted)}>Email</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="break-all font-medium hover:underline"
                  >
                    {site.email}
                  </a>
                </div>
              </li>
              <li className={twMerge("col-span-2 flex flex-col justify-between gap-6 rounded-2xl p-4 sm:p-5", card)}>
                <span
                  className={twMerge(
                    "flex size-10 shrink-0 items-center justify-center rounded-full",
                    chip,
                  )}
                >
                  <Clock aria-hidden className="size-5" />
                </span>
                <div>
                  <p className={twMerge("text-sm", muted)}>Reply time</p>
                  <p className="font-medium leading-snug">Within two hours</p>
                </div>
              </li>
              <BookCallStats tone={tone} />
            </ul>
          </div>
          <div
            className={twMerge("relative h-160 lg:h-auto", third.className)}
            style={third.style}
          >
            <BookCallCalendar tone={tone} service={service} source={source} model={model} />
          </div>
        </div>
      </div>
    </section>
  );
};
