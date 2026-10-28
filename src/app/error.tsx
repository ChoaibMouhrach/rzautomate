"use client";

import { Button } from "@/components/ui/button";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="page-container flex flex-1 flex-col items-center justify-center gap-6 py-24 text-center">
      <h1 className="text-4xl font-semibold tracking-tight">
        Something went wrong
      </h1>
      <p className="max-w-md text-muted-foreground">
        An unexpected error occurred. Try again, or come back in a moment.
      </p>
      <Button size="lg" onPress={reset}>
        Try again
      </Button>
    </main>
  );
}
