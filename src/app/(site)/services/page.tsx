import type { Metadata } from "next";
import { pageMetadata } from "@/lib/pages";
import { ContactCta } from "@/components/site/contact-cta";
import { Page, PageContent } from "@/components/site/page";
import { ServiceList } from "./service-list";
import { ServicesHeader } from "./services-header";
import { ServicesJsonLd } from "./services-json-ld";

export const metadata: Metadata = pageMetadata.services;

export default function ServicesPage() {
  return (
    <Page>
      <ServicesJsonLd />
      <ServicesHeader />
      <PageContent>
        <ServiceList />
        <ContactCta className="mt-16" />
      </PageContent>
    </Page>
  );
}
