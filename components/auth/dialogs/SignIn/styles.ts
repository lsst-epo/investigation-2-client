import styled from "styled-components";
import Link from "next/link";
import Submit from "@/components/form/Submit";
import AuthButtons from "@/components/auth/buttons";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--PADDING_SMALL, 20px);
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--PADDING_SMALL, 20px);
  padding: 0;
  margin: 0;
`;

export const Instructions = styled.legend`
  & + * {
    margin-block-start: var(--PADDING_SMALL, 20px);
  }
`;

export const GoogleSSOButton = styled(AuthButtons.GoogleSSO)``;

export const FacebookSSOButton = styled(AuthButtons.FacebookSSO)``;
export const Label = styled.label`
  font-weight: bold;

  & > input {
    font-weight: normal;
  }
`;

export const ForgetCreateContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ForgetCreateLink = styled(Link)`
  color: var(--turquoise70, #058b8c);
  font-weight: 700;
  font-size: 80%;
  text-decoration: none;

  &:hover,
  &:focus,
  &:focus-visible,
  &.focus-visible {
    text-decoration: underline;
  }
`;

export const SignInButton = styled(Submit)`
  width: 100%;
`;
