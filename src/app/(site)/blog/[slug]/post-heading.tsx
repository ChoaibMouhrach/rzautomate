"use client";

import { Check, Hash } from "lucide-react";
import { Button } from "react-aria-components";
import { focusRing, tv } from "@/lib/ui";
import { useCopyToClipboard } from "@/lib/use-copy-to-clipboard";

const anchor = tv({
  extend: focusRing,
  base: "absolute -left-8 top-0 flex h-full w-8 cursor-pointer items-center justify-end rounded-sm pr-1 text-muted-foreground no-underline opacity-0 transition-[opacity,color] group-hover:opacity-100 hover:text-foreground [@media(hover:none)]:opacity-100",
  variants: {
    isCopied: { true: "text-primary opacity-100" },
    isFocusVisible: { true: "opacity-100" },
  },
});

export function PostHeading({
  as: Tag,
  id,
  children,
}: {
  as: "h2" | "h3" | "h4";
  id: string;
  children: string;
}) {
  const { isCopied, copy } = useCopyToClipboard();

  function copyLink() {
    const url = new URL(window.location.href);
    url.hash = id;
    window.history.replaceState(null, "", url);
    copy(url.toString());
  }

  return (
    <Tag id={id} className="group relative scroll-mt-8">
      <Button
        onPress={copyLink}
        aria-label={`Copy link to “${children}”`}
        className={({ isFocusVisible }) =>
          anchor({ isCopied, isFocusVisible })
        }
      >
        {isCopied ? (
          <Check aria-hidden className="size-5" />
        ) : (
          <Hash aria-hidden className="size-5" />
        )}
      </Button>
      {children}
      <span role="status" className="sr-only">
        {isCopied ? "Link copied" : ""}
      </span>
    </Tag>
  );
}
