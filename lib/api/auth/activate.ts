import { gql } from "graphql-request";
import { queryAPI } from "@/lib/fetch";

// https://graphql-authentication.jamesedmonston.co.uk/usage/authentication#activate-user
export default async function activate({
  code,
  id,
}: {
  code: string;
  id: string;
}) {
  const query = gql`
    mutation ActivateUser($code: String, $id: String) {
      activateUser(code: $code, id: $id)
    }
  `;
  return await queryAPI({ query, variables: { code, id } });
}
