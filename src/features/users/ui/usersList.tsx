"use client";

import React, { FC } from "react";
import { TUsersList } from "./types";

import { UsersListWrapper, UserItem } from "./styled";

const UsersList: FC<TUsersList> = ({ users, onSelectUser }) => {
  return (
    <UsersListWrapper>
      {users.map((user) => {
        const { name, rank, rating } = user;
        return (
          <UserItem key={name} onClick={() => onSelectUser(user)}>
            <span>{rank}: {name}</span> <span>{rating}</span>
          </UserItem>
        );
      })}
    </UsersListWrapper>
  );
};

export default UsersList;
