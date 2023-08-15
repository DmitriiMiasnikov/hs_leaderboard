export type TChartData = { date: string; rating: number };

export type TChart = {
  chart: { color: string, data: TChartData[] }[]
};