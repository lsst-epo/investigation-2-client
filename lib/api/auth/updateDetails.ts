import { gql } from "graphql-request";
import { queryAPI } from "@/lib/fetch";

export default async function updateDetails({
  userData,
  tokenFetcher,
}: {
  userData: Record<string, string | object>;
  tokenFetcher: () => Promise<any>;
}) {
  const tokenData = await tokenFetcher();

  if (!tokenData?.jwt) return { error: true, errorType: "session_expired" };

  const updates = Object.keys(userData)
    .map((key) => `${key}: ${JSON.stringify(userData[key])}`)
    .join("\n");
  const query = gql`
    mutation UpdateViewer {
      updateViewer(
        ${updates}
      ) {
        email
        firstName
        lastName
        ... on User {
          emailSubscription
          preferredLanguage
          school
          requestDeletion
        }
      }
    }
  `;

  return await queryAPI({ query, token: tokenData.jwt });
}
