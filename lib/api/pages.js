import { gql } from "graphql-request";
import { queryAPI } from "@/lib/fetch";

export async function getAllPageUrls(lang = "default") {
  const query = gql`
    {
      entries (section: "pages", site: "${lang}") {
        id
        title
        uri
      }
    }
  `;
  const data = await queryAPI({ query });
  return data.entries;
}

export async function getPageUrlByUid(uid, site, previewToken) {
  const query = gql`
    {
      entry (uid: "${uid}" site: "${site}") {
        url
      }
    }
  `;
  const data = await queryAPI({ query, previewToken });
  return data.entry;
}

export async function getBreadcrumbs(id, site = "default", previewToken) {
  if (!id) return null;
  const query = gql`
    {
      entries(section: "pages", site: "${site}", ancestorOf: ${id}) {
        id
        title
        uri
      }
    }
  `;
  const data = await queryAPI({ query, previewToken });
  return data.entries;
}
