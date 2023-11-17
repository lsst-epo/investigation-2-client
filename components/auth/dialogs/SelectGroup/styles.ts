import styled from "styled-components";
import { token } from "@rubin-epo/epo-react-lib/styles";
import Image from "next/image";
import Link from "next/link";

export const SelectGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--PADDING_SMALL, 20px);
  height: 100%;

  @container contentModal (min-width: ${token("BREAK_LARGE_TABLET_MIN")}) {
    height: unset;
  }
`;

export const SelectGroupTitle = styled.h2`
  width: 100%;
`;

export const LinkContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--PADDING_SMALL, 20px);
  max-width: 50ch;
  margin-inline: auto;
`;

const GroupLink = styled(Link)`
  background-color: var(--link-background-color, transparent);
  border-radius: 15px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-basis: 50%;
  gap: var(--PADDING_SMALL, 20px);
  padding: var(--PADDING_MEDIUM, 40px);
  text-decoration: none;
  font-weight: bold;
  white-space: nowrap;

  &:hover,
  &:focus,
  &:focus-visible {
    box-shadow: inset 0 0 0 4px var(--white);
    outline: 2px solid var(--link-outline-color, transparent);
    outline-offset: -2px;
  }
`;

export const StudentLink = styled(GroupLink)`
  --link-background-color: #dff6f6;
  --link-outline-color: var(--turquoise85, #12726c);
`;
export const EducatorLink = styled(GroupLink)`
  --link-background-color: #fbe8cf;
  --link-outline-color: #db5400;
`;

export const LinkImage = styled(Image)`
  height: 4em;
`;

export const SignInLink = styled(Link)`
  display: inline-block;
  color: var(--turquoise85, #12726c);
  font-weight: bold;
  text-decoration: none;

  margin-block-start: auto;

  &:hover,
  &:focus,
  &:focus-visible {
    text-decoration: underline;
  }

  @container contentModal (min-width: ${token("BREAK_LARGE_TABLET_MIN")}) {
    margin: 0;
  }
`;
