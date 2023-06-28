"use client";

import { BasicModal, Button } from "@rubin-epo/epo-react-lib";
import { useAuthDialogManager } from "@/components/auth/AuthDialogManagerContext";
import { useTranslation } from "@/lib/i18n/client";

export default function SelectGroup() {
  const { active, openModal, closeModal, setPendingGroup } =
    useAuthDialogManager();

  const { t } = useTranslation();

  return (
    <BasicModal
      title="Select your role"
      open={active === "selectGroup"}
      onClose={closeModal}
    >
      <Button
        onClick={() => {
          setPendingGroup("students");
          openModal("selectProvider");
        }}
      >
        {t("join.as_students")}
      </Button>
      <Button
        onClick={() => {
          setPendingGroup("educators");
          openModal("selectProvider");
        }}
        styleAs="educator"
      >
        {t("join.as_educators")}
      </Button>
      <div>
        <button onClick={() => openModal("signIn")}>
          {t("join.sign_in_link")}
        </button>
      </div>
    </BasicModal>
  );
}
