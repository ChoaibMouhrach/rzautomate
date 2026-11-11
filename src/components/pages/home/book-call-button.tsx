import { LinkButton } from "@/components/ui/link";
import { bookingLabel } from "./content";

export const BookCallButton = ({
  size,
}: {
  size?: React.ComponentProps<typeof LinkButton>["size"];
}) => (
  <LinkButton href="#book" size={size}>
    {bookingLabel}
  </LinkButton>
);
