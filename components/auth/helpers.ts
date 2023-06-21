import { cookies } from "next/headers";
import jwtDecode from "jwt-decode";
import type { AuthResponse, Token } from "@/types/auth";

const COOKIE_OPTIONS = {
  httpOnly: true,
  path: "/",
  sameSite: true,
} as const;

export function getAuthCookies() {
  const jwt = cookies().get("jwt")?.value;
  const jwtExpiresAt = cookies().get("jwtExpiresAt")?.value;
  const refreshToken = cookies().get("refreshToken")?.value;
  const refreshTokenExpiresAt = cookies().get("refreshTokenExpiresAt")?.value;

  return {
    jwt,
    jwtExpiresAt: jwtExpiresAt ? Number(jwtExpiresAt) : undefined,
    refreshToken,
    refreshTokenExpiresAt: refreshTokenExpiresAt
      ? Number(refreshTokenExpiresAt)
      : undefined,
  };
}

export function setAuthCookies(data: AuthResponse) {
  const { jwt, jwtExpiresAt, refreshToken, refreshTokenExpiresAt } = data;
  cookies().set("jwt", jwt, COOKIE_OPTIONS);
  cookies().set("jwtExpiresAt", String(jwtExpiresAt), COOKIE_OPTIONS);
  cookies().set("refreshToken", refreshToken, COOKIE_OPTIONS);
  cookies().set(
    "refreshTokenExpiresAt",
    String(refreshTokenExpiresAt),
    COOKIE_OPTIONS
  );
}

export function deleteAuthCookies() {
  cookies().set("jwt", "", COOKIE_OPTIONS);
  cookies().set("jwtExpiresAt", "", COOKIE_OPTIONS);
  cookies().set("refreshToken", "", COOKIE_OPTIONS);
  cookies().set("refreshTokenExpiresAt", "", COOKIE_OPTIONS);
}

export function getUserFromJwt(jwt?: Token) {
  if (!jwt) return undefined;

  const { email, groups, fullName } = jwtDecode<{
    email: string;
    groups: string[];
    fullName: string;
  }>(jwt);
  const group = groups?.length ? groups[0].toLowerCase() : null;
  return {
    email,
    fullName,
    group,
  };
}
