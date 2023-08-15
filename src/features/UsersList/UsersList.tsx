"use client";

import React, { FC } from "react";
import { TUsersList } from "./types";

import { UsersListWrapper, ListWrapper, UserItem, UserName } from "./styled";
import SelectedUsers from "../SelectedUsers";

const UsersList: FC<TUsersList> = ({
  users,
  selectedUsers,
  onSelectUser,
  onRemoveSelectedUser,
}) => {
  return (
    <UsersListWrapper>
      <ListWrapper selected={selectedUsers.length}>
        {users.map((user) => {
          const { name, rank, rating } = user;
          const isSelected = selectedUsers.some(
            (selected) => selected.rank === rank
          );
          return (
            <UserItem
              key={name}
              onClick={() => !isSelected ? onSelectUser(user) : onRemoveSelectedUser(user.rank)}
              isSelected={isSelected}
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
        selectedUsers={selectedUsers}
      />
    </UsersListWrapper>
  );
};

export default UsersList;
