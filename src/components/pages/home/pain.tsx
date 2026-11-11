import {
  BarChart3,
  Mail,
  MessageCircleQuestion,
  Receipt,
  UserPlus,
  UsersRound,
} from "lucide-react";
import { pain } from "./content";
import { HomeSection, MonoLabel, SectionHeading } from "./section";
import { TextReveal } from "./text-reveal";

const icons = [
  Mail,
  UserPlus,
  Receipt,
  MessageCircleQuestion,
  BarChart3,
  UsersRound,
];

const columns = [
  [0, 3],
  [1, 4],
  [2, 5],
];

export const Pain = () => (
  <>
    <HomeSection>
      <div className="mx-auto max-w-3xl text-center">
        <MonoLabel>{pain.label}</MonoLabel>
        <SectionHeading className="mt-4">{pain.heading}</SectionHeading>
        <p className="mt-4 text-lg text-muted-foreground">{pain.description}</p>
      </div>
      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:flex lg:items-start">
        {columns.map((column, columnIndex) => (
          <ol
            key={columnIndex}
            className={`contents lg:flex lg:flex-1 lg:flex-col lg:gap-4 ${columnIndex === 1 ? "lg:mt-12" : ""}`}
          >
            {column.map((index) => {
              const row = pain.rows[index];
              const Icon = icons[index];
              const [more, result] = row.title.split(", ");
              return (
                <li
                  key={row.title}
                  style={{ order: index }}
                  className="flex flex-col rounded-3xl bg-muted p-8 lg:order-none lg:flex-1"
                >
                  <span className="flex size-12 items-center justify-center rounded-full bg-background text-primary">
                    <Icon aria-hidden className="size-6" />
                  </span>
                  <h3 className="mt-10 text-3xl font-semibold leading-tight tracking-tighter">
                    {more},
                    <span className="block text-primary">{result}</span>
                  </h3>
                  <p className="mt-4 text-muted-foreground">{row.line}</p>
                </li>
              );
            })}
          </ol>
        ))}
      </div>
    </HomeSection>
    <section className="pb-16 pt-6 md:pb-28">
      <div className="page-container">
        <TextReveal
          text={pain.closing}
          className="text-3xl font-semibold leading-tight tracking-tighter md:text-6xl"
        />
      </div>
    </section>
  </>
);
