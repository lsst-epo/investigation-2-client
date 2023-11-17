"use client";

import { Button } from "@rubin-epo/epo-react-lib";
import { useAuthDialogManager } from "@/contexts/AuthDialogManagerContext";
import { useTranslation } from "react-i18next";

export default function SignIn() {
  const { t } = useTranslation();
  const { openModal } = useAuthDialogManager();

  return (
    <Button
      styleAs="educator"
      onClick={() => {
        openModal("selectGroup");
      }}
    >
      {t("auth.sign_up")}
    </Button>
  );
}
