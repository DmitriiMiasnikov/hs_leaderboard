import styled from "styled-components";

export const UsersListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  width: 25%;
  min-width: 20rem;
`;

export const UserItem = styled.div`
padding: 0.25rem 0.5rem;
display: flex;
justify-content: space-between;
  font-size: 1.25rem;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
