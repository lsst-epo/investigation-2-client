import { gql } from "graphql-request";
import { queryAPI } from "@/lib/fetch";
import { ErrorResponse } from "@/types/auth";

// graphql-authentication.jamesedmonston.co.uk/usage/authentication#forgotten-password
export default async function forgottenPassword({
  email,
  token,
}: {
  // FormDataEntryValue is a union of string and File, but since we don't use
  // input[type='file'] we can assume this will always be a string
  email: FormDataEntryValue;
  token?: string | null;
}) {
  const query = gql`
    mutation ForgottenPassword($email: String!) {
      forgottenPassword(email: $email)
    }
  `;
  return await queryAPI<{ forgottenPassword?: string; errors?: ErrorResponse }>(
    {
      query,
      variables: { email },
      token,
    }
  );
}
