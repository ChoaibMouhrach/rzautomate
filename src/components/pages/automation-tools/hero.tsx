import { PageDescription } from "@/components/site/page";
import { sortedByPrice, toolHref } from "@/lib/automation-tools";
import { ToolLogo } from "./tool-logo";

export const Hero = () => (
  <header className="page-container pb-10 pt-12 text-center md:pb-14 md:pt-20">
    <div className="animate-fade-slide-in mx-auto max-w-180">
      <h1 className="text-balance text-5xl font-semibold leading-[1.02] tracking-tighter sm:text-6xl md:text-7xl">Compare workflow automation tools</h1>
      <PageDescription>Compare the pricing of n8n, Zapier, Make and other automation tools in one place. See what each one costs, what you actually get charged for, and which has a free plan. Prices come straight from each tool&apos;s own pricing page.</PageDescription>
      <ul className="mt-8 flex flex-wrap justify-center gap-2">
        {sortedByPrice.map((tool) => (
          <li key={tool.slug}>
            <a href={toolHref(tool)} className="inline-flex items-center gap-2 rounded-full bg-muted py-2 pl-2.5 pr-4 text-sm font-medium transition-colors hover:bg-muted/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
              <ToolLogo tool={tool} className="size-5" />
              {tool.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </header>
);
