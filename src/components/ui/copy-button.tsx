"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip } from "@/components/ui/tooltip";
import { useCopyToClipboard } from "@/lib/use-copy-to-clipboard";

export const CopyButton = ({
  text,
  label,
  className,
}: {
  text: string;
  label: string;
  className?: string;
}) => {
  const { isCopied, copy } = useCopyToClipboard();
  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      <Tooltip
        content={
          <span className="grid">
            <span
              className={`col-start-1 row-start-1 text-center transition-opacity duration-200 motion-reduce:transition-none ${isCopied ? "opacity-0" : "opacity-100"}`}
            >
              Copy to clipboard
            </span>
            <span
              aria-hidden={!isCopied}
              className={`col-start-1 row-start-1 text-center transition-opacity duration-200 motion-reduce:transition-none ${isCopied ? "opacity-100" : "opacity-0"}`}
            >
              Copied!
            </span>
          </span>
        }
        isOpen={isHovering || isCopied}
        onOpenChange={setIsHovering}
      >
        <Button
          variant="secondary"
          size="icon"
          onPress={() => {
            copy(text);
            setIsHovering(true);
          }}
          aria-label={label}
          className={className}
        >
          <span className="grid size-4 place-items-center">
            <Copy
              aria-hidden
              className={`col-start-1 row-start-1 size-4 transition-[opacity,scale,rotate] duration-200 ease-out motion-reduce:transition-none ${isCopied ? "rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"}`}
            />
            <Check
              aria-hidden
              className={`col-start-1 row-start-1 size-4 text-green-600 transition-[opacity,scale,rotate] duration-200 ease-out motion-reduce:transition-none ${isCopied ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0"}`}
            />
          </span>
        </Button>
      </Tooltip>
      <span role="status" className="sr-only">
        {isCopied ? "Copied to clipboard" : ""}
      </span>
    </>
  );
};
