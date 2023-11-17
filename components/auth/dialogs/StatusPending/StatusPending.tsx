"use client";

import { BasicModal, Button } from "@rubin-epo/epo-react-lib";
import { useAuthDialogManager } from "@/contexts/AuthDialogManagerContext";
import { useTranslation } from "react-i18next";

export default function StatusPending() {
  const { active, pendingGroup, closeModal } = useAuthDialogManager();

  const { t } = useTranslation();

  return (
    <BasicModal
      title={t("register.success", { context: pendingGroup }) as string}
      description={
        t("register.success_message", { context: pendingGroup }) as string
      }
      open={active === "statusPending"}
      onClose={closeModal}
    >
      <Button onClick={() => closeModal()}>
        {t("register.confirm_button")}
      </Button>
    </BasicModal>
  );
}
