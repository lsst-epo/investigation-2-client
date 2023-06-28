"use client";

import { Button } from "@rubin-epo/epo-react-lib";
import { useAuthDialogManager } from "@/components/auth/AuthDialogManagerContext";
import { useTranslation } from "@/lib/i18n/client";

export default function SignIn() {
  const { t } = useTranslation();
  const { openModal } = useAuthDialogManager();

  return (
    <Button
      onClick={() => {
        openModal("signIn");
      }}
    >
      {t("auth.log_in_to_continue")}
    </Button>
  );
}
