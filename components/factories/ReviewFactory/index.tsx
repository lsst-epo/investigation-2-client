import { ComponentType, FunctionComponent } from "react";
import * as Review from "@/components/questions/Review";

export interface ReviewProps {
  id: string;
  type: string;
  number: number;
  config: any;
}

const QUESTION_MAP: Record<string, ComponentType<any>> = {
  text: Review.Text,
  select: Review.Select,
  widget: Review.Widget,
  textarea: Review.Text,
  multiPart: Review.Inline,
  tabular: Review.Tabular,
};

const ReviewFactory: FunctionComponent<ReviewProps> = ({
  type,
  config,
  ...props
}) => {
  const Review = QUESTION_MAP[type];

  if (!Review) {
    console.error(`"${type}" is not a valid review type.`);
    return null;
  }

  return <Review {...{ ...props, ...config }} />;
};

ReviewFactory.displayName = "Factory.Review";

export default ReviewFactory;
