"use client";
import { FunctionComponent } from "react";
import SignInDialog from "@/components/auth/dialogs/SignIn";
import { useRouter } from "next/navigation";
import { useAuthDialogManager } from "@/contexts/AuthDialogManagerContext";

const LoginModal: FunctionComponent = () => {
  const router = useRouter();
  const { returnToUri } = useAuthDialogManager();

  return (
    <SignInDialog
      onSignInCallback={() => {
        returnToUri ? router.push(`/${returnToUri}`) : router.back();
      }}
    />
  );
};

export default LoginModal;
