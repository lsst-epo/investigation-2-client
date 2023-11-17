"use client";

import { useState } from "react";
import { BasicModal } from "@rubin-epo/epo-react-lib";
import { useAuthDialogManager } from "@/contexts/AuthDialogManagerContext";
import { useTranslation } from "react-i18next";
import * as Styled from "./styles";

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
      <Styled.InnerModal>
        <Styled.GoogleSSOButton
          onError={() =>
            setOutput(t("sign_in.error_message", { context: "google" }))
          }
        />
        <Styled.FacebookSSOButton
          onError={() =>
            setOutput(t("sign_in.error_message", { context: "facebook" }))
          }
        />
        <Styled.EmailButton
          onClick={() => openModal("signUp")}
          styleAs="tertiary"
        >
          {t("join.sign_up_with_email")}
        </Styled.EmailButton>
        <Styled.SignInButton onClick={() => openModal("signIn")}>
          {t("join.sign_in_link")}
        </Styled.SignInButton>
        <output>{output && <p>{output}</p>}</output>
      </Styled.InnerModal>
    </BasicModal>
  );
}
