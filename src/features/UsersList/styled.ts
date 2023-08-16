import styled, { css } from "styled-components";

export const UsersListWrapper = styled.div`
  width: 20rem;
  min-width: 20rem;
  margin-left: 1rem;
`;

export const ListWrapper = styled.div<{ selected: number }>(
  ({ theme: { colors }, selected }) => css`
    height: calc(100% - ${(selected + 2.5) * 2.5}rem);

    display: flex;
    flex-direction: column;

    overflow-y: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 15px;
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background-color: ${colors.grey_200};
    }
  `
);

export const UserItem = styled.div<{
  isSelected: boolean;
  isDisabled: boolean;
}>(
  ({ theme: { colors }, isSelected, isDisabled }) => css`
    padding: 0.35rem 0.5rem;
    display: flex;
    justify-content: space-between;
    font-size: 1.25rem;
    cursor: ${isDisabled ? "not-allowed" : "pointer"};
    transition: 0.2s opacity, 0.2s background-color;

    background-color: ${isSelected && colors.grey_700};

    &:not(:first-child) {
      border-top: 1px solid ${colors.grey_800};
    }

    ${!isDisabled &&
    `
    &:hover {
      opacity: 0.8;
    }
    `}
  `
);

export const UserName = styled.div`
  display: flex;

  > div {
    width: 3rem;
  }
`;
