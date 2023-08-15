export type TUser = {
  name: string,
  rank: number,
  rating: number
}

export type TSelectedUser = TUser & {
  index: number;
}