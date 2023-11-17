"use client";

import { AuthDialogManagerProvider } from "@/contexts/AuthDialogManagerContext";
import Button from "@/components/auth/buttons";
import Dialog from "@/components/auth/dialogs";

export default function AuthDialogs({
  isAuthenticated = false,
}: {
  isAuthenticated?: boolean;
}) {
  return (
    <AuthDialogManagerProvider>
      {!isAuthenticated && (
        <>
          <Button.SignIn />
          {/* <Button.SignUp /> */}
          <Dialog.ForgotPassword />
          <Dialog.SelectGroup />
          <Dialog.SelectProvider />
          <Dialog.SetPassword />
          <Dialog.SignIn />
          <Dialog.SignInFacebook />
          <Dialog.SignUp />
          <Dialog.StatusPending />
        </>
      )}
      {/* The activate modal is the only one authenticated users may need to see */}
      <Dialog.Activate />
    </AuthDialogManagerProvider>
  );
}
