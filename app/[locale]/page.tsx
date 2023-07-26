import { createClient, fetchExchange } from "@urql/core";
import { graphql } from "@/gql";
import { RootLayoutParams } from "./layout";
import HomePageTemplate from "@/templates/HomePage";
import { notFound } from "next/navigation";
import AuthDialogs from "@/components/auth/AuthDialogs/AuthDialogs";
import SignOut from "@/components/auth/buttons/SignOut";
import {
  getAuthCookies,
  getUserFromJwt,
} from "@/components/auth/serverHelpers";

const CRAFT_HOMEPAGE_URI = "__home__";

interface HomePageProps {
  params: RootLayoutParams;
  previewData: any;
}

export const revalidate = 60;

const HomePage: (props: HomePageProps) => Promise<JSX.Element> = async ({
  params: { locale },
  previewData,
}) => {
  const site = locale === "en" ? "default" : locale;

  const client = createClient({
    url: process.env.NEXT_PUBLIC_API_URL as string,
    exchanges: [fetchExchange],
  });

  const data = await client
    .query(Query, {
      site: [site],
      uri: [CRAFT_HOMEPAGE_URI],
    })
    .toPromise()
    .then((result) => {
      return result.data;
    });

  const { jwt, status } = getAuthCookies();
  const user = getUserFromJwt(jwt);

  return data?.entry?.__typename === "homepage_homepage_Entry" ? (
    <HomePageTemplate data={data.entry}>
      {user && (
        <>
          <p>User: {JSON.stringify(user)}</p>
          {status && <p>Status: {status}</p>}
          {/* @ts-expect-error Server Component */}
          <SignOut redirectTo={"/"} />
        </>
      )}
      <AuthDialogs isAuthenticated={!!jwt} />
    </HomePageTemplate>
  ) : (
    notFound()
  );
};

export default HomePage;

const Query = graphql(`
  query HomepageQuery($site: [String], $uri: [String]) {
    entry(site: $site, uri: $uri) {
      __typename
      ...HomepageTemplate
    }
  }
`);
