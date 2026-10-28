import type { Metadata } from "next";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import {
  Page,
  PageActions,
  PageDescription,
  PageHeader,
  PagePrimaryAction,
  PageSecondaryAction,
  PageTitle,
} from "@/components/site/page";

export const metadata: Metadata = {
  title: "Page not found",
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1">
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
      </main>
      <Footer />
    </>
  );
}
