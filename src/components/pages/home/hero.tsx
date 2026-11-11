import { Fragment } from "react";
import { BookCallButton } from "./book-call-button";
import { hero, services } from "./content";

const delay = (seconds: number) => ({ animationDelay: `${seconds}s` });

const flow = services.items[0].stack;

const positions = [
  "xl:left-0 xl:top-0",
  "xl:left-[352px] xl:top-14",
  "xl:left-[704px] xl:top-0",
];

const cardDelays = [0.2, 0.8, 1.4];

const connectors = [
  { d: "M288 80 C 320 80, 320 136, 352 136", delay: 0.4 },
  { d: "M640 136 C 672 136, 672 80, 704 80", delay: 1 },
];

const dots = [
  { cx: 288, cy: 80, delay: 0.4 },
  { cx: 352, cy: 136, delay: 0.8 },
  { cx: 640, cy: 136, delay: 1 },
  { cx: 704, cy: 80, delay: 1.4 },
];

export const Hero = () => (
  <section className="pb-8 pt-12 md:pb-12 md:pt-20">
    <div className="page-container">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="animate-fade-slide-in text-balance text-5xl font-semibold leading-[1.02] tracking-tighter sm:text-6xl md:text-7xl">
          {hero.title}
        </h1>
        <p
          className="animate-fade-slide-in mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
          style={delay(0.15)}
        >
          {hero.description}
        </p>
        <div className="animate-fade-slide-in mt-10" style={delay(0.3)}>
          <BookCallButton size="lg" />
        </div>
      </div>
      <div
        className="animate-fade-slide-in relative isolate mt-14 overflow-hidden rounded-[2rem] md:mt-20"
        style={delay(0.45)}
      >
        <img
          src="/hero-bg.jpg"
          alt=""
          fetchPriority="high"
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <ol className="flex flex-col items-center p-6 md:px-12 md:py-20 xl:relative xl:mx-auto xl:block xl:h-[216px] xl:w-[992px] xl:my-24 xl:p-0">
          <svg
            aria-hidden
            viewBox="0 0 992 216"
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
                    className="beam-path stroke-primary"
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
          </svg>
          {flow.map((card, index) => (
            <Fragment key={card.tag}>
              <li
                style={{ animationDelay: `${cardDelays[index]}s` }}
                className={`animate-stack-in h-40 w-full max-w-sm rounded-3xl bg-background p-6 xl:absolute xl:w-72 ${positions[index]}`}
              >
                <span
                  className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                    card.tag === "Done"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {card.tag}
                </span>
                <p className="mt-4 text-xl font-semibold tracking-tight">
                  {card.title}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {card.meta}
                </p>
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
          ))}
        </ol>
      </div>
    </div>
  </section>
);
