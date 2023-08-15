import React, { FC } from "react";

import { TSelectedUsers } from "./types";
import { SelectedUsersWrapper, SelectedUserItem, UserName } from "./styled";

const SelectedUsers: FC<TSelectedUsers> = ({
  selectedUsers,
  onRemoveSelectedUser,
}) => {
  return (
    <SelectedUsersWrapper>
      {selectedUsers.map((user) => {
        const { name, rank, rating } = user;
        return (
          <SelectedUserItem
            key={rank}
            onClick={() => onRemoveSelectedUser(rank)}
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
