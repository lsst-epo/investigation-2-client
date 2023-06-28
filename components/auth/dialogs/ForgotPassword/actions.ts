"use server";

import { forgottenPassword } from "@/api/auth";

export async function forgotPassword(formData: FormData) {
  const formDataObj = Object.fromEntries(formData);

  const data = await forgottenPassword({
    email: formDataObj.email,
  });

  if (data.forgottenPassword) {
    return data;
  } else {
    throw new Error(data.errors?.[0].message ?? "Unknown error");
  }
}
