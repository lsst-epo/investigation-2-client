import { Container } from "@rubin-epo/epo-react-lib";
import { graphql, useFragment, FragmentType } from "@/gql/public-schema";
import { BaseContentBlockProps } from "@/components/shapes";
import { FunctionComponent } from "react";
import * as Styled from "./styles";

const Fragment = graphql(`
  fragment TextBlock on contentBlocks_text_BlockType {
    text
  }
`);

interface TextProps extends BaseContentBlockProps {
  data: FragmentType<typeof Fragment>;
}

const TextContentBlock: FunctionComponent<TextProps> = (props) => {
  const data = useFragment(Fragment, props.data);

  if (!data?.text) return null;

  const isOpen = props.isOpen ?? false;

  return (
    <Container
      bgColor={isOpen ? "transparent" : undefined}
      paddingSize={isOpen ? "none" : "medium"}
      width="regular"
    >
      <Styled.TextContent
        dangerouslySetInnerHTML={{ __html: data.text }}
        $darkMode={isOpen}
      />
    </Container>
  );
};

TextContentBlock.displayName = "ContentBlock.Text";

export default TextContentBlock;
