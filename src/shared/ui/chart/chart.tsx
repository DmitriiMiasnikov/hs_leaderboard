import React, { FC } from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from 'recharts';
import { NameType } from 'recharts/types/component/DefaultTooltipContent';

import theme from 'public/styles/theme';

import { Score, ScoreContainer, TooltipText } from './styled';
import { TChartData, TCustomAxisTick, TNumber, TChart } from './types';
import { Icon } from '../icon';
import { CHART_COLORS } from './constants';

const Number = ({ count, x, y }: TNumber) => {
  return (
    <text id={count.toString()} x={x} y={y} fill="#A3A3A3" fontSize={13}>
      {count}
    </text>
  );
};

const CustomAxisTick = ({ x, y, payload }: TCustomAxisTick) => {
  return <Number x={x - 22} y={y + 4} count={payload.value} />;
};

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, NameType>) => {
  if (active && payload?.length) {
    return (
      <TooltipText>
        {label}:
        <ScoreContainer>
          {payload.map(({ value: payloadValue }, i) =>
            payloadValue && payloadValue >= 0 ? (
              <Score key={i}>
                <Icon name="question" $size={16} $color="orange_500" $mr={6} $ml={6} />
                {payloadValue}
              </Score>
            ) : null,
          )}
        </ScoreContainer>
      </TooltipText>
    );
  }

  return null;
};

const Chart: FC<TChart> = ({ chart }) => {
  let data: TChartData[] = [];

  const config = chart.map((item, index) => {
    const dataKey = `rating_${index}`;

    data = item.map((history, i) => ({
      ...data[i],
      [dataKey]: history?.rating ?? 0,
    }));

    return {
      dataKey,
      color: CHART_COLORS[index],
    };
  });

  return (
    <ResponsiveContainer data-testid="reviews-chart">
      <LineChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="date" tick={{ fill: theme.colors.grey_500, fontSize: 13 }} />

        <YAxis
          tickCount={6}
          type="number"
          padding={{ top: 25 }}
          tick={CustomAxisTick}
          domain={[Math.min(...chart.flat().map(({ rating }) => rating)) - 50, Math.max(...chart.flat().map(({ rating }) => rating)) + 50]}
        />

        <Tooltip content={CustomTooltip} />

        {config?.map(({ dataKey, color }, i) => (
          <Line
            key={i}
            type="monotone"
            dataKey={dataKey}
            stroke={color}
            dot={{ stroke: color, strokeWidth: 5 }}
            activeDot={{
              stroke: theme.colors.green_600,
              strokeWidth: 4,
              r: 4,
              fill: theme.colors.white,
            }}
            strokeWidth={2}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;