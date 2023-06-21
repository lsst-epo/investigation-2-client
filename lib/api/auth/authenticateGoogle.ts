import { gql } from "graphql-request";
import { queryAPI } from "@/lib/fetch";

// https://graphql-authentication.jamesedmonston.co.uk/usage/social#google
export default async function authenticateGoogle({
  idToken,
  pendingGroup,
}: {
  idToken: string;
  pendingGroup: "educators" | "students";
}) {
  const schema = pendingGroup === "educators" ? "Educators" : "Students";

  const query = gql`
    mutation GoogleSignIn($idToken: String) {
      googleSignIn${schema}(
        idToken: $idToken
      ) {
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
  return await queryAPI({ query, variables: { idToken } });
}
