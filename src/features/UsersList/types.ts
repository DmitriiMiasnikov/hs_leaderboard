import { TSelectedUser, TUser } from "src/shared/types";

export type TUsersList = {
  users: TUser[];
  onSelectUser: (user: TUser) => void;
  selectedUsers: TSelectedUser[];
  onRemoveSelectedUser: (rank: number) => void;
  onRemoveAllSelected: () => void;
  onChangeUsersList: (value: string) => void;
};
