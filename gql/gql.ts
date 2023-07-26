/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query UriSegmentsMetadata($site: [String], $uri: [String]) {\n    entry(site: $site, uri: $uri) {\n      title\n    }\n  }\n": types.UriSegmentsMetadataDocument,
    "\n  query UriSegmentsQuery($site: [String], $uri: [String]) {\n    entry(site: $site, uri: $uri) {\n      ...TemplateFactory\n    }\n  }\n": types.UriSegmentsQueryDocument,
    "\n  query GlobalsQuery($site: [String], $section: [String]) {\n    headerNavItems: entries(section: $section, site: $site, level: 1) {\n      id\n      title\n      uri\n      children {\n        id\n        title\n        uri\n      }\n    }\n    siteInfo: globalSet(site: $site, handle: \"siteInfo\") {\n      ... on siteInfo_GlobalSet {\n        language\n        name\n        handle\n        siteTitle\n        siteDescription\n      }\n    }\n    categories(site: $site) {\n      id\n      slug\n      groupHandle\n      title\n    }\n  }\n": types.GlobalsQueryDocument,
    "\n  query HomepageQuery($site: [String], $uri: [String]) {\n    entry(site: $site, uri: $uri) {\n      __typename\n      ...HomepageTemplate\n    }\n  }\n": types.HomepageQueryDocument,
    "\n  fragment TextContentBlock on contentBlocks_text_BlockType {\n    text\n  }\n": types.TextContentBlockFragmentDoc,
    "\n  fragment ContentBlockFactory on contentBlocks_NeoField {\n    __typename\n    ...TextContentBlock\n  }\n": types.ContentBlockFactoryFragmentDoc,
    "\n  fragment SimpleContentBlockFactory on contentBlocks_NeoField {\n    __typename\n    ...TextContentBlock\n  }\n": types.SimpleContentBlockFactoryFragmentDoc,
    "\n  fragment TemplateFactory on EntryInterface {\n    __typename\n    ...PageTemplate\n  }\n": types.TemplateFactoryFragmentDoc,
    "\n  fragment HomepageTemplate on homepage_homepage_Entry {\n    id\n    title\n    contentBlocks {\n      ...ContentBlockFactory\n    }\n  }\n": types.HomepageTemplateFragmentDoc,
    "\n  fragment PageTemplate on pages_pages_Entry {\n    id\n    title\n    contentBlocks {\n      ...ContentBlockFactory\n    }\n  }\n": types.PageTemplateFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query UriSegmentsMetadata($site: [String], $uri: [String]) {\n    entry(site: $site, uri: $uri) {\n      title\n    }\n  }\n"): (typeof documents)["\n  query UriSegmentsMetadata($site: [String], $uri: [String]) {\n    entry(site: $site, uri: $uri) {\n      title\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query UriSegmentsQuery($site: [String], $uri: [String]) {\n    entry(site: $site, uri: $uri) {\n      ...TemplateFactory\n    }\n  }\n"): (typeof documents)["\n  query UriSegmentsQuery($site: [String], $uri: [String]) {\n    entry(site: $site, uri: $uri) {\n      ...TemplateFactory\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GlobalsQuery($site: [String], $section: [String]) {\n    headerNavItems: entries(section: $section, site: $site, level: 1) {\n      id\n      title\n      uri\n      children {\n        id\n        title\n        uri\n      }\n    }\n    siteInfo: globalSet(site: $site, handle: \"siteInfo\") {\n      ... on siteInfo_GlobalSet {\n        language\n        name\n        handle\n        siteTitle\n        siteDescription\n      }\n    }\n    categories(site: $site) {\n      id\n      slug\n      groupHandle\n      title\n    }\n  }\n"): (typeof documents)["\n  query GlobalsQuery($site: [String], $section: [String]) {\n    headerNavItems: entries(section: $section, site: $site, level: 1) {\n      id\n      title\n      uri\n      children {\n        id\n        title\n        uri\n      }\n    }\n    siteInfo: globalSet(site: $site, handle: \"siteInfo\") {\n      ... on siteInfo_GlobalSet {\n        language\n        name\n        handle\n        siteTitle\n        siteDescription\n      }\n    }\n    categories(site: $site) {\n      id\n      slug\n      groupHandle\n      title\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query HomepageQuery($site: [String], $uri: [String]) {\n    entry(site: $site, uri: $uri) {\n      __typename\n      ...HomepageTemplate\n    }\n  }\n"): (typeof documents)["\n  query HomepageQuery($site: [String], $uri: [String]) {\n    entry(site: $site, uri: $uri) {\n      __typename\n      ...HomepageTemplate\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment TextContentBlock on contentBlocks_text_BlockType {\n    text\n  }\n"): (typeof documents)["\n  fragment TextContentBlock on contentBlocks_text_BlockType {\n    text\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ContentBlockFactory on contentBlocks_NeoField {\n    __typename\n    ...TextContentBlock\n  }\n"): (typeof documents)["\n  fragment ContentBlockFactory on contentBlocks_NeoField {\n    __typename\n    ...TextContentBlock\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment SimpleContentBlockFactory on contentBlocks_NeoField {\n    __typename\n    ...TextContentBlock\n  }\n"): (typeof documents)["\n  fragment SimpleContentBlockFactory on contentBlocks_NeoField {\n    __typename\n    ...TextContentBlock\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment TemplateFactory on EntryInterface {\n    __typename\n    ...PageTemplate\n  }\n"): (typeof documents)["\n  fragment TemplateFactory on EntryInterface {\n    __typename\n    ...PageTemplate\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment HomepageTemplate on homepage_homepage_Entry {\n    id\n    title\n    contentBlocks {\n      ...ContentBlockFactory\n    }\n  }\n"): (typeof documents)["\n  fragment HomepageTemplate on homepage_homepage_Entry {\n    id\n    title\n    contentBlocks {\n      ...ContentBlockFactory\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment PageTemplate on pages_pages_Entry {\n    id\n    title\n    contentBlocks {\n      ...ContentBlockFactory\n    }\n  }\n"): (typeof documents)["\n  fragment PageTemplate on pages_pages_Entry {\n    id\n    title\n    contentBlocks {\n      ...ContentBlockFactory\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;