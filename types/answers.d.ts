type QuestionId = string;

export type InvestigationId = string | null | undefined;

export type TextInput = string;
export type SelectInput = string;
export type MultiselectInput = Array<SelectInput>;
export type WidgetInput = Record<string, any>;
export type NumberInput = number;

export type InlineQuestionData = Record<
  QuestionId,
  TextInput | SelectInput | MultiselectInput
>;

export type AnswerData =
  | TextInput
  | SelectInput
  | MultiselectInput
  | WidgetInput
  | InlineQuestionData
  | NumberInput;

export interface Answer {
  data: AnswerData;
  id?: string;
  questionId?: QuestionId;
}

export type Answers = {
  [key: QuestionId]: Answer;
};
