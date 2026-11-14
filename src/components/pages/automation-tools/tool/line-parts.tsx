import { Link } from "@/components/ui/link";
import type { LinePart } from "./service-links";

export const LineParts = ({ parts }: { parts: readonly LinePart[] }) =>
  parts.map((part, index) =>
    typeof part === "string" ? part : <Link key={index} href={part.href}>{part.label}</Link>,
  );
