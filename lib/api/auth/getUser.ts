import { gql } from "graphql-request";
import { queryAPI } from "@/lib/fetch";

// https://graphql-authentication.jamesedmonston.co.uk/usage/user-details#viewer
export default async function getUser(token: string) {
  const query = gql`
    query Viewer {
      viewer {
        email
        firstName
        lastName
        status
        ... on User {
          emailSubscription
          preferredLanguage
          school
          requestDeletion
        }
      }
    }
  `;
  return await queryAPI({ query, token });
}
