import { JsonLd } from "@/components/site/json-ld";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/json-ld";
import type { Service } from "@/lib/services";

export function ServiceJsonLd({ service }: { service: Service }) {
  return (
    <JsonLd
      data={[
        serviceJsonLd(service),
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ]),
      ]}
    />
  );
}
