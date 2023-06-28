"use server";

import { setNewPassword } from "@/api/auth";

export async function setPassword(
  formData: FormData,
  code: string,
  id: string
) {
  const formDataObj = Object.fromEntries(formData);

  const data = await setNewPassword({
    password: formDataObj.password,
    code,
    id,
  });

  if (data.setPassword) {
    return data;
  } else {
    throw new Error(data.errors?.[0].message ?? "Unknown error");
  }
}
