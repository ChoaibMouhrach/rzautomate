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
      <PageTitle>AI automation services for your business</PageTitle>
      <PageDescription>
        Customer support, lead generation, document processing, business
        processes and custom AI agents. Pick the job you need help with and see
        what I build, how it works and what&apos;s included.
      </PageDescription>
      <PageActions>
        <PagePrimaryAction href="/contact">Book a free call</PagePrimaryAction>
        <PageSecondaryAction href="/faq">Read the FAQ</PageSecondaryAction>
      </PageActions>
    </PageHeader>
  );
}
