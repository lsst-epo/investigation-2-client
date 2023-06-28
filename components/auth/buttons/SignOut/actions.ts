"use server";

import { redirect } from "next/navigation";
import { deleteAuthCookies } from "@/components/auth/helpers";

export async function signOut(redirectTo: string) {
  deleteAuthCookies();
  redirect(redirectTo);
}
