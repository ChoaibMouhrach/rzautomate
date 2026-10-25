"use client";

import { useState } from "react";
import { Form } from "react-aria-components";
import { Button } from "@/components/ui/button";
import { TextField } from "@/components/ui/text-field";

// TODO: send the message somewhere (email provider, CRM or database).
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <p role="status" className="rounded-ui border border-border p-6">
        Thanks for reaching out. We&apos;ll get back to you shortly.
      </p>
    );
  }

  return (
    <Form
      className="flex flex-col gap-5"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <TextField label="Name" name="name" isRequired autoComplete="name" />
      <TextField
        label="Work email"
        name="email"
        type="email"
        isRequired
        autoComplete="email"
      />
      <TextField label="Company" name="company" autoComplete="organization" />
      <TextField
        label="What would you like to automate?"
        name="message"
        isRequired
        multiline
      />
      <Button type="submit" size="lg" className="self-start">
        Send message
      </Button>
    </Form>
  );
}
