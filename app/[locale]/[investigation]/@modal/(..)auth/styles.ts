"use client";

import styled from "styled-components";
import { token } from "@rubin-epo/epo-react-lib/styles";

export const AuthContainer = styled.div`
  color: var(--neutral80, #404040);
  background-color: var(--white, #fff);
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  padding: var(--PADDING_LARGE, 100px) var(--PADDING_SMALL, 20px);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  @container contentModal (min-width: ${token("BREAK_LARGE_TABLET_MIN")}) {
    height: unset;
    max-width: 70ch;
    position: static;
    padding: var(--PADDING_MEDIUM, 40px);
  }
`;
