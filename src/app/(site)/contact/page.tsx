import type { Metadata } from "next";
import { Page, PageContent } from "@/components/site/page";
import { ContactAside } from "./contact-aside";
import { ContactForm } from "./contact-form";
import { ContactHeader } from "./contact-header";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us what you want to automate and we'll get back to you.",
};

export default function ContactPage() {
  return (
    <Page>
      <ContactHeader />
      <PageContent className="grid gap-12 lg:grid-cols-[1fr_20rem]">
        <ContactForm />
        <ContactAside />
      </PageContent>
    </Page>
  );
}
