import React, { FC } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from "recharts";
import { NameType } from "recharts/types/component/DefaultTooltipContent";

import theme from "public/styles/theme";

import { Score, TooltipText, TooltipLabel } from "./styled";
import { TChart } from "./types";
import { dateAndTimeFormat } from "src/shared/helpers";

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<number, NameType>) => {
  if (active && payload?.length) {
    return (
      <TooltipText>
        <TooltipLabel>{label}</TooltipLabel>
        {payload.map(({ value: payloadValue, color, dataKey }, i) => {
          return payloadValue && payloadValue >= 0 ? (
            <Score key={i} color={color}>
              <div>{dataKey}</div>
              {payloadValue}
            </Score>
          ) : null;
        })}
      </TooltipText>
    );
  }

  return null;
};

const Chart: FC<TChart> = ({ chart }) => {
  let data: { date: string; string: number }[] = [];
  let range = { min: 0, max: 0 };

  const config = chart.map((item, chartIndex) => {
    data = item.data.map((history, i) => {
      if (chartIndex === 0 && i === 0) range = { min: history.rating, max: history.rating };
      if (history?.rating > range.max) range.max = history?.rating;
      if (history?.rating < range.min) range.min = history?.rating;
      return {
        ...data[i],
        date: dateAndTimeFormat(history.date),
        [item.name]: history?.rating ?? 0,
      };
    });

    return {
      dataKey: item.name,
      color: item.color,
    };
  });

  return (
    <ResponsiveContainer data-testid="reviews-chart">
      <LineChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis
          dataKey="date"
          tick={{ fill: theme.colors.grey_500, fontSize: 12 }}
        />

       <YAxis
          tickCount={6}
          type="number"
          padding={{ top: 25, bottom: 25 }}
          tick={{ stroke: "white", strokeWidth: 0.5 }}
          domain={[
            range.min - (range.min % 500),
            range.max - (range.max % 500) + 500,
          ]}
        />

        <Tooltip content={CustomTooltip} />

        {config?.map(({ dataKey, color }, i) => (
          <Line
            key={i}
            type="monotone"
            dataKey={dataKey}
            stroke={color}
            dot={false}
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
