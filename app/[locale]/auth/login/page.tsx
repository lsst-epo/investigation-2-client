"use client";
import { FunctionComponent } from "react";
import { useRouter } from "next/navigation";
import LoginDialog from "@/components/auth/dialogs/SignIn";

const Login: FunctionComponent = () => {
  const router = useRouter();
  return <LoginDialog onSignInCallback={() => router.push("/")} />;
};

export default Login;
