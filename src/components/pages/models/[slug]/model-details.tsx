import {
  PageContent,
  PageDescription,
  PageHeader,
  PageTitle,
} from "@/components/site/page";
import { Link } from "@/components/ui/link";
import { formatPrice, formatTokens, modelsCheckedLabel, type AiModel } from "@/lib/models";

export function ModelDetails({ model }: { model: AiModel }) {
  const specifications = [
    ["Provider", model.provider],
    ["Model ID", model.modelId],
    ["Input / 1M tokens", formatPrice(model.inputPrice)],
    ["Output / 1M tokens", formatPrice(model.outputPrice)],
    ["Cached input / 1M tokens", formatPrice(model.cachedInputPrice)],
    ["Context window", `${formatTokens(model.context)} tokens`],
    ["Maximum output", `${formatTokens(model.output)} tokens`],
    ["Input types", "Text, image, PDF"],
    ["Output type", "Text"],
    ["Capabilities", "Reasoning, tool calling, structured output"],
    ["Weights", "Closed"],
    ["Release date", model.released],
  ];

  return (
    <>
      <PageHeader>
        <Link
          href="/models"
          variant="muted"
          className="mb-6 inline-block text-sm"
        >
          ← All AI models
        </Link>
        <PageTitle>{model.name}</PageTitle>
        <PageDescription>{model.description}</PageDescription>
      </PageHeader>
      <PageContent className="max-w-4xl">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight">
          Model specifications
        </h2>
        <dl className="divide-y divide-border rounded-xl border border-border px-6">
          {specifications.map(([label, value]) => (
            <div
              key={label}
              className="grid gap-2 py-5 sm:grid-cols-[12rem_1fr] sm:gap-6"
            >
              <dt className="text-sm text-muted-foreground">{label}</dt>
              <dd className="break-words text-sm font-medium">{value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 text-sm text-muted-foreground">{model.pricingNote}</p>
        <p className="mt-6 text-sm text-muted-foreground">
          Source: <Link href={model.source}>{model.name} on Models.dev</Link>.
          Checked {modelsCheckedLabel}. Check current provider documentation before
          choosing a model for production.
        </p>
      </PageContent>
    </>
  );
}
