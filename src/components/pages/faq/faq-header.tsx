import { PageDescription, PageHeader, PageTitle } from "@/components/site/page";
import { faqIntro } from "./content";

export const FaqHeader = () => (
  <PageHeader>
    <PageTitle>Frequently asked questions</PageTitle>
    <PageDescription>{faqIntro}</PageDescription>
  </PageHeader>
);
