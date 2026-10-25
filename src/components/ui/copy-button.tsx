"use client";

import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCopyToClipboard } from "@/lib/use-copy-to-clipboard";

export function CopyButton({ text, label }: { text: string; label: string }) {
  const { isCopied, copy } = useCopyToClipboard();

  return (
    <>
      <Button
        variant="secondary"
        size="icon"
        onPress={() => copy(text)}
        aria-label={label}
      >
        {isCopied ? (
          <Check aria-hidden className="size-4 text-primary" />
        ) : (
          <Copy aria-hidden className="size-4" />
        )}
      </Button>
      <span role="status" className="sr-only">
        {isCopied ? "Copied to clipboard" : ""}
      </span>
    </>
  );
}
