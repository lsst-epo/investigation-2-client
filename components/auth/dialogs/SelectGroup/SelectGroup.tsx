"use client";

import { useTranslation } from "react-i18next";
import { useAuthDialogManager } from "@/contexts/AuthDialogManagerContext";
import * as Styled from "./styles";

export default function SelectGroup() {
  const { setPendingGroup } = useAuthDialogManager();

  const { t } = useTranslation();

  return (
    <Styled.SelectGroupContainer>
      <Styled.SelectGroupTitle>{t("join.title")}</Styled.SelectGroupTitle>
      <p>{t("join.description")}</p>
      <Styled.LinkContainer>
        <Styled.StudentLink
          href="sign-up"
          onClick={() => {
            setPendingGroup("students");
          }}
        >
          <Styled.LinkImage
            role="presentation"
            src="/assets/roles/student.svg"
            alt=""
            width={64}
            height={64}
          />
          {t("join.as_students")}
        </Styled.StudentLink>
        <Styled.EducatorLink
          href="sign-up"
          onClick={() => {
            setPendingGroup("educators");
          }}
        >
          <Styled.LinkImage
            role="presentation"
            src="/assets/roles/educator.svg"
            alt=""
            width={55}
            height={64}
          />
          {t("join.as_educators")}
        </Styled.EducatorLink>
      </Styled.LinkContainer>
      <Styled.SignInLink href="login">
        {t("join.sign_in_link")}
      </Styled.SignInLink>
    </Styled.SelectGroupContainer>
  );
}
