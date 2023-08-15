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

import { Score, TooltipText } from "./styled";
import { TChart } from "./types";
import { Icon } from "../icon";

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<number, NameType>) => {
  if (active && payload?.length) {
    return (
      <TooltipText>
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
  let data: { string: number }[] = [];
  let range = { min: 0, max: 0 };

  const config = chart.map((item) => {
    data = item.data.map((history, i) => {
      if (history?.rating > range.max) range.max = history?.rating;
      if (history?.rating < range.min) range.min = history?.rating;
      return {
        ...data[i],
        [item.name]: history?.rating ?? 0,
      };
    });

    return {
      dataKey: item.name,
      color: item.color,
    };
  });

  range = {
    min: Math.min(...data.map((el) => Object.values(el)).flat()),
    max: Math.max(...data.map((el) => Object.values(el)).flat()),
  };

  return (
    <ResponsiveContainer data-testid="reviews-chart">
      <LineChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis
          dataKey="date"
          tick={{ fill: theme.colors.grey_500, fontSize: 13 }}
        />

        <YAxis
          tickCount={6}
          type="number"
          padding={{ top: 25 }}
          tick={{ stroke: "white", strokeWidth: 0.5 }}
          domain={[
            range.min - (range.min % 100),
            range.max - (range.max % 100) + 100,
          ]}
        />

        <Tooltip content={CustomTooltip} />

        {config?.map(({ dataKey, color }, i) => (
          <Line
            key={i}
            type="monotone"
            dataKey={dataKey}
            stroke={color}
            dot={{ stroke: color, strokeWidth: 2 }}
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
