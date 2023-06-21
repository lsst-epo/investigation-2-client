import { redirect } from "next/navigation";
import { deleteAuthCookies } from "../helpers";

export default function SignOut({ redirectTo }: { redirectTo: string }) {
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
      <button>Sign out</button>
    </form>
  );
}
