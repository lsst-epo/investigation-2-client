"use client";

import { useState } from "react";
import { BasicModal, Input } from "@rubin-epo/epo-react-lib";
import { useAuthDialogManager } from "@/contexts/AuthDialogManagerContext";
import { useTranslation } from "react-i18next";
import { forgotPassword } from "./actions";
import * as Styled from "./styles";

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
        return t("reset_password.description");
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
        <Styled.Form
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
            <Styled.Label htmlFor="forgottenPasswordEmail">
              {t("form.email_required")}
            </Styled.Label>
            <Input
              name="email"
              id="forgottenPasswordEmail"
              type="email"
              autoComplete="email"
              required
            />
          </div>
          <Styled.SubmitButton>
            {(pending) =>
              t(
                pending
                  ? "reset_password.submit_pending"
                  : "reset_password.submit"
              )
            }
          </Styled.SubmitButton>
        </Styled.Form>
      )}
      {status === "success" && (
        <Styled.ConfirmButton
          onClick={() => {
            setStatus(null);
            closeModal();
          }}
        >
          {t("reset_password.confirm_button")}
        </Styled.ConfirmButton>
      )}
    </BasicModal>
  );
}
