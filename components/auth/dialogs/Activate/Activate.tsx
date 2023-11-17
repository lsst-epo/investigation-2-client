"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { BasicModal, Button } from "@rubin-epo/epo-react-lib";
import { useAuthDialogManager } from "@/contexts/AuthDialogManagerContext";
import { useTranslation } from "react-i18next";
import { activate } from "./actions";
import { usePathToRevalidate } from "../../clientHelpers";

export default function Activate() {
  const { active, pendingGroup, closeModal } = useAuthDialogManager();

  const { t } = useTranslation();

  const [status, setStatus] = useState<
    "success" | "error" | "loading" | "missingParams" | null
  >(null);

  const searchParams = useSearchParams();
  const code = searchParams?.get("code");
  const id = searchParams?.get("id");

  const router = useRouter();
  const pathname = usePathname();
  const pathToRevalidate = usePathToRevalidate();

  // init API request as soon as modal opens
  useEffect(() => {
    async function doActivation() {
      if (!code || !id) {
        setStatus("missingParams");
        return;
      }

      setStatus("loading");

      try {
        const data = await activate(code, id, pathToRevalidate);

        if (data?.activateUser) {
          setStatus("success");
        }
      } catch (error) {
        setStatus("error");
      }
    }

    if (active !== "activate") return;

    doActivation().catch(() => setStatus("error"));
  }, [active]); // eslint-disable-line react-hooks/exhaustive-deps

  function getTitle() {
    switch (status) {
      case "success":
        return t("activate.success");
      case "error":
      case "missingParams":
        return t("activate.error");
      case "loading":
        return t("activate.loading");
      default:
        return undefined;
    }
  }

  function getDescription() {
    switch (status) {
      case "success":
        return t("activate.success_message", { context: pendingGroup });
      case "error":
        return t("activate.error_message");
      case "missingParams":
        return t("activate.missing_params_message");
      default:
        return undefined;
    }
  }

  return (
    <BasicModal
      title={getTitle()}
      description={getDescription()}
      open={active === "activate"}
      onClose={closeModal}
    >
      {(status === "success" || status === "error") && (
        <Button
          onClick={() => {
            setStatus(null);
            closeModal();
            if (pathname) router.push(pathname); // redirect to same path but w/o search params
          }}
        >
          {t("activate.confirm_button")}
        </Button>
      )}
    </BasicModal>
  );
}
