import { LinkButton } from "@/components/ui/link";
import { bookingLabel } from "./content";

export const BookCallButton = ({
  size,
  className,
}: {
  size?: React.ComponentProps<typeof LinkButton>["size"];
  className?: string;
}) => (
  <LinkButton href="#book" size={size} className={className}>
    {bookingLabel}
  </LinkButton>
);
