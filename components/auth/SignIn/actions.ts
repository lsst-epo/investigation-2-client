"use server";

import { redirect } from "next/navigation";
import { authenticate } from "@/api/auth";
import { setAuthCookies } from "../helpers";

export async function signIn(formData: FormData, redirectTo: string) {
  const formDataObj = Object.fromEntries(formData);
  const { email, password } = formDataObj;

  const data = await authenticate({
    email,
    password,
  });

  if (data.authenticate) {
    setAuthCookies(data.authenticate);
    redirect(redirectTo);
  } else {
    throw new Error(data.errors?.[0].message ?? "Unknown error");
  }
}
