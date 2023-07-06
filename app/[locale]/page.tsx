import { RootLayoutParams } from "./layout";
import { getEntryDataByUri } from "@/api/entry";
import HomePageTemplate from "@/templates/HomePage";
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

async function getEntryData(uri: string, site: string, previewToken: any) {
  return await getEntryDataByUri(uri, site, previewToken);
}

export const revalidate = 60;

const HomePage: (props: HomePageProps) => Promise<JSX.Element> = async ({
  params: { locale },
  previewData,
}) => {
  const site = locale === "en" ? "default" : locale;

  const entryData = await getEntryData(
    CRAFT_HOMEPAGE_URI,
    site,
    previewData?.previewToken
  );

  const { jwt, status } = getAuthCookies();
  const user = getUserFromJwt(jwt);

  return (
    <HomePageTemplate data={entryData}>
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
  );
};

export default HomePage;
