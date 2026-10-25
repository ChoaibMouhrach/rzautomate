import { Page, PageContent, PageDescription, PageHeader, PageTitle } from "@/components/site/page";

export interface LegalSection {
  heading: string;
  body: string;
}

export function LegalPage({
  title,
  updated,
  sections,
}: {
  title: string;
  updated: string;
  sections: readonly LegalSection[];
}) {
  return (
    <Page>
      <PageHeader>
        <PageTitle>{title}</PageTitle>
        <PageDescription>Last updated {updated}</PageDescription>
      </PageHeader>
      <PageContent>
        <div className="mx-auto flex max-w-3xl flex-col gap-8">
          {sections.map((section, index) => (
            <section key={section.heading}>
              <h2 className="text-lg font-semibold tracking-tight">
                {index + 1}. {section.heading}
              </h2>
              <p className="mt-2 text-muted-foreground">{section.body}</p>
            </section>
          ))}
        </div>
      </PageContent>
    </Page>
  );
}
