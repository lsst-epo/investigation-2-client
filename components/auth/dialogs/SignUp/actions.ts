"use server";

import { registerEducators, registerStudents } from "@/api/auth";
import { setAuthCookies } from "@/components/auth/helpers";

export async function registerEducator(formData: FormData) {
  const formDataObj = Object.fromEntries(formData);
  const { email, firstName, lastName, password } = formDataObj;

  const data = await registerEducators({
    email,
    firstName,
    lastName,
    password,
  });

  if (data.registerEducators) {
    setAuthCookies(data.registerEducators);
    return data;
  } else {
    throw new Error(data.errors?.[0].message ?? "Unknown error");
  }
}

export async function registerStudent(formData: FormData) {
  const formDataObj = Object.fromEntries(formData);
  const { email, firstName, lastName, password } = formDataObj;

  const data = await registerStudents({
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
