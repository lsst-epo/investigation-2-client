import { gql } from "graphql-request";
import { queryAPI } from "@/lib/fetch";

// https://graphql-authentication.jamesedmonston.co.uk/usage/user-details#update-viewer
export default async function requestDeletion(token?: string | null) {
  const query = gql`
    mutation UpdateViewer {
      updateViewer(requestDeletion: ["requested"]) {
        ... on User {
          requestDeletion
        }
      }
    }
  `;

  return await queryAPI({ query, token });
}
