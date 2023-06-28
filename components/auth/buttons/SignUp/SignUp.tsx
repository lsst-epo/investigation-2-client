"use client";

import { Button } from "@rubin-epo/epo-react-lib";
import { useAuthDialogManager } from "@/components/auth/AuthDialogManagerContext";
import { useTranslation } from "@/lib/i18n/client";

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
