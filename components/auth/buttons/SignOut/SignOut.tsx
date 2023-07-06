import { redirect } from "next/navigation";
import Button from "@rubin-epo/epo-react-lib/Button";
import { deleteAuthCookies } from "@/components/auth/serverHelpers";

export default async function SignOut({ redirectTo }: { redirectTo: string }) {
  async function signOut() {
    "use server";

    deleteAuthCookies();
    redirect(redirectTo);
  }

  return (
    <form
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      action={signOut}
    >
      <Button>Sign out</Button>
    </form>
  );
}
