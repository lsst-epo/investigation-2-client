import { FunctionComponent, useContext } from "react";
import { useTranslation } from "react-i18next";
import { graphql, useFragment, FragmentType } from "@/gql/public-schema";
import ProgressContext from "@/contexts/Progress";
import QuestionFactory from "@/components/factories/QuestionFactory";
import * as Styled from "./styles";

const Fragment = graphql(`
  fragment QuestionsBlock on contentBlocks_questionBlock_BlockType {
    id
    questionEntries {
      __typename
      id
      ...QuestionFactory
    }
  }
`);

interface QuestionsContentBlockProps {
  data: FragmentType<typeof Fragment>;
  isInteraction?: boolean;
}

const QuestionsContentBlock: FunctionComponent<QuestionsContentBlockProps> = ({
  isInteraction = false,
  ...props
}) => {
  const data = useFragment(Fragment, props.data);

  const { t } = useTranslation();
  const { questions } = useContext(ProgressContext);

  return (
    <section className="content-block">
      {!isInteraction && <Styled.Heading>{t("page.questions")}</Styled.Heading>}
      <Styled.QuestionList
        style={{
          "--list-background-color": isInteraction && "#E6FFE6",
        }}
      >
        {!!data.questionEntries?.length &&
          data.questionEntries.map((question) => {
            const { id } = question;
            const questionIndex = questions.indexOf(id);

            return question?.__typename === "questions_default_Entry" ? (
              <QuestionFactory
                key={question.id}
                data={question}
                number={questionIndex + 1}
              />
            ) : null;
          })}
      </Styled.QuestionList>
    </section>
  );
};

QuestionsContentBlock.displayName = "ContentBlock.Questions";

export default QuestionsContentBlock;
