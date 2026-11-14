import { Link } from "@/components/ui/link";
import { LandingHeading, LandingSection } from "@/components/site/landing-section";
import type { ToolsContent } from "./types";

export const Tools = ({ tools }: { tools: ToolsContent }) => (
  <LandingSection className="bg-tint">
    <div className="mx-auto max-w-2xl text-center">
      <LandingHeading>{tools.heading}</LandingHeading>
    </div>
    <ul className="mx-auto mt-14 grid max-w-5xl grid-cols-4 gap-2 md:grid-cols-6 md:gap-3">
      <li className="col-span-4 flex flex-col items-center justify-center gap-2 rounded-3xl bg-primary p-8 text-center text-primary-foreground md:order-none md:col-span-2 md:col-start-3 md:row-span-2 md:row-start-2 md:p-10">
        <p className="text-2xl font-semibold tracking-tighter md:text-3xl">
          {tools.centerTitle}
        </p>
        <p className="text-primary-foreground">{tools.centerLine}</p>
      </li>
      {tools.logos.map((tool) => (
        <li
          key={tool.name}
          className="flex aspect-square items-center justify-center rounded-2xl bg-background dark:bg-white"
        >
          {tool.href ? (
            <a href={tool.href} aria-label={tool.ariaLabel} className="flex size-full items-center justify-center rounded-2xl focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring">
              <img src={tool.src} alt="" title={tool.name} loading="lazy" className="size-[45%] object-contain" />
            </a>
          ) : (
            <img
              src={tool.src}
              alt={tool.name}
              title={tool.name}
              loading="lazy"
              className="size-[45%] object-contain"
            />
          )}
        </li>
      ))}
    </ul>
    {tools.footnote && (
      <p className="mx-auto mt-8 max-w-5xl text-center text-muted-foreground">
        {tools.footnote.map((part, index) =>
          typeof part === "string" ? part : <Link key={index} href={part.href}>{part.label}</Link>,
        )}
      </p>
    )}
  </LandingSection>
);
