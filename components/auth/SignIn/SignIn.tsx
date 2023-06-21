"use client";

import { useState } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { signIn } from "./actions";

export default function SignIn({ redirectTo }: { redirectTo: string }) {
  const { pending } = useFormStatus();
  const [status, setStatus] = useState("");

  return (
    <form
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      action={async (formData: FormData) => {
        try {
          await signIn(formData, redirectTo);
        } catch (error) {
          if (error instanceof Error) {
            console.error(error);
            setStatus(error.message);
          }
        }
      }}
      style={{ padding: "0.5em", border: "1px solid", borderRadius: "4px" }}
    >
      <h2>Sign in</h2>
      <div>
        <label htmlFor="signInEmail">Email</label>
        <input
          name="email"
          id="signInEmail"
          type="email"
          autoComplete="email"
          required
        />
      </div>
      <div>
        <label htmlFor="signInPassword">Password</label>
        <input
          name="password"
          id="signInPassword"
          type="password"
          required
          autoComplete="current-password"
        />
      </div>
      <button type="submit" disabled={pending}>
        {pending ? "Submitting" : "Submit"}
      </button>
      {status && <div>{status}</div>}
    </form>
  );
}
