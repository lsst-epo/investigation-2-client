"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { BasicModal, Button } from "@rubin-epo/epo-react-lib";
import { useAuthDialogManager } from "@/components/auth/AuthDialogManagerContext";
import { useTranslation } from "@/lib/i18n/client";
import { activate } from "@/api/auth";

export default function Activate() {
  const { active, pendingGroup, closeModal } = useAuthDialogManager();

  const { t } = useTranslation();

  const [status, setStatus] = useState<
    "success" | "error" | "loading" | "missingParams" | null
  >(null);

  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const id = searchParams.get("id");

  const router = useRouter();
  const pathname = usePathname();

  // init API request as soon as modal opens
  useEffect(() => {
    async function doActivation() {
      setStatus("loading");
      const data = await activate({
        code: code as string, // safe to assert since doActivation won't run if null
        id: id as string, // safe to assert since doActivation won't run if null
      });

      if (data.activateUser) {
        setStatus("success");
      } else if (data.errors) {
        setStatus("error");
      }
    }

    if (active !== "activate") return;

    if (!code || !id) {
      setStatus("missingParams");
      return;
    }

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
            router.push(pathname); // redirect to same path but w/o search params
          }}
        >
          {t("activate.confirm_button")}
        </Button>
      )}
    </BasicModal>
  );
}
