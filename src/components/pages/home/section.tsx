import { twMerge } from "tailwind-merge";

export const HomeSection = ({
  id,
  className,
  containerClassName,
  children,
}: {
  id?: string;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}) => (
  <section id={id} className={twMerge("scroll-mt-16 py-16 md:py-28", className)}>
    <div className={twMerge("page-container blur-fade", containerClassName)}>
      {children}
    </div>
  </section>
);

export const MonoLabel = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <p
    className={twMerge(
      "text-sm font-medium text-muted-foreground",
      className,
    )}
  >
    {children}
  </p>
);

export const SectionHeading = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <h2
    className={twMerge(
      "text-balance text-4xl font-semibold leading-[1.05] tracking-tighter md:text-5xl",
      className,
    )}
  >
    {children}
  </h2>
);
