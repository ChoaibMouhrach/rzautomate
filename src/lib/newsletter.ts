"use server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type SubscribeResult = { ok: true } | { ok: false; error: string };

export async function subscribe(email: string): Promise<SubscribeResult> {
  const value = email.trim();

  if (!emailPattern.test(value)) {
    return { ok: false, error: "Enter a valid email address." };
  }

  // TODO: add the address to the mailing list provider.
  return { ok: true };
}
