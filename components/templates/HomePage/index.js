"use client";
import PropTypes from "prop-types";
import ContentBlockFactory from "@/components/factories/ContentBlockFactory";
import { Container } from "@rubin-epo/epo-react-lib";
export default function HomePage({ data: { id, title, contentBlocks = [] } }) {
  return (
    <Container>
      <h1>{title}</h1>
      {[...contentBlocks].map((block) => {
        if (!block.id || !block.typeHandle) return null;
        return (
          <ContentBlockFactory
            key={block.id}
            type={block.typeHandle}
            data={block}
            pageId={id}
          />
        );
      })}
    </Container>
  );
}

HomePage.displayName = "Template.HomePage";

HomePage.propTypes = {
  data: PropTypes.object,
};
