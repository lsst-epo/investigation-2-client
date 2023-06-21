import { gql } from "graphql-request";
import { queryAPI } from "@/lib/fetch";

// https://graphql-authentication.jamesedmonston.co.uk/usage/authentication#set-password
export default async function setNewPassword({
  password,
  code,
  id,
}: {
  password: string;
  code: string;
  id: string;
}) {
  const query = gql`
    mutation SetPassword($password: String, $code: String, $id: String) {
      setPassword(password: $password, code: $code, id: $id)
    }
  `;
  return await queryAPI({ query, variables: { password, code, id } });
}
