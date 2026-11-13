import { ArrowUpRight, BookOpen, Calculator, Layers, MessageCircle } from "lucide-react";
import { LinkButton } from "@/components/ui/link";

const delay = (seconds: number) => ({ animationDelay: `${seconds}s` });

const destinations = [
  {
    href: "/services",
    icon: Layers,
    title: "Services",
    description: "What we build and automate for you.",
  },
  {
    href: "/tools/automation-roi-calculator",
    icon: Calculator,
    title: "ROI calculator",
    description: "See what automating a task is worth.",
  },
  {
    href: "/blog",
    icon: BookOpen,
    title: "Blog",
    description: "Practical notes on AI and automation.",
  },
  {
    href: "/contact",
    icon: MessageCircle,
    title: "Contact",
    description: "Talk to the engineer who builds the work.",
  },
];

export const NotFoundContent = () => (
  <section className="pb-24 pt-16 sm:pt-24">
    <div className="page-container">
      <div className="mx-auto max-w-3xl text-center">
        <p
          aria-hidden="true"
          className="animate-fade-slide-in select-none text-[8rem] font-semibold leading-none tracking-tighter text-muted sm:text-[12rem]"
        >
          4<span className="text-primary">0</span>4
        </p>
        <div
          className="animate-fade-slide-in -mt-6 inline-flex items-center gap-2 rounded-full bg-muted px-4 py-1.5 text-sm font-medium text-muted-foreground sm:-mt-10"
          style={delay(0.1)}
        >
          <span className="size-2 rounded-full bg-primary" />
          Step failed: page not found
        </div>
        <h1
          className="animate-fade-slide-in mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tighter sm:text-5xl md:text-6xl"
          style={delay(0.2)}
        >
          This page isn&rsquo;t in the workflow
        </h1>
        <p
          className="animate-fade-slide-in mx-auto mt-4 max-w-xl text-lg text-muted-foreground"
          style={delay(0.3)}
        >
          The link may be broken, or the page has moved. Head back and pick up
          where you left off.
        </p>
        <div
          className="animate-fade-slide-in mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
          style={delay(0.4)}
        >
          <LinkButton href="/" size="lg">
            Back to home
          </LinkButton>
        </div>
      </div>

      <ul
        className="animate-fade-slide-in mx-auto mt-20 grid max-w-4xl gap-4 sm:grid-cols-2"
        style={delay(0.5)}
      >
        {destinations.map(({ href, icon: Icon, title, description }) => (
          <li key={href}>
            <a
              href={href}
              className="group flex h-full items-start gap-4 rounded-2xl bg-muted p-6 no-underline transition-colors hover:bg-muted/70 hover:no-underline focus-visible:outline-2 focus-visible:outline-ring"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-background text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <span className="flex-1">
                <span className="block font-semibold tracking-tight">
                  {title}
                </span>
                <span className="mt-1 block text-sm text-muted-foreground">
                  {description}
                </span>
              </span>
              <ArrowUpRight
                className="size-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                aria-hidden="true"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
