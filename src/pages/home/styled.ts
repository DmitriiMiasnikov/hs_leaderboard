import styled, { css } from "styled-components";

export const HomePageWrapper = styled.div(
  ({ theme: { headerHeight, footerHeight } }) => css`
    display: flex;
    height: calc(100vh - ${headerHeight} - ${footerHeight} - 1rem);
    gap: 1rem;
  `
);

export const ChartWrapper = styled.div`
  margin: 2rem 0 0;
  width: 45rem;
  height: 40rem;
`;
