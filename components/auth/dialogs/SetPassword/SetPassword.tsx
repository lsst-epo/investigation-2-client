"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { BasicModal, Button, Input } from "@rubin-epo/epo-react-lib";
import { useAuthDialogManager } from "@/components/auth/AuthDialogManagerContext";
import Submit from "@/components/auth/buttons/Submit";
import { useTranslation } from "@/lib/i18n/client";
import { setPassword } from "./actions";

export default function SignUp() {
  const { active, closeModal } = useAuthDialogManager();

  const [status, setStatus] = useState<
    "success" | "error" | "missingParams" | null
  >(null);

  const { t } = useTranslation();

  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const id = searchParams.get("id");

  function getTitle() {
    switch (status) {
      case "success":
        return t("set_password.success");
      case "error":
        return t("set_password.error");
      default:
        return t("set_password.header");
    }
  }

  function getDescription() {
    switch (status) {
      case "success":
        return t("set_password.success_message");
      case "error":
        return t("set_password.error_message");
      default:
        return undefined;
    }
  }

  return (
    <BasicModal
      title={getTitle()}
      description={getDescription()}
      open={active === "setPassword"}
      onClose={closeModal}
    >
      {status !== "success" && (
        <form
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          action={async (formData: FormData) => {
            if (!code || !id) {
              setStatus("missingParams");
              return;
            }
            try {
              const data = await setPassword(formData, code, id);
              setStatus(data.setPassword ? "success" : null);
            } catch (error) {
              if (error instanceof Error) {
                setStatus("error");
              }
            }
          }}
        >
          <div>
            <label htmlFor="newPassword">{t("form.new_password")}</label>
            <Input
              name="password"
              id="newPassword"
              type="password"
              required
              autoComplete="new-password"
            />
          </div>
          <Submit>
            {(pending) =>
              t(
                pending
                  ? "reset_password.submit_pending"
                  : "reset_password.submit"
              )
            }
          </Submit>
        </form>
      )}
      {status === "success" && (
        <Button
          onClick={() => {
            setStatus(null);
            closeModal();
          }}
        >
          {t("reset_password.confirm_button")}
        </Button>
      )}
    </BasicModal>
  );
}
