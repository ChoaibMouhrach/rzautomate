import { Accordion } from "@/components/ui/accordion";
import { FreeText } from "@/components/ui/free-text";
import { faq } from "./content";
import { TextLink } from "./button";
import { HomeSection, MonoLabel, SectionHeading } from "./section";

export const Faq = () => (
  <HomeSection
    id="faq"
    containerClassName="grid gap-12 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-20"
  >
    <div>
      <MonoLabel>{faq.label}</MonoLabel>
      <SectionHeading className="mt-4">{faq.heading}</SectionHeading>
      <TextLink href={faq.link.href} className="mt-6 inline-block text-primary">
        {faq.link.label} →
      </TextLink>
    </div>
    <Accordion
      name="home-faq"
      items={faq.items.map((item) => ({
        question: item.question,
        answer: <FreeText>{item.answer}</FreeText>,
      }))}
    />
  </HomeSection>
);
