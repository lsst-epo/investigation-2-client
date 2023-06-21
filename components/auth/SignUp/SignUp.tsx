"use client";

import { useState } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { register } from "./actions";

export default function SignUp() {
  const { pending } = useFormStatus();
  const [status, setStatus] = useState("");

  return (
    <form
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      action={async (formData: FormData) => {
        try {
          const data = await register(formData);
          if (data.registerStudents) {
            setStatus("Success! Approval pending.");
          }
        } catch (error) {
          if (error instanceof Error) {
            console.error(error);
            setStatus(error.message);
          }
        }
      }}
      style={{ padding: "0.5em", border: "1px solid", borderRadius: "4px" }}
    >
      <h2>Sign up</h2>
      <div>
        <label htmlFor="signUpEmail">Email</label>
        <input
          name="email"
          id="signUpEmail"
          type="email"
          autoComplete="email"
          required
        />
      </div>
      <div>
        <label htmlFor="registerFirstName">First name</label>
        <input
          name="firstName"
          id="registerFirstName"
          type="text"
          autoComplete="given-name"
        />
      </div>
      <div>
        <label htmlFor="registerLastName">Last name</label>
        <input
          name="lastName"
          id="registerLastName"
          type="text"
          autoComplete="family-name"
        />
      </div>
      <div>
        <label htmlFor="signUpPassword">Password</label>
        <input
          name="password"
          id="signUpPassword"
          type="password"
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
