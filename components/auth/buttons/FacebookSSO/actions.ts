"use server";

import getFacebookOauthUrl from "@/api/auth/getFacebookOAuthUrl";

export async function getOauthUrl() {
  const data = await getFacebookOauthUrl();

  if (data.facebookOauthUrl) {
    return data.facebookOauthUrl;
  } else {
    throw new Error(data.errors?.[0].message ?? "Unknown error");
  }
}
