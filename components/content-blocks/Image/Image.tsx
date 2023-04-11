import {
  BaseContentBlockProps,
  Image as ImageShape,
} from "@/components/shapes";
import { FunctionComponent } from "react";
import * as Styled from "./styles";
import withModal from "@/components/hoc/withModal";
import { ModalInnerProps } from "@/components/hoc/withModal/withModal";

interface ImageContentBlockProps extends BaseContentBlockProps {
  image: ImageShape;
  caption?: string;
  layout?: "horizontal" | "vertical";
}

const ImageContentBlock: FunctionComponent<
  ImageContentBlockProps & ModalInnerProps
> = ({ image, caption, layout = "vertical", isOpen, openModal }) => {
  const finalLayout = isOpen ? "vertical" : layout;
  return (
    <Styled.FigureWrapper>
      {!isOpen && (
        <Styled.ExpandContract
          onToggle={openModal}
          isOpen={isOpen}
          $layout={finalLayout}
        />
      )}
      <Styled.Figure
        caption={caption}
        $layout={finalLayout}
        $darkMode={isOpen}
        withBackground={!isOpen}
      >
        <Styled.Image image={image} $layout={finalLayout} />
      </Styled.Figure>
    </Styled.FigureWrapper>
  );
};

ImageContentBlock.displayName = "ContentBlock.Image";

export default withModal(ImageContentBlock);
