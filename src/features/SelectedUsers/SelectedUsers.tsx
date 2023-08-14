import React, { FC } from "react";

import { TSelectedUsers } from "./types";
import { SelectedUsersWrapper, SelectedUserItem } from "./styled";
import { Button, Icon } from "src/shared/ui";

const SelectedUsers: FC<TSelectedUsers> = ({ selectedUsers }) => {
  return (
    <SelectedUsersWrapper>
      {selectedUsers.map((user) => {
        const { name, rank, rating } = user;
        return (
          <SelectedUserItem>
            <span>
              {rank}: {name} - {rating}
            </span>
            <Button
              $ml={12}
              variant="hollow"
              iconType="only"
              icon={<Icon name="close" />}
            />
          </SelectedUserItem>
        );
      })}
    </SelectedUsersWrapper>
  );
};

export default SelectedUsers;
