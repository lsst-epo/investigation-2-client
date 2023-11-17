"use client";
import { FunctionComponent } from "react";
import { useRouter } from "next/navigation";
import SignUpDialog from "@/components/auth/dialogs/SignUp";
import { useAuthDialogManager } from "@/contexts/AuthDialogManagerContext";

const SignUp: FunctionComponent = () => {
  const { pendingGroup } = useAuthDialogManager();
  const router = useRouter();

  return <SignUpDialog />;
};

export default SignUp;
