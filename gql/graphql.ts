/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `DateTime` scalar type represents a point in time. */
  DateTime: { input: any; output: any; }
  /** The `Number` scalar type represents a number that can be a float, an integer or a null value. */
  Number: { input: any; output: any; }
  /** The `QueryArgument` scalar type represents a value to be using in Craft element queries. It can be an integer, a string, or a boolean value. */
  QueryArgument: { input: any; output: any; }
};

export type Address = AddressInterface & ElementInterface & {
  __typename?: 'Address';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** First line of the address */
  addressLine1?: Maybe<Scalars['String']['output']>;
  /** Second line of the address */
  addressLine2?: Maybe<Scalars['String']['output']>;
  /** Administrative area. */
  administrativeArea?: Maybe<Scalars['String']['output']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** Two-letter country code */
  countryCode: Scalars['String']['output'];
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** Dependent locality */
  dependentLocality?: Maybe<Scalars['String']['output']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The first name on the address. */
  firstName?: Maybe<Scalars['String']['output']>;
  /** The full name on the address. */
  fullName?: Maybe<Scalars['String']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The last name on the address. */
  lastName?: Maybe<Scalars['String']['output']>;
  /** Latitude */
  latitude?: Maybe<Scalars['String']['output']>;
  /** Locality */
  locality?: Maybe<Scalars['String']['output']>;
  /** Longitude */
  longitude?: Maybe<Scalars['String']['output']>;
  /** Organization name */
  organization?: Maybe<Scalars['String']['output']>;
  /** Organization tax ID */
  organizationTaxId?: Maybe<Scalars['String']['output']>;
  /** Postal code */
  postalCode?: Maybe<Scalars['String']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** Sorting code */
  sortingCode?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
};


export type Address_CountArgs = {
  field: Scalars['String']['input'];
};

/** This is the interface implemented by all addresses. */
export type AddressInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** First line of the address */
  addressLine1?: Maybe<Scalars['String']['output']>;
  /** Second line of the address */
  addressLine2?: Maybe<Scalars['String']['output']>;
  /** Administrative area. */
  administrativeArea?: Maybe<Scalars['String']['output']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** Two-letter country code */
  countryCode: Scalars['String']['output'];
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** Dependent locality */
  dependentLocality?: Maybe<Scalars['String']['output']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The first name on the address. */
  firstName?: Maybe<Scalars['String']['output']>;
  /** The full name on the address. */
  fullName?: Maybe<Scalars['String']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The last name on the address. */
  lastName?: Maybe<Scalars['String']['output']>;
  /** Latitude */
  latitude?: Maybe<Scalars['String']['output']>;
  /** Locality */
  locality?: Maybe<Scalars['String']['output']>;
  /** Longitude */
  longitude?: Maybe<Scalars['String']['output']>;
  /** Organization name */
  organization?: Maybe<Scalars['String']['output']>;
  /** Organization tax ID */
  organizationTaxId?: Maybe<Scalars['String']['output']>;
  /** Postal code */
  postalCode?: Maybe<Scalars['String']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** Sorting code */
  sortingCode?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
};


/** This is the interface implemented by all addresses. */
export type AddressInterface_CountArgs = {
  field: Scalars['String']['input'];
};

/** The interface implemented by all answers. */
export type AnswerInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** Content of the user's answer */
  data?: Maybe<Scalars['String']['output']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** ID of the Investigation parent */
  investigationId?: Maybe<Scalars['Int']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** ID of the question being answered */
  questionId?: Maybe<Scalars['Int']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
  /** ID of the user answering the question */
  userId?: Maybe<Scalars['Int']['output']>;
};


/** The interface implemented by all answers. */
export type AnswerInterface_CountArgs = {
  field: Scalars['String']['input'];
};

export type AssetCriteriaInput = {
  availableFilters?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the assets’ files’ last-modified dates. */
  dateModified?: InputMaybe<Scalars['String']['input']>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  displayName?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the assets’ filenames. */
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the folders the assets belong to, per the folders’ IDs. */
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on whether the assets have alternative text. */
  hasAlt?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the assets’ image heights. */
  height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ IDs. */
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  /** Broadens the query results to include assets from any of the subfolders of the folder specified by `folderId`. */
  includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the assets’ file kinds. */
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Sets the limit for paginated results. */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /** Sets the offset for paginated results. */
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy?: InputMaybe<Scalars['String']['input']>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on a reference string. */
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to elements that relate to an asset list defined with this argument. */
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a category list defined with this argument. */
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to an entry list defined with this argument. */
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a tag list defined with this argument. */
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a use list defined with this argument. */
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  /** Narrows the query results to only elements that match a search query. */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the assets’ file sizes (in bytes). */
  size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ slugs. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ titles. */
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the user the assets were uploaded by, per the user’s ID. */
  uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
  /** Narrows the query results based on the elements’ URIs. */
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the volumes the assets belong to, per the volumes’ handles. */
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the volumes the assets belong to, per the volumes’ IDs. */
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the assets’ image widths. */
  width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** A list of transform handles to preload. */
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** This is the interface implemented by all assets. */
export type AssetInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** Alternative text for the asset. */
  alt?: Maybe<Scalars['String']['output']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the asset file was last modified. */
  dateModified?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The file extension for the asset file. */
  extension: Scalars['String']['output'];
  /** The filename of the asset file. */
  filename: Scalars['String']['output'];
  /** The focal point represented as an array with `x` and `y` keys, or null if it’s not an image. */
  focalPoint?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  /** The ID of the folder that the asset belongs to. */
  folderId: Scalars['Int']['output'];
  /** Returns the file’s format. */
  format?: Maybe<Scalars['String']['output']>;
  /** Whether a user-defined focal point is set on the asset. */
  hasFocalPoint: Scalars['Boolean']['output'];
  /** The height in pixels or null if it’s not an image. */
  height?: Maybe<Scalars['Int']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** An `<img>` tag based on this asset. */
  img?: Maybe<Scalars['String']['output']>;
  /** The file kind. */
  kind: Scalars['String']['output'];
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The file’s MIME type, if it can be determined. */
  mimeType?: Maybe<Scalars['String']['output']>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<AssetInterface>;
  /** The asset’s path in the volume. */
  path: Scalars['String']['output'];
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<AssetInterface>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The file size in bytes. */
  size?: Maybe<Scalars['String']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** Returns a `srcset` attribute value based on the given widths or x-descriptors. */
  srcset?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The user who first added this asset (if known). */
  uploader?: Maybe<UserInterface>;
  /** The ID of the user who first added this asset (if known). */
  uploaderId?: Maybe<Scalars['Int']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
  /** The full URL of the asset. This field accepts the same fields as the `transform` directive. */
  url?: Maybe<Scalars['String']['output']>;
  /** The ID of the volume that the asset belongs to. */
  volumeId?: Maybe<Scalars['Int']['output']>;
  /** The width in pixels or null if it’s not an image. */
  width?: Maybe<Scalars['Int']['output']>;
};


/** This is the interface implemented by all assets. */
export type AssetInterface_CountArgs = {
  field: Scalars['String']['input'];
};


/** This is the interface implemented by all assets. */
export type AssetInterfaceFormatArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  immediately?: InputMaybe<Scalars['Boolean']['input']>;
  interlace?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  transform?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


/** This is the interface implemented by all assets. */
export type AssetInterfaceHeightArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  immediately?: InputMaybe<Scalars['Boolean']['input']>;
  interlace?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  transform?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


