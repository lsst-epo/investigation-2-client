"use client";

import { createContext, useContext, useState } from "react";
import type { PendingGroup } from "@/types/auth";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";

export type ActiveDialog =
  | "activate"
  | "forgotPassword"
  | "selectGroup"
  | "selectProvider"
  | "setPassword"
  | "signIn"
  | "signInFacebook"
  | "signUp"
  | "statusActive"
  | "statusPending"
  | null;

type AuthDialogManager = {
  active: ActiveDialog;
  pendingGroup?: PendingGroup;
  openModal: (name: ActiveDialog) => void;
  closeModal: () => void;
  setPendingGroup: (role: PendingGroup) => void;
  returnToUri: string | null;
};

const AuthDialogManagerContext = createContext<AuthDialogManager | null>(null);

// see if we should automatically open an auth dialog based on search params
function getInitActive(searchParams: ReadonlyURLSearchParams | null) {
  if (!searchParams) return null;

  if (searchParams.has("activate")) return "activate";
  if (searchParams.has("facebook_sso")) return "signInFacebook";
  if (searchParams.has("set_password")) return "setPassword";

  return null;
}

function AuthDialogManagerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const searchParams = useSearchParams();
  const [returnToUri] = useState<string | null>(
    searchParams?.get("returnTo") || null
  );
  const [active, setActive] = useState<ActiveDialog>(
    getInitActive(searchParams)
  );
  const [pendingGroup, setPendingGroup] = useState<PendingGroup>();

  return (
    <AuthDialogManagerContext.Provider
      value={{
        active,
        pendingGroup,
        openModal: (name: ActiveDialog) => setActive(name),
        closeModal: () => setActive(null),
        setPendingGroup,
        returnToUri,
      }}
    >
      {children}
    </AuthDialogManagerContext.Provider>
  );
}

AuthDialogManagerProvider.displayName = "AuthDialogManager.Provider";

function useAuthDialogManager() {
  const modalContext = useContext(AuthDialogManagerContext);

  if (!modalContext) {
    throw new Error(
      "useAuthDialogManager must be inside <AuthDialogManagerContext.Provider>"
    );
  }

  return modalContext;
}

export default AuthDialogManagerContext;

export { AuthDialogManagerProvider, useAuthDialogManager };
