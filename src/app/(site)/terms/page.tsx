import type { Metadata } from "next";
import { pageMetadata } from "@/lib/pages";
import { LegalPage } from "@/components/site/legal-page";
import { termsOfService } from "./content";

export const metadata: Metadata = pageMetadata.terms;

export default function TermsPage() {
  return <LegalPage {...termsOfService} />;
}
