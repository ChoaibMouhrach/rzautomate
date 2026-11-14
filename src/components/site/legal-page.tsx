import {
  Page,
  PageContent,
  PageDescription,
  PageHeader,
  PageTitle,
} from "@/components/site/page";

export type LegalBlock =
  | { paragraph: string }
  | { subheading: string }
  | { list: readonly string[] };

export interface LegalSection {
  heading: string;
  body?: string;
  blocks?: readonly LegalBlock[];
}

export const LegalPage = ({
  title,
  updated,
  facts,
  sections,
}: {
  title: string;
  updated: string;
  facts?: readonly (readonly [string, string])[];
  sections: readonly LegalSection[];
}) => <Page>
      <PageHeader>
        <PageTitle>{title}</PageTitle>
        <PageDescription>Last updated {updated}</PageDescription>
      </PageHeader>
      <PageContent>
        <div className="mx-auto flex max-w-3xl flex-col gap-10">
          {facts && (
            <dl className="grid gap-2 rounded-3xl bg-muted p-2 sm:grid-cols-3">
              {facts.map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-background p-5">
                  <dt className="text-sm text-muted-foreground">{label}</dt>
                  <dd className="mt-1 font-semibold">{value}</dd>
                </div>
              ))}
            </dl>
          )}
          {sections.map((section, index) => (
            <section key={section.heading}>
              <h2 className="text-lg font-semibold tracking-tight">
                {index + 1}. {section.heading}
              </h2>
              {section.body && <p className="mt-2 text-muted-foreground">{section.body}</p>}
              {section.blocks?.map((block, blockIndex) => {
                if ("subheading" in block) return <h3 key={blockIndex} className="mt-6 font-semibold">{block.subheading}</h3>;
                if ("list" in block) {
                  return (
                    <ul key={blockIndex} className="mt-3 list-disc space-y-1.5 pl-6 text-muted-foreground">
                      {block.list.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  );
                }
                return <p key={blockIndex} className="mt-3 text-muted-foreground">{block.paragraph}</p>;
              })}
            </section>
          ))}
        </div>
      </PageContent>
    </Page>;
