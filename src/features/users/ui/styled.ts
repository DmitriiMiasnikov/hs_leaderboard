import styled from "styled-components";

export const UsersListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow-y: scroll;
`;

export const UserItem = styled.div`
  font-size: 1.25rem;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
