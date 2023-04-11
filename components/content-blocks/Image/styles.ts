import styled, { css } from "styled-components";

import {
  Figure as BaseFigure,
  Image as BaseImage,
  fluidScale,
} from "@rubin-epo/epo-react-lib";
import BaseExpandContract from "@/atomic/ExpandContract/ExpandContract";

interface LayoutProp {
  $layout: "vertical" | "horizontal";
}

export const Figure = styled(BaseFigure)<LayoutProp & { $darkMode: boolean }>`
  ${({ $layout, $darkMode }) => css`
    ${$darkMode &&
    css`
      > figcaption {
        color: var(--white, #fff);
        padding-block: var(--image-content-block-padding);
        padding-inline: var(--image-content-block-padding);
      }
    `}
    ${$layout === "horizontal" &&
    css`
      > figcaption {
        margin: 0;
        padding: 0;
      }
    `}
  padding: ${$darkMode ? 0 : "var(--image-content-block-padding)"};
  `}

  &:after {
    content: "";
    visibility: hidden;
    display: block;
    height: 0;
    clear: both;
  }
`;

export const FigureWrapper = styled.div`
  --image-content-block-padding: ${fluidScale("20px", "10px")};
  position: relative;
`;

export const Image = styled(BaseImage)<LayoutProp>`
  ${({ $layout }) =>
    $layout === "vertical"
      ? null
      : css`
          @supports (float: inline-start) {
            float: inline-start;
          }

          float: left;
          margin-inline-end: var(--image-content-block-padding);
          max-inline-size: 50%;
        `}
`;

export const ExpandContract = styled(BaseExpandContract)<LayoutProp>`
  --expand-contract-offset: calc(var(--image-content-block-padding) * 1.25);
  position: absolute;
  top: var(--expand-contract-offset);

  ${({ $layout }) =>
    $layout === "vertical"
      ? css`
          right: var(--expand-contract-offset);
        `
      : css`
          left: var(--expand-contract-offset);
        `}
`;
