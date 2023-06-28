import { FunctionComponent } from "react";
import { notFound } from "next/navigation";
import { InvestigationLandingProps } from "./layout";
import AuthDialogs from "@/components/auth/AuthDialogs";
import SignOut from "@/components/auth/buttons/SignOut";
import {
  getAuthCookies,
  getUserFromJwt,
} from "@/components/auth/serverHelpers";
import Link from "next/link";

const MockInvestigations: { [key: string]: string } = {
  "coloring-the-universe": "Coloring the Universe",
};

const InvestigationLanding: FunctionComponent<InvestigationLandingProps> = ({
  params: { investigation },
}) => {
  const title = MockInvestigations[investigation];

  if (!title) {
    notFound();
  }

  const { jwt, status } = getAuthCookies();
  const user = getUserFromJwt(jwt);

  // if (jwt) redirect(`/${investigation}/first-page`);

  return (
    <>
      <h1>{title}</h1>
      {user && (
        <>
          <p>User: {JSON.stringify(user)}</p>
          {status && <p>Status: {status}</p>}
          <Link href={`/${investigation}/first-child`}>
            Start investigation
          </Link>
          {/* @ts-expect-error Server Component */}
          <SignOut redirectTo={`/${investigation}`} />
        </>
      )}
      <AuthDialogs isAuthenticated={!!jwt} />
    </>
  );
};

export default InvestigationLanding;
