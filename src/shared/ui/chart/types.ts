export type TChartData = { date: string; rating: number };

export type TChart = {
  chart: { name: string; color: string, data: TChartData[] }[]
};