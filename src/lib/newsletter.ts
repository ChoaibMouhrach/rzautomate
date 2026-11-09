const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type SubscribeResult = { ok: true } | { ok: false; error: string };

export const validateEmail = (email: string): SubscribeResult => {
  if (!emailPattern.test(email.trim())) {
    return { ok: false, error: "Enter a valid email address." };
  }

  return { ok: true };
};

export const subscribe = async (email: string): Promise<SubscribeResult> => {
  try {
    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    return (await response.json()) as SubscribeResult;
  } catch {
    return { ok: false, error: "Something went wrong. Try again." };
  }
};
