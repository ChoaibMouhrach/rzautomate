import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";
import { termsOfService } from "./content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that apply when you use our website and services.",
};

export default function TermsPage() {
  return <LegalPage {...termsOfService} />;
}
