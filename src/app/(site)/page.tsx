import { CallToAction } from "@/components/site/call-to-action";
import {
  Section,
  SectionContent,
  SectionDescription,
  SectionFooter,
  SectionHeader,
  SectionTitle,
} from "@/components/site/section";
import { Accordion } from "@/components/ui/accordion";
import {
  Card,
  CardDescription,
  CardEyebrow,
  CardTitle,
} from "@/components/ui/card";
import { Link, LinkButton } from "@/components/ui/link";
import { site } from "@/lib/site";
import {
  demo,
  faq,
  finalCta,
  founderCopy,
  guarantee,
  pain,
  proof,
  results,
  servicesCopy,
  testimonials,
  tools,
  useCases,
  why,
} from "./content";
import { Hero } from "./hero";
import { Process } from "./process";

export default function Home() {
  return (
    <>
      <Hero />

      <Section>
        <SectionHeader>
          <SectionTitle>{proof.title}</SectionTitle>
          <SectionDescription>{proof.shippedLabel}</SectionDescription>
        </SectionHeader>
        <SectionContent>
          <ul className="flex flex-wrap gap-2 text-sm">
            {proof.shipped.map((item) => (
              <li key={item} className="rounded-ui border border-border px-3 py-1">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">
            {proof.stackLabel}: {proof.stack}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            {proof.facts} ·{" "}
            <Link href="https://github.com/ChoaibMouhrach" rel="me">
              Code on GitHub
            </Link>{" "}
            ·{" "}
            <Link href="https://www.linkedin.com/in/choaib-mouhrach" rel="me">
              Profile on LinkedIn
            </Link>
          </p>
        </SectionContent>
      </Section>

      <Section>
        <SectionHeader>
          <SectionTitle>{pain.title}</SectionTitle>
          <SectionDescription>{pain.description}</SectionDescription>
        </SectionHeader>
        <SectionContent>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
        <SectionFooter>
          <LinkButton href={site.bookingUrl}>Book a free 30-min call</LinkButton>
        </SectionFooter>
      </Section>

      <Section>
        <SectionHeader>
          <CardEyebrow>{servicesCopy.eyebrow}</CardEyebrow>
          <SectionTitle>{servicesCopy.title}</SectionTitle>
          <SectionDescription>{servicesCopy.description}</SectionDescription>
        </SectionHeader>
        <SectionContent>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {servicesCopy.cards.map((card) => (
              <li key={card.href} className="flex">
                <Card>
                  <CardTitle>{card.title}</CardTitle>
                  <CardDescription>{card.body}</CardDescription>
                  <CardEyebrow>{card.tools}</CardEyebrow>
                  <Link href={card.href}>{card.label}</Link>
                </Card>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-muted-foreground">
            {servicesCopy.footer}
          </p>
        </SectionContent>
        <SectionFooter>
          <LinkButton href={site.bookingUrl}>Book a free 30-min call</LinkButton>
        </SectionFooter>
      </Section>

      <Section>
        <SectionHeader>
          <CardEyebrow>{demo.eyebrow}</CardEyebrow>
          <SectionTitle>{demo.title}</SectionTitle>
          <SectionDescription>{demo.description}</SectionDescription>
        </SectionHeader>
        <SectionContent>
          <ol className="list-decimal space-y-2 pl-5 text-muted-foreground">
            {demo.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="mt-6 text-muted-foreground">{demo.note}</p>
        </SectionContent>
      </Section>

      <div id="how-it-works">
        <Process />
      </div>

      <Section>
        <SectionHeader>
          <CardEyebrow>{useCases.eyebrow}</CardEyebrow>
          <SectionTitle>{useCases.title}</SectionTitle>
          <SectionDescription>{useCases.description}</SectionDescription>
        </SectionHeader>
        <SectionContent>
          <ul className="grid gap-4 lg:grid-cols-2">
            {useCases.teams.map((team) => (
              <li key={team.title} className="flex">
                <Card>
                  <CardTitle>{team.title}</CardTitle>
                  <CardDescription>{team.body}</CardDescription>
                  <ul className="list-disc space-y-2 pl-5 text-sm">
                    {team.automations.map((automation) => (
                      <li key={automation}>{automation}</li>
                    ))}
                  </ul>
                  <CardEyebrow>{team.tools}</CardEyebrow>
                </Card>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-muted-foreground">
            {useCases.footer}
          </p>
        </SectionContent>
        <SectionFooter>
          <LinkButton href={site.bookingUrl}>Book a free 30-min call</LinkButton>
        </SectionFooter>
      </Section>

      <Section>
        <SectionHeader>
          <CardEyebrow>{results.eyebrow}</CardEyebrow>
          <SectionTitle>{results.title}</SectionTitle>
          <SectionDescription>{results.stat}</SectionDescription>
          <SectionDescription>{results.intro}</SectionDescription>
        </SectionHeader>
        <SectionContent>
          <ul className="grid gap-4 lg:grid-cols-3">
            {results.cards.map((card) => (
              <li key={card.title} className="flex">
                <Card>
                  <CardEyebrow>{card.label}</CardEyebrow>
                  <CardTitle>{card.title}</CardTitle>
                  <CardDescription>{card.before}</CardDescription>
                  <CardDescription>{card.after}</CardDescription>
                  <CardEyebrow>{card.meta}</CardEyebrow>
                </Card>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-muted-foreground">{results.measure}</p>
          <h3 className="mt-10 text-xl font-semibold tracking-tight">
            {results.calculatorTitle}
          </h3>
          <p className="mt-2 text-muted-foreground">{results.calculator}</p>
          <p className="mt-6 text-sm text-muted-foreground">{results.honesty}</p>
        </SectionContent>
        <SectionFooter>
          <LinkButton href={site.bookingUrl}>Book a free 30-min call</LinkButton>
        </SectionFooter>
      </Section>

      <Section>
        <SectionHeader>
          <CardEyebrow>{why.eyebrow}</CardEyebrow>
          <SectionTitle>{why.title}</SectionTitle>
          <SectionDescription>{why.description}</SectionDescription>
        </SectionHeader>
        <SectionContent>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {why.cards.map(([title, body]) => (
              <li key={title} className="flex">
                <Card>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{body}</CardDescription>
                </Card>
              </li>
            ))}
          </ul>
          <h3 className="mt-12 text-xl font-semibold tracking-tight">
            {why.tableTitle}
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[56rem] border-collapse text-left text-sm">
              <caption className="sr-only">{why.caption}</caption>
              <thead>
                <tr>
                  {why.columns.map((column) => (
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
                {why.rows.map(([label, ...cells]) => (
                  <tr key={label} className="align-top">
                    <th
                      scope="row"
                      className="border-b border-border p-3 font-semibold"
                    >
                      {label}
                    </th>
                    {cells.map((cell) => (
                      <td
                        key={cell}
                        className="border-b border-border p-3 text-muted-foreground"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-muted-foreground">{why.note}</p>
        </SectionContent>
        <SectionFooter>
          <LinkButton href={site.bookingUrl}>Book a free 30-min call</LinkButton>
        </SectionFooter>
      </Section>

      <Section>
        <SectionHeader>
          <CardEyebrow>{guarantee.eyebrow}</CardEyebrow>
          <SectionTitle>{guarantee.title}</SectionTitle>
          <SectionDescription>{guarantee.opener}</SectionDescription>
        </SectionHeader>
        <SectionContent>
          <div className="max-w-3xl space-y-4 text-muted-foreground">
            {guarantee.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <h3 className="mt-8 text-xl font-semibold tracking-tight">
            {guarantee.claimTitle}
          </h3>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-muted-foreground">
            {guarantee.claim.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="mt-6 font-medium">{guarantee.confidence}</p>
        </SectionContent>
        <SectionFooter>
          <LinkButton href={site.bookingUrl}>Book a free 30-min call</LinkButton>
        </SectionFooter>
      </Section>

      <Section>
        <SectionHeader>
          <CardEyebrow>{founderCopy.eyebrow}</CardEyebrow>
          <SectionTitle>{founderCopy.title}</SectionTitle>
          <SectionDescription>{founderCopy.role}</SectionDescription>
        </SectionHeader>
        <SectionContent>
          <p className="max-w-3xl text-muted-foreground">{founderCopy.story}</p>
          <ol className="mt-6 grid gap-4 lg:grid-cols-3">
            {founderCopy.proof.map(([title, body]) => (
              <li key={title} className="flex">
                <Card>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{body}</CardDescription>
                </Card>
              </li>
            ))}
          </ol>
          <h3 className="mt-10 text-xl font-semibold tracking-tight">
            {founderCopy.howTitle}
          </h3>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            {founderCopy.how.map(([title, body]) => (
              <li key={title}>
                <strong className="text-foreground">{title}</strong> {body}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm">
            <Link href="https://www.linkedin.com/in/choaib-mouhrach" rel="me">
              Choaib on LinkedIn
            </Link>{" "}
            ·{" "}
            <Link href="https://github.com/ChoaibMouhrach" rel="me">
              My code on GitHub
            </Link>{" "}
            ·{" "}
            <Link href="https://www.malt.com/profile/choaibmouhrach" rel="me">
              Freelance profile on Malt
            </Link>
          </p>
        </SectionContent>
        <SectionFooter>
          <LinkButton href={site.bookingUrl}>Book a free 30-min call</LinkButton>
        </SectionFooter>
      </Section>

      <Section>
        <SectionHeader>
          <CardEyebrow>{tools.eyebrow}</CardEyebrow>
          <SectionTitle>{tools.title}</SectionTitle>
          <SectionDescription>{tools.description}</SectionDescription>
        </SectionHeader>
        <SectionContent>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tools.cards.map((card) => (
              <li key={card.href} className="flex">
                <Card>
                  <CardEyebrow>Free · {card.time}</CardEyebrow>
                  <CardTitle>{card.title}</CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                  <Link href={card.href}>{card.button}</Link>
                </Card>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            {tools.note}
          </p>
        </SectionContent>
      </Section>

      <Section>
        <SectionHeader>
          <CardEyebrow>{testimonials.eyebrow}</CardEyebrow>
          <SectionTitle>{testimonials.title}</SectionTitle>
          <SectionDescription>{testimonials.description}</SectionDescription>
        </SectionHeader>
        <SectionContent>
          <ul className="grid gap-4 lg:grid-cols-3">
            {testimonials.snippets.map((snippet) => (
              <li key={snippet.title} className="flex">
                <Card>
                  <CardTitle>{snippet.title}</CardTitle>
                  <CardDescription>Problem: {snippet.problem}</CardDescription>
                  <CardDescription>Build: {snippet.build}</CardDescription>
                  <CardDescription>Result: {snippet.result}</CardDescription>
                </Card>
              </li>
            ))}
          </ul>
        </SectionContent>
        <SectionFooter>
          <LinkButton href={site.bookingUrl}>Book a free 30-min call</LinkButton>
        </SectionFooter>
      </Section>

      <Section>
        <SectionHeader>
          <SectionTitle>{faq.title}</SectionTitle>
          <SectionDescription>{faq.description}</SectionDescription>
        </SectionHeader>
        <SectionContent>
          <Accordion items={faq.items} />
          <p className="mt-6 text-muted-foreground">{faq.closing}</p>
        </SectionContent>
        <SectionFooter>
          <LinkButton href={site.bookingUrl}>Book a free 30-min call</LinkButton>
        </SectionFooter>
      </Section>

      <CallToAction />

      <Section>
        <SectionContent>
          <ul className="mx-auto max-w-2xl list-disc space-y-2 pl-5 text-muted-foreground">
            {finalCta.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
          <p className="mt-6 text-center text-muted-foreground">{finalCta.next}</p>
          <p className="mt-2 text-center text-muted-foreground">
            {finalCta.capacity}
          </p>
          <p className="mt-2 text-center text-muted-foreground">
            {finalCta.email}
          </p>
          <p className="mt-4 text-center text-sm">
            Not ready to talk?{" "}
            <Link href="/tools/what-to-automate-first">
              Get a free workflow audit
            </Link>{" "}
            and see what to automate first on your own.
          </p>
        </SectionContent>
      </Section>
    </>
  );
}
