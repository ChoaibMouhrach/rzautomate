import {
  PageDescription,
  PageHeader,
  PageTitle,
} from "@/components/site/page";

export function ContactHeader() {
  return (
    <PageHeader>
      <PageTitle>Contact</PageTitle>
      <PageDescription>
        Tell us what you want to automate. We usually reply within one business
        day.
      </PageDescription>
    </PageHeader>
  );
}
