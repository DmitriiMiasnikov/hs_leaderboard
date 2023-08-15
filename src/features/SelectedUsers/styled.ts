import styled, { css } from "styled-components";

export const SelectedUsersWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RemoveSelectButton = styled.div(
  ({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${colors.grey_800}90;

    cursor: pointer;
    transition: 0.1s opacity;

    &:hover {
      opacity: 0.8;
    }

    height: 2.5rem;
    padding: 0 2rem 0 1rem;
    font-size: 1rem;

    border-radius: 0.5rem 0.5rem 0 0;
  `
);

export const SelectedUserItem = styled.div<{ color: string }>(
  ({ theme: { colors }, color }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2.5rem;
    padding: 0 2rem 0 1rem;
    font-size: 1.25rem;

    background-color: ${colors.grey_900};
    color: ${color};

    cursor: pointer;
    transition: 0.1s opacity;

    &:hover {
      opacity: 0.8;
    }

    &:not(:first-child) {
      border-top: 1px solid ${colors.grey_300};
    }

    &:last-child {
      border-radius: 0 0 0.5rem 0.5rem;
    }
  `
);

export const UserName = styled.div`
  display: flex;

  > div {
    width: 3rem;
  }
`;
