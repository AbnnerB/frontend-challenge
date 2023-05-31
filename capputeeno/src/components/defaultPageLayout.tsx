"use client";

import { styled } from "styled-components";

export const DefaultPageLayout = styled.div`
  padding: 12px 24px;
  min-height: 100vh;
  background-color: var(--bg-prymary);

  @media screen and (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    padding: 34px 168px;
  }
`;
