import styled, { css } from 'styled-components';

export const Score = styled.div<{ color?: string }>(
  ({ color }) => css`
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    font-size: 1rem;
    font-weight: bold;
    color: ${color};
  `,
);

export const TooltipText = styled.div(
  ({ theme: { colors } }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    border-radius: 1rem;

    padding: 0.5rem;

    font-size: 0.8rem;
    color: ${colors.grey_500};

    background: ${colors.white};
    border: 1px solid ${colors.grey_500};
  `,
);

export const TooltipLabel = styled.div(
  ({ theme: { colors } }) => css`
  color: ${colors.black};
  font-weight: bold;
  font-size: 1rem;
`)