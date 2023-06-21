"use server";

import { registerStudent } from "@/api/auth";
import { setAuthCookies } from "../helpers";

export async function register(formData: FormData) {
  const formDataObj = Object.fromEntries(formData);
  const { email, firstName, lastName, password } = formDataObj;

  const data = await registerStudent({
    email,
    firstName,
    lastName,
    password,
  });

  if (data.registerStudents) {
    setAuthCookies(data.registerStudents);
    return data;
  } else {
    throw new Error(data.errors?.[0].message ?? "Unknown error");
  }
}
