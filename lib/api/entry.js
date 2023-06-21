import { gql } from "graphql-request";
import { queryAPI } from "@/lib/fetch";
import { homepageFragment } from "@/lib/api/fragments/homepage";
import { pageFragment } from "@/lib/api/fragments/page";
import { allPageBlocksFragment } from "@/api/fragments/content-blocks";

export async function getEntryDataByUri(uri, site = "default", previewToken) {
  const query = gql`
    ${homepageFragment}
    ${pageFragment}
    ${allPageBlocksFragment}
      {
        entry (site: "${site}", uri: "${uri}") {
          ...homepageFragment
          ...pageFragment
        }
      }
    `;
  const data = await queryAPI({ query, previewToken });
  return data.entry;
}
