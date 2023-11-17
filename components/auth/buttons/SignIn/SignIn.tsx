"use client";

import { Button } from "@rubin-epo/epo-react-lib";
import { useAuthDialogManager } from "@/contexts/AuthDialogManagerContext";
import { useTranslation } from "react-i18next";
import * as Styled from "./styles";
import Link from "next/link";

export default function SignIn() {
  const { t } = useTranslation();
  const { openModal } = useAuthDialogManager();

  return (
    <>
      <Button
        as={Link}
        className="sign-in"
        styleAs="educator"
        href="auth/login"
      >
        {t("auth.log_in_to_continue")}
      </Button>
      <Styled.ButtonLabel>
        {t("auth.continue_w_login_label")}
      </Styled.ButtonLabel>
    </>
  );
}
