import Image from "next/image";
import { tv, type VariantProps } from "@/lib/ui";

const pixels = { sm: 32, md: 40, lg: 56 } as const;

const avatar = tv({
  base: "relative shrink-0 overflow-hidden rounded-full bg-muted",
  variants: {
    size: { sm: "size-8", md: "size-10", lg: "size-14" },
  },
  defaultVariants: { size: "md" },
});

export interface AvatarProps extends VariantProps<typeof avatar> {
  src: string;
  alt?: string;
}

export function Avatar({ src, alt = "", size = "md" }: AvatarProps) {
  return (
    <span className={avatar({ size })}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={`${pixels[size] * 2}px`}
        className="object-cover"
      />
    </span>
  );
}
