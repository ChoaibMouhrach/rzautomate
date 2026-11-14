import type { ReactNode } from "react";
import { LandingHeading, LandingSection, SectionLabel } from "@/components/site/landing-section";

export const Section = ({
  id,
  label,
  title,
  intro,
  children,
}: {
  id?: string;
  label?: string;
  title: string;
  intro?: ReactNode;
  children: ReactNode;
}) => (
  <LandingSection id={id}>
    <div className="max-w-2xl">
      {label && <SectionLabel>{label}</SectionLabel>}
      <LandingHeading className={label ? "mt-4" : ""}>{title}</LandingHeading>
      {intro && <p className="mt-4 text-lg text-muted-foreground">{intro}</p>}
    </div>
    <div className="mt-12 space-y-4 md:mt-14">{children}</div>
  </LandingSection>
);

export const LogoChip = ({ children, className = "size-12" }: { children: ReactNode; className?: string }) => (
  <span className={`flex shrink-0 items-center justify-center rounded-full bg-background ${className}`}>{children}</span>
);
