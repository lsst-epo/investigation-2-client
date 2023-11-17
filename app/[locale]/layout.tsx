import { PropsWithChildren } from "react";
import "focus-visible";
import SourceSansPro from "@/lib/fonts";
import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyles from "@/lib/styles";
import UIDReset from "@/lib/reset";
import { fallbackLng } from "@/lib/i18n/settings";
import { queryAPI } from "@/lib/fetch";
import "@/styles/styles.scss";
import { GlobalDataProvider, GlobalData } from "@/contexts/GlobalData";
import { graphql } from "@/gql/public-schema";
import { Metadata } from "next";
import Body from "@/page/Body";
import I18NextClientProvider from "@/contexts/i18next";

export interface RootLayoutParams {
  locale: string;
}

interface RootLayoutProps {
  params: RootLayoutParams;
}

const GlobalsQuery = graphql(`
  query GlobalsQuery($site: [String], $section: [String]) {
    headerNavItems: entries(section: $section, site: $site, level: 1) {
      id
      title
      uri
      children {
        id
        title
        uri
      }
    }
    siteInfo: globalSet(site: $site, handle: "siteInfo") {
      ... on siteInfo_GlobalSet {
        language
        name
        handle
        siteTitle
        siteDescription
      }
    }
    categories(site: $site) {
      id
      slug
      groupHandle
      title
    }
  }
`);

const getGlobals = async (locale = "en"): Promise<GlobalData> => {
  const site: string = locale === "en" ? "default" : locale;

  const { data } = await queryAPI({
    query: GlobalsQuery,
    variables: {
      site: [site],
      section: ["pages"],
    },
  });

  return {
    categories: data?.categories,
    headerNavItems: data?.headerNavItems,
    siteInfo: data?.siteInfo,
    rootPage: [],
    localeInfo: {
      locale: site,
      language: locale,
      localized: [],
    },
  };
};

export async function generateMetadata({
  params: { locale },
}: RootLayoutProps): Promise<Metadata> {
  const globalData = await getGlobals(locale);
  const description = globalData.siteInfo?.siteDescription;

  return { description };
}

const RootLayout: (
  props: PropsWithChildren<RootLayoutProps>
) => Promise<JSX.Element> = async ({
  params: { locale = fallbackLng },
  children,
}) => {
  console.log("RootLayout");
  const globalData = await getGlobals(locale);

  return (
    <html lang={locale}>
      <head></head>
      <Body className={SourceSansPro.variable}>
        <UIDReset>
          <StyledComponentsRegistry>
            <GlobalStyles includeFonts={false} />
            <I18NextClientProvider locale={locale}>
              <GlobalDataProvider data={globalData}>
                {children}
              </GlobalDataProvider>
            </I18NextClientProvider>
          </StyledComponentsRegistry>
        </UIDReset>
      </Body>
    </html>
  );
};

export default RootLayout;
