"use client";

import { useState } from "react";
import { BasicModal, Button, Input } from "@rubin-epo/epo-react-lib";
import { useAuthDialogManager } from "@/components/auth/AuthDialogManagerContext";
import Submit from "@/components/auth/buttons/Submit";
import { registerEducator, registerStudent } from "./actions";
import { useTranslation } from "@/lib/i18n/client";

export default function SignUp() {
  const { active, pendingGroup, openModal, closeModal } =
    useAuthDialogManager();

  const [status, setStatus] = useState<"error" | null>(null);

  const { t } = useTranslation();

  function getTitle() {
    switch (status) {
      case "error":
        return t("register.error");
      default:
        return t("register.header", { context: pendingGroup });
    }
  }

  function getDescription() {
    switch (status) {
      case "error":
        return t("register.error_message");
      default:
        return undefined;
    }
  }

  return (
    <BasicModal
      title={getTitle()}
      description={getDescription()}
      open={active === "signUp"}
      onClose={closeModal}
    >
      <form
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        action={async (formData: FormData) => {
          try {
            if (pendingGroup === "educators") {
              const data = await registerEducator(formData);
              setStatus(null);
              if (data.registerEducators) {
                openModal("statusPending");
              }
            } else {
              const data = await registerStudent(formData);
              if (data.registerStudents) {
                setStatus(null);
                openModal("statusPending");
              }
            }
          } catch (error) {
            if (error instanceof Error) {
              setStatus("error");
            }
          }
        }}
      >
        <div>
          <label htmlFor="signUpEmail">{t("form.email")}</label>
          <Input
            name="email"
            id="signUpEmail"
            type="email"
            autoComplete="email"
            required
          />
        </div>
        <div>
          <label htmlFor="registerFirstName">{t("form.first_name")}</label>
          <Input
            name="firstName"
            id="registerFirstName"
            type="text"
            autoComplete="given-name"
          />
        </div>
        <div>
          <label htmlFor="registerLastName">{t("form.last_name")}</label>
          <Input
            name="lastName"
            id="registerLastName"
            type="text"
            autoComplete="family-name"
          />
        </div>
        <div>
          <label htmlFor="signUpPassword">{t("form.password")}</label>
          <Input
            name="password"
            id="signUpPassword"
            type="password"
            autoComplete="current-password"
          />
        </div>
        <Submit>
          {(pending) =>
            t(pending ? "register.submit_pending" : "register.submit")
          }
        </Submit>
        <Button
          type="button"
          styleAs="secondary"
          onClick={() => {
            setStatus(null);
            closeModal();
          }}
        >
          {t("form.cancel")}
        </Button>
      </form>
    </BasicModal>
  );
}
