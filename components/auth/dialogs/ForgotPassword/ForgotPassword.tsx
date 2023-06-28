"use client";

import { useState } from "react";
import { BasicModal, Button, Input } from "@rubin-epo/epo-react-lib";
import { useAuthDialogManager } from "@/components/auth/AuthDialogManagerContext";
import { useTranslation } from "@/lib/i18n/client";
import Submit from "@/components/auth/buttons/Submit";
import { forgotPassword } from "./actions";

export default function SignUp() {
  const { active, closeModal } = useAuthDialogManager();

  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const { t } = useTranslation();

  function getTitle() {
    switch (status) {
      case "success":
        return t("reset_password.success");
      case "error":
        return t("reset_password.error");
      default:
        return t("reset_password.header");
    }
  }

  function getDescription() {
    switch (status) {
      case "success":
        return t("reset_password.success_message");
      case "error":
        return t("reset_password.error_message");
      default:
        return undefined;
    }
  }

  return (
    <BasicModal
      title={getTitle()}
      description={getDescription()}
      open={active === "forgotPassword"}
      onClose={closeModal}
    >
      {status !== "success" && (
        <form
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          action={async (formData: FormData) => {
            try {
              const data = await forgotPassword(formData);
              setStatus(data.forgottenPassword ? "success" : null);
            } catch (error) {
              if (error instanceof Error) {
                setStatus("error");
              }
            }
          }}
        >
          <div>
            <label htmlFor="forgottenPasswordEmail">
              {t("form.email_required")}
            </label>
            <Input
              name="email"
              id="forgottenPasswordEmail"
              type="email"
              autoComplete="email"
              required
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
