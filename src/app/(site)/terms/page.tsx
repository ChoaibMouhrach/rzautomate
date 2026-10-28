import type { Metadata } from "next";
import { pageMetadata } from "@/lib/pages";
import { pageSocial } from "@/lib/metadata";
import { LegalPage } from "@/components/site/legal-page";
import { termsOfService } from "./content";

export const metadata: Metadata = pageSocial({ ...pageMetadata.terms, path: "/terms" });

export default function TermsPage() {
  return <LegalPage {...termsOfService} />;
}
