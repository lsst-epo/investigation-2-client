"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { BasicModal, Button } from "@rubin-epo/epo-react-lib";
import { useAuthDialogManager } from "@/contexts/AuthDialogManagerContext";
import { useTranslation } from "react-i18next";
import { authenticateEducator, authenticateStudent } from "./actions";
import { usePathToRevalidate } from "../../clientHelpers";

export default function SignInFacebook() {
  const { active, pendingGroup, closeModal } = useAuthDialogManager();

  const { t } = useTranslation();

  const [status, setStatus] = useState<
    "success" | "error" | "loading" | "missingParams" | null
  >(null);

  const searchParams = useSearchParams();
  const code = searchParams?.get("code");

  const router = useRouter();
  const pathname = usePathname();
  const pathToRevalidate = usePathToRevalidate();

  // init API request as soon as modal opens
  useEffect(() => {
    async function doActivation() {
      if (!code) {
        setStatus("missingParams");
        return;
      }

      setStatus("loading");

      try {
        if (pendingGroup === "educators") {
          await authenticateEducator(code, pathToRevalidate);
        } else {
          await authenticateStudent(code, pathToRevalidate);
        }
      } catch (error) {
        setStatus("error");
      }
    }

    if (active !== "signInFacebook") return;

    doActivation().catch(() => setStatus("error"));
  }, [active]); // eslint-disable-line react-hooks/exhaustive-deps

  function getTitle() {
    switch (status) {
      case "success":
        return t("facebook_sso.success");
      case "error":
      case "missingParams":
        return t("facebook_sso.error");
      case "loading":
        return t("facebook_sso.loading");
      default:
        return undefined;
    }
  }

  function getDescription() {
    switch (status) {
      case "success":
        return t("facebook_sso.success_message", { context: pendingGroup });
      case "error":
        return t("facebook_sso.error_message");
      case "missingParams":
        return t("facebook_sso.missing_params_message");
      default:
        return undefined;
    }
  }

  return (
    <BasicModal
      title={getTitle()}
      description={getDescription()}
      open={active === "signInFacebook"}
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
          {t("facebook_sso.confirm_button")}
        </Button>
      )}
    </BasicModal>
  );
}
