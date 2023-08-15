import styled, { css } from "styled-components";

export const HomePageWrapper = styled.div(
  ({ theme: { headerHeight, footerHeight } }) => css`
    display: flex;
    height: calc(100vh - ${headerHeight} - ${footerHeight} - 1rem);
  `
);

export const ChartWrapper = styled.div`
  padding-left: 1rem;
  width: calc(100vw - 22rem);
  height: 100%;
`;

export const RadioWrapper = styled.div`
  padding: 1rem 4rem;
`;
