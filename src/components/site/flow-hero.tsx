import { CircleCheck, Inbox, Sparkles } from "lucide-react";
import { Fragment, type ReactNode } from "react";

const delay = (seconds: number) => ({ animationDelay: `${seconds}s` });

const positions = [
  "xl:left-0 xl:top-0",
  "xl:left-[352px] xl:top-14",
  "xl:left-[704px] xl:top-0",
];

const icons = [Inbox, Sparkles, CircleCheck];

const cardDelays = [0.2, 0.8, 1.4];

const handoffStart = 2.4;
const cycle = 6;
const stage = (fraction: number) => ({
  animationDelay: `${(handoffStart + fraction * cycle).toFixed(2)}s`,
});
const receiveAt = [0, 0.22, 0.78];

const connectors = [
  { d: "M288 88 C 320 88, 320 144, 352 144", delay: 0.4 },
  { d: "M640 144 C 672 144, 672 88, 704 88", delay: 1 },
];

const dots = [
  { cx: 288, cy: 88, delay: 0.4 },
  { cx: 352, cy: 144, delay: 0.8 },
  { cx: 640, cy: 144, delay: 1 },
  { cx: 704, cy: 88, delay: 1.4 },
];

export const FlowHero = ({
  title,
  description,
  flow,
  showProgress = false,
  handoff = false,
  children,
}: {
  title: string;
  description: string;
  flow: readonly { tag: string; title: string; meta: string }[];
  showProgress?: boolean;
  handoff?: boolean;
  children: ReactNode;
}) => (
  <section className="pb-8 pt-12 md:pb-12 md:pt-20">
    <div className="page-container">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="animate-fade-slide-in text-balance text-5xl font-semibold leading-[1.02] tracking-tighter sm:text-6xl md:text-7xl">
          {title}
        </h1>
        <p
          className="animate-fade-slide-in mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
          style={delay(0.15)}
        >
          {description}
        </p>
        <div className="animate-fade-slide-in mt-10" style={delay(0.3)}>
          {children}
        </div>
      </div>
      <div
        className="animate-fade-slide-in relative isolate mt-14 overflow-hidden rounded-[2rem] md:mt-20"
        style={delay(0.45)}
      >
        <img
          src="/hero-bg.webp" width={1600} height={900}
          alt=""
          fetchPriority="high"
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <ol className="flex flex-col items-center p-6 md:px-12 md:py-20 xl:relative xl:mx-auto xl:block xl:h-[232px] xl:w-[992px] xl:my-24 xl:p-0">
          <svg
            aria-hidden
            viewBox="0 0 992 232"
            className="pointer-events-none absolute inset-0 hidden size-full xl:block"
          >
            {connectors.map(({ d, delay }) => (
              <g key={d}>
                <path
                  d={d}
                  fill="none"
                  pathLength="100"
                  stroke="white"
                  strokeOpacity="0.45"
                  strokeWidth="2"
                  className="draw-path"
                  style={{ animationDelay: `${delay}s` }}
                />
                <g
                  className="fade-dot"
                  style={{ animationDelay: `${delay + 0.4}s` }}
                >
                  <path
                    d={d}
                    fill="none"
                    pathLength="100"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className={handoff ? "hidden" : "beam-path stroke-primary"}
                  />
                </g>
              </g>
            ))}
            {dots.map(({ cx, cy, delay }) => (
              <circle
                key={`${cx}-${cy}`}
                cx={cx}
                cy={cy}
                r="5"
                fill="white"
                className="fade-dot"
                style={{ animationDelay: `${delay}s` }}
              />
            ))}
            {handoff &&
              connectors.map(({ d }, connectorIndex) => (
                <circle
                  key={`packet-${d}`}
                  r="7"
                  className="handoff-packet fill-primary stroke-white"
                  strokeWidth="3"
                  style={{
                    offsetPath: `path("${d}")`,
                    ...stage(connectorIndex === 0 ? 0.06 : 0.62),
                  }}
                />
              ))}
          </svg>
          {flow.map((card, index) => {
            const Icon = icons[index];
            return (
            <Fragment key={card.tag}>
              <li
                style={{ animationDelay: `${cardDelays[index]}s` }}
                className={`animate-stack-in relative h-44 w-full max-w-sm rounded-3xl bg-background p-6 xl:absolute xl:w-72 ${positions[index]}`}
              >
                {handoff && index === 1 && (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl"
                  >
                    <span
                      style={stage(0.25)}
                      className="handoff-shimmer absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-primary/15 to-transparent"
                    />
                  </span>
                )}
                <div className="flex items-center justify-between">
                  <span
                    style={handoff ? stage(receiveAt[index]) : undefined}
                    className={`relative flex size-10 items-center justify-center rounded-full ${handoff ? "handoff-pop" : ""} ${
                      index === flow.length - 1
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    {handoff && (
                      <span
                        aria-hidden
                        style={stage(receiveAt[index])}
                        className="handoff-ring absolute inset-0 rounded-full ring-2 ring-primary"
                      />
                    )}
                    <Icon
                      aria-hidden
                      style={handoff && index === 1 ? stage(0.24) : undefined}
                      className={`size-5 ${handoff && index === 1 ? "handoff-spin" : ""}`}
                    />
                  </span>
                  <span className="text-xs font-medium text-muted-foreground">
                    {card.tag}
                  </span>
                </div>
                <p className="mt-4 text-xl font-semibold tracking-tight">
                  {card.title}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {card.meta}
                </p>
                {showProgress && index === 1 && (
                  <div className="mt-3 h-1.5 rounded-full bg-muted">
                    <div className="h-full w-[82%] rounded-full bg-primary" />
                  </div>
                )}
              </li>
              {index < flow.length - 1 && (
                <li
                  aria-hidden
                  style={{ animationDelay: `${cardDelays[index] + 0.3}s` }}
                  className="animate-stack-in flex flex-col items-center xl:hidden"
                >
                  <span className="size-2 rounded-full bg-white" />
                  <span className="beam-link relative h-10 w-px overflow-hidden bg-white/30" />
                  <span className="size-2 rounded-full bg-white" />
                </li>
              )}
            </Fragment>
            );
          })}
        </ol>
      </div>
    </div>
  </section>
);
