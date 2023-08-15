import { TUser } from "src/shared/types"

export type TSelectedUsers = {
  selectedUsers: TUser[];
  onRemoveSelectedUser: (rank: number) => void
  onRemoveAllSelected: () => void
}