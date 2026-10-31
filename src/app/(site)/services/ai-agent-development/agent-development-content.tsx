import {
  Page,
  PageDescription,
  PageHeader,
  PageTitle,
} from "@/components/site/page";
import { AgentPreview } from "./agent-preview";
import { JsonLd } from "@/components/site/json-ld";
import { Accordion } from "@/components/ui/accordion";
import {
  Section,
  SectionContent,
  SectionDescription,
  SectionFooter,
  SectionHeader,
  SectionTitle,
} from "@/components/site/section";
import {
  Card,
  CardDescription,
  CardEyebrow,
  CardTitle,
} from "@/components/ui/card";
import { Link, LinkButton } from "@/components/ui/link";
import {
  auditHref,
  book,
  bookHref,
  build,
  faq,
  fit,
  guarantee,
  hero,
  how,
  pain,
  pricing,
  proof,
  scope,
  why,
} from "./content";
import { agentDevelopmentJsonLd } from "./json-ld";

const ctaButtons = (
  <div className="flex flex-wrap justify-center gap-3">
    <LinkButton href={bookHref}>Book a free 30-min call</LinkButton>
    <LinkButton href={auditHref} variant="secondary">
      Get a free workflow audit
    </LinkButton>
  </div>
);

export function AgentDevelopmentContent() {
  return (
    <Page>
      <JsonLd data={agentDevelopmentJsonLd()} />

      <PageHeader>
        <p className="mb-4 text-sm text-muted-foreground">{hero.eyebrow}</p>
        <PageTitle>{hero.title}</PageTitle>
        <PageDescription>{hero.subline}</PageDescription>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {ctaButtons}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">{hero.trust}</p>
      </PageHeader>
      <AgentPreview />

      <Section>
        <SectionHeader>
          <SectionTitle>{fit.title}</SectionTitle>
          <SectionDescription>{fit.intro}</SectionDescription>
        </SectionHeader>
        <SectionContent>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardTitle>{fit.goodTitle}</CardTitle>
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                {fit.good.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
            <Card>
              <CardTitle>{fit.badTitle}</CardTitle>
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                {fit.bad.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
          </div>
          <p className="mt-8 text-muted-foreground">
            Looking for something specific? See <Link href="/services/ai-customer-support-agents">AI customer support agents</Link>, <Link href="/services/ai-lead-generation">AI lead generation &amp; CRM automation</Link>, <Link href="/services/ai-document-processing">AI document processing</Link> or <Link href="/services/business-process-automation">business process automation</Link>.
          </p>
          <p className="mt-8 text-center text-muted-foreground">
            {fit.closing}{" "}
            <Link href={auditHref}>Get a free workflow audit</Link> and
            I&apos;ll tell you whether your task needs an agent, a simpler workflow or nothing yet.
          </p>
        </SectionContent>
      </Section>

      <Section>
        <SectionHeader>
          <SectionTitle>{pain.title}</SectionTitle>
          <SectionDescription>{pain.description}</SectionDescription>
        </SectionHeader>
        <SectionContent>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pain.cards.map(([title, body]) => (
              <li key={title} className="flex">
                <Card>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{body}</CardDescription>
                </Card>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-lg font-medium">{pain.bridge}</p>
        </SectionContent>
      </Section>

      <Section>
        <SectionHeader>
          <SectionTitle>{build.title}</SectionTitle>
          <SectionDescription>{build.definition}</SectionDescription>
          <SectionDescription>{build.intro}</SectionDescription>
        </SectionHeader>
        <SectionContent>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {build.cards.map((card) => (
              <li key={card.title} className="flex">
                <Card>
                  <CardTitle>{card.title}</CardTitle>
                  <CardDescription>{card.flow}</CardDescription>
                  <CardEyebrow>{card.chips}</CardEyebrow>
                </Card>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-muted-foreground">{build.guardrail}</p>
          <p className="mt-2 text-muted-foreground">{build.closing}</p>
        </SectionContent>
      </Section>

      <Section>
        <SectionHeader>
          <CardEyebrow>{proof.eyebrow}</CardEyebrow>
          <SectionTitle>{proof.title}</SectionTitle>
          <SectionDescription>{proof.description}</SectionDescription>
        </SectionHeader>
        <SectionContent>
          <div className="mb-8 flex aspect-video items-center justify-center rounded-ui border border-dashed border-border bg-muted p-8 text-center text-muted-foreground">
            Demo recording coming soon. Sample data and test accounts only.
          </div>
          <p className="mb-6">
            <Link href="#demo-transcript">Read the demo narration draft</Link>
          </p>
          <ol className="list-decimal space-y-2 pl-5 text-muted-foreground">
            {proof.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <h3 className="mt-10 text-xl font-semibold">Internal builds</h3>
          <p className="mt-2 text-sm text-muted-foreground">Systems I built and use in my own business. Measured results will be added when available.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {proof.internal.map((item) => <Card key={item.title}><CardTitle>{item.title}</CardTitle><CardDescription>{item.body}</CardDescription></Card>)}
          </div>
          <p className="mt-8 text-center text-lg font-medium">{proof.leadIn}</p>
          <p className="mt-2 text-center text-muted-foreground">
            {proof.microcopy}
          </p>
        </SectionContent>
        <SectionContent>
          <div
            id="demo-transcript"
            className="max-w-3xl space-y-3 text-muted-foreground"
          >
            <h3 className="text-xl font-semibold text-foreground">
              {proof.transcriptTitle}
            </h3>
            {proof.transcript.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </SectionContent>
        <SectionFooter>{ctaButtons}</SectionFooter>
      </Section>

      <div id="how-it-works">
        <Section>
          <SectionHeader>
            <CardEyebrow>{how.eyebrow}</CardEyebrow>
            <SectionTitle>{how.title}</SectionTitle>
            <SectionDescription>{how.summary}</SectionDescription>
          </SectionHeader>
          <SectionContent>
            <ol className="grid gap-4 md:grid-cols-2">
              {how.steps.map((step) => (
                <li key={step.title} className="flex">
                  <Card>
                    <CardTitle>{step.title}</CardTitle>
                    <CardEyebrow>{step.time}</CardEyebrow>
                    <CardDescription>{step.what}</CardDescription>
                    <CardDescription>
                      <strong className="text-foreground">You get:</strong>{" "}
                      {step.get}
                    </CardDescription>
                    <CardDescription>
                      <strong className="text-foreground">You do:</strong>{" "}
                      {step.you}
                    </CardDescription>
                  </Card>
                </li>
              ))}
            </ol>
            <p className="mt-8 text-center font-medium">{how.total}</p>
            <p className="mt-2 text-center text-muted-foreground">
              {how.microcopy}
            </p>
          </SectionContent>
          <SectionFooter>
            <LinkButton href={bookHref}>Book a free 30-min call</LinkButton>
          </SectionFooter>
        </Section>
      </div>

      <div id="scope-stack">
        <Section>
          <SectionHeader>
            <SectionTitle>{scope.title}</SectionTitle>
            <SectionDescription>{scope.intro}</SectionDescription>
          </SectionHeader>
          <SectionContent>
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardTitle>{scope.includedTitle}</CardTitle>
                <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                  {scope.included.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Card>
              <Card>
                <CardTitle>{scope.excludedTitle}</CardTitle>
                <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                  {scope.excluded.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Card>
              <Card>
                <CardTitle>{scope.worksWithTitle}</CardTitle>
                <ul className="space-y-2 text-muted-foreground">
                  {scope.worksWith.map(([label, tools]) => (
                    <li key={label}>
                      <strong className="text-foreground">{label}:</strong>{" "}
                      {tools}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
            <p className="mt-8 text-center text-muted-foreground">
              {scope.closing}
            </p>
          </SectionContent>
        </Section>
      </div>

      <div id="pricing">
        <Section>
          <SectionHeader>
            <CardEyebrow>{pricing.eyebrow}</CardEyebrow>
            <SectionTitle>{pricing.title}</SectionTitle>
            <SectionDescription>{pricing.intro}</SectionDescription>
          </SectionHeader>
          <SectionContent>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
                <thead>
                  <tr>
                    {pricing.columns.map((column) => (
                      <th
                        key={column}
                        scope="col"
                        className="border-b border-border p-3 font-semibold"
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {pricing.rows.map(([label, covers, price]) => (
                    <tr key={label} className="align-top">
                      <th
                        scope="row"
                        className="border-b border-border p-3 font-semibold"
                      >
                        {label}
                      </th>
                      <td className="border-b border-border p-3 text-muted-foreground">
                        {covers}
                      </td>
                      <td className="border-b border-border p-3">{price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              {pricing.footnote}
            </p>
            <p className="mt-6 text-muted-foreground">{pricing.comparison}</p>
            <h3 className="mt-10 text-xl font-semibold tracking-tight">
              {pricing.affectsTitle}
            </h3>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              {pricing.affects.map(([label, body]) => (
                <li key={label}>
                  <strong className="text-foreground">{label}</strong> {body}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-muted-foreground">{pricing.payment}</p>
            <p className="mt-2 text-muted-foreground">
              {pricing.guarantee}{" "}
              <Link href="/guarantee">How the guarantee works</Link>
            </p>
            <p className="mt-6 text-center text-muted-foreground">
              {pricing.microcopy}
            </p>
            <p className="mt-2 text-center text-sm text-muted-foreground">
              {pricing.secondary}{" "}
              <Link href={auditHref}>Get a free workflow audit</Link>
            </p>
          </SectionContent>
          <SectionFooter>
            <LinkButton href={bookHref}>Book a free 30-min call</LinkButton>
          </SectionFooter>
        </Section>
      </div>

      <Section>
        <SectionHeader>
          <SectionTitle>{guarantee.title}</SectionTitle>
        </SectionHeader>
        <SectionContent>
          <div className="max-w-3xl space-y-4 text-muted-foreground">
            {guarantee.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>{guarantee.leadIn}</p>
          </div>
          <ul className="mt-3 max-w-3xl list-disc space-y-2 pl-5 text-muted-foreground">
            {guarantee.criteria.map((criterion) => (
              <li key={criterion}>{criterion}</li>
            ))}
          </ul>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            {guarantee.closing}
          </p>
          <p className="mt-4">
            <Link href="/guarantee">{guarantee.link}</Link>
          </p>
        </SectionContent>
      </Section>

      <div id="why-me">
        <Section>
          <SectionHeader>
            <CardEyebrow>{why.eyebrow}</CardEyebrow>
            <SectionTitle>{why.title}</SectionTitle>
          </SectionHeader>
          <SectionContent>
            <ul className="grid gap-4 md:grid-cols-3">
              {why.cards.map(([title, body]) => (
                <li key={title} className="flex">
                  <Card>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{body}</CardDescription>
                  </Card>
                </li>
              ))}
            </ul>
            <h3 className="mt-10 text-xl font-semibold tracking-tight">
              {why.buyTitle}
            </h3>
            <p className="mt-3 max-w-3xl text-muted-foreground">{why.buy}</p>
            <p className="mt-4">
              <Link href="/compare/ai-agency-vs-freelancer">{why.link}</Link>
            </p>
          </SectionContent>
        </Section>
      </div>

      <div id="faq">
        <Section>
          <SectionHeader>
            <SectionTitle>{faq.title}</SectionTitle>
            <SectionDescription>{faq.intro}</SectionDescription>
          </SectionHeader>
          <SectionContent>
            <Accordion items={faq.items} />
            <p className="mt-6 text-muted-foreground">{faq.closing}</p>
          </SectionContent>
          <SectionFooter>{ctaButtons}</SectionFooter>
        </Section>
      </div>

      <div id="book">
        <Section className="bg-muted">
          <SectionHeader align="center">
            <SectionTitle>{book.title}</SectionTitle>
            <SectionDescription>{book.subhead}</SectionDescription>
          </SectionHeader>
          <SectionContent>
            <ul className="mx-auto max-w-2xl list-disc space-y-2 pl-5 text-muted-foreground">
              {book.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <p className="mt-6 text-center text-muted-foreground">
              {book.next}
            </p>
            <p className="mt-2 text-center text-muted-foreground">
              {book.capacity}
            </p>
            <p className="mt-2 text-center text-muted-foreground">
              Rather not get on a call? Email me at{" "}
              <Link href="mailto:contact@rizon.agency">
                contact@rizon.agency
              </Link>
              , and describe the job you&apos;d hand to an agent in a few lines,
              plus the tools involved. A rough description is fine.
            </p>
            <p className="mt-4 text-center text-sm">
              Not ready to talk?{" "}
              <Link href={auditHref}>Get a free workflow audit</Link> and see
              what to automate first on your own.
            </p>
          </SectionContent>
          <SectionFooter>
            <LinkButton href={bookHref} size="lg">
              Book a free 30-min call
            </LinkButton>
          </SectionFooter>
        </Section>
      </div>

      <Section>
        <SectionHeader>
          <SectionTitle>{book.relatedTitle}</SectionTitle>
        </SectionHeader>
        <SectionContent>
          <ul className="grid gap-4 md:grid-cols-3">
            {book.related.map((service) => (
              <li key={service.href} className="flex">
                <Card>
                  <CardTitle>
                    <Link href={service.href}>{service.title}</Link>
                  </CardTitle>
                  <CardDescription>{service.body}</CardDescription>
                </Card>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Not sure your docs and data are ready for an agent?{" "}
            <Link href="/tools/ai-readiness-check">
              Take the free AI readiness check
            </Link>{" "}
            and see where the gaps are before you build.
          </p>
        </SectionContent>
      </Section>
    </Page>
  );
}
