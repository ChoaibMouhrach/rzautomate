import { LandingHeading, LandingSection } from "@/components/site/landing-section";
import { tools } from "./content";

export const Tools = () => (
  <LandingSection className="bg-tint">
    <div className="mx-auto max-w-2xl text-center">
      <LandingHeading>{tools.heading}</LandingHeading>
    </div>
    <ul className="mx-auto mt-14 grid max-w-5xl grid-cols-4 gap-2 md:grid-cols-6 md:gap-3">
      <li className="col-span-4 flex flex-col items-center justify-center gap-2 rounded-3xl bg-primary p-8 text-center text-primary-foreground md:order-none md:col-span-2 md:col-start-3 md:row-span-2 md:row-start-2 md:p-10">
        <p className="text-2xl font-semibold tracking-tighter md:text-3xl">
          {tools.centerTitle}
        </p>
        <p className="text-primary-foreground/80">{tools.centerLine}</p>
      </li>
      {tools.logos.map((tool) => (
        <li
          key={tool.name}
          className="flex aspect-square items-center justify-center rounded-2xl bg-background dark:bg-white"
        >
          <img
            src={tool.src}
            alt={tool.name}
            title={tool.name}
            loading="lazy"
            className="size-[45%] object-contain"
          />
        </li>
      ))}
    </ul>
  </LandingSection>
);
