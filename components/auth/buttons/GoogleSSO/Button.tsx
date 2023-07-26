"use client";

import { useState } from "react";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { Button } from "@rubin-epo/epo-react-lib";
import { useAuthDialogManager } from "@/components/auth/AuthDialogManagerContext";
import { useTranslation } from "@/lib/i18n/client";
import { usePathToRevalidate } from "@/components/auth/clientHelpers";

export default function SSOButton({
  onError: onSignInError,
}: {
  onError: () => void;
}) {
  const { pendingGroup } = useAuthDialogManager();

  const pathToRevalidate = usePathToRevalidate();

  const [status, setStatus] = useState<"loading" | null>(null);

  function handleSuccess(credentialResponse: CredentialResponse) {
    console.log(credentialResponse);
    // try {
    //   if (pendingGroup === "educators") {
    //     const data = await authenticateEducator(
    //       tokenResponse.access_token,
    //       pathToRevalidate
    //     );
    //     if (data.googleSignInEducators) {
    //       // TODO: implement success callback
    //       console.log(data.googleSignInEducators);
    //     }
    //   } else {
    //     const data = await authenticateStudent(
    //       tokenResponse.access_token,
    //       pathToRevalidate
    //     );
    //     if (data.googleSignInStudents) {
    //       // TODO: implement success callback
    //       console.log(data.googleSignInStudents);
    //     }

    //     setStatus(null);
    //   }
    // } catch (error) {
    //   if (error instanceof Error) {
    //     setStatus(null);
    //     onSignInError();
    //   }
    // }
  }

  function handleError() {
    console.error("error");
    setStatus(null);
    onSignInError();
  }

  // implicit: "ya29.a0AbVbY6P-7rfdCjoRIMZM901iA6nic2XPdSNUvMElZmow444te1T2Zmfeb_9UF0a6TvAm0XI3rjF26p17YFDyq-3PG5br_5aEarV7AnpmMBuPZfqtpnLUG5m_P_kf82USn4xwsuCvf9UT97R-TfKh7lQuA_8CaCgYKAdASARESFQFWKvPl0DxHQE7wHBxrEbaUO0MpWA0163"
  // auth_flow: "4/0AZEOvhVcdYJttaCwJ34X1giPpJ8QIPSgtShaY05zOmkAt6du0WKTIIRBmu848Rk57IQU0w"
  // const signIn = useGoogleLogin({
  //   onSuccess: async (tokenResponse) => {
  //     // const code = jwtDecode(tokenResponse.code);
  //     console.log(tokenResponse);
  //     // try {
  //     //   if (pendingGroup === "educators") {
  //     //     const data = await authenticateEducator(
  //     //       tokenResponse.access_token,
  //     //       pathToRevalidate
  //     //     );
  //     //     if (data.googleSignInEducators) {
  //     //       // TODO: implement success callback
  //     //       console.log(data.googleSignInEducators);
  //     //     }
  //     //   } else {
  //     //     const data = await authenticateStudent(
  //     //       tokenResponse.access_token,
  //     //       pathToRevalidate
  //     //     );
  //     //     if (data.googleSignInStudents) {
  //     //       // TODO: implement success callback
  //     //       console.log(data.googleSignInStudents);
  //     //     }

  //     //     setStatus(null);
  //     //   }
  //     // } catch (error) {
  //     //   if (error instanceof Error) {
  //     //     setStatus(null);
  //     //     onSignInError();
  //     //   }
  //     // }
  //   },
  //   onError: (error) => {
  //     console.error(error);
  //     setStatus(null);
  //     onSignInError();
  //   },
  //   flow: "auth-code",
  // });

  const { t } = useTranslation();

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={handleError}
      theme="outline"
      size="large"
      useOneTap
    />
  );

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
