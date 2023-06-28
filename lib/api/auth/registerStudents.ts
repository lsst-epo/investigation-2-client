import { gql } from "graphql-request";
import { queryAPI } from "@/lib/fetch";
import type { AuthResponse, ErrorResponse } from "@/types/auth";

// https://graphql-authentication.jamesedmonston.co.uk/usage/authentication#register
export default async function registerStudents({
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
    mutation RegisterStudents(
      $email: String!
      $password: String!
      $fullName: String
    ) {
      registerStudents(
        email: $email
        password: $password
        fullName: $fullName
      ) {
        jwt
        jwtExpiresAt
        refreshToken
        refreshTokenExpiresAt
        user {
          status
          # ... on User {
          # requestDeletion
          # }
        }
      }
    }
  `;
  return await queryAPI<{
    registerStudents?: AuthResponse;
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
