import { TSelectedUser } from "src/shared/types"

export type TSelectedUsers = {
  selectedUsers: TSelectedUser[];
  onRemoveSelectedUser: (rank: number) => void
  onRemoveAllSelected: () => void
}