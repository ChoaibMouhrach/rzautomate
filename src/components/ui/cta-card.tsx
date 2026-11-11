import { twMerge } from "tailwind-merge";
import { LinkButton } from "@/components/ui/link";

export const CtaCard = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => <div
      className={twMerge(
        "flex flex-col gap-6 rounded-3xl bg-muted p-8 sm:p-10 sm:flex-row sm:items-center sm:justify-between sm:gap-10",
        className,
      )}
    >
      {children}
    </div>;

export const CtaCardContent = ({ children }: { children: React.ReactNode }) => <div className="max-w-xl">{children}</div>;

export const CtaCardTitle = ({ children }: { children: React.ReactNode }) => <h2 className="text-xl text-foreground font-semibold tracking-tight">
      {children}
    </h2>;

export const CtaCardDescription = ({
  children,
}: {
  children: React.ReactNode;
}) => <p className="mt-2 text-muted-foreground">{children}</p>;

export const CtaCardAction = (props: React.ComponentProps<typeof LinkButton>) => <LinkButton size="lg" className="shrink-0 whitespace-nowrap" {...props} />;
