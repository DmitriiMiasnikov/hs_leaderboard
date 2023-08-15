import styled, { css } from "styled-components";

export const HomePageWrapper = styled.div(
  ({ theme: { headerHeight, footerHeight } }) => css`
    display: flex;
    height: calc(100vh - ${headerHeight} - ${footerHeight} - 1rem);
    gap: 1rem;
  `
);

export const ChartWrapper = styled.div`
  width: 45rem;
  height: 30rem;
`