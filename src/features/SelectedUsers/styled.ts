import styled, { css } from "styled-components";

export const SelectedUsersWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SelectedUserItem = styled.div(
  ({ theme: { colors } }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2.5rem;
    padding: 0 2rem 0 1rem;
    font-size: 1.25rem;

    background-color: ${colors.blue_300};
    border-radius: 0.35rem;

    cursor: pointer;
    transition: 0.1s opacity;

    &:hover {
      opacity: 0.8;
    }

    &:not(:first-child) {
      border-top: 1px solid ${colors.grey_300};
    }
  `
);

export const UserName = styled.div`
  display: flex;

  > div {
    width: 3rem;
  }
`;
