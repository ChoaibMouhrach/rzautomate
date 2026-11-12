import { ArrowUp, Check, CheckCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { FreeText } from "@/components/ui/free-text";
import { LinkButton } from "@/components/ui/link";
import { auditHref, bookHref, bookingLabel, hero } from "./content";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const messages = hero.phone.messages;

const PhoneChat = () => {
  const [visible, setVisible] = useState<number>(messages.length);
  const [draft, setDraft] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

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
        if (!(await wait(600))) return;
        for (const [index, message] of messages.entries()) {
          if (message.from === "customer") {
            for (let length = 1; length <= message.text.length; length++) {
              setDraft(message.text.slice(0, length));
              if (!(await wait(16))) return;
            }
            if (!(await wait(300))) return;
            setIsSending(true);
            if (!(await wait(150))) return;
            setIsSending(false);
            setDraft("");
            setVisible(index + 1);
            if (!(await wait(600))) return;
          } else {
            setIsTyping(true);
            if (!(await wait(900))) return;
            setIsTyping(false);
            setVisible(index + 1);
            if (!(await wait(700))) return;
          }
        }
        if (!(await wait(4500))) return;
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <figure className="mx-auto flex h-full w-full max-w-sm flex-col">
      <div className="flex flex-1 flex-col rounded-[2.75rem] bg-ink p-3 shadow-2xl">
        <div className="flex flex-1 flex-col overflow-hidden rounded-[2.1rem] bg-background">
          <div className="flex items-center gap-3 bg-muted px-5 py-4">
            <span className="relative flex size-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
              {hero.phone.agent[0]}
              <span className="absolute bottom-0 right-0 size-3 rounded-full bg-emerald-500 ring-2 ring-muted" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold">
                {hero.phone.agent}
                <span className="font-normal text-muted-foreground">
                  {" "}
                  · {hero.phone.role}
                </span>
              </p>
              <p className="mt-0.5 text-xs text-emerald-600 dark:text-emerald-400">
                {hero.phone.status}
              </p>
            </div>
          </div>
          <div className="relative min-h-[26rem] flex-1">
            <div className="absolute inset-0 flex flex-col justify-end gap-3 overflow-hidden px-4 py-5 [mask-image:linear-gradient(to_bottom,transparent,black_14%)]">
            {messages.slice(0, visible).map((message, index) => {
              const isCustomer = message.from === "customer";
              const isSeen = isTyping || visible > index + 1;
              return (
                <div
                  key={message.text}
                  className={`animate-stack-in flex flex-col gap-1 ${isCustomer ? "items-end" : "items-start"}`}
                >
                  <p
                    className={`max-w-[85%] rounded-3xl px-4 py-2.5 text-sm ${
                      isCustomer
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    {message.text}
                  </p>
                  {"tag" in message && (
                    <span className="px-2 text-xs text-muted-foreground">
                      {message.tag}
                    </span>
                  )}
                  {isCustomer && (
                    <span className="flex items-center gap-1 px-2 text-xs text-muted-foreground">
                      {isSeen ? (
                        <CheckCheck aria-hidden className="size-3.5 text-primary" />
                      ) : (
                        <Check aria-hidden className="size-3.5" />
                      )}
                      {isSeen ? "Seen" : "Delivered"}
                    </span>
                  )}
                </div>
              );
            })}
            {isTyping && (
              <div className="animate-stack-in flex w-fit items-center gap-1 rounded-3xl bg-muted px-4 py-3.5">
                {[0, 1, 2].map((dot) => (
                  <span
                    key={dot}
                    style={{ animationDelay: `${dot * 150}ms` }}
                    className="size-1.5 animate-pulse rounded-full bg-muted-foreground"
                  />
                ))}
              </div>
            )}
            </div>
          </div>
          <div aria-hidden className="flex items-center gap-2 px-4 pb-4">
            <div className="flex h-12 min-w-0 flex-1 items-center rounded-full bg-muted px-5 text-sm">
              {draft ? (
                <span className="truncate text-foreground">
                  {draft}
                  <span className="ml-px inline-block h-4 w-px translate-y-0.5 bg-foreground" />
                </span>
              ) : (
                <span className="text-muted-foreground">Type a message…</span>
              )}
            </div>
            <span
              className={`flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-150 ${isSending ? "scale-90" : ""} ${draft ? "" : "opacity-60"}`}
            >
              <ArrowUp className="size-5" />
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
        <PhoneChat />
      </div>
    </div>
  </section>
);
