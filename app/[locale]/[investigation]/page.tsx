import { notFound } from "next/navigation";
import { graphql } from "@/gql/public-schema";
import Link from "next/link";
import { InvestigationLandingProps } from "./layout";
import SignOut from "@/components/auth/buttons/SignOut";
import Button from "@rubin-epo/epo-react-lib/Button";
import {
  getAuthCookies,
  getUserFromJwt,
} from "@/components/auth/serverHelpers";
import { queryAPI } from "@/lib/fetch";
import InvestigationLandingPageTemplate from "@/components/templates/InvestigationLandingPage";

const Query = graphql(`
  query InvestigationPage($site: [String], $uri: [String]) {
    entry(site: $site, uri: $uri) {
      __typename
      ...InvestigationLandingPageTemplate
    }
  }
`);

const InvestigationLanding: (
  props: InvestigationLandingProps
) => Promise<JSX.Element> = async ({ params: { locale, investigation } }) => {
  const site = locale === "en" ? "default" : locale;

  const { data } = await queryAPI({
    query: Query,
    variables: {
      site: [site],
      uri: [investigation],
    },
  });

  if (data?.entry?.__typename !== "investigations_investigationParent_Entry") {
    notFound();
  }

  const { craftToken, craftUserStatus } = await getAuthCookies();
  const user = getUserFromJwt(craftToken);

  return (
    <InvestigationLandingPageTemplate
      data={data.entry}
      investigation={investigation}
      site={site}
    >
      {/* <AuthDialogs isAuthenticated={!!craftToken} /> */}
      <Button as={Link} href={`/auth/login?returnTo=${investigation}`}>
        Log in
      </Button>
      {user && (
        <>
          <p>User: {JSON.stringify(user)}</p>
          {craftUserStatus && <p>Status: {craftUserStatus}</p>}
          {/* @ts-expect-error Server Component */}
          <SignOut redirectTo={`/${investigation}`} />
        </>
      )}
    </InvestigationLandingPageTemplate>
  );
};

export default InvestigationLanding;
