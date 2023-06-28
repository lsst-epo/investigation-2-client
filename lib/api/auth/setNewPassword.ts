import { gql } from "graphql-request";
import { queryAPI } from "@/lib/fetch";
import { ErrorResponse } from "@/types/auth";

// https://graphql-authentication.jamesedmonston.co.uk/usage/authentication#set-password
export default async function setNewPassword({
  password,
  code,
  id,
}: {
  // FormDataEntryValue is a union of string and File, but since we don't use
  // input[type='file'] we can assume this will always be a string
  password: FormDataEntryValue;
  code: string;
  id: string;
}) {
  const query = gql`
    mutation SetPassword($password: String!, $code: String!, $id: String!) {
      setPassword(password: $password, code: $code, id: $id)
    }
  `;
  return await queryAPI<{ setPassword?: any; errors?: ErrorResponse }>({
    query,
    variables: { password, code, id },
  });
}
