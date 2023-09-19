"use server";

import { revalidatePath } from "next/cache";
import { graphql } from "@/gql/public-schema";
import { mutateAPI } from "@/lib/fetch";

// https://graphql-authentication.jamesedmonston.co.uk/usage/authentication#activate-user
const Mutation = graphql(`
  mutation ActivateUser($code: String!, $id: String!) {
    activateUser(code: $code, id: $id)
  }
`);

export async function activate(
  code: string,
  id: string,
  pathToRevalidate?: string
) {
  const { data, error } = await mutateAPI({
    query: Mutation,
    variables: {
      code: code as string, // safe to assert since doActivation won't run if null
      id: id as string, // safe to assert since doActivation won't run if null
    },
  });

  if (data?.activateUser) {
    if (pathToRevalidate) {
      revalidatePath(pathToRevalidate);
    }
    return data;
  } else if (error) {
    throw new Error(error.message);
  }
}
