import styled, { css } from 'styled-components';

import theme from 'public/styles/theme';

import { TLabelProps, TWrapperProps } from './types';

export const RadioWrapper = styled.div(
  ({ direction }: TWrapperProps) => css`
    display: flex;
    flex-flow: ${direction} wrap;
    row-gap: 0.5rem;
    column-gap: 3rem;

    font-size: 0.875rem;
  `,
);

export const Label = styled.label(
  ({ isChecked, disabled, boldSelectedValue }: TLabelProps) => css`
    position: relative;

    display: flex;
    align-items: center;

    font-weight: ${boldSelectedValue && isChecked ? 'bold' : 'normal'};

    cursor: pointer;

    input {
      position: absolute;
      left: 0;

      width: 1rem;
      height: 1rem;
      margin: 0;

      cursor: pointer;

      opacity: 0;
    }

    &::before {
      box-sizing: border-box;

      display: block;

      width: 1rem;
      min-width: 1rem;
      height: 1rem;
      margin-right: 0.8rem;

      content: '';

      border: ${isChecked
        ? `4px solid ${theme.colors.blue_500}`
        : `1px solid ${theme.colors.grey_500}`};
      border-radius: 50%;
    }

    ${disabled &&
    css`
      color: ${theme.colors.grey_300};

      cursor: default;

      > input {
        cursor: default;
      }

      &::before {
        border: 1px solid ${theme.colors.grey_300};
      }
    `}
  `,
);