import React, { FC } from "react";

import { TSelectedUsers } from "./types";
import {
  SelectedUsersWrapper,
  RemoveSelectButton,
  SelectedUserItem,
  UserName,
} from "./styled";
import { chartColors } from "src/shared/config/chartColors";

const SelectedUsers: FC<TSelectedUsers> = ({
  selectedUsers,
  onRemoveSelectedUser,
  onRemoveAllSelected,
}) => {
  return (
    <SelectedUsersWrapper>
      {selectedUsers.length > 0 && (
        <RemoveSelectButton onClick={onRemoveAllSelected}>
          remove all ({selectedUsers.length} / {chartColors.length})
        </RemoveSelectButton>
      )}
      {selectedUsers.map((user) => {
        const { name, rank, rating, index } = user;
        return (
          <SelectedUserItem
            key={rank}
            onClick={() => onRemoveSelectedUser(rank)}
            color={chartColors[index]}
          >
            <UserName>
              <div>{rank}</div> {name}
            </UserName>{" "}
            <span>{rating}</span>
          </SelectedUserItem>
        );
      })}
    </SelectedUsersWrapper>
  );
};

export default SelectedUsers;
