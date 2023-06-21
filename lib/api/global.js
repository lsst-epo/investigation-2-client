// import useSWR from "swr";
import { gql } from "graphql-request";
import { queryAPI } from "@/lib/fetch";

export async function getGlobalData() {
  const query = gql`
    {
      pageTree: entries(section: "pages", site: "default", level: 1) {
        id
        title
        uri
        children {
          id
          title
          uri
        }
      }
      globals: globalSets(site: "default") {
        ... on siteInfo_GlobalSet {
          language
          name
          handle
          siteTitle
          siteDescription
        }
      }
      allCategories: categories(site: "default") {
        id
        slug
        groupHandle
        title
      }
      pageTree_es: entries(section: "pages", site: "es", level: 1) {
        id
        title
        uri
        children {
          id
          title
          uri
        }
      }
      globals_es: globalSets(site: "es") {
        ... on siteInfo_GlobalSet {
          language
          name
          handle
          siteTitle
          siteDescription
        }
      }
      allCategories_es: categories(site: "es") {
        id
        slug
        groupHandle
        title
      }
    }
  `;
  const data = await queryAPI({ query });
  return data;
}

// export function useGlobalData() {
//   const { data, error } = useSWR(
//     gql`
//       {
//         pageTree: entries(section: "pages", site: "default", level: 1) {
//           id
//           title
//           uri
//           children {
//             id
//             title
//             uri
//           }
//         }
//         globals: globalSets(site: "default") {
//           ... on siteInfo_GlobalSet {
//             language
//             name
//             handle
//             siteTitle
//             siteDescription
//           }
//         }
//         pageTree_es: entries(section: "pages", site: "es", level: 1) {
//           id
//           title
//           uri
//           children {
//             id
//             title
//             uri
//           }
//         }
//         globals_es: globalSets(site: "es") {
//           ... on siteInfo_GlobalSet {
//             language
//             name
//             handle
//             siteTitle
//             siteDescription
//           }
//         }
//       }
//     `,
//     queryAPI
//   );

//   return {
//     data,
//     isLoading: !error && !data,
//     isError: error,
//   };
// }
