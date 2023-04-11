import styled from "styled-components";

export const Button = styled.button`
  --button-border-color: transparent;
  background-color: var(--white, #fff);
  color: var(--black, #000);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 26px;
  height: 26px;

  &::before {
    outline: 1px solid var(--button-border-color);
    position: absolute;
    width: 100%;
    height: 100%;
    content: "";
  }

  &:hover,
  &:focus {
    --button-border-color: var(--neutral95, #1f2121);
    outline: 1px solid var(--button-border-color);
    outline-offset: -2px;
  }
`;
