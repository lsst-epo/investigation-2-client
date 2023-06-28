import { gql } from "graphql-request";
import { queryAPI } from "@/lib/fetch";
import { ErrorResponse } from "@/types/auth";

// https://graphql-authentication.jamesedmonston.co.uk/usage/social#facebook
export default async function getFacebookOauthUrl() {
  const query = gql`
    query FacebookOauthUrl {
      facebookOauthUrl
    }
  `;
  return await queryAPI<{ facebookOauthUrl?: string; errors?: ErrorResponse }>({
    query,
  });
}
