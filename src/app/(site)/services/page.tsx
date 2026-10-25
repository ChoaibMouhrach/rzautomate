import type { Metadata } from "next";
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
      </PageContent>
    </Page>
  );
}
