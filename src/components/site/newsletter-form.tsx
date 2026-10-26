"use client";

import { useState, useTransition } from "react";
import { Form } from "react-aria-components";
import { Button } from "@/components/ui/button";
import { TextField } from "@/components/ui/text-field";
import { subscribe } from "@/lib/newsletter";

export function NewsletterForm() {
  const [isPending, startTransition] = useTransition();
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState<string>();

  if (isSubscribed) {
    return (
      <p role="status" className="text-sm font-medium">
        Thanks for subscribing. Check your inbox soon.
      </p>
    );
  }

  return (
    <Form
      className="flex items-start gap-2"
      onSubmit={(event) => {
        event.preventDefault();
        const email = String(new FormData(event.currentTarget).get("email"));
        startTransition(async () => {
          const result = await subscribe(email);
          if (result.ok) {
            setIsSubscribed(true);
          } else {
            setError(result.error);
          }
        });
      }}
    >
      <TextField
        aria-label="Email address"
        name="email"
        type="email"
        placeholder="you@company.com"
        autoComplete="email"
        isRequired
        isInvalid={Boolean(error)}
        errorMessage={error}
        onChange={() => setError(undefined)}
        className="flex-1"
      />
      <Button type="submit" isDisabled={isPending}>
        Subscribe
      </Button>
    </Form>
  );
}
