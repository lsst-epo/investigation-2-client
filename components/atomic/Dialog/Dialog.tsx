"use client";

import { useRef, useEffect } from "react";
import { useTranslation } from "@/lib/i18n/client";

/**
 * HTML Dialog element as a controlled component
 *
 * The dialog's state is controlled by the parent component and passed as the `open` prop.
 * This component uses an effect to listen that prop and sets the vanilla methods on the
 * element to open and close it.
 */
export default function Dialog({
  open,
  modal = true,
  doClose,
  id,
  toggleRef,
  title,
  className,
  children,
}: {
  open: boolean;
  modal?: boolean;
  doClose?: () => void;
  id?: string;
  toggleRef?: HTMLAnchorElement | HTMLButtonElement | null;
  title?: string | null;
  className?: string;
  children: React.ReactNode;
}) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const { t } = useTranslation();

  // open/close dialog using DOM node methods
  useEffect(() => {
    const bodyClassList = document.querySelector("body")?.classList;

    if (open) {
      if (!modal) {
        dialogRef.current?.show();
      } else {
        dialogRef.current?.showModal();
        bodyClassList?.add("has-scroll-lock");
      }
    } else {
      if (dialogRef.current?.open) {
        dialogRef.current.close();
      }
      if (bodyClassList?.contains("has-scroll-lock")) {
        bodyClassList?.remove("has-scroll-lock");
      }
    }
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  // run `doClose` callback prop on DOM node close event
  useEffect(() => {
    const current = dialogRef.current;

    if (typeof doClose !== "function") return;

    current?.addEventListener("close", doClose);

    return () => {
      if (typeof doClose !== "function") return;
      current?.removeEventListener("close", doClose);
    };
  }, [doClose]);

  /**
   * add to non-modal dialogs:
   *   ESC key close functionality (already built-in for modal dialogs)
   *   click/focus outside close functionality (modal dialogs should require more intentional close action)
   */
  useEffect(() => {
    if (modal || !open || typeof doClose !== "function") return;
    dialogRef.current?.addEventListener("keydown", handleKeyDown);
    dialogRef.current?.addEventListener("focusout", handleFocusOut);

    return () => {
      if (modal || !open || typeof doClose !== "function") return;
      dialogRef.current?.removeEventListener("keydown", handleKeyDown);
      dialogRef.current?.removeEventListener("focusout", handleFocusOut);
    };
  }, [open, modal, doClose]); // eslint-disable-line react-hooks/exhaustive-deps

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Escape" && typeof doClose === "function") doClose();
  }

  function handleFocusOut(event: FocusEvent) {
    const dialogFocused = event.relatedTarget === dialogRef.current;
    const toggleFocused = event.relatedTarget === toggleRef;
    if (!dialogFocused && !toggleFocused && typeof doClose === "function")
      doClose();
  }

  return (
    <dialog
      ref={dialogRef}
      id={id}
      aria-label={title ?? undefined}
      className={className}
    >
      <button onClick={doClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16.751"
          height="16.751"
          viewBox="0 0 16.751 16.751"
          role="presentation"
        >
          <polygon points="9.79 8.38 16.75 15.34 15.34 16.75 8.37 9.79 1.41 16.75 0 15.34 6.96 8.38 0 1.42 1.41 0 8.38 6.97 15.34 0 16.75 1.41 9.79 8.38" />
        </svg>
        <span className="sr-only">{t("nav.close")}</span>
      </button>
      <div>{children}</div>
    </dialog>
  );
}
