import { PageDescription } from "@/components/site/page";
import { models } from "@/lib/models";
import { ProviderLogo } from "./provider-logo";

const providers = [...new Set(models.map((model) => model.provider))];

export const Hero = () => (
  <header className="page-container pb-10 pt-12 text-center md:pb-14 md:pt-20">
    <div className="animate-fade-slide-in mx-auto max-w-180">
      <h1 className="text-balance text-5xl font-semibold leading-[1.02] tracking-tighter sm:text-6xl md:text-7xl">Compare AI models</h1>
      <PageDescription>Every major AI model in one table, priced per 1 million tokens. See what each one costs, how much it can read at once, and what a real job like answering support emails would cost you. Prices come from each provider&apos;s own pricing page.</PageDescription>
      <ul className="mt-8 flex flex-wrap justify-center gap-2">
        {providers.map((provider) => (
          <li key={provider}>
            <a href={`/models?provider=${encodeURIComponent(provider)}#models`} className="inline-flex items-center gap-2 rounded-full bg-muted py-2 pl-2.5 pr-4 text-sm font-medium transition-colors hover:bg-muted/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
              <ProviderLogo provider={provider} className="size-5" />
              {provider}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </header>
);
