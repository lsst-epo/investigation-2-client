import { PropsWithChildren } from "react";
import { RootLayoutParams } from "../../layout";
import { InvestigationParams } from "../layout";
import { graphql } from "@/gql/public-schema";
import { queryAPI } from "@/lib/fetch";
import { ProgressProvider } from "@/contexts/Progress";
import { notFound } from "next/navigation";
import Header from "@/page/Header/Header";
import Pager from "@/page/Pager";
import * as Styled from "./styles";

export interface UriSegmentsParams {
  uriSegments: string[];
}

export interface UriSegmentsProps {
  params: RootLayoutParams & InvestigationParams & UriSegmentsParams;
}

const Query = graphql(`
  query InvestigationChildPage($site: [String], $uri: [String]) {
    entry(site: $site, uri: $uri) {
      ...InvestigationChildPageTemplate
      ...InvestigationSectionBreakTemplate
    }
  }
`);

const UriSegmentsLayout: (
  props: PropsWithChildren<UriSegmentsProps>
) => Promise<JSX.Element> = async ({
  children,
  params: { locale, investigation, uriSegments },
}) => {
  const site = locale === "en" ? "default" : locale;
  const uri = `${investigation}/${uriSegments.join("/")}`;

  const { data } = await queryAPI({
    query: Query,
    variables: {
      site: [site],
      uri: [uri],
    },
  });

  const { __typename } = data?.entry || {};

  const isValidType =
    __typename === "investigations_default_Entry" ||
    __typename === "investigations_investigationSectionBreakChild_Entry";

  if (!isValidType) {
    notFound();
  }

  const { id, prev, next } = data?.entry || {};

  const prevUrl = prev?.uri ? `/${prev.uri}` : "#";
  const nextUrl = next?.uri ? `/${next.uri}` : "#";

  return (
    <ProgressProvider currentPageId={id}>
      <Header />
      <Styled.Main>{children}</Styled.Main>
      <Pager leftLink={prevUrl} rightLink={nextUrl} />
    </ProgressProvider>
  );
};

export default UriSegmentsLayout;
