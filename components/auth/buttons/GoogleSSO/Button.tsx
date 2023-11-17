"use client";

import { useGoogleLogin } from "@react-oauth/google";
import { Button } from "@rubin-epo/epo-react-lib";
import { useTranslation } from "react-i18next";
import { useAuthDialogManager } from "@/contexts/AuthDialogManagerContext";
import { usePathToRevalidate } from "@/components/auth/clientHelpers";
import { authenticateEducator, authenticateStudent } from "./actions";
import type { GoogleCredentialResponse } from "@react-oauth/google";

export default function SSOButton({
  onError: onSignInError,
}: {
  onError: () => void;
}) {
  const { t } = useTranslation();
  const { pendingGroup } = useAuthDialogManager();
  const pathToRevalidate = usePathToRevalidate();
  const login = useGoogleLogin({
    onSuccess: handleSuccess,
    onError: handleError,
  });

  function handleError() {
    console.error("error");
    onSignInError();
  }

  async function handleSuccess(credentialResponse: GoogleCredentialResponse) {
    try {
      if (!credentialResponse.credential) return handleError();

      if (pendingGroup === "educators") {
        await authenticateEducator(
          credentialResponse.credential,
          pathToRevalidate
        );
      } else {
        await authenticateStudent(
          credentialResponse.credential,
          pathToRevalidate
        );
      }
    } catch (error) {
      onSignInError();
    }
  }

  return (
    <Button onClick={() => login()} styleAs="tertiary">
      {t("sign_in.continue_with_google")}
    </Button>
  );
}

Button.displayName = "GoogleSSO.Button";
