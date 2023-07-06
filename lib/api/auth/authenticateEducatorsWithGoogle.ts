import { gql } from "graphql-request";
import { queryAPI } from "@/lib/fetch";
import { AuthResponse, ErrorResponse } from "@/types/auth";

// https://graphql-authentication.jamesedmonston.co.uk/usage/social#google
export default async function authenticateEducatorsWithGoogle({
  idToken,
}: {
  idToken: string;
}) {
  const query = gql`
    mutation GoogleSignIn($idToken: String!) {
      googleSignInEducators(idToken: $idToken) {
        jwt
        jwtExpiresAt
        refreshToken
        refreshTokenExpiresAt
        user {
          status
          # ... on User {
          #   requestDeletion
          #   preferredLanguage
          # }
        }
      }
    }
  `;
  return await queryAPI<{
    googleSignInEducators?: AuthResponse;
    errors?: ErrorResponse;
  }>({ query, variables: { idToken } });
}
