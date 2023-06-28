import { gql } from "graphql-request";
import { queryAPI } from "@/lib/fetch";
import { ErrorResponse } from "@/types/auth";

// https://graphql-authentication.jamesedmonston.co.uk/usage/authentication#activate-user
export default async function activate({
  code,
  id,
}: {
  code: string;
  id: string;
}) {
  const query = gql`
    mutation ActivateUser($code: String!, $id: String!) {
      activateUser(code: $code, id: $id)
    }
  `;
  return await queryAPI<{ activateUser?: string; errors?: ErrorResponse }>({
    query,
    variables: { code, id },
  });
}
