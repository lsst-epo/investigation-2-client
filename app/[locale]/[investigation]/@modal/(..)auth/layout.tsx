import { FunctionComponent, PropsWithChildren } from "react";
import { AuthDialogManagerProvider } from "@/contexts/AuthDialogManagerContext";
import RoutedModal from "@/components/layout/Modal/Routed";
import * as Styled from "./styles";

const AuthLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  console.log("Auth, intercepted");
  return (
    <RoutedModal>
      <AuthDialogManagerProvider>
        <Styled.AuthContainer>{children}</Styled.AuthContainer>
      </AuthDialogManagerProvider>
    </RoutedModal>
  );
};

export default AuthLayout;
