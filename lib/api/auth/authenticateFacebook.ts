import { gql } from "graphql-request";
import { queryAPI } from "@/lib/fetch";

// https://graphql-authentication.jamesedmonston.co.uk/usage/social#facebook
export default async function authenticateFacebook({
  code,
  pendingGroup,
}: {
  code: string;
  pendingGroup?: string | null;
}) {
  const schema = pendingGroup === "educators" ? "Educators" : "Students";

  const query = gql`
    mutation FacebookSignIn($code: String) {
      facebookSignIn${schema}(code: $code) {
        jwt
        jwtExpiresAt
        refreshToken
        refreshTokenExpiresAt
        user {
          status
          ... on User {
            requestDeletion
            preferredLanguage
          }
        }
      }
    }
  `;
  return await queryAPI({ query, variables: { code } });
}
