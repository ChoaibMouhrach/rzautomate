import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CallToAction } from "@/components/site/call-to-action";
import { pageSocial } from "@/lib/metadata";
import { getService, services } from "@/lib/services";
import { ServiceFeatures } from "./service-features";
import { ServiceHero } from "./service-hero";
import { ServiceJsonLd } from "./service-json-ld";
import { ServiceOutcomes } from "./service-outcomes";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata(
  props: PageProps<"/services/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) return {};
  return pageSocial({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}`,
    routeImage: true,
  });
}

export default async function ServicePage(
  props: PageProps<"/services/[slug]">,
) {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <ServiceJsonLd service={service} />
      <ServiceHero service={service} />
      <ServiceFeatures service={service} />
      <ServiceOutcomes service={service} />
      <CallToAction />
    </>
  );
}
