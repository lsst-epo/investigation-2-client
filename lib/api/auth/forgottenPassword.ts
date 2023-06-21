import { gql } from "graphql-request";
import { queryAPI } from "@/lib/fetch";

// graphql-authentication.jamesedmonston.co.uk/usage/authentication#forgotten-password
export default async function forgottenPassword({
  email,
  token,
}: {
  email: string;
  token?: string | null;
}) {
  const query = gql`
    mutation ForgottenPassword($email: String) {
      forgottenPassword(email: $email)
    }
  `;
  return await queryAPI({ query, variables: { email }, token });
}
