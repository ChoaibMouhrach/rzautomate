import {
  PageActions,
  PageDescription,
  PageHeader,
  PagePrimaryAction,
  PageSecondaryAction,
  PageTitle,
} from "@/components/site/page";

export function ServicesHeader() {
  return (
    <PageHeader>
      <PageTitle>Services</PageTitle>
      <PageDescription>
        From a single automated workflow to a full AI-powered operation, we
        build what moves the needle for your business.
      </PageDescription>
      <PageActions>
        <PagePrimaryAction href="/contact">Book a free call</PagePrimaryAction>
        <PageSecondaryAction href="/faq">Read the FAQ</PageSecondaryAction>
      </PageActions>
    </PageHeader>
  );
}
