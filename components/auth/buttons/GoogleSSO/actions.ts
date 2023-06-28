"use server";

import { revalidatePath } from "next/cache";
import {
  authenticateEducatorsWithGoogle,
  authenticateStudentsWithGoogle,
} from "@/api/auth";
import { setAuthCookies } from "@/components/auth/serverHelpers";

export async function authenticateStudent(
  idToken: string,
  pathToRevalidate: string
) {
  const data = await authenticateStudentsWithGoogle({ idToken });

  if (data.googleSignInStudents) {
    setAuthCookies(data.googleSignInStudents);
    revalidatePath(pathToRevalidate);
    return data;
  } else {
    throw new Error(data.errors?.[0].message ?? "Unknown error");
  }
}

export async function authenticateEducator(
  idToken: string,
  pathToRevalidate: string
) {
  const data = await authenticateEducatorsWithGoogle({ idToken });

  if (data.googleSignInEducators) {
    setAuthCookies(data.googleSignInEducators);
    revalidatePath(pathToRevalidate);
    return data;
  } else {
    throw new Error(data.errors?.[0].message ?? "Unknown error");
  }
}
