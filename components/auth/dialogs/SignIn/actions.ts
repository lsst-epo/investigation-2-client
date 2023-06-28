"use server";

import { revalidatePath } from "next/cache";
import { authenticate } from "@/api/auth";
import { setAuthCookies } from "@/components/auth/serverHelpers";

export async function signIn(formData: FormData, pathToRevalidate: string) {
  const formDataObj = Object.fromEntries(formData);
  const { email, password } = formDataObj;

  const data = await authenticate({
    email,
    password,
  });

  if (data.authenticate) {
    setAuthCookies(data.authenticate);
    revalidatePath(pathToRevalidate);
    return data;
  } else {
    throw new Error(data.errors?.[0].message ?? "Unknown error");
  }
}
