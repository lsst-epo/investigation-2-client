"use client";

import { FunctionComponent, useState } from "react";
import Input from "@rubin-epo/epo-react-lib/Input";
import { signIn } from "./actions";
import { useTranslation } from "react-i18next";
import { usePathToRevalidate } from "../../clientHelpers";
import { useAuthDialogManager } from "@/contexts/AuthDialogManagerContext";
import * as Styled from "./styles";

const SignIn: FunctionComponent<{ onSignInCallback: () => void }> = ({
  onSignInCallback,
}) => {
  const { pendingGroup } = useAuthDialogManager();
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const { t } = useTranslation();

  const pathToRevalidate = usePathToRevalidate();

  return (
    <Styled.Wrapper>
      <h2>{t("sign_in.header")}</h2>
      <Styled.Section>
        {t("auth.log_in_w_oauth")}
        <Styled.GoogleSSOButton onError={() => setStatus("error")} />
        <Styled.FacebookSSOButton onError={() => setStatus("error")} />
      </Styled.Section>
      <Styled.Section
        as="form"
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        action={async (formData: FormData) => {
          try {
            const data = await signIn(formData, pathToRevalidate);

            if (data?.authenticate) {
              onSignInCallback && onSignInCallback();
            }

            setStatus("success");
          } catch (error) {
            setStatus("error");
          }
        }}
      >
        {t("auth.log_in_w_email")}
        <Styled.Label>
          {t("form.email")}
          <Input
            name="email"
            id="signInEmail"
            type="email"
            autoComplete="email"
            required
          />
        </Styled.Label>
        <Styled.Label>
          {t("form.password")}
          <Input
            name="password"
            id="signInPassword"
            type="password"
            required
            autoComplete="current-password"
          />
        </Styled.Label>

        <Styled.ForgetCreateContainer>
          <Styled.ForgetCreateLink href="./forgot-password">
            {t("sign_in.forgot_password_link")}
          </Styled.ForgetCreateLink>
          <Styled.ForgetCreateLink
            href={
              pendingGroup === "students" || pendingGroup === "educators"
                ? "sign-up"
                : "select-group"
            }
          >
            {t("sign_in.create_account_link")}
          </Styled.ForgetCreateLink>
        </Styled.ForgetCreateContainer>
        {status !== "success" && (
          <Styled.SignInButton>
            {(pending) =>
              t(pending ? "sign_in.submit_pending" : "sign_in.submit")
            }
          </Styled.SignInButton>
        )}
        <output>
          {status === "error" && <p>{t("sign_in.error_message")}</p>}
        </output>
      </Styled.Section>
    </Styled.Wrapper>
  );
};

SignIn.displayName = "Auth.SignIn";

export default SignIn;
