import { notFound } from "next/navigation";
import { ogCard, ogContentType, ogSize } from "@/components/site/og-card";
import { getService, services } from "@/lib/services";

export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function Image(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) notFound();
  return ogCard({ eyebrow: "Service", title: service.title });
}
