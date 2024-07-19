import { FunctionComponent } from "react";
import { graphql, useFragment, FragmentType } from "@/gql/public-schema";
import { useTranslation } from "@/lib/i18n";
import Picture from "@rubin-epo/epo-react-lib/Picture";
import { BaseContentBlockProps } from "@/components/shapes";
import { damAssetToImage, damAssetToAlternateSource } from "@/helpers/assets";
import { RawImage } from "@/types/image";
import { captionShaper } from "@/helpers";
import PopoutFigure from "@/components/layout/PopoutFigure";

const Fragment = graphql(`
  fragment ImageBlock on contentBlocks_image_BlockType {
    id
    caption
    layout
    desktopImage: image {
      url {
        directUrlPreview
        directUrlOriginal
      }
      width
      height
      metadata: additional {
        AltTextEN
        AltTextES
        CaptionEN
        CaptionES
        Credit
      }
    }
    mobileImage {
      url {
        directUrlPreview
        directUrlOriginal
      }
      width
      height
      metadata: additional {
        AltTextEN
        AltTextES
        CaptionEN
        CaptionES
        Credit
      }
    }
  }
`);

interface ImageContentBlockProps extends BaseContentBlockProps {
  data: FragmentType<typeof Fragment>;
  site: string;
}

/**
 * Image content block with modal and two layout options.
 */
const ImageContentBlock: FunctionComponent<ImageContentBlockProps> = async ({
  data,
  site,
  isOpen,
  locale,
}) => {
  const { t } = await useTranslation(locale, "translation");
  const {
    layout,
    desktopImage,
    mobileImage,
    caption = "",
  } = useFragment(Fragment, data);
  const finalLayout = isOpen ? "vertical" : layout;

  if (desktopImage === null || desktopImage[0] === null) return;

  const image = damAssetToImage(site, desktopImage[0] as RawImage);
  const sources = mobileImage?.map(
    (image) => image && damAssetToAlternateSource(site, image)
  );

  if (!image) return null;

  const { caption: fallback, credit, width, height } = image;

  return (
    <PopoutFigure
      layout={finalLayout}
      caption={captionShaper({
        caption,
        fallback,
        credit:
          credit &&
          ` ${t("translation:image.credit", {
            credit,
            interpolation: { escapeValue: false },
          })}`,
      })}
      {...{ width, height, sources }}
    >
      <Picture {...{ image, sources }} />
    </PopoutFigure>
  );
};

ImageContentBlock.displayName = "ContentBlock.Image";

export default ImageContentBlock;
