"use client";
import {
  FunctionComponent,
  PropsWithChildren,
  useCallback,
  useRef,
} from "react";
import { useRouter } from "next/navigation";
import * as Modal from "@/layout/Modal";

interface RoutedModalProps {
  title?: string;
  onDismiss?: () => void;
}

/**
 * This modal differs from others that it uses the app router
 * to close the modal. It should be used as a child of server
 * components that open an intercepted route in a modal.
 *
 * This modal is always open because it lives at a dedicated
 * route and is not controlled by app state.
 */
const RoutedModal: FunctionComponent<PropsWithChildren<RoutedModalProps>> = ({
  title,
  children,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const titleId = "referenceModalTitle";
  const contentId = "referenceModalContent";

  return (
    <Modal.Base
      ref={modalRef}
      closeModal={onDismiss}
      id={contentId}
      labelledById={titleId}
      isOpen
    >
      <Modal.Header
        isOpen
        closeModal={onDismiss}
        {...{ title, titleId, contentId }}
      />
      <Modal.ComponentContainer>{children}</Modal.ComponentContainer>
    </Modal.Base>
  );
};

RoutedModal.displayName = "Layout.RoutedModal";

export default RoutedModal;
