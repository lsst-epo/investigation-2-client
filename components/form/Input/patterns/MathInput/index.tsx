import { FunctionComponent, HTMLProps } from "react";
import { useTranslation } from "react-i18next";
import { useNumberFormat } from "@react-input/number-format";
import * as Styled from "./styles";

interface MathInputProps extends HTMLProps<HTMLInputElement> {
  condensed?: boolean;
}

const stepToFractionDigits = (step: string | number) => {
  const parsed = typeof step === "string" ? parseFloat(step) : step;
  return (1 / parsed).toString().length - 1;
};

const MathInput: FunctionComponent<MathInputProps> = ({
  value,
  placeholder,
  condensed = false,
  step,
  ...props
}) => {
  const {
    i18n: { language },
  } = useTranslation();

  const options = {
    locales: language,
    maximumFractionDigits: step ? stepToFractionDigits(step) : undefined,
  };

  const inputRef = useNumberFormat(options);

  const staticWidth = 6;
  const valueWidth = String(value).length;
  const placeholderWidth = placeholder?.length || 0;
  const width = Math.max(staticWidth, valueWidth, placeholderWidth);

  return (
    <Styled.MathInput
      {...props}
      ref={inputRef}
      placeholder={placeholder}
      value={value?.toString() ?? ""}
      style={{
        width: `calc(${width}ch + calc(var(--input-padding) * 2))`,
        height: condensed && "2em",
      }}
    />
  );
};

MathInput.displayName = "Form.Input.Math";

export default MathInput;