/** This is the interface implemented by all assets. */
export type AssetInterfaceNextArgs = {
  availableFilters?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateModified?: InputMaybe<Scalars['String']['input']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  displayName?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** This is the interface implemented by all assets. */
export type AssetInterfacePrevArgs = {
  availableFilters?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateModified?: InputMaybe<Scalars['String']['input']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  displayName?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** This is the interface implemented by all assets. */
export type AssetInterfaceSrcsetArgs = {
  sizes: Array<Scalars['String']['input']>;
};


/** This is the interface implemented by all assets. */
export type AssetInterfaceUploaderArgs = {
  assetUploaders?: InputMaybe<Scalars['Boolean']['input']>;
  authors?: InputMaybe<Scalars['Boolean']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  email?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  firstName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  fullName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  group?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasPhoto?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  username?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** This is the interface implemented by all assets. */
export type AssetInterfaceUrlArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  immediately?: InputMaybe<Scalars['Boolean']['input']>;
  interlace?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  transform?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


/** This is the interface implemented by all assets. */
export type AssetInterfaceWidthArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  immediately?: InputMaybe<Scalars['Boolean']['input']>;
  interlace?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  transform?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type Auth = {
  __typename?: 'Auth';
  jwt: Scalars['String']['output'];
  jwtExpiresAt: Scalars['Float']['output'];
  refreshToken: Scalars['String']['output'];
  refreshTokenExpiresAt: Scalars['Float']['output'];
  schema: Scalars['String']['output'];
  user?: Maybe<UserInterface>;
};

export type CategoryCriteriaInput = {
  /** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `ancestorOf`. */
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results to only elements that are ancestors of another element in its structure, provided by its ID. */
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `descendantOf`. */
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results to only elements that are descendants of another element in its structure provided by its ID. */
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  /** Whether to only return categories that the user has permission to edit. */
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the category groups the categories belong to per the group’s handles. */
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the category groups the categories belong to, per the groups’ IDs. */
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on whether the elements have any descendants in their structure. */
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the elements’ IDs. */
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on whether the elements are “leaves” in their structure (element with no descendants). */
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the elements’ level within the structure. */
  level?: InputMaybe<Scalars['Int']['input']>;
  /** Sets the limit for paginated results. */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results to only the entry that comes immediately after another element in its structure, provided by its ID. */
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  /** Sets the offset for paginated results. */
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy?: InputMaybe<Scalars['String']['input']>;
  /** Narrows the query results to only entries that are positioned after another element in its structure, provided by its ID. */
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results to only entries that are positioned before another element in its structure, provided by its ID. */
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to only the entry that comes immediately before another element in its structure, provided by its ID. */
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results based on a reference string. */
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to elements that relate to an asset list defined with this argument. */
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a category list defined with this argument. */
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to an entry list defined with this argument. */
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a tag list defined with this argument. */
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a use list defined with this argument. */
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  /** Narrows the query results to only elements that match a search query. */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the elements’ slugs. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines which structure data should be joined into the query. */
  structureId?: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results based on the elements’ titles. */
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the elements’ URIs. */
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Explicitly determines whether the query should join in the structure data. */
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

/** This is the interface implemented by all categories. */
export type CategoryInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** The category’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<CategoryInterface>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The category’s children. */
  children: Array<CategoryInterface>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** The category’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<CategoryInterface>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the group that contains the category. */
  groupHandle: Scalars['String']['output'];
  /** The ID of the group that contains the category. */
  groupId: Scalars['Int']['output'];
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The element’s level within its structure */
  level?: Maybe<Scalars['Int']['output']>;
  /** The element’s left position within its structure. */
  lft?: Maybe<Scalars['Int']['output']>;
  /** The same element in other locales. */
  localized: Array<CategoryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<CategoryInterface>;
  /** The category’s parent. */
  parent?: Maybe<CategoryInterface>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<CategoryInterface>;
  /** The element’s right position within its structure. */
  rgt?: Maybe<Scalars['Int']['output']>;
  /** The element’s structure’s root ID */
  root?: Maybe<Scalars['Int']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s structure ID. */
  structureId?: Maybe<Scalars['Int']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
  /** The element’s full URL */
  url?: Maybe<Scalars['String']['output']>;
};


/** This is the interface implemented by all categories. */
export type CategoryInterface_CountArgs = {
  field: Scalars['String']['input'];
};


/** This is the interface implemented by all categories. */
export type CategoryInterfaceAncestorsArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


/** This is the interface implemented by all categories. */
export type CategoryInterfaceChildrenArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


/** This is the interface implemented by all categories. */
export type CategoryInterfaceDescendantsArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


/** This is the interface implemented by all categories. */
export type CategoryInterfaceLocalizedArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


/** This is the interface implemented by all categories. */
export type CategoryInterfaceNextArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


/** This is the interface implemented by all categories. */
export type CategoryInterfaceParentArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


/** This is the interface implemented by all categories. */
export type CategoryInterfacePrevArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Element = ElementInterface & {
  __typename?: 'Element';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
};


export type Element_CountArgs = {
  field: Scalars['String']['input'];
};

/** This is the interface implemented by all elements. */
export type ElementInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
};


/** This is the interface implemented by all elements. */
export type ElementInterface_CountArgs = {
  field: Scalars['String']['input'];
};

export type EntryCriteriaInput = {
  /** Narrows the query results to only entries that were posted on or after a certain date. */
  after?: InputMaybe<Scalars['String']['input']>;
  /** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `ancestorOf`. */
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results to only elements that are ancestors of another element in its structure, provided by its ID. */
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the user group the entries’ authors belong to. */
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the user group the entries’ authors belong to, per the groups’ IDs. */
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the entries’ authors. */
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to only entries that were posted before a certain date. */
  before?: InputMaybe<Scalars['String']['input']>;
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `descendantOf`. */
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results to only elements that are descendants of another element in its structure provided by its ID. */
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Whether to only return entries that the user has permission to edit. */
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the entries’ expiry dates. */
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on whether the elements have any descendants in their structure. */
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the elements’ IDs. */
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on whether the elements are “leaves” in their structure (element with no descendants). */
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the elements’ level within the structure. */
  level?: InputMaybe<Scalars['Int']['input']>;
  /** Sets the limit for paginated results. */
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to only the entry that comes immediately after another element in its structure, provided by its ID. */
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  /** Sets the offset for paginated results. */
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to only entries that are positioned after another element in its structure, provided by its ID. */
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results to only entries that are positioned before another element in its structure, provided by its ID. */
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results based on the entries’ post dates. */
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to only the entry that comes immediately before another element in its structure, provided by its ID. */
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on a reference string. */
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to elements that relate to an asset list defined with this argument. */
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a category list defined with this argument. */
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to an entry list defined with this argument. */
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a tag list defined with this argument. */
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a use list defined with this argument. */
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  /** Narrows the query results to only elements that match a search query. */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Narrows the query results based on the section handles the entries belong to. */
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the sections the entries belong to, per the sections’ IDs. */
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the elements’ slugs. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines which structure data should be joined into the query. */
  structureId?: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results based on the elements’ titles. */
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the entries’ entry type handles. */
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the entries’ entry types, per the types’ IDs. */
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the elements’ URIs. */
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Explicitly determines whether the query should join in the structure data. */
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

/** This is the interface implemented by all entries. */
export type EntryInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<EntryInterface>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The entry’s author. */
  author?: Maybe<UserInterface>;
  /** The ID of the author of this entry. */
  authorId?: Maybe<Scalars['Int']['output']>;
  /** Returns the entry’s canonical ID. */
  canonicalId?: Maybe<Scalars['Int']['output']>;
  /** Returns the entry’s canonical UUID. */
  canonicalUid?: Maybe<Scalars['String']['output']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  children: Array<EntryInterface>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<EntryInterface>;
  /** The draft ID (from the `drafts` table). */
  draftId?: Maybe<Scalars['Int']['output']>;
  /** The name of the draft. */
  draftName?: Maybe<Scalars['String']['output']>;
  /** The notes for the draft. */
  draftNotes?: Maybe<Scalars['String']['output']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The expiry date of the entry. */
  expiryDate?: Maybe<Scalars['DateTime']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** Returns whether this is a draft. */
  isDraft?: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is a revision. */
  isRevision?: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is an unpublished draft. */
  isUnpublishedDraft?: Maybe<Scalars['Boolean']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The element’s level within its structure */
  level?: Maybe<Scalars['Int']['output']>;
  /** The element’s left position within its structure. */
  lft?: Maybe<Scalars['Int']['output']>;
  /** The same element in other locales. */
  localized: Array<EntryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<EntryInterface>;
  /** The entry’s parent, if the section is a structure. */
  parent?: Maybe<EntryInterface>;
  /** The entry’s post date. */
  postDate?: Maybe<Scalars['DateTime']['output']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<EntryInterface>;
  /** The revision ID (from the `revisions` table). */
  revisionId?: Maybe<Scalars['Int']['output']>;
  /** The revision notes (from the `revisions` table). */
  revisionNotes?: Maybe<Scalars['String']['output']>;
  /** The element’s right position within its structure. */
  rgt?: Maybe<Scalars['Int']['output']>;
  /** The element’s structure’s root ID */
  root?: Maybe<Scalars['Int']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the section that contains the entry. */
  sectionHandle: Scalars['String']['output'];
  /** The ID of the section that contains the entry. */
  sectionId: Scalars['Int']['output'];
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  sourceId?: Maybe<Scalars['Int']['output']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  sourceUid?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s structure ID. */
  structureId?: Maybe<Scalars['Int']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the entry type that contains the entry. */
  typeHandle: Scalars['String']['output'];
  /** The ID of the entry type that contains the entry. */
  typeId: Scalars['Int']['output'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
  /** The element’s full URL */
  url?: Maybe<Scalars['String']['output']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterface_CountArgs = {
  field: Scalars['String']['input'];
};


/** This is the interface implemented by all entries. */
export type EntryInterfaceAncestorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterfaceChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterfaceDescendantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterfaceLocalizedArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterfaceNextArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterfaceParentArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterfacePrevArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FileInput = {
  /** The contents of the file in Base64 format. If provided, takes precedence over the URL. */
  fileData?: InputMaybe<Scalars['String']['input']>;
  /** The file name to use (including the extension) data with the `fileData` field. */
  filename?: InputMaybe<Scalars['String']['input']>;
  /** The URL of the file. */
  url?: InputMaybe<Scalars['String']['input']>;
};

/** This is the interface implemented by all global sets. */
export type GlobalSetInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the global set. */
  handle: Scalars['String']['output'];
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The name of the global set. */
  name: Scalars['String']['output'];
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
};


/** This is the interface implemented by all global sets. */
export type GlobalSetInterface_CountArgs = {
  field: Scalars['String']['input'];
};

/** This is the interface implemented by all matrix blocks. */
export type MatrixBlockInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the field that owns the matrix block. */
  fieldId: Scalars['Int']['output'];
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The ID of the primary owner of the Matrix block. */
  primaryOwnerId: Scalars['Int']['output'];
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The sort order of the matrix block within the owner element field. */
  sortOrder?: Maybe<Scalars['Int']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the matrix block’s type. */
  typeHandle: Scalars['String']['output'];
  /** The ID of the matrix block’s type. */
  typeId: Scalars['Int']['output'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
};


/** This is the interface implemented by all matrix blocks. */
export type MatrixBlockInterface_CountArgs = {
  field: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Activates user. Requires `code` and `id` from Craft activation email. Returns success message. */
  activateUser: Scalars['String']['output'];
  /** Logs a user in. Returns user and token. */
  authenticate: Auth;
  /** Saves a new answer */
  createAnswer?: Maybe<AnswerInterface>;
  /** Deletes authenticated user. Returns success message. */
  deleteAccount: Scalars['String']['output'];
  /** Deletes authenticated user refresh token. Useful for logging out of current device. Returns boolean. */
  deleteRefreshToken: Scalars['Boolean']['output'];
  /** Deletes all refresh tokens belonging to the authenticated user. Useful for logging out of all devices. Returns boolean. */
  deleteRefreshTokens: Scalars['Boolean']['output'];
  /** Deletes authenticated password-less user. Returns success message. */
  deleteSocialAccount: Scalars['String']['output'];
  /** Authenticates a Editors using a Facebook Sign-In token. Returns user and token. */
  facebookSignInEditors: Auth;
  /** Authenticates a Educators using a Facebook Sign-In token. Returns user and token. */
  facebookSignInEducators: Auth;
  /** Authenticates a Students using a Facebook Sign-In token. Returns user and token. */
  facebookSignInStudents: Auth;
  /** Sends a password reset email to the user's email address. Returns success message. */
  forgottenPassword: Scalars['String']['output'];
  /** Authenticates a Editors using a Google Sign-In ID token. Returns user and token. */
  googleSignInEditors: Auth;
  /** Authenticates a Educators using a Google Sign-In ID token. Returns user and token. */
  googleSignInEducators: Auth;
  /** Authenticates a Students using a Google Sign-In ID token. Returns user and token. */
  googleSignInStudents: Auth;
  ping?: Maybe<Scalars['String']['output']>;
  /** Refreshes a user's JWT. Checks for the occurrence of the `gql_refreshToken` cookie, and falls back to `refreshToken` argument. */
  refreshToken: Auth;
  /** Registers a Educators user. Returns user and token. */
  registerEducators: Auth;
  /** Registers a Students user. Returns user and token. */
  registerStudents: Auth;
  /** Resends an activation email to the user. Returns success message. */
  resendActivation: Scalars['String']['output'];
  /** Saves an existing answer */
  saveAnswer?: Maybe<AnswerInterface>;
  /** Sets password for unauthenticated user. Requires `code` and `id` from Craft reset password email. Returns success message. */
  setPassword: Scalars['String']['output'];
  /** Updates password for authenticated user. Requires JWT and current password. Returns success message. */
  updatePassword: Scalars['String']['output'];
  /** Updates authenticated user. Returns user. */
  updateViewer?: Maybe<UserInterface>;
};


export type MutationActivateUserArgs = {
  code: Scalars['String']['input'];
  id: Scalars['String']['input'];
};


export type MutationAuthenticateArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationCreateAnswerArgs = {
  data?: InputMaybe<Scalars['String']['input']>;
  investigationId: Scalars['Int']['input'];
  questionId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationDeleteAccountArgs = {
  confirmPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationDeleteRefreshTokenArgs = {
  refreshToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationFacebookSignInEditorsArgs = {
  code: Scalars['String']['input'];
};


export type MutationFacebookSignInEducatorsArgs = {
  code: Scalars['String']['input'];
};


export type MutationFacebookSignInStudentsArgs = {
  code: Scalars['String']['input'];
};


export type MutationForgottenPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationGoogleSignInEditorsArgs = {
  idToken: Scalars['String']['input'];
};


export type MutationGoogleSignInEducatorsArgs = {
  idToken: Scalars['String']['input'];
};


export type MutationGoogleSignInStudentsArgs = {
  idToken: Scalars['String']['input'];
};


export type MutationRefreshTokenArgs = {
  refreshToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationRegisterEducatorsArgs = {
  email: Scalars['String']['input'];
  fullName?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  preferredLanguage?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};


export type MutationRegisterStudentsArgs = {
  email: Scalars['String']['input'];
  fullName?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  preferredLanguage?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};


export type MutationResendActivationArgs = {
  email: Scalars['String']['input'];
};


export type MutationSaveAnswerArgs = {
  data?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
};


export type MutationSetPasswordArgs = {
  code: Scalars['String']['input'];
  id: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationUpdatePasswordArgs = {
  confirmPassword: Scalars['String']['input'];
  currentPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};


export type MutationUpdateViewerArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<FileInput>;
  preferredLanguage?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** This is the interface implemented by all Neo blocks. */
export type NeoBlockInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the field that owns the Neo block. */
  fieldId?: Maybe<Scalars['Int']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The Neo block’s level. */
  level?: Maybe<Scalars['Int']['output']>;
  /** The ID of the primary owner of the Neo block. */
  primaryOwnerId?: Maybe<Scalars['Int']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The sort order of the Neo block within the owner element field. */
  sortOrder?: Maybe<Scalars['Int']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the Neo block’s type. */
  typeHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the Neo block’s type. */
  typeId?: Maybe<Scalars['Int']['output']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
};


/** This is the interface implemented by all Neo blocks. */
export type NeoBlockInterface_CountArgs = {
  field: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  /** This query is used to query for a single address. */
  address?: Maybe<AddressInterface>;
  /** This query is used to return the number of addresses. */
  addressCount: Scalars['Int']['output'];
  /** This query is used to query for addresses. */
  addresses?: Maybe<Array<Maybe<AddressInterface>>>;
  /** This query is used to collect a user's Investigation answers. */
  answers?: Maybe<Array<Maybe<AnswerInterface>>>;
  /** This query is used to query for a single asset. */
  asset?: Maybe<AssetInterface>;
  /** This query is used to return the number of assets. */
  assetCount: Scalars['Int']['output'];
  /** This query is used to query for assets. */
  assets?: Maybe<Array<Maybe<AssetInterface>>>;
  /** This query is used to query for categories. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  /** This query is used to query for a single category. */
  category?: Maybe<CategoryInterface>;
  /** This query is used to return the number of categories. */
  categoryCount: Scalars['Int']['output'];
  /** This query is used to query for entries. */
  entries?: Maybe<Array<Maybe<EntryInterface>>>;
  /** This query is used to query for a single entry. */
  entry?: Maybe<EntryInterface>;
  /** This query is used to return the number of entries. */
  entryCount: Scalars['Int']['output'];
  /** Generates the Facebook OAuth URL for allowing users to authenticate. */
  facebookOauthUrl: Scalars['String']['output'];
  /** This query is used to query for a single global set. */
  globalSet?: Maybe<GlobalSetInterface>;
  /** This query is used to query for global sets. */
  globalSets?: Maybe<Array<Maybe<GlobalSetInterface>>>;
  /** Entries within the homepage section. */
  homepageEntries?: Maybe<Array<Maybe<HomepageSectionEntryUnion>>>;
  /** Entries within the investigations section. */
  investigationsEntries?: Maybe<Array<Maybe<InvestigationsSectionEntryUnion>>>;
  /** Entries within the pages section. */
  pagesEntries?: Maybe<Array<Maybe<PagesSectionEntryUnion>>>;
  ping?: Maybe<Scalars['String']['output']>;
  /** Entries within the questions section. */
  questionsEntries?: Maybe<Array<Maybe<QuestionsSectionEntryUnion>>>;
  /** This query is used to query for a single user. */
  user?: Maybe<UserInterface>;
  /** This query is used to return the number of users. */
  userCount: Scalars['Int']['output'];
  /** This query is used to query for users. */
  users?: Maybe<Array<Maybe<UserInterface>>>;
  /** Gets authenticated user. */
  viewer?: Maybe<UserInterface>;
};


export type QueryAddressArgs = {
  administrativeArea?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  countryCode?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryAddressCountArgs = {
  administrativeArea?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  countryCode?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryAddressesArgs = {
  administrativeArea?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  countryCode?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryAnswersArgs = {
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  investigationId?: InputMaybe<Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryAssetArgs = {
  availableFilters?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateModified?: InputMaybe<Scalars['String']['input']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  displayName?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryAssetCountArgs = {
  availableFilters?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateModified?: InputMaybe<Scalars['String']['input']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  displayName?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryAssetsArgs = {
  availableFilters?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateModified?: InputMaybe<Scalars['String']['input']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  displayName?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCategoriesArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCategoryArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCategoryCountArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEntriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEntryArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEntryCountArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGlobalSetArgs = {
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  handle?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryGlobalSetsArgs = {
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  handle?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryHomepageEntriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryInvestigationsEntriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPagesEntriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryQuestionsEntriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryUserArgs = {
  assetUploaders?: InputMaybe<Scalars['Boolean']['input']>;
  authors?: InputMaybe<Scalars['Boolean']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  email?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  firstName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  fullName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  group?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasPhoto?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  username?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUserCountArgs = {
  assetUploaders?: InputMaybe<Scalars['Boolean']['input']>;
  authors?: InputMaybe<Scalars['Boolean']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  email?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  firstName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  fullName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  group?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasPhoto?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  username?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersArgs = {
  assetUploaders?: InputMaybe<Scalars['Boolean']['input']>;
  authors?: InputMaybe<Scalars['Boolean']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  email?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  firstName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  fullName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  group?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasPhoto?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  username?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TagCriteriaInput = {
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the tag groups the tags belong to per the group’s handles. */
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the tag groups the tags belong to, per the groups’ IDs. */
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the elements’ IDs. */
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  /** Sets the limit for paginated results. */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /** Sets the offset for paginated results. */
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy?: InputMaybe<Scalars['String']['input']>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on a reference string. */
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to elements that relate to an asset list defined with this argument. */
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a category list defined with this argument. */
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to an entry list defined with this argument. */
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a tag list defined with this argument. */
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a use list defined with this argument. */
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  /** Narrows the query results to only elements that match a search query. */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the elements’ slugs. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ titles. */
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the elements’ URIs. */
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User = ElementInterface & UserInterface & {
  __typename?: 'User';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** The user’s addresses. */
  addresses?: Maybe<Array<Maybe<AddressInterface>>>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** The user’s email. */
  email?: Maybe<Scalars['String']['output']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The user’s first name. */
  firstName?: Maybe<Scalars['String']['output']>;
  /** The user’s first name or username. */
  friendlyName?: Maybe<Scalars['String']['output']>;
  /** The user’s full name. */
  fullName?: Maybe<Scalars['String']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The user’s last name. */
  lastName?: Maybe<Scalars['String']['output']>;
  /** The user’s full name or username. */
  name: Scalars['String']['output'];
  /** The user’s preferences. */
  preferences: Scalars['String']['output'];
  /** The user’s preferred language. */
  preferredLanguage?: Maybe<Scalars['String']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
  /** The username. */
  username?: Maybe<Scalars['String']['output']>;
};


export type User_CountArgs = {
  field: Scalars['String']['input'];
};


export type UserAddressesArgs = {
  administrativeArea?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  countryCode?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UserCriteriaInput = {
  /** Narrows the query results based on whether the users have uploaded any assets. */
  assetUploaders?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on whether the users are listed as the author of any entries. */
  authors?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the users’ email addresses. */
  email?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the users’ first names. */
  firstName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the users’ full names. */
  fullName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the user group the users belong to. */
  group?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the user group the users belong to, per the groups’ IDs. */
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to only users that have (or don’t have) a user photo. */
  hasPhoto?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the elements’ IDs. */
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the users’ last names. */
  lastName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Sets the limit for paginated results. */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /** Sets the offset for paginated results. */
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy?: InputMaybe<Scalars['String']['input']>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on a reference string. */
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to elements that relate to an asset list defined with this argument. */
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a category list defined with this argument. */
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to an entry list defined with this argument. */
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a tag list defined with this argument. */
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a use list defined with this argument. */
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  /** Narrows the query results to only elements that match a search query. */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the elements’ slugs. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ titles. */
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the elements’ URIs. */
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the users’ usernames. */
  username?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** This is the interface implemented by all users. */
export type UserInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** The user’s addresses. */
  addresses?: Maybe<Array<Maybe<AddressInterface>>>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** The user’s email. */
  email?: Maybe<Scalars['String']['output']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The user’s first name. */
  firstName?: Maybe<Scalars['String']['output']>;
  /** The user’s first name or username. */
  friendlyName?: Maybe<Scalars['String']['output']>;
  /** The user’s full name. */
  fullName?: Maybe<Scalars['String']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The user’s last name. */
  lastName?: Maybe<Scalars['String']['output']>;
  /** The user’s full name or username. */
  name: Scalars['String']['output'];
  /** The user’s preferences. */
  preferences: Scalars['String']['output'];
  /** The user’s preferred language. */
  preferredLanguage?: Maybe<Scalars['String']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
  /** The username. */
  username?: Maybe<Scalars['String']['output']>;
};


/** This is the interface implemented by all users. */
export type UserInterface_CountArgs = {
  field: Scalars['String']['input'];
};


/** This is the interface implemented by all users. */
export type UserInterfaceAddressesArgs = {
  administrativeArea?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  countryCode?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AnswerOptions_MatrixField = AnswerOptions_Option_BlockType;

export type AnswerOptions_Option_BlockType = ElementInterface & MatrixBlockInterface & {
  __typename?: 'answerOptions_option_BlockType';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the field that owns the matrix block. */
  fieldId: Scalars['Int']['output'];
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  optionLabel?: Maybe<Scalars['String']['output']>;
  optionValue?: Maybe<Scalars['String']['output']>;
  /** The ID of the primary owner of the Matrix block. */
  primaryOwnerId: Scalars['Int']['output'];
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The sort order of the matrix block within the owner element field. */
  sortOrder?: Maybe<Scalars['Int']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the matrix block’s type. */
  typeHandle: Scalars['String']['output'];
  /** The ID of the matrix block’s type. */
  typeId: Scalars['Int']['output'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
};


export type AnswerOptions_Option_BlockType_CountArgs = {
  field: Scalars['String']['input'];
};

export type ContentAssets_Asset = AssetInterface & ElementInterface & {
  __typename?: 'contentAssets_Asset';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** Alternative text for the asset. */
  alt?: Maybe<Scalars['String']['output']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  availableFilters?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the asset file was last modified. */
  dateModified?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The file extension for the asset file. */
  extension: Scalars['String']['output'];
  /** The filename of the asset file. */
  filename: Scalars['String']['output'];
  /** The focal point represented as an array with `x` and `y` keys, or null if it’s not an image. */
  focalPoint?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  /** The ID of the folder that the asset belongs to. */
  folderId: Scalars['Int']['output'];
  /** Returns the file’s format. */
  format?: Maybe<Scalars['String']['output']>;
  /** Whether a user-defined focal point is set on the asset. */
  hasFocalPoint: Scalars['Boolean']['output'];
  /** The height in pixels or null if it’s not an image. */
  height?: Maybe<Scalars['Int']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** An `<img>` tag based on this asset. */
  img?: Maybe<Scalars['String']['output']>;
  /** The file kind. */
  kind: Scalars['String']['output'];
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The file’s MIME type, if it can be determined. */
  mimeType?: Maybe<Scalars['String']['output']>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<AssetInterface>;
  /** The asset’s path in the volume. */
  path: Scalars['String']['output'];
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<AssetInterface>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The file size in bytes. */
  size?: Maybe<Scalars['String']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** Returns a `srcset` attribute value based on the given widths or x-descriptors. */
  srcset?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The user who first added this asset (if known). */
  uploader?: Maybe<UserInterface>;
  /** The ID of the user who first added this asset (if known). */
  uploaderId?: Maybe<Scalars['Int']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
  /** The full URL of the asset. This field accepts the same fields as the `transform` directive. */
  url?: Maybe<Scalars['String']['output']>;
  /** The ID of the volume that the asset belongs to. */
  volumeId?: Maybe<Scalars['Int']['output']>;
  /** The width in pixels or null if it’s not an image. */
  width?: Maybe<Scalars['Int']['output']>;
};


export type ContentAssets_Asset_CountArgs = {
  field: Scalars['String']['input'];
};


export type ContentAssets_AssetAvailableFiltersArgs = {
  label?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ContentAssets_AssetFormatArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  immediately?: InputMaybe<Scalars['Boolean']['input']>;
  interlace?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  transform?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentAssets_AssetHeightArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  immediately?: InputMaybe<Scalars['Boolean']['input']>;
  interlace?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  transform?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentAssets_AssetNextArgs = {
  availableFilters?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateModified?: InputMaybe<Scalars['String']['input']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  displayName?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ContentAssets_AssetPrevArgs = {
  availableFilters?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateModified?: InputMaybe<Scalars['String']['input']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  displayName?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ContentAssets_AssetSrcsetArgs = {
  sizes: Array<Scalars['String']['input']>;
};


export type ContentAssets_AssetUploaderArgs = {
  assetUploaders?: InputMaybe<Scalars['Boolean']['input']>;
  authors?: InputMaybe<Scalars['Boolean']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  email?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  firstName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  fullName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  group?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasPhoto?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  username?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ContentAssets_AssetUrlArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  immediately?: InputMaybe<Scalars['Boolean']['input']>;
  interlace?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  transform?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentAssets_AssetWidthArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  immediately?: InputMaybe<Scalars['Boolean']['input']>;
  interlace?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  transform?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type ContentBlocks_NeoField = ContentBlocks_BarGraphTool_BlockType | ContentBlocks_ColorTool_BlockType | ContentBlocks_FilterTool_BlockType | ContentBlocks_QuestionBlock_BlockType | ContentBlocks_ScatterplotTool_BlockType | ContentBlocks_Text_BlockType | ContentBlocks_TwoColumnContainer_BlockType | ContentBlocks_WidgetContainer_BlockType;

export type ContentBlocks_BarGraphTool_BlockType = ElementInterface & NeoBlockInterface & {
  __typename?: 'contentBlocks_barGraphTool_BlockType';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the field that owns the Neo block. */
  fieldId?: Maybe<Scalars['Int']['output']>;
  graphBars: Array<Maybe<GraphBars_MatrixField>>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The Neo block’s level. */
  level?: Maybe<Scalars['Int']['output']>;
  /** The ID of the primary owner of the Neo block. */
  primaryOwnerId?: Maybe<Scalars['Int']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The sort order of the Neo block within the owner element field. */
  sortOrder?: Maybe<Scalars['Int']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the Neo block’s type. */
  typeHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the Neo block’s type. */
  typeId?: Maybe<Scalars['Int']['output']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
  xAxisLabel?: Maybe<Scalars['String']['output']>;
  yAxisLabel?: Maybe<Scalars['String']['output']>;
  yAxisMax?: Maybe<Scalars['Number']['output']>;
  yAxisMin?: Maybe<Scalars['Number']['output']>;
};


export type ContentBlocks_BarGraphTool_BlockType_CountArgs = {
  field: Scalars['String']['input'];
};


export type ContentBlocks_BarGraphTool_BlockTypeGraphBarsArgs = {
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentBlocks_ColorTool_BlockType = ElementInterface & NeoBlockInterface & {
  __typename?: 'contentBlocks_colorTool_BlockType';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  colorToolTemplate?: Maybe<Scalars['String']['output']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the field that owns the Neo block. */
  fieldId?: Maybe<Scalars['Int']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  image: Array<Maybe<AssetInterface>>;
  images: Array<Maybe<Images_MatrixField>>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The Neo block’s level. */
  level?: Maybe<Scalars['Int']['output']>;
  /** The ID of the primary owner of the Neo block. */
  primaryOwnerId?: Maybe<Scalars['Int']['output']>;
  readOnly?: Maybe<Scalars['Boolean']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The sort order of the Neo block within the owner element field. */
  sortOrder?: Maybe<Scalars['Int']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the Neo block’s type. */
  typeHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the Neo block’s type. */
  typeId?: Maybe<Scalars['Int']['output']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
};


export type ContentBlocks_ColorTool_BlockType_CountArgs = {
  field: Scalars['String']['input'];
};


export type ContentBlocks_ColorTool_BlockTypeColorToolTemplateArgs = {
  label?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ContentBlocks_ColorTool_BlockTypeImageArgs = {
  availableFilters?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateModified?: InputMaybe<Scalars['String']['input']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  displayName?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ContentBlocks_ColorTool_BlockTypeImagesArgs = {
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentBlocks_FilterTool_BlockType = ElementInterface & NeoBlockInterface & {
  __typename?: 'contentBlocks_filterTool_BlockType';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the field that owns the Neo block. */
  fieldId?: Maybe<Scalars['Int']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The Neo block’s level. */
  level?: Maybe<Scalars['Int']['output']>;
  preSelectedColor?: Maybe<Scalars['String']['output']>;
  /** The ID of the primary owner of the Neo block. */
  primaryOwnerId?: Maybe<Scalars['Int']['output']>;
  readOnly?: Maybe<Scalars['Boolean']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The sort order of the Neo block within the owner element field. */
  sortOrder?: Maybe<Scalars['Int']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the Neo block’s type. */
  typeHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the Neo block’s type. */
  typeId?: Maybe<Scalars['Int']['output']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
};


export type ContentBlocks_FilterTool_BlockType_CountArgs = {
  field: Scalars['String']['input'];
};


export type ContentBlocks_FilterTool_BlockTypePreSelectedColorArgs = {
  label?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentBlocks_QuestionBlock_BlockType = ElementInterface & NeoBlockInterface & {
  __typename?: 'contentBlocks_questionBlock_BlockType';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the field that owns the Neo block. */
  fieldId?: Maybe<Scalars['Int']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The Neo block’s level. */
  level?: Maybe<Scalars['Int']['output']>;
  /** The ID of the primary owner of the Neo block. */
  primaryOwnerId?: Maybe<Scalars['Int']['output']>;
  questionEntries: Array<Maybe<EntryInterface>>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The sort order of the Neo block within the owner element field. */
  sortOrder?: Maybe<Scalars['Int']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the Neo block’s type. */
  typeHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the Neo block’s type. */
  typeId?: Maybe<Scalars['Int']['output']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
};


export type ContentBlocks_QuestionBlock_BlockType_CountArgs = {
  field: Scalars['String']['input'];
};


export type ContentBlocks_QuestionBlock_BlockTypeQuestionEntriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentBlocks_ScatterplotTool_BlockType = ElementInterface & NeoBlockInterface & {
  __typename?: 'contentBlocks_scatterplotTool_BlockType';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the field that owns the Neo block. */
  fieldId?: Maybe<Scalars['Int']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The Neo block’s level. */
  level?: Maybe<Scalars['Int']['output']>;
  /** The ID of the primary owner of the Neo block. */
  primaryOwnerId?: Maybe<Scalars['Int']['output']>;
  scatterplotItems: Array<Maybe<ScatterplotItems_MatrixField>>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The sort order of the Neo block within the owner element field. */
  sortOrder?: Maybe<Scalars['Int']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the Neo block’s type. */
  typeHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the Neo block’s type. */
  typeId?: Maybe<Scalars['Int']['output']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
  xAxisLabel?: Maybe<Scalars['String']['output']>;
  xAxisMin?: Maybe<Scalars['Number']['output']>;
  yAxisLabel?: Maybe<Scalars['String']['output']>;
  yAxisMax?: Maybe<Scalars['Number']['output']>;
};


export type ContentBlocks_ScatterplotTool_BlockType_CountArgs = {
  field: Scalars['String']['input'];
};


export type ContentBlocks_ScatterplotTool_BlockTypeScatterplotItemsArgs = {
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentBlocks_Text_BlockType = ElementInterface & NeoBlockInterface & {
  __typename?: 'contentBlocks_text_BlockType';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the field that owns the Neo block. */
  fieldId?: Maybe<Scalars['Int']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The Neo block’s level. */
  level?: Maybe<Scalars['Int']['output']>;
  /** The ID of the primary owner of the Neo block. */
  primaryOwnerId?: Maybe<Scalars['Int']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The sort order of the Neo block within the owner element field. */
  sortOrder?: Maybe<Scalars['Int']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the Neo block’s type. */
  typeHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the Neo block’s type. */
  typeId?: Maybe<Scalars['Int']['output']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
};


export type ContentBlocks_Text_BlockType_CountArgs = {
  field: Scalars['String']['input'];
};

export type ContentBlocks_TwoColumnContainer_BlockType = ElementInterface & NeoBlockInterface & {
  __typename?: 'contentBlocks_twoColumnContainer_BlockType';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The child block types for this Neo block */
  children?: Maybe<Array<Maybe<NeoBlockInterface>>>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the field that owns the Neo block. */
  fieldId?: Maybe<Scalars['Int']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The Neo block’s level. */
  level?: Maybe<Scalars['Int']['output']>;
  /** The ID of the primary owner of the Neo block. */
  primaryOwnerId?: Maybe<Scalars['Int']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The sort order of the Neo block within the owner element field. */
  sortOrder?: Maybe<Scalars['Int']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the Neo block’s type. */
  typeHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the Neo block’s type. */
  typeId?: Maybe<Scalars['Int']['output']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
};


export type ContentBlocks_TwoColumnContainer_BlockType_CountArgs = {
  field: Scalars['String']['input'];
};

export type ContentBlocks_WidgetContainer_BlockType = ElementInterface & NeoBlockInterface & {
  __typename?: 'contentBlocks_widgetContainer_BlockType';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The child block types for this Neo block */
  children?: Maybe<Array<Maybe<NeoBlockInterface>>>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the field that owns the Neo block. */
  fieldId?: Maybe<Scalars['Int']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The Neo block’s level. */
  level?: Maybe<Scalars['Int']['output']>;
  /** The ID of the primary owner of the Neo block. */
  primaryOwnerId?: Maybe<Scalars['Int']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The sort order of the Neo block within the owner element field. */
  sortOrder?: Maybe<Scalars['Int']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the Neo block’s type. */
  typeHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the Neo block’s type. */
  typeId?: Maybe<Scalars['Int']['output']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
};


export type ContentBlocks_WidgetContainer_BlockType_CountArgs = {
  field: Scalars['String']['input'];
};

export type GraphBars_MatrixField = GraphBars_Bar_BlockType;

export type GraphBars_Bar_BlockType = ElementInterface & MatrixBlockInterface & {
  __typename?: 'graphBars_bar_BlockType';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the field that owns the matrix block. */
  fieldId: Scalars['Int']['output'];
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The ID of the primary owner of the Matrix block. */
  primaryOwnerId: Scalars['Int']['output'];
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The sort order of the matrix block within the owner element field. */
  sortOrder?: Maybe<Scalars['Int']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the matrix block’s type. */
  typeHandle: Scalars['String']['output'];
  /** The ID of the matrix block’s type. */
  typeId: Scalars['Int']['output'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
  yValue?: Maybe<Scalars['String']['output']>;
};


export type GraphBars_Bar_BlockType_CountArgs = {
  field: Scalars['String']['input'];
};

export type HomepageSectionEntryUnion = Homepage_Homepage_Entry;

export type Homepage_Homepage_Entry = ElementInterface & EntryInterface & {
  __typename?: 'homepage_homepage_Entry';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<EntryInterface>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The entry’s author. */
  author?: Maybe<UserInterface>;
  /** The ID of the author of this entry. */
  authorId?: Maybe<Scalars['Int']['output']>;
  /** Returns the entry’s canonical ID. */
  canonicalId?: Maybe<Scalars['Int']['output']>;
  /** Returns the entry’s canonical UUID. */
  canonicalUid?: Maybe<Scalars['String']['output']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  children: Array<EntryInterface>;
  contentBlocks?: Maybe<Array<Maybe<ContentBlocks_NeoField>>>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<EntryInterface>;
  description?: Maybe<Scalars['String']['output']>;
  /** The draft ID (from the `drafts` table). */
  draftId?: Maybe<Scalars['Int']['output']>;
  /** The name of the draft. */
  draftName?: Maybe<Scalars['String']['output']>;
  /** The notes for the draft. */
  draftNotes?: Maybe<Scalars['String']['output']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The expiry date of the entry. */
  expiryDate?: Maybe<Scalars['DateTime']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** Returns whether this is a draft. */
  isDraft?: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is a revision. */
  isRevision?: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is an unpublished draft. */
  isUnpublishedDraft?: Maybe<Scalars['Boolean']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The element’s level within its structure */
  level?: Maybe<Scalars['Int']['output']>;
  /** The element’s left position within its structure. */
  lft?: Maybe<Scalars['Int']['output']>;
  /** The same element in other locales. */
  localized: Array<EntryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<EntryInterface>;
  pageType?: Maybe<Scalars['String']['output']>;
  /** The entry’s parent, if the section is a structure. */
  parent?: Maybe<EntryInterface>;
  /** The entry’s post date. */
  postDate?: Maybe<Scalars['DateTime']['output']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<EntryInterface>;
  /** The revision ID (from the `revisions` table). */
  revisionId?: Maybe<Scalars['Int']['output']>;
  /** The revision notes (from the `revisions` table). */
  revisionNotes?: Maybe<Scalars['String']['output']>;
  /** The element’s right position within its structure. */
  rgt?: Maybe<Scalars['Int']['output']>;
  /** The element’s structure’s root ID */
  root?: Maybe<Scalars['Int']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the section that contains the entry. */
  sectionHandle: Scalars['String']['output'];
  /** The ID of the section that contains the entry. */
  sectionId: Scalars['Int']['output'];
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  sourceId?: Maybe<Scalars['Int']['output']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  sourceUid?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s structure ID. */
  structureId?: Maybe<Scalars['Int']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the entry type that contains the entry. */
  typeHandle: Scalars['String']['output'];
  /** The ID of the entry type that contains the entry. */
  typeId: Scalars['Int']['output'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
  /** The element’s full URL */
  url?: Maybe<Scalars['String']['output']>;
};


export type Homepage_Homepage_Entry_CountArgs = {
  field: Scalars['String']['input'];
};


export type Homepage_Homepage_EntryAncestorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Homepage_Homepage_EntryChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Homepage_Homepage_EntryContentBlocksArgs = {
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['QueryArgument']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Homepage_Homepage_EntryDescendantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Homepage_Homepage_EntryLocalizedArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Homepage_Homepage_EntryNextArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Homepage_Homepage_EntryPageTypeArgs = {
  label?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Homepage_Homepage_EntryParentArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Homepage_Homepage_EntryPrevArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Images_MatrixField = Images_ImageGroup_BlockType;

export type Images_ImageGroup_BlockType = ElementInterface & MatrixBlockInterface & {
  __typename?: 'images_imageGroup_BlockType';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the field that owns the matrix block. */
  fieldId: Scalars['Int']['output'];
  groupName?: Maybe<Scalars['String']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  images: Array<Maybe<AssetInterface>>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The ID of the primary owner of the Matrix block. */
  primaryOwnerId: Scalars['Int']['output'];
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The sort order of the matrix block within the owner element field. */
  sortOrder?: Maybe<Scalars['Int']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the matrix block’s type. */
  typeHandle: Scalars['String']['output'];
  /** The ID of the matrix block’s type. */
  typeId: Scalars['Int']['output'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
};


export type Images_ImageGroup_BlockType_CountArgs = {
  field: Scalars['String']['input'];
};


export type Images_ImageGroup_BlockTypeImagesArgs = {
  availableFilters?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateModified?: InputMaybe<Scalars['String']['input']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  displayName?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type InvestigationsSectionEntryUnion = Investigations_Default_Entry | Investigations_InvestigationParent_Entry;

export type Investigations_Default_Entry = ElementInterface & EntryInterface & {
  __typename?: 'investigations_default_Entry';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<EntryInterface>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The entry’s author. */
  author?: Maybe<UserInterface>;
  /** The ID of the author of this entry. */
  authorId?: Maybe<Scalars['Int']['output']>;
  /** Returns the entry’s canonical ID. */
  canonicalId?: Maybe<Scalars['Int']['output']>;
  /** Returns the entry’s canonical UUID. */
  canonicalUid?: Maybe<Scalars['String']['output']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  children: Array<EntryInterface>;
  contentBlocks?: Maybe<Array<Maybe<ContentBlocks_NeoField>>>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<EntryInterface>;
  /** The draft ID (from the `drafts` table). */
  draftId?: Maybe<Scalars['Int']['output']>;
  /** The name of the draft. */
  draftName?: Maybe<Scalars['String']['output']>;
  /** The notes for the draft. */
  draftNotes?: Maybe<Scalars['String']['output']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The expiry date of the entry. */
  expiryDate?: Maybe<Scalars['DateTime']['output']>;
  hasSavePoint?: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** Returns whether this is a draft. */
  isDraft?: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is a revision. */
  isRevision?: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is an unpublished draft. */
  isUnpublishedDraft?: Maybe<Scalars['Boolean']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The element’s level within its structure */
  level?: Maybe<Scalars['Int']['output']>;
  /** The element’s left position within its structure. */
  lft?: Maybe<Scalars['Int']['output']>;
  /** The same element in other locales. */
  localized: Array<EntryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<EntryInterface>;
  /** The entry’s parent, if the section is a structure. */
  parent?: Maybe<EntryInterface>;
  /** The entry’s post date. */
  postDate?: Maybe<Scalars['DateTime']['output']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<EntryInterface>;
  /** The revision ID (from the `revisions` table). */
  revisionId?: Maybe<Scalars['Int']['output']>;
  /** The revision notes (from the `revisions` table). */
  revisionNotes?: Maybe<Scalars['String']['output']>;
  /** The element’s right position within its structure. */
  rgt?: Maybe<Scalars['Int']['output']>;
  /** The element’s structure’s root ID */
  root?: Maybe<Scalars['Int']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the section that contains the entry. */
  sectionHandle: Scalars['String']['output'];
  /** The ID of the section that contains the entry. */
  sectionId: Scalars['Int']['output'];
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  sourceId?: Maybe<Scalars['Int']['output']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  sourceUid?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s structure ID. */
  structureId?: Maybe<Scalars['Int']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the entry type that contains the entry. */
  typeHandle: Scalars['String']['output'];
  /** The ID of the entry type that contains the entry. */
  typeId: Scalars['Int']['output'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
  /** The element’s full URL */
  url?: Maybe<Scalars['String']['output']>;
};


export type Investigations_Default_Entry_CountArgs = {
  field: Scalars['String']['input'];
};


export type Investigations_Default_EntryAncestorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Investigations_Default_EntryChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Investigations_Default_EntryContentBlocksArgs = {
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['QueryArgument']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Investigations_Default_EntryDescendantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Investigations_Default_EntryLocalizedArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Investigations_Default_EntryNextArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Investigations_Default_EntryParentArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Investigations_Default_EntryPrevArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Investigations_InvestigationParent_Entry = ElementInterface & EntryInterface & {
  __typename?: 'investigations_investigationParent_Entry';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<EntryInterface>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The entry’s author. */
  author?: Maybe<UserInterface>;
  /** The ID of the author of this entry. */
  authorId?: Maybe<Scalars['Int']['output']>;
  /** Returns the entry’s canonical ID. */
  canonicalId?: Maybe<Scalars['Int']['output']>;
  /** Returns the entry’s canonical UUID. */
  canonicalUid?: Maybe<Scalars['String']['output']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  children: Array<EntryInterface>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<EntryInterface>;
  /** The draft ID (from the `drafts` table). */
  draftId?: Maybe<Scalars['Int']['output']>;
  /** The name of the draft. */
  draftName?: Maybe<Scalars['String']['output']>;
  /** The notes for the draft. */
  draftNotes?: Maybe<Scalars['String']['output']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The expiry date of the entry. */
  expiryDate?: Maybe<Scalars['DateTime']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** Returns whether this is a draft. */
  isDraft?: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is a revision. */
  isRevision?: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is an unpublished draft. */
  isUnpublishedDraft?: Maybe<Scalars['Boolean']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The element’s level within its structure */
  level?: Maybe<Scalars['Int']['output']>;
  /** The element’s left position within its structure. */
  lft?: Maybe<Scalars['Int']['output']>;
  /** The same element in other locales. */
  localized: Array<EntryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<EntryInterface>;
  /** The entry’s parent, if the section is a structure. */
  parent?: Maybe<EntryInterface>;
  /** The entry’s post date. */
  postDate?: Maybe<Scalars['DateTime']['output']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<EntryInterface>;
  /** The revision ID (from the `revisions` table). */
  revisionId?: Maybe<Scalars['Int']['output']>;
  /** The revision notes (from the `revisions` table). */
  revisionNotes?: Maybe<Scalars['String']['output']>;
  /** The element’s right position within its structure. */
  rgt?: Maybe<Scalars['Int']['output']>;
  /** The element’s structure’s root ID */
  root?: Maybe<Scalars['Int']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the section that contains the entry. */
  sectionHandle: Scalars['String']['output'];
  /** The ID of the section that contains the entry. */
  sectionId: Scalars['Int']['output'];
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  sourceId?: Maybe<Scalars['Int']['output']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  sourceUid?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s structure ID. */
  structureId?: Maybe<Scalars['Int']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the entry type that contains the entry. */
  typeHandle: Scalars['String']['output'];
  /** The ID of the entry type that contains the entry. */
  typeId: Scalars['Int']['output'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
  /** The element’s full URL */
  url?: Maybe<Scalars['String']['output']>;
};


export type Investigations_InvestigationParent_Entry_CountArgs = {
  field: Scalars['String']['input'];
};


export type Investigations_InvestigationParent_EntryAncestorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Investigations_InvestigationParent_EntryChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Investigations_InvestigationParent_EntryDescendantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Investigations_InvestigationParent_EntryLocalizedArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Investigations_InvestigationParent_EntryNextArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Investigations_InvestigationParent_EntryParentArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Investigations_InvestigationParent_EntryPrevArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

/** This is the interface implemented by all links. */
export type LinkField_Link = {
  __typename?: 'linkField_Link';
  ariaLabel?: Maybe<Scalars['String']['output']>;
  customText?: Maybe<Scalars['String']['output']>;
  element?: Maybe<ElementInterface>;
  target?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type PagesSectionEntryUnion = Pages_Pages_Entry | Pages_RedirectPage_Entry;

export type Pages_Pages_Entry = ElementInterface & EntryInterface & {
  __typename?: 'pages_pages_Entry';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<EntryInterface>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The entry’s author. */
  author?: Maybe<UserInterface>;
  /** The ID of the author of this entry. */
  authorId?: Maybe<Scalars['Int']['output']>;
  /** Returns the entry’s canonical ID. */
  canonicalId?: Maybe<Scalars['Int']['output']>;
  /** Returns the entry’s canonical UUID. */
  canonicalUid?: Maybe<Scalars['String']['output']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  children: Array<EntryInterface>;
  contentBlocks?: Maybe<Array<Maybe<ContentBlocks_NeoField>>>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<EntryInterface>;
  /** The draft ID (from the `drafts` table). */
  draftId?: Maybe<Scalars['Int']['output']>;
  /** The name of the draft. */
  draftName?: Maybe<Scalars['String']['output']>;
  /** The notes for the draft. */
  draftNotes?: Maybe<Scalars['String']['output']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The expiry date of the entry. */
  expiryDate?: Maybe<Scalars['DateTime']['output']>;
  hideTitle?: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** Returns whether this is a draft. */
  isDraft?: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is a revision. */
  isRevision?: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is an unpublished draft. */
  isUnpublishedDraft?: Maybe<Scalars['Boolean']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The element’s level within its structure */
  level?: Maybe<Scalars['Int']['output']>;
  /** The element’s left position within its structure. */
  lft?: Maybe<Scalars['Int']['output']>;
  /** The same element in other locales. */
  localized: Array<EntryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<EntryInterface>;
  pageType?: Maybe<Scalars['String']['output']>;
  /** The entry’s parent, if the section is a structure. */
  parent?: Maybe<EntryInterface>;
  /** The entry’s post date. */
  postDate?: Maybe<Scalars['DateTime']['output']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<EntryInterface>;
  /** The revision ID (from the `revisions` table). */
  revisionId?: Maybe<Scalars['Int']['output']>;
  /** The revision notes (from the `revisions` table). */
  revisionNotes?: Maybe<Scalars['String']['output']>;
  /** The element’s right position within its structure. */
  rgt?: Maybe<Scalars['Int']['output']>;
  /** The element’s structure’s root ID */
  root?: Maybe<Scalars['Int']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the section that contains the entry. */
  sectionHandle: Scalars['String']['output'];
  /** The ID of the section that contains the entry. */
  sectionId: Scalars['Int']['output'];
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  sourceId?: Maybe<Scalars['Int']['output']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  sourceUid?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s structure ID. */
  structureId?: Maybe<Scalars['Int']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the entry type that contains the entry. */
  typeHandle: Scalars['String']['output'];
  /** The ID of the entry type that contains the entry. */
  typeId: Scalars['Int']['output'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
  /** The element’s full URL */
  url?: Maybe<Scalars['String']['output']>;
};


export type Pages_Pages_Entry_CountArgs = {
  field: Scalars['String']['input'];
};


export type Pages_Pages_EntryAncestorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Pages_Pages_EntryChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Pages_Pages_EntryContentBlocksArgs = {
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['QueryArgument']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Pages_Pages_EntryDescendantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Pages_Pages_EntryLocalizedArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Pages_Pages_EntryNextArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Pages_Pages_EntryPageTypeArgs = {
  label?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Pages_Pages_EntryParentArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Pages_Pages_EntryPrevArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Pages_RedirectPage_Entry = ElementInterface & EntryInterface & {
  __typename?: 'pages_redirectPage_Entry';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<EntryInterface>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The entry’s author. */
  author?: Maybe<UserInterface>;
  /** The ID of the author of this entry. */
  authorId?: Maybe<Scalars['Int']['output']>;
  /** Returns the entry’s canonical ID. */
  canonicalId?: Maybe<Scalars['Int']['output']>;
  /** Returns the entry’s canonical UUID. */
  canonicalUid?: Maybe<Scalars['String']['output']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  children: Array<EntryInterface>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<EntryInterface>;
  /** The draft ID (from the `drafts` table). */
  draftId?: Maybe<Scalars['Int']['output']>;
  /** The name of the draft. */
  draftName?: Maybe<Scalars['String']['output']>;
  /** The notes for the draft. */
  draftNotes?: Maybe<Scalars['String']['output']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The expiry date of the entry. */
  expiryDate?: Maybe<Scalars['DateTime']['output']>;
  hideTitle?: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** Returns whether this is a draft. */
  isDraft?: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is a revision. */
  isRevision?: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is an unpublished draft. */
  isUnpublishedDraft?: Maybe<Scalars['Boolean']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The element’s level within its structure */
  level?: Maybe<Scalars['Int']['output']>;
  /** The element’s left position within its structure. */
  lft?: Maybe<Scalars['Int']['output']>;
  linkTo?: Maybe<LinkField_Link>;
  /** The same element in other locales. */
  localized: Array<EntryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<EntryInterface>;
  /** The entry’s parent, if the section is a structure. */
  parent?: Maybe<EntryInterface>;
  /** The entry’s post date. */
  postDate?: Maybe<Scalars['DateTime']['output']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<EntryInterface>;
  /** The revision ID (from the `revisions` table). */
  revisionId?: Maybe<Scalars['Int']['output']>;
  /** The revision notes (from the `revisions` table). */
  revisionNotes?: Maybe<Scalars['String']['output']>;
  /** The element’s right position within its structure. */
  rgt?: Maybe<Scalars['Int']['output']>;
  /** The element’s structure’s root ID */
  root?: Maybe<Scalars['Int']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the section that contains the entry. */
  sectionHandle: Scalars['String']['output'];
  /** The ID of the section that contains the entry. */
  sectionId: Scalars['Int']['output'];
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  sourceId?: Maybe<Scalars['Int']['output']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  sourceUid?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s structure ID. */
  structureId?: Maybe<Scalars['Int']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the entry type that contains the entry. */
  typeHandle: Scalars['String']['output'];
  /** The ID of the entry type that contains the entry. */
  typeId: Scalars['Int']['output'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
  /** The element’s full URL */
  url?: Maybe<Scalars['String']['output']>;
};


export type Pages_RedirectPage_Entry_CountArgs = {
  field: Scalars['String']['input'];
};


export type Pages_RedirectPage_EntryAncestorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Pages_RedirectPage_EntryChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Pages_RedirectPage_EntryDescendantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Pages_RedirectPage_EntryLocalizedArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Pages_RedirectPage_EntryNextArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Pages_RedirectPage_EntryParentArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Pages_RedirectPage_EntryPrevArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QuestionsSectionEntryUnion = Questions_Default_Entry;

export type Questions_Default_Entry = ElementInterface & EntryInterface & {
  __typename?: 'questions_default_Entry';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<EntryInterface>;
  answerOptions: Array<Maybe<AnswerOptions_MatrixField>>;
  answerType?: Maybe<Scalars['String']['output']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The entry’s author. */
  author?: Maybe<UserInterface>;
  /** The ID of the author of this entry. */
  authorId?: Maybe<Scalars['Int']['output']>;
  /** Returns the entry’s canonical ID. */
  canonicalId?: Maybe<Scalars['Int']['output']>;
  /** Returns the entry’s canonical UUID. */
  canonicalUid?: Maybe<Scalars['String']['output']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  children: Array<EntryInterface>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<EntryInterface>;
  /** The draft ID (from the `drafts` table). */
  draftId?: Maybe<Scalars['Int']['output']>;
  /** The name of the draft. */
  draftName?: Maybe<Scalars['String']['output']>;
  /** The notes for the draft. */
  draftNotes?: Maybe<Scalars['String']['output']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The expiry date of the entry. */
  expiryDate?: Maybe<Scalars['DateTime']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** Returns whether this is a draft. */
  isDraft?: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is a revision. */
  isRevision?: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is an unpublished draft. */
  isUnpublishedDraft?: Maybe<Scalars['Boolean']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The element’s level within its structure */
  level?: Maybe<Scalars['Int']['output']>;
  /** The element’s left position within its structure. */
  lft?: Maybe<Scalars['Int']['output']>;
  /** The same element in other locales. */
  localized: Array<EntryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<EntryInterface>;
  /** The entry’s parent, if the section is a structure. */
  parent?: Maybe<EntryInterface>;
  /** The entry’s post date. */
  postDate?: Maybe<Scalars['DateTime']['output']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<EntryInterface>;
  questionText?: Maybe<Scalars['String']['output']>;
  /** The revision ID (from the `revisions` table). */
  revisionId?: Maybe<Scalars['Int']['output']>;
  /** The revision notes (from the `revisions` table). */
  revisionNotes?: Maybe<Scalars['String']['output']>;
  /** The element’s right position within its structure. */
  rgt?: Maybe<Scalars['Int']['output']>;
  /** The element’s structure’s root ID */
  root?: Maybe<Scalars['Int']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the section that contains the entry. */
  sectionHandle: Scalars['String']['output'];
  /** The ID of the section that contains the entry. */
  sectionId: Scalars['Int']['output'];
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  sourceId?: Maybe<Scalars['Int']['output']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  sourceUid?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s structure ID. */
  structureId?: Maybe<Scalars['Int']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the entry type that contains the entry. */
  typeHandle: Scalars['String']['output'];
  /** The ID of the entry type that contains the entry. */
  typeId: Scalars['Int']['output'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
  /** The element’s full URL */
  url?: Maybe<Scalars['String']['output']>;
};


export type Questions_Default_Entry_CountArgs = {
  field: Scalars['String']['input'];
};


export type Questions_Default_EntryAncestorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Questions_Default_EntryAnswerOptionsArgs = {
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Questions_Default_EntryAnswerTypeArgs = {
  label?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Questions_Default_EntryChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Questions_Default_EntryDescendantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Questions_Default_EntryLocalizedArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Questions_Default_EntryNextArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Questions_Default_EntryParentArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Questions_Default_EntryPrevArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  answerType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  hasSavePoint?: InputMaybe<Scalars['Boolean']['input']>;
  hideTitle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  linkTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  questionText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ScatterplotItems_MatrixField = ScatterplotItems_Item_BlockType;

export type ScatterplotItems_Item_BlockType = ElementInterface & MatrixBlockInterface & {
  __typename?: 'scatterplotItems_item_BlockType';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the field that owns the matrix block. */
  fieldId: Scalars['Int']['output'];
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  itemLabel?: Maybe<Scalars['String']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The ID of the primary owner of the Matrix block. */
  primaryOwnerId: Scalars['Int']['output'];
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The sort order of the matrix block within the owner element field. */
  sortOrder?: Maybe<Scalars['Int']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the matrix block’s type. */
  typeHandle: Scalars['String']['output'];
  /** The ID of the matrix block’s type. */
  typeId: Scalars['Int']['output'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
  xValue?: Maybe<Scalars['Number']['output']>;
  yValue?: Maybe<Scalars['Number']['output']>;
};


export type ScatterplotItems_Item_BlockType_CountArgs = {
  field: Scalars['String']['input'];
};

export type SiteInfo_GlobalSet = ElementInterface & GlobalSetInterface & {
  __typename?: 'siteInfo_GlobalSet';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the global set. */
  handle: Scalars['String']['output'];
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The name of the global set. */
  name: Scalars['String']['output'];
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  siteDescription?: Maybe<Scalars['String']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  siteTitle?: Maybe<Scalars['String']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
};


export type SiteInfo_GlobalSet_CountArgs = {
  field: Scalars['String']['input'];
};

export type SortOptions_Category = CategoryInterface & ElementInterface & {
  __typename?: 'sortOptions_Category';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** The category’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<CategoryInterface>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The category’s children. */
  children: Array<CategoryInterface>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** The category’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<CategoryInterface>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the group that contains the category. */
  groupHandle: Scalars['String']['output'];
  /** The ID of the group that contains the category. */
  groupId: Scalars['Int']['output'];
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The element’s level within its structure */
  level?: Maybe<Scalars['Int']['output']>;
  /** The element’s left position within its structure. */
  lft?: Maybe<Scalars['Int']['output']>;
  /** The same element in other locales. */
  localized: Array<CategoryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<CategoryInterface>;
  /** The category’s parent. */
  parent?: Maybe<CategoryInterface>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<CategoryInterface>;
  /** The element’s right position within its structure. */
  rgt?: Maybe<Scalars['Int']['output']>;
  /** The element’s structure’s root ID */
  root?: Maybe<Scalars['Int']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s structure ID. */
  structureId?: Maybe<Scalars['Int']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
  /** The element’s full URL */
  url?: Maybe<Scalars['String']['output']>;
};


export type SortOptions_Category_CountArgs = {
  field: Scalars['String']['input'];
};


export type SortOptions_CategoryAncestorsArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type SortOptions_CategoryChildrenArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type SortOptions_CategoryDescendantsArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type SortOptions_CategoryLocalizedArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type SortOptions_CategoryNextArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type SortOptions_CategoryParentArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type SortOptions_CategoryPrevArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type InvestigationChildPageMetadataQueryVariables = Exact<{
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type InvestigationChildPageMetadataQuery = { __typename?: 'Query', entry?: { __typename?: 'homepage_homepage_Entry', title?: string | null } | { __typename?: 'investigations_default_Entry', title?: string | null } | { __typename?: 'investigations_investigationParent_Entry', title?: string | null } | { __typename?: 'pages_pages_Entry', title?: string | null } | { __typename?: 'pages_redirectPage_Entry', title?: string | null } | { __typename?: 'questions_default_Entry', title?: string | null } | null };

export type InvestigationChildPageQueryVariables = Exact<{
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type InvestigationChildPageQuery = { __typename?: 'Query', entry?: { __typename: 'homepage_homepage_Entry' } | (
    { __typename: 'investigations_default_Entry' }
    & { ' $fragmentRefs'?: { 'InvestigationChildPageTemplateFragment': InvestigationChildPageTemplateFragment } }
  ) | { __typename: 'investigations_investigationParent_Entry' } | { __typename: 'pages_pages_Entry' } | { __typename: 'pages_redirectPage_Entry' } | { __typename: 'questions_default_Entry' } | null };

export type InvestigationPageQueryVariables = Exact<{
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type InvestigationPageQuery = { __typename?: 'Query', entry?: { __typename: 'homepage_homepage_Entry' } | { __typename: 'investigations_default_Entry' } | (
    { __typename: 'investigations_investigationParent_Entry' }
    & { ' $fragmentRefs'?: { 'InvestigationLandingPageTemplateFragment': InvestigationLandingPageTemplateFragment } }
  ) | { __typename: 'pages_pages_Entry' } | { __typename: 'pages_redirectPage_Entry' } | { __typename: 'questions_default_Entry' } | null };

export type GlobalsQueryQueryVariables = Exact<{
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type GlobalsQueryQuery = { __typename?: 'Query', headerNavItems?: Array<{ __typename?: 'homepage_homepage_Entry', id?: string | null, title?: string | null, uri?: string | null, children: Array<{ __typename?: 'homepage_homepage_Entry', id?: string | null, title?: string | null, uri?: string | null } | { __typename?: 'investigations_default_Entry', id?: string | null, title?: string | null, uri?: string | null } | { __typename?: 'investigations_investigationParent_Entry', id?: string | null, title?: string | null, uri?: string | null } | { __typename?: 'pages_pages_Entry', id?: string | null, title?: string | null, uri?: string | null } | { __typename?: 'pages_redirectPage_Entry', id?: string | null, title?: string | null, uri?: string | null } | { __typename?: 'questions_default_Entry', id?: string | null, title?: string | null, uri?: string | null }> } | { __typename?: 'investigations_default_Entry', id?: string | null, title?: string | null, uri?: string | null, children: Array<{ __typename?: 'homepage_homepage_Entry', id?: string | null, title?: string | null, uri?: string | null } | { __typename?: 'investigations_default_Entry', id?: string | null, title?: string | null, uri?: string | null } | { __typename?: 'investigations_investigationParent_Entry', id?: string | null, title?: string | null, uri?: string | null } | { __typename?: 'pages_pages_Entry', id?: string | null, title?: string | null, uri?: string | null } | { __typename?: 'pages_redirectPage_Entry', id?: string | null, title?: string | null, uri?: string | null } | { __typename?: 'questions_default_Entry', id?: string | null, title?: string | null, uri?: string | null }> } | { __typename?: 'investigations_investigationParent_Entry', id?: string | null, title?: string | null, uri?: string | null, children: Array<{ __typename?: 'homepage_homepage_Entry', id?: string | null, title?: string | null, uri?: string | null } | { __typename?: 'investigations_default_Entry', id?: string | null, title?: string | null, uri?: string | null } | { __typename?: 'investigations_investigationParent_Entry', id?: string | null, title?: string | null, uri?: string | null } | { __typename?: 'pages_pages_Entry', id?: string | null, title?: string | null, uri?: string | null } | { __typename?: 'pages_redirectPage_Entry', id?: string | null, title?: string | null, uri?: string | null } | { __typename?: 'questions_default_Entry', id?: string | null, title?: string | null, uri?: string | null }> } | { __typename?: 'pages_pages_Entry', id?: string | null, title?: string | null, uri?: string | null, children: Array<{ __typename?: 'homepage_homepage_Entry', id?: string | null, title?: string | null, uri?: string | null } | { __typename?: 'investigations_default_Entry', id?: string | null, title?: string | null, uri?: string | null } | { __typename?: 'investigations_investigationParent_Entry', id?: string | null, title?: string | null, uri?: string | null } | { __typename?: 'pages_pages_Entry', id?: string | null, title?: string | null, uri?: string | null } | { __typename?: 'pages_redirectPage_Entry', id?: string | null, title?: string | null, uri?: string | null } | { __typename?: 'questions_default_Entry', id?: string | null, title?: string | null, uri?: string | null }> } | { __typename?: 'pages_redirectPage_Entry', id?: string | null, title?: string | null, uri?: string | null, children: Array<{ __typename?: 'homepage_homepage_Entry', id?: string | null, title?: string | null, uri?: string | null } | { __typename?: 'investigations_default_Entry', id?: string | null, title?: string | null, uri?: string | null } | { __typename?: 'investigations_investigationParent_Entry', id?: string | null, title?: string | null, uri?: string | null } | { __typename?: 'pages_pages_Entry', id?: string | null, title?: string | null, uri?: string | null } | { __typename?: 'pages_redirectPage_Entry', id?: string | null, title?: string | null, uri?: string | null } | { __typename?: 'questions_default_Entry', id?: string | null, title?: string | null, uri?: string | null }> } | { __typename?: 'questions_default_Entry', id?: string | null, title?: string | null, uri?: string | null, children: Array<{ __typename?: 'homepage_homepage_Entry', id?: string | null, title?: string | null, uri?: string | null } | { __typename?: 'investigations_default_Entry', id?: string | null, title?: string | null, uri?: string | null } | { __typename?: 'investigations_investigationParent_Entry', id?: string | null, title?: string | null, uri?: string | null } | { __typename?: 'pages_pages_Entry', id?: string | null, title?: string | null, uri?: string | null } | { __typename?: 'pages_redirectPage_Entry', id?: string | null, title?: string | null, uri?: string | null } | { __typename?: 'questions_default_Entry', id?: string | null, title?: string | null, uri?: string | null }> } | null> | null, siteInfo?: { __typename?: 'siteInfo_GlobalSet', language?: string | null, name: string, handle: string, siteTitle?: string | null, siteDescription?: string | null } | null, categories?: Array<{ __typename?: 'sortOptions_Category', id?: string | null, slug?: string | null, groupHandle: string, title?: string | null } | null> | null };

export type HomepageQueryQueryVariables = Exact<{
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type HomepageQueryQuery = { __typename?: 'Query', entry?: (
    { __typename: 'homepage_homepage_Entry' }
    & { ' $fragmentRefs'?: { 'HomepageTemplateFragment': HomepageTemplateFragment } }
  ) | { __typename: 'investigations_default_Entry' } | { __typename: 'investigations_investigationParent_Entry' } | { __typename: 'pages_pages_Entry' } | { __typename: 'pages_redirectPage_Entry' } | { __typename: 'questions_default_Entry' } | null };

export type FacebookOauthUrlQueryVariables = Exact<{ [key: string]: never; }>;


export type FacebookOauthUrlQuery = { __typename?: 'Query', facebookOauthUrl: string };

export type GoogleSignInStudentMutationVariables = Exact<{
  idToken: Scalars['String']['input'];
}>;


export type GoogleSignInStudentMutation = { __typename?: 'Mutation', googleSignInStudents: (
    { __typename?: 'Auth' }
    & { ' $fragmentRefs'?: { 'AuthFragmentFragment': AuthFragmentFragment } }
  ) };

export type GoogleSignInEducatorMutationVariables = Exact<{
  idToken: Scalars['String']['input'];
}>;


export type GoogleSignInEducatorMutation = { __typename?: 'Mutation', googleSignInEducators: (
    { __typename?: 'Auth' }
    & { ' $fragmentRefs'?: { 'AuthFragmentFragment': AuthFragmentFragment } }
  ) };

export type ActivateUserMutationVariables = Exact<{
  code: Scalars['String']['input'];
  id: Scalars['String']['input'];
}>;


export type ActivateUserMutation = { __typename?: 'Mutation', activateUser: string };

export type ForgottenPasswordMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type ForgottenPasswordMutation = { __typename?: 'Mutation', forgottenPassword: string };

export type SetPasswordMutationVariables = Exact<{
  password: Scalars['String']['input'];
  code: Scalars['String']['input'];
  id: Scalars['String']['input'];
}>;


export type SetPasswordMutation = { __typename?: 'Mutation', setPassword: string };

export type AuthenticateMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type AuthenticateMutation = { __typename?: 'Mutation', authenticate: (
    { __typename?: 'Auth' }
    & { ' $fragmentRefs'?: { 'AuthFragmentFragment': AuthFragmentFragment } }
  ) };

export type FacebookSignInStudentMutationVariables = Exact<{
  code: Scalars['String']['input'];
}>;


export type FacebookSignInStudentMutation = { __typename?: 'Mutation', facebookSignInStudents: (
    { __typename?: 'Auth' }
    & { ' $fragmentRefs'?: { 'AuthFragmentFragment': AuthFragmentFragment } }
  ) };

export type FacebookSignInEducatorMutationVariables = Exact<{
  code: Scalars['String']['input'];
}>;


export type FacebookSignInEducatorMutation = { __typename?: 'Mutation', facebookSignInEducators: (
    { __typename?: 'Auth' }
    & { ' $fragmentRefs'?: { 'AuthFragmentFragment': AuthFragmentFragment } }
  ) };

export type RegisterEducatorMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  fullName?: InputMaybe<Scalars['String']['input']>;
}>;


export type RegisterEducatorMutation = { __typename?: 'Mutation', registerEducators: (
    { __typename?: 'Auth' }
    & { ' $fragmentRefs'?: { 'AuthFragmentFragment': AuthFragmentFragment } }
  ) };

export type RegisterStudentMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  fullName?: InputMaybe<Scalars['String']['input']>;
}>;


export type RegisterStudentMutation = { __typename?: 'Mutation', registerStudents: (
    { __typename?: 'Auth' }
    & { ' $fragmentRefs'?: { 'AuthFragmentFragment': AuthFragmentFragment } }
  ) };

export type BarGraphToolBlockFragment = { __typename?: 'contentBlocks_barGraphTool_BlockType', title?: string | null, yAxisMin?: any | null, yAxisMax?: any | null, yAxisLabel?: string | null, xAxisLabel?: string | null, graphBars: Array<{ __typename: 'graphBars_bar_BlockType', yValue?: string | null, label?: string | null } | null> } & { ' $fragmentName'?: 'BarGraphToolBlockFragment' };

export type ColorToolBlockFragment = { __typename: 'contentBlocks_colorTool_BlockType', colorToolTemplate?: string | null, readOnly?: boolean | null, images: Array<{ __typename: 'images_imageGroup_BlockType', uri?: string | null } | null> } & { ' $fragmentName'?: 'ColorToolBlockFragment' };

export type FilterToolBlockFragment = { __typename: 'contentBlocks_filterTool_BlockType', preSelectedColor?: string | null, readOnly?: boolean | null } & { ' $fragmentName'?: 'FilterToolBlockFragment' };

export type QuestionsBlockFragment = { __typename?: 'contentBlocks_questionBlock_BlockType', questionEntries: Array<{ __typename: 'homepage_homepage_Entry', id?: string | null } | { __typename: 'investigations_default_Entry', id?: string | null } | { __typename: 'investigations_investigationParent_Entry', id?: string | null } | { __typename: 'pages_pages_Entry', id?: string | null } | { __typename: 'pages_redirectPage_Entry', id?: string | null } | (
    { __typename: 'questions_default_Entry', id?: string | null }
    & { ' $fragmentRefs'?: { 'QuestionFactoryFragment': QuestionFactoryFragment } }
  ) | null> } & { ' $fragmentName'?: 'QuestionsBlockFragment' };

export type ScatterplotToolBlockFragment = { __typename?: 'contentBlocks_scatterplotTool_BlockType', title?: string | null, xAxisMin?: any | null, yAxisMax?: any | null, yAxisLabel?: string | null, xAxisLabel?: string | null, scatterplotItems: Array<{ __typename?: 'scatterplotItems_item_BlockType', xValue?: any | null, yValue?: any | null, itemLabel?: string | null } | null> } & { ' $fragmentName'?: 'ScatterplotToolBlockFragment' };

export type TextBlockFragment = { __typename?: 'contentBlocks_text_BlockType', text?: string | null } & { ' $fragmentName'?: 'TextBlockFragment' };

export type TwoColumnContainerBlockFragment = { __typename?: 'contentBlocks_twoColumnContainer_BlockType', childBlocks?: Array<(
    { __typename: 'contentBlocks_barGraphTool_BlockType', id?: string | null }
    & { ' $fragmentRefs'?: { 'BarGraphToolBlockFragment': BarGraphToolBlockFragment } }
  ) | (
    { __typename: 'contentBlocks_colorTool_BlockType', id?: string | null }
    & { ' $fragmentRefs'?: { 'ColorToolBlockFragment': ColorToolBlockFragment } }
  ) | (
    { __typename: 'contentBlocks_filterTool_BlockType', id?: string | null }
    & { ' $fragmentRefs'?: { 'FilterToolBlockFragment': FilterToolBlockFragment } }
  ) | { __typename: 'contentBlocks_questionBlock_BlockType', id?: string | null } | (
    { __typename: 'contentBlocks_scatterplotTool_BlockType', id?: string | null }
    & { ' $fragmentRefs'?: { 'ScatterplotToolBlockFragment': ScatterplotToolBlockFragment } }
  ) | (
    { __typename: 'contentBlocks_text_BlockType', id?: string | null }
    & { ' $fragmentRefs'?: { 'TextBlockFragment': TextBlockFragment } }
  ) | { __typename: 'contentBlocks_twoColumnContainer_BlockType', id?: string | null } | { __typename: 'contentBlocks_widgetContainer_BlockType', id?: string | null } | null> | null } & { ' $fragmentName'?: 'TwoColumnContainerBlockFragment' };

export type WidgetContainerBlockFragment = { __typename?: 'contentBlocks_widgetContainer_BlockType', childBlocks?: Array<(
    { __typename: 'contentBlocks_barGraphTool_BlockType', id?: string | null }
    & { ' $fragmentRefs'?: { 'BarGraphToolBlockFragment': BarGraphToolBlockFragment } }
  ) | { __typename: 'contentBlocks_colorTool_BlockType', id?: string | null } | { __typename: 'contentBlocks_filterTool_BlockType', id?: string | null } | { __typename: 'contentBlocks_questionBlock_BlockType', id?: string | null } | (
    { __typename: 'contentBlocks_scatterplotTool_BlockType', id?: string | null }
    & { ' $fragmentRefs'?: { 'ScatterplotToolBlockFragment': ScatterplotToolBlockFragment } }
  ) | { __typename: 'contentBlocks_text_BlockType', id?: string | null } | { __typename: 'contentBlocks_twoColumnContainer_BlockType', id?: string | null } | { __typename: 'contentBlocks_widgetContainer_BlockType', id?: string | null } | null> | null } & { ' $fragmentName'?: 'WidgetContainerBlockFragment' };

type ContentBlockFactory_ContentBlocks_BarGraphTool_BlockType_Fragment = (
  { __typename: 'contentBlocks_barGraphTool_BlockType' }
  & { ' $fragmentRefs'?: { 'BarGraphToolBlockFragment': BarGraphToolBlockFragment } }
) & { ' $fragmentName'?: 'ContentBlockFactory_ContentBlocks_BarGraphTool_BlockType_Fragment' };

type ContentBlockFactory_ContentBlocks_ColorTool_BlockType_Fragment = (
  { __typename: 'contentBlocks_colorTool_BlockType' }
  & { ' $fragmentRefs'?: { 'ColorToolBlockFragment': ColorToolBlockFragment } }
) & { ' $fragmentName'?: 'ContentBlockFactory_ContentBlocks_ColorTool_BlockType_Fragment' };

type ContentBlockFactory_ContentBlocks_FilterTool_BlockType_Fragment = (
  { __typename: 'contentBlocks_filterTool_BlockType' }
  & { ' $fragmentRefs'?: { 'FilterToolBlockFragment': FilterToolBlockFragment } }
) & { ' $fragmentName'?: 'ContentBlockFactory_ContentBlocks_FilterTool_BlockType_Fragment' };

type ContentBlockFactory_ContentBlocks_QuestionBlock_BlockType_Fragment = (
  { __typename: 'contentBlocks_questionBlock_BlockType' }
  & { ' $fragmentRefs'?: { 'QuestionsBlockFragment': QuestionsBlockFragment } }
) & { ' $fragmentName'?: 'ContentBlockFactory_ContentBlocks_QuestionBlock_BlockType_Fragment' };

type ContentBlockFactory_ContentBlocks_ScatterplotTool_BlockType_Fragment = (
  { __typename: 'contentBlocks_scatterplotTool_BlockType' }
  & { ' $fragmentRefs'?: { 'ScatterplotToolBlockFragment': ScatterplotToolBlockFragment } }
) & { ' $fragmentName'?: 'ContentBlockFactory_ContentBlocks_ScatterplotTool_BlockType_Fragment' };

type ContentBlockFactory_ContentBlocks_Text_BlockType_Fragment = (
  { __typename: 'contentBlocks_text_BlockType' }
  & { ' $fragmentRefs'?: { 'TextBlockFragment': TextBlockFragment } }
) & { ' $fragmentName'?: 'ContentBlockFactory_ContentBlocks_Text_BlockType_Fragment' };

type ContentBlockFactory_ContentBlocks_TwoColumnContainer_BlockType_Fragment = (
  { __typename: 'contentBlocks_twoColumnContainer_BlockType' }
  & { ' $fragmentRefs'?: { 'TwoColumnContainerBlockFragment': TwoColumnContainerBlockFragment } }
) & { ' $fragmentName'?: 'ContentBlockFactory_ContentBlocks_TwoColumnContainer_BlockType_Fragment' };

type ContentBlockFactory_ContentBlocks_WidgetContainer_BlockType_Fragment = (
  { __typename: 'contentBlocks_widgetContainer_BlockType' }
  & { ' $fragmentRefs'?: { 'WidgetContainerBlockFragment': WidgetContainerBlockFragment } }
) & { ' $fragmentName'?: 'ContentBlockFactory_ContentBlocks_WidgetContainer_BlockType_Fragment' };

export type ContentBlockFactoryFragment = ContentBlockFactory_ContentBlocks_BarGraphTool_BlockType_Fragment | ContentBlockFactory_ContentBlocks_ColorTool_BlockType_Fragment | ContentBlockFactory_ContentBlocks_FilterTool_BlockType_Fragment | ContentBlockFactory_ContentBlocks_QuestionBlock_BlockType_Fragment | ContentBlockFactory_ContentBlocks_ScatterplotTool_BlockType_Fragment | ContentBlockFactory_ContentBlocks_Text_BlockType_Fragment | ContentBlockFactory_ContentBlocks_TwoColumnContainer_BlockType_Fragment | ContentBlockFactory_ContentBlocks_WidgetContainer_BlockType_Fragment;

export type QuestionFactoryFragment = { __typename?: 'questions_default_Entry', answerType?: string | null, id?: string | null } & { ' $fragmentName'?: 'QuestionFactoryFragment' };

type SimpleContentBlockFactory_ContentBlocks_BarGraphTool_BlockType_Fragment = { __typename: 'contentBlocks_barGraphTool_BlockType' } & { ' $fragmentName'?: 'SimpleContentBlockFactory_ContentBlocks_BarGraphTool_BlockType_Fragment' };

type SimpleContentBlockFactory_ContentBlocks_ColorTool_BlockType_Fragment = { __typename: 'contentBlocks_colorTool_BlockType' } & { ' $fragmentName'?: 'SimpleContentBlockFactory_ContentBlocks_ColorTool_BlockType_Fragment' };

type SimpleContentBlockFactory_ContentBlocks_FilterTool_BlockType_Fragment = { __typename: 'contentBlocks_filterTool_BlockType' } & { ' $fragmentName'?: 'SimpleContentBlockFactory_ContentBlocks_FilterTool_BlockType_Fragment' };

type SimpleContentBlockFactory_ContentBlocks_QuestionBlock_BlockType_Fragment = { __typename: 'contentBlocks_questionBlock_BlockType' } & { ' $fragmentName'?: 'SimpleContentBlockFactory_ContentBlocks_QuestionBlock_BlockType_Fragment' };

type SimpleContentBlockFactory_ContentBlocks_ScatterplotTool_BlockType_Fragment = { __typename: 'contentBlocks_scatterplotTool_BlockType' } & { ' $fragmentName'?: 'SimpleContentBlockFactory_ContentBlocks_ScatterplotTool_BlockType_Fragment' };

type SimpleContentBlockFactory_ContentBlocks_Text_BlockType_Fragment = (
  { __typename: 'contentBlocks_text_BlockType' }
  & { ' $fragmentRefs'?: { 'TextBlockFragment': TextBlockFragment } }
) & { ' $fragmentName'?: 'SimpleContentBlockFactory_ContentBlocks_Text_BlockType_Fragment' };

type SimpleContentBlockFactory_ContentBlocks_TwoColumnContainer_BlockType_Fragment = { __typename: 'contentBlocks_twoColumnContainer_BlockType' } & { ' $fragmentName'?: 'SimpleContentBlockFactory_ContentBlocks_TwoColumnContainer_BlockType_Fragment' };

type SimpleContentBlockFactory_ContentBlocks_WidgetContainer_BlockType_Fragment = { __typename: 'contentBlocks_widgetContainer_BlockType' } & { ' $fragmentName'?: 'SimpleContentBlockFactory_ContentBlocks_WidgetContainer_BlockType_Fragment' };

export type SimpleContentBlockFactoryFragment = SimpleContentBlockFactory_ContentBlocks_BarGraphTool_BlockType_Fragment | SimpleContentBlockFactory_ContentBlocks_ColorTool_BlockType_Fragment | SimpleContentBlockFactory_ContentBlocks_FilterTool_BlockType_Fragment | SimpleContentBlockFactory_ContentBlocks_QuestionBlock_BlockType_Fragment | SimpleContentBlockFactory_ContentBlocks_ScatterplotTool_BlockType_Fragment | SimpleContentBlockFactory_ContentBlocks_Text_BlockType_Fragment | SimpleContentBlockFactory_ContentBlocks_TwoColumnContainer_BlockType_Fragment | SimpleContentBlockFactory_ContentBlocks_WidgetContainer_BlockType_Fragment;

type TemplateFactory_Homepage_Homepage_Entry_Fragment = { __typename: 'homepage_homepage_Entry' } & { ' $fragmentName'?: 'TemplateFactory_Homepage_Homepage_Entry_Fragment' };

type TemplateFactory_Investigations_Default_Entry_Fragment = { __typename: 'investigations_default_Entry' } & { ' $fragmentName'?: 'TemplateFactory_Investigations_Default_Entry_Fragment' };

type TemplateFactory_Investigations_InvestigationParent_Entry_Fragment = { __typename: 'investigations_investigationParent_Entry' } & { ' $fragmentName'?: 'TemplateFactory_Investigations_InvestigationParent_Entry_Fragment' };

type TemplateFactory_Pages_Pages_Entry_Fragment = (
  { __typename: 'pages_pages_Entry' }
  & { ' $fragmentRefs'?: { 'PageTemplateFragment': PageTemplateFragment } }
) & { ' $fragmentName'?: 'TemplateFactory_Pages_Pages_Entry_Fragment' };

type TemplateFactory_Pages_RedirectPage_Entry_Fragment = { __typename: 'pages_redirectPage_Entry' } & { ' $fragmentName'?: 'TemplateFactory_Pages_RedirectPage_Entry_Fragment' };

type TemplateFactory_Questions_Default_Entry_Fragment = { __typename: 'questions_default_Entry' } & { ' $fragmentName'?: 'TemplateFactory_Questions_Default_Entry_Fragment' };

export type TemplateFactoryFragment = TemplateFactory_Homepage_Homepage_Entry_Fragment | TemplateFactory_Investigations_Default_Entry_Fragment | TemplateFactory_Investigations_InvestigationParent_Entry_Fragment | TemplateFactory_Pages_Pages_Entry_Fragment | TemplateFactory_Pages_RedirectPage_Entry_Fragment | TemplateFactory_Questions_Default_Entry_Fragment;

export type HomepageTemplateFragment = { __typename?: 'homepage_homepage_Entry', id?: string | null, title?: string | null, contentBlocks?: Array<(
    { __typename?: 'contentBlocks_barGraphTool_BlockType' }
    & { ' $fragmentRefs'?: { 'ContentBlockFactory_ContentBlocks_BarGraphTool_BlockType_Fragment': ContentBlockFactory_ContentBlocks_BarGraphTool_BlockType_Fragment } }
  ) | (
    { __typename?: 'contentBlocks_colorTool_BlockType' }
    & { ' $fragmentRefs'?: { 'ContentBlockFactory_ContentBlocks_ColorTool_BlockType_Fragment': ContentBlockFactory_ContentBlocks_ColorTool_BlockType_Fragment } }
  ) | (
    { __typename?: 'contentBlocks_filterTool_BlockType' }
    & { ' $fragmentRefs'?: { 'ContentBlockFactory_ContentBlocks_FilterTool_BlockType_Fragment': ContentBlockFactory_ContentBlocks_FilterTool_BlockType_Fragment } }
  ) | (
    { __typename?: 'contentBlocks_questionBlock_BlockType' }
    & { ' $fragmentRefs'?: { 'ContentBlockFactory_ContentBlocks_QuestionBlock_BlockType_Fragment': ContentBlockFactory_ContentBlocks_QuestionBlock_BlockType_Fragment } }
  ) | (
    { __typename?: 'contentBlocks_scatterplotTool_BlockType' }
    & { ' $fragmentRefs'?: { 'ContentBlockFactory_ContentBlocks_ScatterplotTool_BlockType_Fragment': ContentBlockFactory_ContentBlocks_ScatterplotTool_BlockType_Fragment } }
  ) | (
    { __typename?: 'contentBlocks_text_BlockType' }
    & { ' $fragmentRefs'?: { 'ContentBlockFactory_ContentBlocks_Text_BlockType_Fragment': ContentBlockFactory_ContentBlocks_Text_BlockType_Fragment } }
  ) | (
    { __typename?: 'contentBlocks_twoColumnContainer_BlockType' }
    & { ' $fragmentRefs'?: { 'ContentBlockFactory_ContentBlocks_TwoColumnContainer_BlockType_Fragment': ContentBlockFactory_ContentBlocks_TwoColumnContainer_BlockType_Fragment } }
  ) | (
    { __typename?: 'contentBlocks_widgetContainer_BlockType' }
    & { ' $fragmentRefs'?: { 'ContentBlockFactory_ContentBlocks_WidgetContainer_BlockType_Fragment': ContentBlockFactory_ContentBlocks_WidgetContainer_BlockType_Fragment } }
  ) | null> | null } & { ' $fragmentName'?: 'HomepageTemplateFragment' };

export type InvestigationChildPageTemplateFragment = { __typename?: 'investigations_default_Entry', id?: string | null, title?: string | null, contentBlocks?: Array<(
    { __typename?: 'contentBlocks_barGraphTool_BlockType' }
    & { ' $fragmentRefs'?: { 'ContentBlockFactory_ContentBlocks_BarGraphTool_BlockType_Fragment': ContentBlockFactory_ContentBlocks_BarGraphTool_BlockType_Fragment } }
  ) | (
    { __typename?: 'contentBlocks_colorTool_BlockType' }
    & { ' $fragmentRefs'?: { 'ContentBlockFactory_ContentBlocks_ColorTool_BlockType_Fragment': ContentBlockFactory_ContentBlocks_ColorTool_BlockType_Fragment } }
  ) | (
    { __typename?: 'contentBlocks_filterTool_BlockType' }
    & { ' $fragmentRefs'?: { 'ContentBlockFactory_ContentBlocks_FilterTool_BlockType_Fragment': ContentBlockFactory_ContentBlocks_FilterTool_BlockType_Fragment } }
  ) | (
    { __typename?: 'contentBlocks_questionBlock_BlockType' }
    & { ' $fragmentRefs'?: { 'ContentBlockFactory_ContentBlocks_QuestionBlock_BlockType_Fragment': ContentBlockFactory_ContentBlocks_QuestionBlock_BlockType_Fragment } }
  ) | (
    { __typename?: 'contentBlocks_scatterplotTool_BlockType' }
    & { ' $fragmentRefs'?: { 'ContentBlockFactory_ContentBlocks_ScatterplotTool_BlockType_Fragment': ContentBlockFactory_ContentBlocks_ScatterplotTool_BlockType_Fragment } }
  ) | (
    { __typename?: 'contentBlocks_text_BlockType' }
    & { ' $fragmentRefs'?: { 'ContentBlockFactory_ContentBlocks_Text_BlockType_Fragment': ContentBlockFactory_ContentBlocks_Text_BlockType_Fragment } }
  ) | (
    { __typename?: 'contentBlocks_twoColumnContainer_BlockType' }
    & { ' $fragmentRefs'?: { 'ContentBlockFactory_ContentBlocks_TwoColumnContainer_BlockType_Fragment': ContentBlockFactory_ContentBlocks_TwoColumnContainer_BlockType_Fragment } }
  ) | (
    { __typename?: 'contentBlocks_widgetContainer_BlockType' }
    & { ' $fragmentRefs'?: { 'ContentBlockFactory_ContentBlocks_WidgetContainer_BlockType_Fragment': ContentBlockFactory_ContentBlocks_WidgetContainer_BlockType_Fragment } }
  ) | null> | null, prev?: { __typename: 'homepage_homepage_Entry', uri?: string | null } | { __typename: 'investigations_default_Entry', uri?: string | null } | { __typename: 'investigations_investigationParent_Entry', uri?: string | null } | { __typename: 'pages_pages_Entry', uri?: string | null } | { __typename: 'pages_redirectPage_Entry', uri?: string | null } | { __typename: 'questions_default_Entry', uri?: string | null } | null, next?: { __typename: 'homepage_homepage_Entry', uri?: string | null } | { __typename: 'investigations_default_Entry', uri?: string | null } | { __typename: 'investigations_investigationParent_Entry', uri?: string | null } | { __typename: 'pages_pages_Entry', uri?: string | null } | { __typename: 'pages_redirectPage_Entry', uri?: string | null } | { __typename: 'questions_default_Entry', uri?: string | null } | null, parent?: { __typename?: 'homepage_homepage_Entry', children: Array<{ __typename: 'homepage_homepage_Entry', id?: string | null, title?: string | null } | { __typename: 'investigations_default_Entry', hasSavePoint?: boolean | null, id?: string | null, title?: string | null } | { __typename: 'investigations_investigationParent_Entry', id?: string | null, title?: string | null } | { __typename: 'pages_pages_Entry', id?: string | null, title?: string | null } | { __typename: 'pages_redirectPage_Entry', id?: string | null, title?: string | null } | { __typename: 'questions_default_Entry', id?: string | null, title?: string | null }> } | { __typename?: 'investigations_default_Entry', children: Array<{ __typename: 'homepage_homepage_Entry', id?: string | null, title?: string | null } | { __typename: 'investigations_default_Entry', hasSavePoint?: boolean | null, id?: string | null, title?: string | null } | { __typename: 'investigations_investigationParent_Entry', id?: string | null, title?: string | null } | { __typename: 'pages_pages_Entry', id?: string | null, title?: string | null } | { __typename: 'pages_redirectPage_Entry', id?: string | null, title?: string | null } | { __typename: 'questions_default_Entry', id?: string | null, title?: string | null }> } | { __typename?: 'investigations_investigationParent_Entry', children: Array<{ __typename: 'homepage_homepage_Entry', id?: string | null, title?: string | null } | { __typename: 'investigations_default_Entry', hasSavePoint?: boolean | null, id?: string | null, title?: string | null } | { __typename: 'investigations_investigationParent_Entry', id?: string | null, title?: string | null } | { __typename: 'pages_pages_Entry', id?: string | null, title?: string | null } | { __typename: 'pages_redirectPage_Entry', id?: string | null, title?: string | null } | { __typename: 'questions_default_Entry', id?: string | null, title?: string | null }> } | { __typename?: 'pages_pages_Entry', children: Array<{ __typename: 'homepage_homepage_Entry', id?: string | null, title?: string | null } | { __typename: 'investigations_default_Entry', hasSavePoint?: boolean | null, id?: string | null, title?: string | null } | { __typename: 'investigations_investigationParent_Entry', id?: string | null, title?: string | null } | { __typename: 'pages_pages_Entry', id?: string | null, title?: string | null } | { __typename: 'pages_redirectPage_Entry', id?: string | null, title?: string | null } | { __typename: 'questions_default_Entry', id?: string | null, title?: string | null }> } | { __typename?: 'pages_redirectPage_Entry', children: Array<{ __typename: 'homepage_homepage_Entry', id?: string | null, title?: string | null } | { __typename: 'investigations_default_Entry', hasSavePoint?: boolean | null, id?: string | null, title?: string | null } | { __typename: 'investigations_investigationParent_Entry', id?: string | null, title?: string | null } | { __typename: 'pages_pages_Entry', id?: string | null, title?: string | null } | { __typename: 'pages_redirectPage_Entry', id?: string | null, title?: string | null } | { __typename: 'questions_default_Entry', id?: string | null, title?: string | null }> } | { __typename?: 'questions_default_Entry', children: Array<{ __typename: 'homepage_homepage_Entry', id?: string | null, title?: string | null } | { __typename: 'investigations_default_Entry', hasSavePoint?: boolean | null, id?: string | null, title?: string | null } | { __typename: 'investigations_investigationParent_Entry', id?: string | null, title?: string | null } | { __typename: 'pages_pages_Entry', id?: string | null, title?: string | null } | { __typename: 'pages_redirectPage_Entry', id?: string | null, title?: string | null } | { __typename: 'questions_default_Entry', id?: string | null, title?: string | null }> } | null } & { ' $fragmentName'?: 'InvestigationChildPageTemplateFragment' };

export type InvestigationLandingPageTemplateFragment = { __typename?: 'investigations_investigationParent_Entry', title?: string | null, children: Array<{ __typename?: 'homepage_homepage_Entry', uri?: string | null } | { __typename?: 'investigations_default_Entry', uri?: string | null } | { __typename?: 'investigations_investigationParent_Entry', uri?: string | null } | { __typename?: 'pages_pages_Entry', uri?: string | null } | { __typename?: 'pages_redirectPage_Entry', uri?: string | null } | { __typename?: 'questions_default_Entry', uri?: string | null }> } & { ' $fragmentName'?: 'InvestigationLandingPageTemplateFragment' };

export type PageTemplateFragment = { __typename?: 'pages_pages_Entry', id?: string | null, title?: string | null, contentBlocks?: Array<(
    { __typename?: 'contentBlocks_barGraphTool_BlockType' }
    & { ' $fragmentRefs'?: { 'ContentBlockFactory_ContentBlocks_BarGraphTool_BlockType_Fragment': ContentBlockFactory_ContentBlocks_BarGraphTool_BlockType_Fragment } }
  ) | (
    { __typename?: 'contentBlocks_colorTool_BlockType' }
    & { ' $fragmentRefs'?: { 'ContentBlockFactory_ContentBlocks_ColorTool_BlockType_Fragment': ContentBlockFactory_ContentBlocks_ColorTool_BlockType_Fragment } }
  ) | (
    { __typename?: 'contentBlocks_filterTool_BlockType' }
    & { ' $fragmentRefs'?: { 'ContentBlockFactory_ContentBlocks_FilterTool_BlockType_Fragment': ContentBlockFactory_ContentBlocks_FilterTool_BlockType_Fragment } }
  ) | (
    { __typename?: 'contentBlocks_questionBlock_BlockType' }
    & { ' $fragmentRefs'?: { 'ContentBlockFactory_ContentBlocks_QuestionBlock_BlockType_Fragment': ContentBlockFactory_ContentBlocks_QuestionBlock_BlockType_Fragment } }
  ) | (
    { __typename?: 'contentBlocks_scatterplotTool_BlockType' }
    & { ' $fragmentRefs'?: { 'ContentBlockFactory_ContentBlocks_ScatterplotTool_BlockType_Fragment': ContentBlockFactory_ContentBlocks_ScatterplotTool_BlockType_Fragment } }
  ) | (
    { __typename?: 'contentBlocks_text_BlockType' }
    & { ' $fragmentRefs'?: { 'ContentBlockFactory_ContentBlocks_Text_BlockType_Fragment': ContentBlockFactory_ContentBlocks_Text_BlockType_Fragment } }
  ) | (
    { __typename?: 'contentBlocks_twoColumnContainer_BlockType' }
    & { ' $fragmentRefs'?: { 'ContentBlockFactory_ContentBlocks_TwoColumnContainer_BlockType_Fragment': ContentBlockFactory_ContentBlocks_TwoColumnContainer_BlockType_Fragment } }
  ) | (
    { __typename?: 'contentBlocks_widgetContainer_BlockType' }
    & { ' $fragmentRefs'?: { 'ContentBlockFactory_ContentBlocks_WidgetContainer_BlockType_Fragment': ContentBlockFactory_ContentBlocks_WidgetContainer_BlockType_Fragment } }
  ) | null> | null } & { ' $fragmentName'?: 'PageTemplateFragment' };

export type AuthFragmentFragment = { __typename?: 'Auth', jwt: string, jwtExpiresAt: number, refreshToken: string, refreshTokenExpiresAt: number, user?: (
    { __typename?: 'User' }
    & { ' $fragmentRefs'?: { 'UserFragmentFragment': UserFragmentFragment } }
  ) | null } & { ' $fragmentName'?: 'AuthFragmentFragment' };

export type UserFragmentFragment = { __typename?: 'User', status?: string | null } & { ' $fragmentName'?: 'UserFragmentFragment' };

export const TextBlockFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_text_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]} as unknown as DocumentNode<TextBlockFragment, unknown>;
export const SimpleContentBlockFactoryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SimpleContentBlockFactory"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_NeoField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextBlock"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_text_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]} as unknown as DocumentNode<SimpleContentBlockFactoryFragment, unknown>;
export const BarGraphToolBlockFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BarGraphToolBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_barGraphTool_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"yAxisMin"}},{"kind":"Field","name":{"kind":"Name","value":"yAxisMax"}},{"kind":"Field","name":{"kind":"Name","value":"yAxisLabel"}},{"kind":"Field","name":{"kind":"Name","value":"xAxisLabel"}},{"kind":"Field","name":{"kind":"Name","value":"graphBars"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"graphBars_bar_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"yValue"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}}]} as unknown as DocumentNode<BarGraphToolBlockFragment, unknown>;
export const ColorToolBlockFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ColorToolBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_colorTool_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"colorToolTemplate"}},{"kind":"Field","name":{"kind":"Name","value":"readOnly"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"images_imageGroup_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}}]}}]}}]}}]} as unknown as DocumentNode<ColorToolBlockFragment, unknown>;
export const FilterToolBlockFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FilterToolBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_filterTool_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"preSelectedColor"}},{"kind":"Field","name":{"kind":"Name","value":"readOnly"}}]}}]} as unknown as DocumentNode<FilterToolBlockFragment, unknown>;
export const QuestionFactoryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuestionFactory"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"questions_default_Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"answerType"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<QuestionFactoryFragment, unknown>;
export const QuestionsBlockFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuestionsBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_questionBlock_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"questionEntries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuestionFactory"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuestionFactory"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"questions_default_Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"answerType"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<QuestionsBlockFragment, unknown>;
export const ScatterplotToolBlockFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ScatterplotToolBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_scatterplotTool_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"xAxisMin"}},{"kind":"Field","name":{"kind":"Name","value":"yAxisMax"}},{"kind":"Field","name":{"kind":"Name","value":"yAxisLabel"}},{"kind":"Field","name":{"kind":"Name","value":"xAxisLabel"}},{"kind":"Field","name":{"kind":"Name","value":"scatterplotItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"scatterplotItems_item_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"xValue"}},{"kind":"Field","name":{"kind":"Name","value":"yValue"}},{"kind":"Field","name":{"kind":"Name","value":"itemLabel"}}]}}]}}]}}]} as unknown as DocumentNode<ScatterplotToolBlockFragment, unknown>;
export const TwoColumnContainerBlockFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TwoColumnContainerBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_twoColumnContainer_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"childBlocks"},"name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ColorToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FilterToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BarGraphToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ScatterplotToolBlock"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ColorToolBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_colorTool_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"colorToolTemplate"}},{"kind":"Field","name":{"kind":"Name","value":"readOnly"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"images_imageGroup_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FilterToolBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_filterTool_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"preSelectedColor"}},{"kind":"Field","name":{"kind":"Name","value":"readOnly"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_text_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BarGraphToolBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_barGraphTool_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"yAxisMin"}},{"kind":"Field","name":{"kind":"Name","value":"yAxisMax"}},{"kind":"Field","name":{"kind":"Name","value":"yAxisLabel"}},{"kind":"Field","name":{"kind":"Name","value":"xAxisLabel"}},{"kind":"Field","name":{"kind":"Name","value":"graphBars"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"graphBars_bar_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"yValue"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ScatterplotToolBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_scatterplotTool_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"xAxisMin"}},{"kind":"Field","name":{"kind":"Name","value":"yAxisMax"}},{"kind":"Field","name":{"kind":"Name","value":"yAxisLabel"}},{"kind":"Field","name":{"kind":"Name","value":"xAxisLabel"}},{"kind":"Field","name":{"kind":"Name","value":"scatterplotItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"scatterplotItems_item_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"xValue"}},{"kind":"Field","name":{"kind":"Name","value":"yValue"}},{"kind":"Field","name":{"kind":"Name","value":"itemLabel"}}]}}]}}]}}]} as unknown as DocumentNode<TwoColumnContainerBlockFragment, unknown>;
export const WidgetContainerBlockFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WidgetContainerBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_widgetContainer_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"childBlocks"},"name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BarGraphToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ScatterplotToolBlock"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BarGraphToolBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_barGraphTool_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"yAxisMin"}},{"kind":"Field","name":{"kind":"Name","value":"yAxisMax"}},{"kind":"Field","name":{"kind":"Name","value":"yAxisLabel"}},{"kind":"Field","name":{"kind":"Name","value":"xAxisLabel"}},{"kind":"Field","name":{"kind":"Name","value":"graphBars"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"graphBars_bar_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"yValue"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ScatterplotToolBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_scatterplotTool_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"xAxisMin"}},{"kind":"Field","name":{"kind":"Name","value":"yAxisMax"}},{"kind":"Field","name":{"kind":"Name","value":"yAxisLabel"}},{"kind":"Field","name":{"kind":"Name","value":"xAxisLabel"}},{"kind":"Field","name":{"kind":"Name","value":"scatterplotItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"scatterplotItems_item_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"xValue"}},{"kind":"Field","name":{"kind":"Name","value":"yValue"}},{"kind":"Field","name":{"kind":"Name","value":"itemLabel"}}]}}]}}]}}]} as unknown as DocumentNode<WidgetContainerBlockFragment, unknown>;
export const ContentBlockFactoryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentBlockFactory"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_NeoField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BarGraphToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ColorToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FilterToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuestionsBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ScatterplotToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TwoColumnContainerBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"WidgetContainerBlock"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuestionFactory"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"questions_default_Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"answerType"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ColorToolBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_colorTool_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"colorToolTemplate"}},{"kind":"Field","name":{"kind":"Name","value":"readOnly"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"images_imageGroup_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FilterToolBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_filterTool_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"preSelectedColor"}},{"kind":"Field","name":{"kind":"Name","value":"readOnly"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_text_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BarGraphToolBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_barGraphTool_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"yAxisMin"}},{"kind":"Field","name":{"kind":"Name","value":"yAxisMax"}},{"kind":"Field","name":{"kind":"Name","value":"yAxisLabel"}},{"kind":"Field","name":{"kind":"Name","value":"xAxisLabel"}},{"kind":"Field","name":{"kind":"Name","value":"graphBars"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"graphBars_bar_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"yValue"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ScatterplotToolBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_scatterplotTool_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"xAxisMin"}},{"kind":"Field","name":{"kind":"Name","value":"yAxisMax"}},{"kind":"Field","name":{"kind":"Name","value":"yAxisLabel"}},{"kind":"Field","name":{"kind":"Name","value":"xAxisLabel"}},{"kind":"Field","name":{"kind":"Name","value":"scatterplotItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"scatterplotItems_item_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"xValue"}},{"kind":"Field","name":{"kind":"Name","value":"yValue"}},{"kind":"Field","name":{"kind":"Name","value":"itemLabel"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuestionsBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_questionBlock_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"questionEntries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuestionFactory"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TwoColumnContainerBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_twoColumnContainer_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"childBlocks"},"name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ColorToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FilterToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BarGraphToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ScatterplotToolBlock"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WidgetContainerBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_widgetContainer_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"childBlocks"},"name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BarGraphToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ScatterplotToolBlock"}}]}}]}}]} as unknown as DocumentNode<ContentBlockFactoryFragment, unknown>;
export const PageTemplateFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageTemplate"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pages_pages_Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"contentBlocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentBlockFactory"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BarGraphToolBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_barGraphTool_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"yAxisMin"}},{"kind":"Field","name":{"kind":"Name","value":"yAxisMax"}},{"kind":"Field","name":{"kind":"Name","value":"yAxisLabel"}},{"kind":"Field","name":{"kind":"Name","value":"xAxisLabel"}},{"kind":"Field","name":{"kind":"Name","value":"graphBars"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"graphBars_bar_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"yValue"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ColorToolBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_colorTool_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"colorToolTemplate"}},{"kind":"Field","name":{"kind":"Name","value":"readOnly"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"images_imageGroup_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FilterToolBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_filterTool_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"preSelectedColor"}},{"kind":"Field","name":{"kind":"Name","value":"readOnly"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuestionFactory"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"questions_default_Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"answerType"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuestionsBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_questionBlock_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"questionEntries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuestionFactory"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ScatterplotToolBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_scatterplotTool_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"xAxisMin"}},{"kind":"Field","name":{"kind":"Name","value":"yAxisMax"}},{"kind":"Field","name":{"kind":"Name","value":"yAxisLabel"}},{"kind":"Field","name":{"kind":"Name","value":"xAxisLabel"}},{"kind":"Field","name":{"kind":"Name","value":"scatterplotItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"scatterplotItems_item_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"xValue"}},{"kind":"Field","name":{"kind":"Name","value":"yValue"}},{"kind":"Field","name":{"kind":"Name","value":"itemLabel"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_text_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TwoColumnContainerBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_twoColumnContainer_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"childBlocks"},"name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ColorToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FilterToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BarGraphToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ScatterplotToolBlock"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WidgetContainerBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_widgetContainer_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"childBlocks"},"name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BarGraphToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ScatterplotToolBlock"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentBlockFactory"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_NeoField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BarGraphToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ColorToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FilterToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuestionsBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ScatterplotToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TwoColumnContainerBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"WidgetContainerBlock"}}]}}]} as unknown as DocumentNode<PageTemplateFragment, unknown>;
export const TemplateFactoryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TemplateFactory"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EntryInterface"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageTemplate"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BarGraphToolBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_barGraphTool_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"yAxisMin"}},{"kind":"Field","name":{"kind":"Name","value":"yAxisMax"}},{"kind":"Field","name":{"kind":"Name","value":"yAxisLabel"}},{"kind":"Field","name":{"kind":"Name","value":"xAxisLabel"}},{"kind":"Field","name":{"kind":"Name","value":"graphBars"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"graphBars_bar_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"yValue"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ColorToolBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_colorTool_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"colorToolTemplate"}},{"kind":"Field","name":{"kind":"Name","value":"readOnly"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"images_imageGroup_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FilterToolBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_filterTool_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"preSelectedColor"}},{"kind":"Field","name":{"kind":"Name","value":"readOnly"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuestionFactory"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"questions_default_Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"answerType"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuestionsBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_questionBlock_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"questionEntries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuestionFactory"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ScatterplotToolBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_scatterplotTool_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"xAxisMin"}},{"kind":"Field","name":{"kind":"Name","value":"yAxisMax"}},{"kind":"Field","name":{"kind":"Name","value":"yAxisLabel"}},{"kind":"Field","name":{"kind":"Name","value":"xAxisLabel"}},{"kind":"Field","name":{"kind":"Name","value":"scatterplotItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"scatterplotItems_item_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"xValue"}},{"kind":"Field","name":{"kind":"Name","value":"yValue"}},{"kind":"Field","name":{"kind":"Name","value":"itemLabel"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_text_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TwoColumnContainerBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_twoColumnContainer_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"childBlocks"},"name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ColorToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FilterToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BarGraphToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ScatterplotToolBlock"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WidgetContainerBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_widgetContainer_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"childBlocks"},"name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BarGraphToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ScatterplotToolBlock"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentBlockFactory"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_NeoField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BarGraphToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ColorToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FilterToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuestionsBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ScatterplotToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TwoColumnContainerBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"WidgetContainerBlock"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageTemplate"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"pages_pages_Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"contentBlocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentBlockFactory"}}]}}]}}]} as unknown as DocumentNode<TemplateFactoryFragment, unknown>;
export const HomepageTemplateFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HomepageTemplate"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"homepage_homepage_Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"contentBlocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentBlockFactory"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BarGraphToolBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_barGraphTool_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"yAxisMin"}},{"kind":"Field","name":{"kind":"Name","value":"yAxisMax"}},{"kind":"Field","name":{"kind":"Name","value":"yAxisLabel"}},{"kind":"Field","name":{"kind":"Name","value":"xAxisLabel"}},{"kind":"Field","name":{"kind":"Name","value":"graphBars"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"graphBars_bar_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"yValue"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ColorToolBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_colorTool_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"colorToolTemplate"}},{"kind":"Field","name":{"kind":"Name","value":"readOnly"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"images_imageGroup_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FilterToolBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_filterTool_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"preSelectedColor"}},{"kind":"Field","name":{"kind":"Name","value":"readOnly"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuestionFactory"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"questions_default_Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"answerType"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuestionsBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_questionBlock_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"questionEntries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuestionFactory"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ScatterplotToolBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_scatterplotTool_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"xAxisMin"}},{"kind":"Field","name":{"kind":"Name","value":"yAxisMax"}},{"kind":"Field","name":{"kind":"Name","value":"yAxisLabel"}},{"kind":"Field","name":{"kind":"Name","value":"xAxisLabel"}},{"kind":"Field","name":{"kind":"Name","value":"scatterplotItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"scatterplotItems_item_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"xValue"}},{"kind":"Field","name":{"kind":"Name","value":"yValue"}},{"kind":"Field","name":{"kind":"Name","value":"itemLabel"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_text_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TwoColumnContainerBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_twoColumnContainer_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"childBlocks"},"name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ColorToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FilterToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BarGraphToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ScatterplotToolBlock"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WidgetContainerBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_widgetContainer_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"childBlocks"},"name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BarGraphToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ScatterplotToolBlock"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentBlockFactory"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_NeoField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BarGraphToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ColorToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FilterToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuestionsBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ScatterplotToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TwoColumnContainerBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"WidgetContainerBlock"}}]}}]} as unknown as DocumentNode<HomepageTemplateFragment, unknown>;
export const InvestigationChildPageTemplateFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InvestigationChildPageTemplate"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"investigations_default_Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"contentBlocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentBlockFactory"}}]}},{"kind":"Field","name":{"kind":"Name","value":"prev"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"section"},"value":{"kind":"StringValue","value":"investigations","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}}]}},{"kind":"Field","name":{"kind":"Name","value":"next"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"section"},"value":{"kind":"StringValue","value":"investigations","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}}]}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"children"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"section"},"value":{"kind":"StringValue","value":"investigations","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"StringValue","value":"default","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"investigations_default_Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasSavePoint"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BarGraphToolBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_barGraphTool_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"yAxisMin"}},{"kind":"Field","name":{"kind":"Name","value":"yAxisMax"}},{"kind":"Field","name":{"kind":"Name","value":"yAxisLabel"}},{"kind":"Field","name":{"kind":"Name","value":"xAxisLabel"}},{"kind":"Field","name":{"kind":"Name","value":"graphBars"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"graphBars_bar_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"yValue"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ColorToolBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_colorTool_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"colorToolTemplate"}},{"kind":"Field","name":{"kind":"Name","value":"readOnly"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"images_imageGroup_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FilterToolBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_filterTool_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"preSelectedColor"}},{"kind":"Field","name":{"kind":"Name","value":"readOnly"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuestionFactory"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"questions_default_Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"answerType"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuestionsBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_questionBlock_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"questionEntries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuestionFactory"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ScatterplotToolBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_scatterplotTool_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"xAxisMin"}},{"kind":"Field","name":{"kind":"Name","value":"yAxisMax"}},{"kind":"Field","name":{"kind":"Name","value":"yAxisLabel"}},{"kind":"Field","name":{"kind":"Name","value":"xAxisLabel"}},{"kind":"Field","name":{"kind":"Name","value":"scatterplotItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"scatterplotItems_item_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"xValue"}},{"kind":"Field","name":{"kind":"Name","value":"yValue"}},{"kind":"Field","name":{"kind":"Name","value":"itemLabel"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_text_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TwoColumnContainerBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_twoColumnContainer_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"childBlocks"},"name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ColorToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FilterToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BarGraphToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ScatterplotToolBlock"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WidgetContainerBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_widgetContainer_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"childBlocks"},"name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BarGraphToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ScatterplotToolBlock"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentBlockFactory"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_NeoField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BarGraphToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ColorToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FilterToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuestionsBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ScatterplotToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TwoColumnContainerBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"WidgetContainerBlock"}}]}}]} as unknown as DocumentNode<InvestigationChildPageTemplateFragment, unknown>;
export const InvestigationLandingPageTemplateFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InvestigationLandingPageTemplate"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"investigations_investigationParent_Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uri"}}]}}]}}]} as unknown as DocumentNode<InvestigationLandingPageTemplateFragment, unknown>;
export const UserFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserInterface"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]} as unknown as DocumentNode<UserFragmentFragment, unknown>;
export const AuthFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AuthFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Auth"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jwt"}},{"kind":"Field","name":{"kind":"Name","value":"jwtExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshTokenExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserInterface"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]} as unknown as DocumentNode<AuthFragmentFragment, unknown>;
export const InvestigationChildPageMetadataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"InvestigationChildPageMetadata"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"site"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uri"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entry"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"site"},"value":{"kind":"Variable","name":{"kind":"Name","value":"site"}}},{"kind":"Argument","name":{"kind":"Name","value":"uri"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uri"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<InvestigationChildPageMetadataQuery, InvestigationChildPageMetadataQueryVariables>;
export const InvestigationChildPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"InvestigationChildPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"site"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uri"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entry"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"site"},"value":{"kind":"Variable","name":{"kind":"Name","value":"site"}}},{"kind":"Argument","name":{"kind":"Name","value":"uri"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uri"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"InvestigationChildPageTemplate"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BarGraphToolBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_barGraphTool_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"yAxisMin"}},{"kind":"Field","name":{"kind":"Name","value":"yAxisMax"}},{"kind":"Field","name":{"kind":"Name","value":"yAxisLabel"}},{"kind":"Field","name":{"kind":"Name","value":"xAxisLabel"}},{"kind":"Field","name":{"kind":"Name","value":"graphBars"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"graphBars_bar_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"yValue"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ColorToolBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_colorTool_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"colorToolTemplate"}},{"kind":"Field","name":{"kind":"Name","value":"readOnly"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"images_imageGroup_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FilterToolBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_filterTool_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"preSelectedColor"}},{"kind":"Field","name":{"kind":"Name","value":"readOnly"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuestionFactory"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"questions_default_Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"answerType"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuestionsBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_questionBlock_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"questionEntries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuestionFactory"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ScatterplotToolBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_scatterplotTool_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"xAxisMin"}},{"kind":"Field","name":{"kind":"Name","value":"yAxisMax"}},{"kind":"Field","name":{"kind":"Name","value":"yAxisLabel"}},{"kind":"Field","name":{"kind":"Name","value":"xAxisLabel"}},{"kind":"Field","name":{"kind":"Name","value":"scatterplotItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"scatterplotItems_item_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"xValue"}},{"kind":"Field","name":{"kind":"Name","value":"yValue"}},{"kind":"Field","name":{"kind":"Name","value":"itemLabel"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_text_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TwoColumnContainerBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_twoColumnContainer_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"childBlocks"},"name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ColorToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FilterToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BarGraphToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ScatterplotToolBlock"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WidgetContainerBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_widgetContainer_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"childBlocks"},"name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BarGraphToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ScatterplotToolBlock"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentBlockFactory"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_NeoField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BarGraphToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ColorToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FilterToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuestionsBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ScatterplotToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TwoColumnContainerBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"WidgetContainerBlock"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InvestigationChildPageTemplate"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"investigations_default_Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"contentBlocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentBlockFactory"}}]}},{"kind":"Field","name":{"kind":"Name","value":"prev"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"section"},"value":{"kind":"StringValue","value":"investigations","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}}]}},{"kind":"Field","name":{"kind":"Name","value":"next"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"section"},"value":{"kind":"StringValue","value":"investigations","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}}]}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"children"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"section"},"value":{"kind":"StringValue","value":"investigations","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"StringValue","value":"default","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"investigations_default_Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasSavePoint"}}]}}]}}]}}]}}]} as unknown as DocumentNode<InvestigationChildPageQuery, InvestigationChildPageQueryVariables>;
export const InvestigationPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"InvestigationPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"site"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uri"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entry"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"site"},"value":{"kind":"Variable","name":{"kind":"Name","value":"site"}}},{"kind":"Argument","name":{"kind":"Name","value":"uri"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uri"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"InvestigationLandingPageTemplate"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InvestigationLandingPageTemplate"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"investigations_investigationParent_Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uri"}}]}}]}}]} as unknown as DocumentNode<InvestigationPageQuery, InvestigationPageQueryVariables>;
export const GlobalsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GlobalsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"site"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"section"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"headerNavItems"},"name":{"kind":"Name","value":"entries"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"section"},"value":{"kind":"Variable","name":{"kind":"Name","value":"section"}}},{"kind":"Argument","name":{"kind":"Name","value":"site"},"value":{"kind":"Variable","name":{"kind":"Name","value":"site"}}},{"kind":"Argument","name":{"kind":"Name","value":"level"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"siteInfo"},"name":{"kind":"Name","value":"globalSet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"site"},"value":{"kind":"Variable","name":{"kind":"Name","value":"site"}}},{"kind":"Argument","name":{"kind":"Name","value":"handle"},"value":{"kind":"StringValue","value":"siteInfo","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"siteInfo_GlobalSet"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"handle"}},{"kind":"Field","name":{"kind":"Name","value":"siteTitle"}},{"kind":"Field","name":{"kind":"Name","value":"siteDescription"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"site"},"value":{"kind":"Variable","name":{"kind":"Name","value":"site"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"groupHandle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<GlobalsQueryQuery, GlobalsQueryQueryVariables>;
export const HomepageQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HomepageQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"site"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uri"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entry"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"site"},"value":{"kind":"Variable","name":{"kind":"Name","value":"site"}}},{"kind":"Argument","name":{"kind":"Name","value":"uri"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uri"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HomepageTemplate"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BarGraphToolBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_barGraphTool_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"yAxisMin"}},{"kind":"Field","name":{"kind":"Name","value":"yAxisMax"}},{"kind":"Field","name":{"kind":"Name","value":"yAxisLabel"}},{"kind":"Field","name":{"kind":"Name","value":"xAxisLabel"}},{"kind":"Field","name":{"kind":"Name","value":"graphBars"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"graphBars_bar_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"yValue"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ColorToolBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_colorTool_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"colorToolTemplate"}},{"kind":"Field","name":{"kind":"Name","value":"readOnly"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"images_imageGroup_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FilterToolBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_filterTool_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"preSelectedColor"}},{"kind":"Field","name":{"kind":"Name","value":"readOnly"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuestionFactory"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"questions_default_Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"answerType"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuestionsBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_questionBlock_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"questionEntries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuestionFactory"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ScatterplotToolBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_scatterplotTool_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"xAxisMin"}},{"kind":"Field","name":{"kind":"Name","value":"yAxisMax"}},{"kind":"Field","name":{"kind":"Name","value":"yAxisLabel"}},{"kind":"Field","name":{"kind":"Name","value":"xAxisLabel"}},{"kind":"Field","name":{"kind":"Name","value":"scatterplotItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"scatterplotItems_item_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"xValue"}},{"kind":"Field","name":{"kind":"Name","value":"yValue"}},{"kind":"Field","name":{"kind":"Name","value":"itemLabel"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_text_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TwoColumnContainerBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_twoColumnContainer_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"childBlocks"},"name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ColorToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FilterToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BarGraphToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ScatterplotToolBlock"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WidgetContainerBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_widgetContainer_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"childBlocks"},"name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BarGraphToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ScatterplotToolBlock"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentBlockFactory"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"contentBlocks_NeoField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BarGraphToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ColorToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FilterToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuestionsBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ScatterplotToolBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TwoColumnContainerBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"WidgetContainerBlock"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HomepageTemplate"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"homepage_homepage_Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"contentBlocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentBlockFactory"}}]}}]}}]} as unknown as DocumentNode<HomepageQueryQuery, HomepageQueryQueryVariables>;
export const FacebookOauthUrlDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FacebookOauthUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"facebookOauthUrl"}}]}}]} as unknown as DocumentNode<FacebookOauthUrlQuery, FacebookOauthUrlQueryVariables>;
export const GoogleSignInStudentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"GoogleSignInStudent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"idToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"googleSignInStudents"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"idToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"idToken"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuthFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserInterface"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AuthFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Auth"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jwt"}},{"kind":"Field","name":{"kind":"Name","value":"jwtExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshTokenExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFragment"}}]}}]}}]} as unknown as DocumentNode<GoogleSignInStudentMutation, GoogleSignInStudentMutationVariables>;
export const GoogleSignInEducatorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"GoogleSignInEducator"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"idToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"googleSignInEducators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"idToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"idToken"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuthFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserInterface"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AuthFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Auth"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jwt"}},{"kind":"Field","name":{"kind":"Name","value":"jwtExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshTokenExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFragment"}}]}}]}}]} as unknown as DocumentNode<GoogleSignInEducatorMutation, GoogleSignInEducatorMutationVariables>;
export const ActivateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ActivateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<ActivateUserMutation, ActivateUserMutationVariables>;
export const ForgottenPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ForgottenPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"forgottenPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}]}}]} as unknown as DocumentNode<ForgottenPasswordMutation, ForgottenPasswordMutationVariables>;
export const SetPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<SetPasswordMutation, SetPasswordMutationVariables>;
export const AuthenticateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Authenticate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authenticate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuthFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserInterface"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AuthFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Auth"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jwt"}},{"kind":"Field","name":{"kind":"Name","value":"jwtExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshTokenExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFragment"}}]}}]}}]} as unknown as DocumentNode<AuthenticateMutation, AuthenticateMutationVariables>;
export const FacebookSignInStudentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"FacebookSignInStudent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"facebookSignInStudents"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuthFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserInterface"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AuthFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Auth"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jwt"}},{"kind":"Field","name":{"kind":"Name","value":"jwtExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshTokenExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFragment"}}]}}]}}]} as unknown as DocumentNode<FacebookSignInStudentMutation, FacebookSignInStudentMutationVariables>;
export const FacebookSignInEducatorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"FacebookSignInEducator"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"facebookSignInEducators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuthFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserInterface"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AuthFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Auth"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jwt"}},{"kind":"Field","name":{"kind":"Name","value":"jwtExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshTokenExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFragment"}}]}}]}}]} as unknown as DocumentNode<FacebookSignInEducatorMutation, FacebookSignInEducatorMutationVariables>;
export const RegisterEducatorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RegisterEducator"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fullName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"registerEducators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"fullName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fullName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuthFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserInterface"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AuthFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Auth"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jwt"}},{"kind":"Field","name":{"kind":"Name","value":"jwtExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshTokenExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFragment"}}]}}]}}]} as unknown as DocumentNode<RegisterEducatorMutation, RegisterEducatorMutationVariables>;
export const RegisterStudentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RegisterStudent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fullName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"registerStudents"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"fullName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fullName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuthFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserInterface"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AuthFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Auth"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jwt"}},{"kind":"Field","name":{"kind":"Name","value":"jwtExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshTokenExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFragment"}}]}}]}}]} as unknown as DocumentNode<RegisterStudentMutation, RegisterStudentMutationVariables>;