import styled, { css } from "styled-components";

export const SelectedUsersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem 1rem;
`;

export const SelectedUserItem = styled.div(
  ({ theme: { colors } }) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;

  background-color: ${colors.blue_300};
  border-radius: 0.875rem;

  cursor: pointer;
`);
