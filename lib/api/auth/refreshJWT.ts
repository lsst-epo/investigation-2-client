import { gql } from "graphql-request";
import { queryAPI } from "@/lib/fetch";
import type { AuthResponse, ErrorResponse } from "@/types/auth";

// https://graphql-authentication.jamesedmonston.co.uk/usage/authentication#refresh-jwt
export default async function refreshJWT({
  refreshToken,
}: {
  refreshToken: string;
}) {
  const query = gql`
    mutation RefreshToken($refreshToken: String!) {
      refreshToken(refreshToken: $refreshToken) {
        jwt
        jwtExpiresAt
        refreshToken
        refreshTokenExpiresAt
        user {
          status
          # ... on User {
          #   requestDeletion
          # }
        }
      }
    }
  `;
  return await queryAPI<{
    refreshToken: AuthResponse;
    errors?: ErrorResponse;
  }>({ query, variables: { refreshToken } });
}
