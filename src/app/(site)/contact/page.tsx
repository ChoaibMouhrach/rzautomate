import type { Metadata } from "next";
import { pageMetadata } from "@/lib/pages";
import { pageSocial } from "@/lib/metadata";
import { Page, PageContent } from "@/components/site/page";
import { ContactHeader } from "./contact-header";
import { ContactJsonLd } from "./contact-json-ld";
import { ContactOptions } from "./contact-options";

export const metadata: Metadata = pageSocial({ ...pageMetadata.contact, path: "/contact" });

export default function ContactPage() {
  return (
    <Page>
      <ContactJsonLd />
      <ContactHeader />
      <PageContent>
        <ContactOptions />
      </PageContent>
    </Page>
  );
}
