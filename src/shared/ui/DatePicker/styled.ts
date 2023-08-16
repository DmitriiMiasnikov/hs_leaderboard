import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

import theme from 'public/styles/theme';

import { TDatePickerFieldProps } from './types';
import { getMarginStyles, TMargin, TWidth } from 'src/shared/types';

export const DatePickerTooltip = styled.div`
  z-index: 30;

  .react-datepicker {
    width: min-content;
    padding: 2rem 1.25rem 1.5rem;

    font-family: Gilroy, sans-serif;

    border: 0;
    border-radius: 0;
    box-shadow: 0 0 0.5rem ${transparentize(0.5, theme.colors.blue_800)};

    &__children-container {
      width: auto;
    }

    &__triangle {
      display: none;
    }

    &__navigation {
      top: 1.65rem;
      z-index: 3;

      span::before {
        border-color: ${theme.colors.black};
        border-width: 2px 2px 0 0;
      }

      &--previous {
        left: 1.75rem;
      }

      &--next {
        right: 1.75rem;
      }
    }

    &__header {
      padding: 0;

      background-color: ${theme.colors.white};
      border: 0;
    }

    &__current-month {
      margin: 0 0 0.75rem;

      font-size: 1.1rem;
      font-weight: normal;
      text-transform: capitalize;
    }

    &__header__dropdown {
      margin: 0 0 0.5rem;

      select {
        padding: 0.1rem 0.3rem;

        font-family: Gilroy, sans-serif;
        text-transform: capitalize;
      }
    }

    &__month-dropdown-container {
      margin-right: 1rem;
    }

    &__day-names {
      text-transform: uppercase;
    }

    &__day-name {
      margin: 0.25rem;
    }

    &__day {
      width: 2.2rem;
      height: 2.2rem;
      margin: 0.1rem;

      line-height: 2.2rem;

      border-radius: 50%;

      &:hover {
        background-color: ${transparentize(0.5, theme.colors.blue_500)};
      }

      &:nth-child(n + 6) {
        color: ${theme.colors.red_500};
      }

      &--selected {
        font-weight: normal;
        color: ${theme.colors.black};

        background-color: ${theme.colors.blue_500}80;
      }

      &--keyboard-selected {
        background-color: ${theme.colors.blue_500};
      }

      &--in-range {
        background-color: ${theme.colors.blue_500}80;

        &:hover {
          background-color: ${transparentize(0.2, theme.colors.blue_500)};
        }
      }

      &--range-start,
      &--range-end {
        color: ${theme.colors.white};

        background-color: ${theme.colors.blue_500};
      }

      &--disabled {
        color: ${theme.colors.grey_300};

        pointer-events: none;

        &:nth-child(n + 6) {
          color: ${theme.colors.grey_300};
        }
      }
    }
  }
`;

export const DatePickerWrapper = styled.div<TWidth & TMargin>(
  ({ $width, ...props }) => css`
    position: relative;

    width: ${$width};
    height: 2.5rem;

    border: 1px solid ${theme.colors.grey_300};

    ${getMarginStyles(props)};
  `,
);

export const DatePickerField = styled.button(
  ({ empty }: TDatePickerFieldProps) => css`
    z-index: 2;

    display: flex;
    align-items: center;

    width: 100%;
    height: 100%;
    padding: 0 2rem 0 1rem;

    font-size: 0.875rem;
    color: ${empty && theme.colors.grey_500};
    text-align: start;

    background-color: ${theme.colors.white};
    border: 0;

    :disabled {
      cursor: not-allowed;

      background-color: ${theme.colors.grey_50};
    }
  `,
);

export const ClearButton = styled.div`
  position: absolute;
  top: 50%;
  right: 0;

  transform: translateY(-50%);
`;
