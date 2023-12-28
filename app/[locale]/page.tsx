import { graphql } from "@/gql/public-schema";
import { draftMode } from 'next/headers';
import { RootLayoutParams } from "./layout";
import HomePageTemplate from "@/templates/HomePage";
import { notFound } from "next/navigation";
import AuthDialogs from "@/components/auth/AuthDialogs/AuthDialogs";
import SignOut from "@/components/auth/buttons/SignOut";
import {
  getAuthCookies,
  getUserFromJwt,
} from "@/components/auth/serverHelpers";
import { queryAPI } from "@/lib/fetch";
import { getSite } from "@/helpers";

const CRAFT_HOMEPAGE_URI = "__home__";

interface HomePageProps {
  params: RootLayoutParams;
  searchParams: any;
}

export const revalidate = 60;

const Query = graphql(`
  query HomepageQuery($site: [String], $uri: [String]) {
    entry(site: $site, uri: $uri) {
      __typename
      ...HomepageTemplate
    }
  }
`);

const HomePage: (props: HomePageProps) => Promise<JSX.Element> = async ({
  params: { locale },
  searchParams,
}) => {
  const site = getSite(locale);
  const { preview: previewToken } = searchParams;
  const { isEnabled: isPreview } = draftMode();

  const { data } = await queryAPI({
    query: Query,
    variables: {
      site: [site],
      uri: [CRAFT_HOMEPAGE_URI],
    },
    previewToken: isPreview && previewToken,
  });

  const { craftToken } = await getAuthCookies();
  const user = getUserFromJwt(craftToken);

  return data?.entry?.__typename === "homepage_homepage_Entry" ? (
    <HomePageTemplate data={data.entry}>
      {user && <SignOut redirectTo={"/"} />}
      <AuthDialogs isAuthenticated={!!craftToken} />
    </HomePageTemplate>
  ) : (
    notFound()
  );
};

export default HomePage;
