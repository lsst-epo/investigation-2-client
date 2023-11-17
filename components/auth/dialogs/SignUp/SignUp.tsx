"use client";

import { FunctionComponent, useState } from "react";
import { Input } from "@rubin-epo/epo-react-lib";
import { useAuthDialogManager } from "@/contexts/AuthDialogManagerContext";
import { registerEducator, registerStudent } from "./actions";

import Button from "@rubin-epo/epo-react-lib/Button";
import Submit from "@/components/form/Submit";
import { useTranslation } from "react-i18next";
import * as Styled from "./styles";
import Link from "next/link";

const SignUp: FunctionComponent<{ onSignUpCallback?: () => void }> = ({
  onSignUpCallback,
}) => {
  const { pendingGroup, returnToUri } = useAuthDialogManager();

  console.log("SignUp", { pendingGroup });

  const [status, setStatus] = useState<"error" | null>(null);

  const { t } = useTranslation();

  return (
    <Styled.SignUpContainer>
      <h2>{t("register.header", { context: pendingGroup })}</h2>
      <p>{t("register.instructions", { context: pendingGroup })}</p>
      <Styled.SignUpForm
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        action={async (formData: FormData) => {
          try {
            if (pendingGroup === "educators") {
              const data = await registerEducator(formData);
              if (data?.registerEducators) {
                onSignUpCallback && onSignUpCallback();
              }
            } else {
              const data = await registerStudent(formData);
              if (data?.registerStudents) {
                onSignUpCallback && onSignUpCallback();
              }
            }
          } catch (error) {
            setStatus("error");
          }

          setStatus(null);
        }}
      >
        <Styled.Label>
          {t("form.email_required")}
          <Input
            name="email"
            id="signUpEmail"
            type="email"
            autoComplete="email"
            required
          />
        </Styled.Label>
        <Styled.Label>
          {t("form.first_name_optional")}
          <Input
            name="firstName"
            id="registerFirstName"
            type="text"
            autoComplete="given-name"
          />
        </Styled.Label>
        <Styled.Label>
          {t("form.last_name_optional")}{" "}
          <Input
            name="lastName"
            id="registerLastName"
            type="text"
            autoComplete="family-name"
          />
        </Styled.Label>

        <Styled.Label>
          {t("form.password_required")}
          <Styled.Instructions>
            {t("form.create_password_instructions")}
          </Styled.Instructions>
          <Input
            name="password"
            id="signUpPassword"
            type="password"
            autoComplete="current-password"
            required
          />
        </Styled.Label>
        <Styled.ButtonGroup>
          <Submit>
            {(pending) =>
              t(pending ? "register.submit_pending" : "register.submit")
            }
          </Submit>
          <Button
            as={Link}
            type="button"
            styleAs="secondary"
            href={`/${returnToUri}`}
          >
            {t("form.cancel")}
          </Button>
        </Styled.ButtonGroup>

        <output>
          {status === "error" && <p>{t("register.error_message")}</p>}
        </output>
      </Styled.SignUpForm>
    </Styled.SignUpContainer>
  );
};

export default SignUp;
