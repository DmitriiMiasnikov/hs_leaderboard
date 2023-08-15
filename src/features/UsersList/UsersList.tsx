"use client";

import React, { FC } from "react";
import { TUsersList } from "./types";

import { UsersListWrapper, ListWrapper, UserItem, UserName } from "./styled";
import SelectedUsers from "../SelectedUsers";
import { chartColors } from "src/shared/config/chartColors";

const UsersList: FC<TUsersList> = ({
  users,
  selectedUsers,
  onSelectUser,
  onRemoveSelectedUser,
  onRemoveAllSelected
}) => {
  return (
    <UsersListWrapper>
      <ListWrapper selected={selectedUsers.length}>
        {users.map((user) => {
          const { name, rank, rating } = user;
          const isSelected = selectedUsers.some(
            (selected) => selected.rank === rank
          );
          const isMaximumCharts = selectedUsers.length >= chartColors.length;
          return (
            <UserItem
              key={name}
              onClick={() => !isSelected && !isMaximumCharts ? onSelectUser(user) : onRemoveSelectedUser(user.rank)}
              isSelected={isSelected}
              isDisabled={isMaximumCharts && !isSelected}
            >
              <UserName>
                <div>{rank}</div> {name}
              </UserName>{" "}
              <span>{rating}</span>
            </UserItem>
          );
        })}
      </ListWrapper>

      <SelectedUsers
        onRemoveSelectedUser={onRemoveSelectedUser}
        onRemoveAllSelected={onRemoveAllSelected}
        selectedUsers={selectedUsers}
      />
    </UsersListWrapper>
  );
};

export default UsersList;
