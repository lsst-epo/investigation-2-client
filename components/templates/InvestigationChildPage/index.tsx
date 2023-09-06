"use client";
import { FunctionComponent } from "react";
import { graphql, useFragment, FragmentType } from "@/gql/public-schema";
import ContentBlockFactory from "@/components/factories/ContentBlockFactory";
import Header from "@/components/page/Header/Header";
import HeaderProgress from "@/components/page/HeaderProgress";
import { useTranslation } from "@/lib/i18n/client";
import SaveForm from "@/components/answers/SaveForm/SaveForm";
import { getUserFromJwt } from "@/components/auth/serverHelpers";
import Pager from "@/components/layout/Pager";
import * as Styled from "./styles";

type ProgressSections = React.ComponentPropsWithoutRef<
  typeof HeaderProgress
>["sections"];

const InvestigationChildPage: FunctionComponent<{
  data: FragmentType<typeof Fragment>;
  user?: ReturnType<typeof getUserFromJwt>;
  children?: React.ReactNode;
}> = (props) => {
  const { t } = useTranslation();
  const data = useFragment(Fragment, props.data);

  if (!data?.title) return null;

  const prevUrl = data.prev?.uri ? `/${data.prev.uri}` : undefined;
  const nextUrl = data.next?.uri ? `/${data.next.uri}` : undefined;

  const childPages = data.parent?.children ?? [];

  // filter down to just investigation child entries
  // (gql query already does this, but need to make TS happy)
  const isInvestigation = (
    page: (typeof childPages)[number]
  ): page is Extract<
    (typeof childPages)[number],
    { __typename: "investigations_default_Entry" }
  > => page.__typename === "investigations_default_Entry";

  const siblings = childPages.filter(isInvestigation);

  const currentPage = siblings.findIndex((entry) => entry.id === data.id) + 1;

  function buildProgressSections(): ProgressSections {
    if (!siblings.length) return [];

    // create empty arrays to fill with sections based on save points
    const sectionBreaks = siblings.filter((entry) => entry.hasSavePoint);
    const sections: [number | undefined][] = Array.from(
      Array(sectionBreaks.length + 1),
      () => [undefined]
    );

    let currentIndex = 0;

    // go through siblings and push to section arrays;
    // advance to next array when a save point is reached
    // @returns e.g. [[undefined, 0, 1], [undefined, 0, 1, 2]]
    siblings.forEach((entry, index) => {
      if (!entry?.title) return;

      sections[currentIndex].push(index + 1);

      if (entry.hasSavePoint) {
        currentIndex++;
      }
    });

    const mapped = sections
      // filter out `undefined` from arrays
      .filter((section) => section.some((el) => typeof el === "number"))
      // create final section object
      .map((section, index) => {
        return {
          name: `Section ${index + 1}`,
          order: index + 1,
          pages: section.filter(
            (num): num is number => typeof num === "number"
          ),
        };
      });

    return mapped;
  }

  const progressSections = buildProgressSections();

  return (
    <>
      <Header />
      {!!progressSections.length && (
        <HeaderProgress
          currentPage={currentPage}
          totalPages={siblings.length}
          sections={progressSections}
        />
      )}
      <Styled.ContentBlocks paddingSize="none">
        <h1>{data.title}</h1>
        {props.children}
        {data.contentBlocks?.map(
          (block, i) => block && <ContentBlockFactory key={i} data={block} />
        )}
        {data.hasSavePoint && props.user && (
          <SaveForm investigationId={data.parent?.id} user={props.user} />
        )}
      </Styled.ContentBlocks>
      <Pager
        leftLink={prevUrl}
        isLeftDisabled={
          data.prev?.__typename !== "investigations_default_Entry"
        }
        rightLink={nextUrl}
        isRightDisabled={
          data.next?.__typename !== "investigations_default_Entry"
        }
        totalPages={siblings.length}
        currentPage={currentPage}
      />
    </>
  );
};

InvestigationChildPage.displayName = "Template.InvestigationChildPage";

export default InvestigationChildPage;

const Fragment = graphql(`
  fragment InvestigationChildPageTemplate on investigations_default_Entry {
    id
    title
    contentBlocks {
      ...ContentBlockFactory
    }
    hasSavePoint
    prev(section: "investigations") {
      __typename
      uri
    }
    next(section: "investigations") {
      __typename
      uri
    }
    parent {
      id
      children(section: "investigations", type: "default") {
        __typename
        id
        title
        ... on investigations_default_Entry {
          hasSavePoint
        }
      }
    }
  }
`);
