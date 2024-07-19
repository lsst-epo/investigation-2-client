"use client";
import { FunctionComponent, ReactNode, useId, useRef, useState } from "react";
import { useFocusTrap, useKeyDownEvent } from "@/hooks";
import screenfull from "screenfull";
import * as Modal from "@/layout/Modal";

type ModalChild = (props: {
  openModal: () => void;
  closeModal: () => void;
  isOpen: boolean;
}) => ReactNode;

interface Props {
  onOpenCallback?: () => void;
  onCloseCallback?: () => void;
  children: ReactNode | ModalChild;
}

const PopoutModal: FunctionComponent<Props> = ({
  onCloseCallback,
  onOpenCallback,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const id = useId();

  const fullscreenListener = () => {
    if (!screenfull.isFullscreen) {
      setIsOpen(false);
      onCloseCallback && onCloseCallback();
    }
  };

  const openModal = () => {
    if (screenfull.isEnabled && modalRef.current) {
      screenfull
        .request(modalRef.current, { navigationUI: "hide" })
        .then(() => {
          screenfull.on("change", fullscreenListener);
          setIsOpen(true);
          onOpenCallback && onOpenCallback();
        });
    } else {
      setIsOpen(true);
      onOpenCallback && onOpenCallback();
    }
  };

  const closeModal = () => {
    screenfull.off("change", fullscreenListener);
    if (screenfull.isFullscreen && modalRef.current) {
      screenfull.exit().then(() => {
        setIsOpen(false);
        onCloseCallback && onCloseCallback();
      });
    } else {
      setIsOpen(false);
      onCloseCallback && onCloseCallback();
    }
  };

  const handleKeyDown = ({ key }: { key: string }) => {
    if (!isOpen) return;
    if (key === "Escape") {
      closeModal && closeModal();
    }
  };

  useFocusTrap(modalRef, isOpen);
  useKeyDownEvent(handleKeyDown);

  return (
    <Modal.Base ref={modalRef} {...{ isOpen, closeModal, id }}>
      {isOpen && (
        <Modal.Header contentId={`${id}-content`} {...{ closeModal, isOpen }} />
      )}
      <Modal.ComponentContainer>
        {typeof children === "function"
          ? children({ openModal, closeModal, isOpen })
          : children}
      </Modal.ComponentContainer>
    </Modal.Base>
  );
};

PopoutModal.displayName = "Layout.Modal.Popout";

export default PopoutModal;
