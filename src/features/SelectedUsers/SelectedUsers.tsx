import React, { FC } from "react";

import { TSelectedUsers } from "./types";
import { SelectedUsersWrapper, SelectedUserItem } from "./styled";
import { Button, Icon } from "src/shared/ui";

const SelectedUsers: FC<TSelectedUsers> = ({ selectedUsers, onRemoveSelectedUser }) => {
  return (
    <SelectedUsersWrapper>
      {selectedUsers.map((user) => {
        const { name, rank, rating } = user;
        return (
          <SelectedUserItem key={rank} onClick={() => onRemoveSelectedUser(rank)}>
            <span>
              {rank}: {name} - {rating}
            </span>
            <Icon name="close" $size={24} $color='white' $ml={12} />
          </SelectedUserItem>
        );
      })}
    </SelectedUsersWrapper>
  );
};

export default SelectedUsers;
