import { gql } from "graphql-request";
import { queryAPI } from "@/lib/fetch";
import type { AuthResponse, ErrorResponse } from "@/types/auth";

// https://graphql-authentication.jamesedmonston.co.uk/usage/authentication#register
export default async function registerEducator({
  email,
  password,
  firstName,
  lastName,
  token,
}: {
  // FormDataEntryValue is a union of string and File, but since we don't use
  // input[type='file'] we can assume this will always be a string
  email: FormDataEntryValue;
  password: FormDataEntryValue;
  firstName: FormDataEntryValue;
  lastName: FormDataEntryValue;
  token?: string | null;
}) {
  const query = gql`
    mutation RegisterEducators($email: String!, $password: String!, $fullName: String) {
      registerEducators(
        email: $email
        password: $password
        fullName: $fullName {  
        user {
          status
          # ... on User {
          #   requestDeletion
          # }
        }
        jwt
        jwtExpiresAt
        refreshToken
        refreshTokenExpiresAt
      }
    }
  `;
  return await queryAPI<{
    registerEducators?: AuthResponse;
    errors?: ErrorResponse;
  }>({
    query,
    variables: {
      email,
      password,
      fullName: `${firstName} ${lastName}`,
    },
    token,
  });
}
