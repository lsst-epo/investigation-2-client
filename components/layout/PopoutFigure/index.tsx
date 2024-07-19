"use client";
import { FunctionComponent, PropsWithChildren, useRef } from "react";
import PopoutModal from "@/layout/Modal/PopoutModal";
import * as Styled from "./styles";
import useMatchesMediaQuery from "@/hooks/useMatchesMediaQuery";

interface PopoutFigureProps {
  caption?: string;
  layout?: "horizontal" | "vertical";
  sources?: Array<{ mediaCondition?: string; width: number; height: number }>;
  width: number;
  height: number;
}

const PopoutFigure: FunctionComponent<PropsWithChildren<PopoutFigureProps>> = ({
  children,
  caption,
  width: defaultWidth,
  height: defaultHeight,
  sources = [],
  layout = "vertical",
}) => {
  const mediaQueries = sources
    .map(({ mediaCondition }) => mediaCondition)
    .filter((condition): condition is string => !!condition);
  const matchedMedia = useMatchesMediaQuery(mediaQueries);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const { width = defaultWidth, height = defaultHeight } =
    sources.find(
      ({ mediaCondition }) =>
        mediaCondition && matchedMedia.includes(mediaCondition)
    ) || {};

  const onCloseCallback = () => {
    buttonRef.current && buttonRef.current.focus();
  };

  return (
    <PopoutModal {...{ onCloseCallback }}>
      {({ isOpen, openModal }) => (
        <Styled.Container
          data-modal-open={isOpen}
          style={{
            "--image-aspect-ratio": width / height,
            "--image-width": `${width}px`,
          }}
        >
          <Styled.Figure {...{ caption, layout }} withBackground={!isOpen}>
            {children}
            {!isOpen && (
              <Styled.ExpandContract
                ref={buttonRef}
                onToggle={openModal}
                isOpen={isOpen}
              />
            )}
          </Styled.Figure>
        </Styled.Container>
      )}
    </PopoutModal>
  );
};

PopoutFigure.displayName = "Layout.PopoutFigure";

export default PopoutFigure;
