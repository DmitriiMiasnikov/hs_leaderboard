import { getMarginStyles, TMargin } from "src/shared/types";
import styled, { css } from "styled-components";

export const InputWrapper = styled.div<TMargin>(
  (props) => css`
  position: relative;
  height: 2.5rem;

  ${getMarginStyles(props)}
`)

export const InputField = styled.input(
  ({ theme: { colors }}) => css`
    border: 0;
    height: 100%;
    width: 100%;
    background-color: ${colors.grey_900};
    border-radius: 0.5rem;
    padding: 0 1rem;
    color: ${colors.white};
  `
);

export const CloseButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 0.5rem;
  transform: translate(0, -50%);
`