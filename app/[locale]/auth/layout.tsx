import { FunctionComponent, PropsWithChildren } from "react";
import { AuthDialogManagerProvider } from "@/contexts/AuthDialogManagerContext";
import Container from "@/lib/Container";

const AuthLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  console.log("Auth, regular");
  return (
    <AuthDialogManagerProvider>
      <Container>{children}</Container>
    </AuthDialogManagerProvider>
  );
};

export default AuthLayout;
