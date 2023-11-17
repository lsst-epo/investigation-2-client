"use client";
import { FunctionComponent } from "react";
import SignUpDialog from "@/components/auth/dialogs/SignUp";
import { useRouter } from "next/navigation";
import { useAuthDialogManager } from "@/contexts/AuthDialogManagerContext";

const SignUpModal: FunctionComponent = () => {
  const router = useRouter();
  const { returnToUri } = useAuthDialogManager();

  return (
    <SignUpDialog
      onSignUpCallback={() => {
        returnToUri ? router.push(`/${returnToUri}`) : router.back();
      }}
    />
  );
};

export default SignUpModal;
