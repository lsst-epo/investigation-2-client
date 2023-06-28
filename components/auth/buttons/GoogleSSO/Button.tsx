"use client";

import { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { Button } from "@rubin-epo/epo-react-lib";
import { useAuthDialogManager } from "@/components/auth/AuthDialogManagerContext";
import { useTranslation } from "@/lib/i18n/client";
import { authenticateEducator, authenticateStudent } from "./actions";
import { usePathToRevalidate } from "@/components/auth/clientHelpers";

export default function SSOButton({
  onError: onSignInError,
}: {
  onError: () => void;
}) {
  const { pendingGroup } = useAuthDialogManager();

  const pathToRevalidate = usePathToRevalidate();

  const [status, setStatus] = useState<"loading" | null>(null);

  const signIn = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        if (pendingGroup === "educators") {
          const data = await authenticateEducator(
            tokenResponse.code,
            pathToRevalidate
          );
          if (data.googleSignInEducators) {
            // TODO: implement success callback
            console.log(data.googleSignInEducators);
          }
        } else {
          const data = await authenticateStudent(
            tokenResponse.code,
            pathToRevalidate
          );
          if (data.googleSignInStudents) {
            // TODO: implement success callback
            console.log(data.googleSignInStudents);
          }

          setStatus(null);
        }
      } catch (error) {
        if (error instanceof Error) {
          setStatus(null);
          onSignInError();
        }
      }
    },
    onError: (error) => {
      console.error(error);
      setStatus(null);
      onSignInError();
    },
    flow: "auth-code",
  });

  const { t } = useTranslation();

  return (
    <Button
      onClick={async () => {
        setStatus("loading");
        signIn();
      }}
      styleAs="tertiary"
    >
      {status === "loading"
        ? t("sign_in.redirecting_google")
        : t("sign_in.continue_with_google")}
    </Button>
  );
}

Button.displayName = "GoogleSSO.Button";
