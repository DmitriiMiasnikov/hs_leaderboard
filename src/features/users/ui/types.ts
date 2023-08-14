import { TUser } from "src/shared/types"

export type TUsersList = {
  users: TUser[];
  onSelectUser: (user: TUser) => void
}