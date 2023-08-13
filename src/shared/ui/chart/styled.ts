import styled, { css } from 'styled-components';

import StarAxis from 'public/images/icons/review-star.svg';

export const Score = styled.div(
  ({ theme: { colors } }) => css`
    display: flex;

    font-size: 0.9rem;
    font-weight: bold;
    color: ${colors.orange_500};
  `,
);

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StarAxisIcon = styled(StarAxis)``;

export const TooltipText = styled.div(
  ({ theme: { colors } }) => css`
    display: flex;
    align-items: center;

    padding: 0.5rem;

    font-size: 0.8rem;
    color: ${colors.grey_500};

    background: ${colors.white};
    border: 1px solid ${colors.grey_500};
  `,
);