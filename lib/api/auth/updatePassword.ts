import { gql } from "graphql-request";
import { queryAPI } from "@/lib/fetch";

// https://graphql-authentication.jamesedmonston.co.uk/usage/user-details#update-password
export default async function updatePassword({
  currentPassword,
  newPassword,
  confirmPassword,
  tokenFetcher,
}: {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
  tokenFetcher: () => Promise<any>;
}) {
  const tokenData = await tokenFetcher();

  if (!tokenData?.jwt) return { error: true, errorType: "session_expired" };

  const query = gql`
    mutation UpdatePassword(
      $currentPassword: String
      $newPassword: String
      $confirmPassword: String
    ) {
      updatePassword(
        currentPassword: $currentPassword
        newPassword: $newPassword
        confirmPassword: $confirmPassword
      )
    }
  `;
  const data = await queryAPI({
    query,
    variables: { currentPassword, newPassword, confirmPassword },
    token: tokenData.jwt,
  });
  return data;
}
