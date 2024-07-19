import styled from "styled-components";
import BaseFigure from "@rubin-epo/epo-react-lib/Figure";
import BaseExpandContract from "@/atomic/ExpandContract/ExpandContract";

export const Container = styled.section`
  --target-height: 0.75;
  --figure-ui-size: calc(var(--content-gap) * 2);
  --figure-max-height: calc(
    calc(100vh - var(--global-ui-height) - var(--figure-ui-size)) *
      var(--image-aspect-ratio) * var(--target-height)
  );
  --intrinsic-width: calc(var(--figure-ui-size) + var(--image-width));
  --figure-width: min(var(--intrinsic-width), var(--figure-max-height));

  display: flex;
  justify-content: center;
  width: 100%;

  &[data-modal-open="true"] {
    --target-height: 1;
    --figure-ui-size: 0px;
  }
`;

export const Figure = styled(BaseFigure)`
  position: relative;
  padding: var(--content-gap, 0);
  width: var(--figure-width);
  max-width: 100%;

  &[data-layout="horizontal"] {
    --expand-contract-left: calc(var(--content-gap) * 1.25);
    --expand-contract-right: auto;

    --intrinsic-width: calc(
      var(--figure-ui-size) + calc(var(--image-width) * 2)
    );
  }
`;

export const ExpandContract = styled(BaseExpandContract)`
  --expand-contract-offset: calc(var(--content-gap) * 1.25);

  position: absolute !important;
  top: var(--expand-contract-offset);
  right: var(--expand-contract-right, var(--expand-contract-offset));
  left: var(--expand-contract-left, auto);
`;
