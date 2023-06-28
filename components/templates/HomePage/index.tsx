"use client";
import PropTypes from "prop-types";
import { graphql, useFragment, FragmentType } from "@/gql";
import Body from "@/global/Body";
import ContentBlockFactory from "@/components/factories/ContentBlockFactory";
import { Container } from "@rubin-epo/epo-react-lib";

export default function HomePage(props: {
  data: FragmentType<typeof Fragment>;
  children?: React.ReactNode;
}) {
  const data = useFragment(Fragment, props.data);

  if (!data) return null;

  return (
    <Body>
      <Container>
        <h1>{data.title}</h1>
        {props.children}
        {data.contentBlocks?.map(
          (block, i) => block && <ContentBlockFactory key={i} data={block} />
        )}
      </Container>
    </Body>
  );
}

HomePage.displayName = "Template.HomePage";

HomePage.propTypes = {
  data: PropTypes.object,
};

const Fragment = graphql(`
  fragment HomepageTemplate on homepage_homepage_Entry {
    id
    title
    contentBlocks {
      ...ContentBlockFactory
    }
  }
`);
