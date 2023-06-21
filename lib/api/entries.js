import { gql } from "graphql-request";
import { queryAPI } from "@/lib/fetch";

export async function getAllEntries() {
  const query = gql`
    {
      entries(site: "*", section: ["pages", "homepage"]) {
        uri
      }
    }
  `;
  const data = await queryAPI({ query });
  return data.entries
    .filter(({ uri }) => uri != null)
    .map(({ uri, sectionHandle }) => ({
      params: { uriSegments: uri.split("/"), uri, sectionHandle },
    }));
}

export async function getEntrySectionByUri(uri = "__home__", site = "default") {
  const query = gql`
    {
      entry (uri: "${uri}", site: "${site}") {
        sectionHandle
      }
    }
  `;
  const data = await queryAPI({ query });
  return data.entry?.sectionHandle;
}
