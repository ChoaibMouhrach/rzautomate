import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageSocial } from "@/lib/metadata";
import { getModel, models } from "@/lib/models";
import { FableDetails } from "./fable-details";
import { ModelDetails } from "./model-details";

export function generateStaticParams() {
  return models.map((model) => ({ slug: model.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/models/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const model = getModel(slug);
  if (!model) notFound();
  const path = `/models/${model.slug}`;
  return {
    ...pageSocial({ title: model.slug === "claude-fable-5-1" ? "Claude Fable 5.1 API Pricing, Context Window & Specs" : model.name, description: model.description, path }),
    alternates: { canonical: path },
  };
}

export default async function ModelPage({
  params,
}: PageProps<"/models/[slug]">) {
  const { slug } = await params;
  const model = getModel(slug);
  if (!model) notFound();
  return model.slug === "claude-fable-5-1" ? <FableDetails /> : <ModelDetails model={model} />;
}
