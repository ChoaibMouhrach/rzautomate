import type { Metadata } from "next";
import { ContactCta } from "@/components/site/contact-cta";
import { Page, PageContent } from "@/components/site/page";
import { ServiceList } from "./service-list";
import { ServicesHeader } from "./services-header";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI agents, workflow automation, lead and sales automation, document processing and AI strategy.",
};

export default function ServicesPage() {
  return (
    <Page>
      <ServicesHeader />
      <PageContent>
        <ServiceList />
        <ContactCta className="mt-16" />
      </PageContent>
    </Page>
  );
}
