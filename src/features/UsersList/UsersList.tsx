"use client";

import React, { FC, useState } from "react";
import { TUsersList } from "./types";

import { UsersListWrapper, ListWrapper, UserItem, UserName } from "./styled";
import SelectedUsers from "../SelectedUsers";
import { chartColors } from "src/shared/config/chartColors";
import { Input } from "src/shared/ui/Input";

const UsersList: FC<TUsersList> = ({
  users,
  selectedUsers,
  onSelectUser,
  onRemoveSelectedUser,
  onRemoveAllSelected,
  onChangeUsersList,
}) => {
  const [inputValue, setInputValue] = useState("");

  const onChangeInputValue = (value: string) => {
    setInputValue(value);
    onChangeUsersList(value);
  };

  return (
    <UsersListWrapper>
      <Input value={inputValue} onChange={onChangeInputValue} placeholder='search by name' $mb={8} />

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
              onClick={() =>
                !isSelected && !isMaximumCharts
                  ? onSelectUser(user)
                  : onRemoveSelectedUser(user.rank)
              }
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
