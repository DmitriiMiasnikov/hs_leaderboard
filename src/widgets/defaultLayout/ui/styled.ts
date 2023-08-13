import styled, { css } from "styled-components";

export const DefaultLayoutWrapper = styled.div(
  ({ theme: { colors } }) => css`
    min-height: 100vh;
    width: 100%;
    background-color: ${colors.black};
  `
);

export const Header = styled.header(
  ({ theme: { headerHeight } }) => css`
    height: ${headerHeight};
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `
);

export const Logo = styled.div(
  ({ theme: { colors } }) => css`
    display: flex;
    padding: 0 2rem;
    gap: 0.75rem;
    color: ${colors.white};
    font-size: 1.25rem;
  `
);

export const PageContent = styled.div(
  ({ theme: { headerHeight, contentWidth } }) => css`
    margin: 0 auto;
    min-height: calc(100vh - ${headerHeight} - 1rem);
    max-width: ${contentWidth};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem 2rem 0;
  `
);

export const Content = styled.div(
  ({ theme: { headerHeight, contentWidth, footerHeight } }) => css`
    min-height: calc(
      100vh - ${headerHeight} - ${footerHeight} - 1rem
    );
    max-width: ${contentWidth};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `
);

export const Footer = styled.footer(
  ({ theme: { colors, footerHeight } }) => css`
    height: ${footerHeight};
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5rem;
    color: ${colors.white};
  `
);
