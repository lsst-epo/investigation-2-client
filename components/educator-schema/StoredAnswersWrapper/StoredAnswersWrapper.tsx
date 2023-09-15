import { StoredAnswersProvider } from "@/components/answers/StoredAnswersContext";
import { queryAPI } from "@/lib/fetch";
import { getAuthCookies } from "@/components/auth/serverHelpers";
import { graphql } from "@/gql/educator-schema";
import type { Query } from "@/gql/educator-schema/graphql";
import type { InvestigationId } from "@/types/answers";

export default async function StoredAnswersWrapper({
  investigationId,
  children,
}: {
  investigationId: InvestigationId;
  children: React.ReactNode;
}) {
  const { craftUserId } = getAuthCookies();

  const { data } = await queryAPI({
    query: StoredAnswersQuery,
    variables: {
      userId: craftUserId,
      investigationId,
    },
  });

  // TODO: replace temporary type assertion due to codegen not typing response correctly
  // replace in <StoredAnswersProvider> as well
  const answers = data?.answers as Query["answers"];

  return (
    <StoredAnswersProvider answers={answers} investigationId={investigationId}>
      {children}
    </StoredAnswersProvider>
  );
}

const StoredAnswersQuery = graphql(`
  query StoredAnswers($userId: ID, $investigationId: ID) {
    answers(userId: $userId, investigationId: $investigationId) {
      data
      questionId
      id
    }
  }
`);
