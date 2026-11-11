import { twMerge } from "tailwind-merge";
import { LinkButton } from "@/components/ui/link";

export const Page = ({ children }: { children: React.ReactNode }) => <>{children}</>;

export const PageHeader = ({ children }: { children: React.ReactNode }) => <header className="page-container pb-12 pt-16 text-center sm:pt-24">
      {children}
    </header>;

export const PageTitle = ({ children }: { children: React.ReactNode }) => <h1 className="mx-auto max-w-3xl text-balance text-5xl font-semibold leading-[1.02] tracking-tighter md:text-6xl">
      {children}
    </h1>;

export const PageDescription = ({ children }: { children: React.ReactNode }) => <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
      {children}
    </p>;

export const PageActions = ({ children }: { children: React.ReactNode }) => <div className="mx-auto mt-8 flex max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
      {children}
    </div>;

type PageActionProps = Omit<
  React.ComponentProps<typeof LinkButton>,
  "variant" | "size"
>;

export const PagePrimaryAction = (props: PageActionProps) => <LinkButton size="lg" {...props} />;

export const PageSecondaryAction = (props: PageActionProps) => <LinkButton size="lg" variant="secondary" {...props} />;

export const PageContent = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => <div className={twMerge("page-container pb-24", className)}>{children}</div>;
