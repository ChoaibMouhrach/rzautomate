import {
  Page,
  PageActions,
  PageDescription,
  PageHeader,
  PagePrimaryAction,
  PageSecondaryAction,
  PageTitle,
} from "@/components/site/page";

export function NotFoundContent() {
  return (
    <Page>
      <PageHeader>
        <PageTitle>Page not found</PageTitle>
        <PageDescription>
          The page you are looking for does not exist or has moved.
        </PageDescription>
        <PageActions>
          <PagePrimaryAction href="/">Back to home</PagePrimaryAction>
          <PageSecondaryAction href="/services">
            Browse services
          </PageSecondaryAction>
          <PageSecondaryAction href="/blog">Read the blog</PageSecondaryAction>
        </PageActions>
      </PageHeader>
    </Page>
  );
}
