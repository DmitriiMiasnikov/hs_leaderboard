import styled, { css } from "styled-components";

export const HomePageWrapper = styled.div(
  ({ theme: { headerHeight, footerHeight } }) => css`
    display: flex;
    height: calc(100vh - ${headerHeight} - ${footerHeight} - 1rem);
  `
);
