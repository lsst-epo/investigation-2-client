import { FunctionComponent } from "react";
import { notFound, redirect } from "next/navigation";
import { InvestigationLandingProps } from "./layout";
import SignIn from "@/components/auth/SignIn";
import SignUp from "@/components/auth/SignUp";
import { getAuthCookies } from "@/components/auth/helpers";

const MockInvestigations: { [key: string]: string } = {
  "coloring-the-universe": "Coloring the Universe",
};

const InvestigationLanding: FunctionComponent<InvestigationLandingProps> = ({
  params: { investigation },
}) => {
  const { jwt } = getAuthCookies();

  if (jwt) redirect(`/${investigation}/first-page`);

  const title = MockInvestigations[investigation];

  if (!title) {
    notFound();
  }

  return (
    <>
      <h1>{title}</h1>
      <div style={{ display: "flex", gap: "1rem" }}>
        <SignIn redirectTo={`/${investigation}/first-page`} />
        <SignUp redirectTo={`/${investigation}/first-page`} />
      </div>
    </>
  );
};

export default InvestigationLanding;
