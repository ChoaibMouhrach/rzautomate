import { useEffect, useState } from "react";

export function useCopyToClipboard(resetAfterMs = 2000) {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (!isCopied) return;
    const timeout = setTimeout(() => setIsCopied(false), resetAfterMs);
    return () => clearTimeout(timeout);
  }, [isCopied, resetAfterMs]);

  async function copy(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
    } catch {
      // Clipboard unavailable (insecure context or permission denied).
    }
  }

  return { isCopied, copy };
}
