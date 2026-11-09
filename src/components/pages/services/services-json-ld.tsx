import { JsonLd } from "@/components/site/json-ld";
import { breadcrumbJsonLd, servicesPageJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/pages";

export const ServicesJsonLd = () => <JsonLd
      data={[
        servicesPageJsonLd(),
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: pageMetadata.services.title, path: "/services" },
        ]),
      ]}
    />;
