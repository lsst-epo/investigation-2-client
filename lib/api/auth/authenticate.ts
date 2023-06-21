import { gql } from "graphql-request";
import { queryAPI } from "@/lib/fetch";
import { AuthResponse, ErrorResponse } from "@/types/auth";

// https://graphql-authentication.jamesedmonston.co.uk/usage/authentication
export default async function authenticate({
  email,
  password,
  token,
}: {
  // FormDataEntryValue is a union of string and File, but since we don't use
  // input[type='file'] we can assume this will always be a string
  email: FormDataEntryValue;
  password: FormDataEntryValue;
  token?: string | null;
}) {
  const query = gql`
    mutation Authenticate($email: String!, $password: String!) {
      authenticate(email: $email, password: $password) {
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
    authenticate?: AuthResponse;
    errors?: ErrorResponse;
  }>({ query, variables: { email, password }, token });
}
