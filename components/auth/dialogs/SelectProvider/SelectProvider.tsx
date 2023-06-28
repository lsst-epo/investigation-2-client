"use client";

import { useState } from "react";
import { BasicModal, Button } from "@rubin-epo/epo-react-lib";
import { useAuthDialogManager } from "@/components/auth/AuthDialogManagerContext";
import AuthButtons from "@/components/auth/buttons";
import { useTranslation } from "@/lib/i18n/client";

export default function SelectProvider() {
  const { active, pendingGroup, openModal, closeModal } =
    useAuthDialogManager();

  const [output, setOutput] = useState<string | null>(null);

  const { t } = useTranslation();

  return (
    <BasicModal
      title={t("join.header", { context: pendingGroup }) as string}
      description={t("join.description", { context: pendingGroup }) as string}
      open={active === "selectProvider"}
      onClose={closeModal}
    >
      <AuthButtons.GoogleSSO />
      <AuthButtons.FacebookSSO
        onError={() =>
          setOutput(t("sign_in.error_message", { context: "facebook" }))
        }
      />
      <Button onClick={() => openModal("signUp")} styleAs="tertiary">
        {t("join.sign_up_with_email")}
      </Button>
      <div>
        <button onClick={() => openModal("signIn")}>
          {t("join.sign_in_link")}
        </button>
      </div>
      <output>{output && <p>{output}</p>}</output>
    </BasicModal>
  );
}
