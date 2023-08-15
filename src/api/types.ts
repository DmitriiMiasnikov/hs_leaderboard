export type THistoryData = {
  rank: number;
  name: string;
  rankChanges: { rating: number; date: string }[];
}