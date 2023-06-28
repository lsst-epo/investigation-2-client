import { useParams } from "next/navigation";

export function usePathToRevalidate() {
  const params = useParams();
  // on sign in, we want to revalidate data for the current route's filesystem path
  // https://nextjs.org/docs/app/api-reference/functions/revalidatePath
  return Object.keys(params)
    .map((key) => `/[${key}]`)
    .join("");
}
