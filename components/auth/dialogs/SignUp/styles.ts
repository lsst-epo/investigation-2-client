import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--PADDING_SMALL, 20px);
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--PADDING_SMALL, 20px);
`;

export const Label = styled.label`
  font-weight: bold;
  line-height: 1.5;

  & > input {
    font-weight: normal;
  }
`;

export const Instructions = styled.div`
  color: #313333;
  font-weight: normal;
  line-height: 1.5;
`;

export const ButtonGroup = styled.div`
  display: grid;
  gap: var(--PADDING_SMALL, 20px);
  grid-template-columns: 1fr 1fr;
`;
