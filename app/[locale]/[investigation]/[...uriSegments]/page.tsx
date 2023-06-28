import { createClient, fetchExchange } from "@urql/core";
import { graphql } from "@/gql";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import {
  getAuthCookies,
  getUserFromJwt,
} from "@/components/auth/serverHelpers";
import SignOut from "@/components/auth/buttons/SignOut";

export const revalidate = 60;

export async function generateMetadata({
  params: { locale, uriSegments },
}: {
  params: { locale: string; uriSegments: string[] };
}): Promise<Metadata> {
  const site = locale === "en" ? "default" : locale;
  // add _es to property names if site is not English
  const uri: string = uriSegments.join("/");

  const client = createClient({
    url: process.env.NEXT_PUBLIC_API_URL as string,
    exchanges: [fetchExchange],
  });

  const data = await client
    .query(MetadataQuery, {
      site: [site],
      uri: [uri],
    })
    .toPromise()
    .then((result) => {
      return result.data;
    });

  const title = data?.entry?.title;

  return title ? { title, twitter: { title } } : {};
}

const UriSegments: (props: {
  params: { locale: string; investigation: string; uriSegments: string[] };
}) => Promise<JSX.Element> = async ({
  params: { locale, investigation, uriSegments },
  // previewData
}) => {
  const site = locale === "en" ? "default" : locale;
  // // add _es to property names if site is not English
  const uri: string = uriSegments.join("/");

  const client = createClient({
    url: process.env.NEXT_PUBLIC_API_URL as string,
    exchanges: [fetchExchange],
  });

  const data = await client
    .query(Query, {
      site: [site],
      uri: [uri],
    })
    .toPromise()
    .then((result) => {
      return result.data;
    });

  // return data?.entry ? <TemplateFactory data={data.entry} /> : notFound();

  const { jwt, refreshTokenExpiresAt, status } = getAuthCookies();

  // if no JWT or stored refresh token has expired, redirect to investigation landing page
  if (!jwt || !refreshTokenExpiresAt || Date.now() > refreshTokenExpiresAt)
    redirect(`/${investigation}`);

  const user = getUserFromJwt(jwt);

  return (
    <>
      <h1>This is an authorized route</h1>
      <p>User: {JSON.stringify(user)}</p>
      {status && <p>Status: {status}</p>}
      {/* @ts-expect-error Server Component */}
      <SignOut redirectTo={`/${investigation}`} />
    </>
  );
};

export default UriSegments;

const MetadataQuery = graphql(`
  query UriSegmentsMetadata($site: [String], $uri: [String]) {
    entry(site: $site, uri: $uri) {
      title
    }
  }
`);

const Query = graphql(`
  query UriSegmentsQuery($site: [String], $uri: [String]) {
    entry(site: $site, uri: $uri) {
      ...TemplateFactory
    }
  }
`);
