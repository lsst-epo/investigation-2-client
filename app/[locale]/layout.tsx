import { PropsWithChildren } from "react";
import "focus-visible";
import SourceSansPro from "@/lib/fonts";
import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyles from "@/lib/styles";
import UIDReset from "@/lib/reset";
import { fallbackLng } from "@/lib/i18n/settings";
import "@/styles/styles.scss";
import { getGlobalData } from "@/api/global";
import { GlobalDataProvider, GlobalData } from "@/contexts/GlobalData";
import { Metadata } from "next";
import Body from "@/global/Body";
import Header from "@/global/Header";

export interface RootLayoutParams {
  locale: string;
}

interface RootLayoutProps {
  params: RootLayoutParams;
}

const getGlobals = async (locale = "en"): Promise<GlobalData> => {
  const site: string = locale === "en" ? "default" : locale;
  // add _es to property names if site is not English
  const nonEng = site !== "default";

  const data = await getGlobalData();

  const globals = data[`globals${nonEng ? `_${locale}` : ""}`].reduce(
    (obj: any, item: any) =>
      Object.assign(obj, Object.keys(item).length && { [item.handle]: item }),
    {}
  );

  return {
    categories: data?.[`allCategories${nonEng ? `_${locale}` : ""}`] || [],
    headerNavItems: data?.[`pageTree${nonEng ? `_${locale}` : ""}`] || [],
    siteInfo: globals?.siteInfo || {},
    rootPages: [],
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
  const {
    siteInfo: { siteDescription },
  } = await getGlobals(locale);

  return { description: siteDescription };
}

const RootLayout: (
  props: PropsWithChildren<RootLayoutProps>
) => Promise<JSX.Element> = async ({
  params: { locale = fallbackLng },
  children,
}) => {
  const globalData = await getGlobals(locale);

  return (
    <html lang={locale}>
      <head></head>
      <body className={SourceSansPro.variable}>
        <UIDReset>
          <StyledComponentsRegistry>
            <GlobalStyles includeFonts={false} />
            <GlobalDataProvider data={globalData}>
              <Body>
                <Header />
                {children}
              </Body>
            </GlobalDataProvider>
          </StyledComponentsRegistry>
        </UIDReset>
      </body>
    </html>
  );
};

export default RootLayout;
