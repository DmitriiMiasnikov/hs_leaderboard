export type TNumber = {
  count: number;
  x: number;
  y: number;
};

export type TCustomAxisTick = {
  payload: { value: number };
  x: number;
  y: number;
};

export type TChartData = { date: string; rating: number };

export type TChart = {
  chart: TChartData[][];
};