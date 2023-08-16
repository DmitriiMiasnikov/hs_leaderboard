import styled, { css } from "styled-components";

export const HomePageWrapper = styled.div(
  ({ theme: { headerHeight, footerHeight } }) => css`
    display: flex;
    height: calc(100vh - ${headerHeight} - ${footerHeight} - 1rem);
  `
);

export const RightCol = styled.div`
  padding-left: 1rem;
  width: calc(100vw - 22rem);
  height: 100%;
`;

export const ChartWrapper = styled.div`
  padding-left: 1rem;
  width: 100%;
  height: calc(100% - 2.5rem);
`;

export const RadioWrapper = styled.div`
  display: flex;
  align-items: center;

  height: 2.5rem;
  padding-left: 4.75rem;
`;
