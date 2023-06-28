"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { BasicModal, Button, Input } from "@rubin-epo/epo-react-lib";
import { useAuthDialogManager } from "@/components/auth/AuthDialogManagerContext";
import AuthButtons from "@/components/auth/buttons";
import { signIn } from "./actions";
import { useTranslation } from "@/lib/i18n/client";

export default function SignIn() {
  const { active, openModal, closeModal } = useAuthDialogManager();

  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const { t } = useTranslation();

  const params = useParams();
  // on sign in, we want to revalidate data for the current route's filesystem path
  // https://nextjs.org/docs/app/api-reference/functions/revalidatePath
  const pathToRevalidate = Object.keys(params)
    .map((key) => `/[${key}]`)
    .join("");

  function getTitle() {
    switch (status) {
      case "success":
        return t("sign_in.success");
      default:
        return t("sign_in.header");
    }
  }

  function getDescription() {
    switch (status) {
      case "success":
        return t("sign_in.success_message");
      default:
        return undefined;
    }
  }

  return (
    <BasicModal
      title={getTitle()}
      description={getDescription()}
      open={active === "signIn"}
      onClose={closeModal}
    >
      {status !== "success" && (
        <>
          <p>
            To log in using Google or Facebook, please select whether you are a
            student or a teacher before continuing.
          </p>
          <AuthButtons.GoogleSSO />
          <AuthButtons.FacebookSSO />
          <p>Or, log in using your email and password.</p>
          <form
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            action={async (formData: FormData) => {
              try {
                const data = await signIn(formData, pathToRevalidate);

                if (data.authenticate) {
                  closeModal();
                }

                setStatus(null);
              } catch (error) {
                if (error instanceof Error) {
                  setStatus("error");
                }
              }
            }}
          >
            <div>
              <label htmlFor="signInEmail">{t("form.email")}</label>
              <Input
                name="email"
                id="signInEmail"
                type="email"
                autoComplete="email"
                required
              />
            </div>
            <div>
              <label htmlFor="signInPassword">{t("form.password")}</label>
              <Input
                name="password"
                id="signInPassword"
                type="password"
                required
                autoComplete="current-password"
              />
            </div>
            <div>
              <button type="button" onClick={() => openModal("forgotPassword")}>
                {t("sign_in.forgot_password_link")}
              </button>
              <button type="button" onClick={() => openModal("selectGroup")}>
                {t("sign_in.create_account_link")}
              </button>
            </div>
            <AuthButtons.Submit>
              {(pending) =>
                t(pending ? "sign_in.submit_pending" : "sign_in.submit")
              }
            </AuthButtons.Submit>
            <output>
              {status === "error" && <p>{t("sign_in.error_message")}</p>}
            </output>
          </form>
        </>
      )}
      {status === "success" && (
        <Button
          onClick={() => {
            setStatus(null);
            closeModal();
          }}
        >
          {t("sign_in.confirm_button")}
        </Button>
      )}
    </BasicModal>
  );
}
