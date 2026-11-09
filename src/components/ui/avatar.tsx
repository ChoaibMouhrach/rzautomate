import { tv, type VariantProps } from "@/lib/ui";

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

export const Avatar = ({ src, alt = "", size = "md" }: AvatarProps) => <span className={avatar({ size })}>
      <img
        src={src}
        alt={alt}
        decoding="async"
        loading="lazy"
        className="absolute inset-0 size-full object-cover"
      />
    </span>;
