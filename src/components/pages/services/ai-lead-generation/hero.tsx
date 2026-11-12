import { Check, CheckCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { FreeText } from "@/components/ui/free-text";
import { LinkButton } from "@/components/ui/link";
import { bookingLabel } from "@/components/site/service-page/constants";
import { auditHref, bookHref, hero } from "./content";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const { steps } = hero.browser;

const LeadBrowser = () => {
  const [visible, setVisible] = useState<number>(steps.length);
  const [isApproving, setIsApproving] = useState(false);
  const [isSent, setIsSent] = useState(true);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let cancelled = false;
    const wait = async (ms: number) => {
      await sleep(ms);
      return !cancelled;
    };

    const run = async () => {
      if (!(await wait(2500))) return;
      while (!cancelled) {
        setVisible(0);
        setIsSent(false);
        if (!(await wait(700))) return;
        for (let count = 1; count <= steps.length; count++) {
          setVisible(count);
          if (!(await wait(900))) return;
        }
        if (!(await wait(700))) return;
        setIsApproving(true);
        if (!(await wait(250))) return;
        setIsApproving(false);
        setIsSent(true);
        if (!(await wait(4500))) return;
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <figure className="mx-auto flex h-full w-full max-w-lg flex-col">
      <div className="flex flex-1 flex-col overflow-hidden rounded-3xl bg-ink shadow-2xl dark:bg-[#26272d] dark:ring-1 dark:ring-white/10">
        <div className="flex items-center gap-3 px-5 py-4">
          <span className="flex gap-1.5">
            <span className="size-3 rounded-full bg-[#ff5f57]" />
            <span className="size-3 rounded-full bg-[#febc2e]" />
            <span className="size-3 rounded-full bg-[#28c840]" />
          </span>
          <span className="mx-auto w-full max-w-64 truncate rounded-full bg-white/10 px-4 py-1.5 text-center text-xs text-paper/70">
            {hero.browser.url}
          </span>
          <span className="w-12" />
        </div>
        <div className="flex flex-1 flex-col bg-background">
          <div className="flex items-center gap-3 bg-muted px-6 py-4 dark:bg-foreground/6">
            <span className="flex size-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
              {hero.browser.lead.initial}
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold">{hero.browser.lead.name}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {hero.browser.lead.line}
              </p>
            </div>
          </div>
          <div className="relative min-h-[24rem] flex-1">
            <ol className="absolute inset-0 flex flex-col justify-end gap-2 overflow-hidden px-4 py-4 [mask-image:linear-gradient(to_bottom,transparent,black_28%)]">
              {steps.slice(0, visible).map((step, index) => {
                const isLast = index === steps.length - 1;
                const done = isLast && isSent;
                return (
                  <li
                    key={step.status}
                    className="animate-stack-in rounded-2xl bg-muted p-4 dark:bg-foreground/8"
                  >
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                        isLast
                          ? "bg-primary text-primary-foreground"
                          : "bg-background text-muted-foreground dark:bg-foreground/10"
                      }`}
                    >
                      {done ? hero.browser.sent : step.status}
                    </span>
                    <p className="mt-2 text-sm font-medium">{step.text}</p>
                    <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
                      {done && <CheckCheck aria-hidden className="size-3.5 text-primary" />}
                      {done ? "Delivered to Sarah" : step.meta}
                    </p>
                  </li>
                );
              })}
            </ol>
          </div>
          <div aria-hidden className="flex justify-end px-4 pb-4">
            <span
              className={`inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-transform duration-150 ${isApproving ? "scale-95" : ""} ${visible < steps.length ? "opacity-50" : ""}`}
            >
              {isSent && visible === steps.length ? (
                <Check className="size-4" />
              ) : null}
              {hero.browser.approve}
            </span>
          </div>
        </div>
      </div>
    </figure>
  );
};

export const Hero = () => (
  <section className="pb-12 pt-8 md:pb-20 md:pt-12">
    <div className="page-container">
      <div className="grid gap-14 lg:grid-cols-[11fr_9fr] lg:gap-16">
        <div className="self-center">
          <p className="w-fit rounded-full bg-muted px-4 py-1.5 text-sm font-medium text-muted-foreground">
            {hero.eyebrow}
          </p>
          <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.02] tracking-tighter sm:text-6xl md:text-7xl">
            {hero.line1} {hero.line2}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            {hero.subhead}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <LinkButton href={bookHref} size="lg">
              {bookingLabel}
            </LinkButton>
            <LinkButton href={auditHref} size="lg" variant="ghost">
              {hero.secondary}
            </LinkButton>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            <FreeText>{hero.trust}</FreeText>
          </p>
        </div>
        <LeadBrowser />
      </div>
    </div>
  </section>
);
