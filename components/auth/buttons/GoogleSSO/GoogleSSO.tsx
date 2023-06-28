"use client";

import { useState } from "react";
import { Button } from "@rubin-epo/epo-react-lib";
import { useTranslation } from "@/lib/i18n/client";

export default function GoogleSSO({ onError }: { onError: () => void }) {
  const [status, setStatus] = useState<"loading" | null>(null);

  const { t } = useTranslation();

  return (
    <Button
      onClick={async () => {
        setStatus("loading");
        try {
          // const oauthUrl = await getOauthUrl();
          // window.open(oauthUrl, "_self");
        } catch (error) {
          onError();
        }
        setStatus(null);
      }}
      styleAs="tertiary"
    >
      {status === "loading"
        ? t("sign_in.redirecting_google")
        : t("sign_in.continue_with_google")}
    </Button>
  );
}
