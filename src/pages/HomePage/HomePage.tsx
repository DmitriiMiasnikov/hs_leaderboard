"use client";

import { useState } from "react";
import { UsersList } from "src/features/UsersList";
import { getHistory } from "src/api";
import { THistoryData } from "src/api/types";
import { TSelectedUser, TUser } from "src/shared/types";
import { Chart } from "src/shared/ui/Chart";
import { DefaultLayout } from "src/widgets/DefaultLayout";

import { HomePageWrapper, ChartWrapper, RadioWrapper } from "./styled";
import { chartColors } from "src/shared/config/chartColors";
import { Radio } from "src/shared/ui/Radio";

export const historyType = [
  { label: "by hours", value: "hour" },
  { label: "by days", value: "day" },
];

const HomePage = ({ users }: { users: TUser[] }) => {
  const [selectedUsers, setSelectedUsers] = useState<TSelectedUser[]>([]);
  const [chart, setChart] = useState<(THistoryData & { index: number })[]>([]);
  const [type, setType] = useState("day");

  const onSelectUser = async (user: TUser) => {
    let index: number = 0;
    for (let i = 0; i < chartColors.length; i++) {
      if (selectedUsers.some((el) => el.index === i)) {
        continue;
      } else {
        index = i;
        break;
      }
    }
    const newSelectedUsers = [...selectedUsers, { ...user, index }].sort(
      (a, b) => a.rank - b.rank
    );
    const history = await getHistory({
      ids: newSelectedUsers.map(({ rank }) => rank),
      type,
    });
    setSelectedUsers(newSelectedUsers);
    setChart(history.map((el, index) => ({ ...el, index })));
  };

  const onRemoveSelectedUser = (rank: number) => {
    setSelectedUsers((prev) => prev.filter((user) => user.rank !== rank));
    setChart((prev) => prev.filter((data) => data.rank !== rank));
  };

  const onRemoveAllSelected = () => {
    setSelectedUsers([]);
    setChart([]);
  };

  const onChangeType = async (value: string) => {
    setType(value);
    const history = await getHistory({
      ids: selectedUsers.map(({ rank }) => rank),
      type: value,
    });
    setChart(history.map((el, index) => ({ ...el, index })));
  };

  return (
    <DefaultLayout>
      <HomePageWrapper>
        <UsersList
          users={users}
          onSelectUser={onSelectUser}
          selectedUsers={selectedUsers}
          onRemoveSelectedUser={onRemoveSelectedUser}
          onRemoveAllSelected={onRemoveAllSelected}
        />
        <ChartWrapper>
          <RadioWrapper>
            <Radio
              options={historyType}
              name="unitKind"
              direction="row"
              selected={type}
              onChange={onChangeType}
            />
          </RadioWrapper>
          <Chart
            chart={chart.map(({ rankChanges, index, name, rank }) => ({
              name: `${rank} - ${name}`,
              data: rankChanges,
              color: chartColors[index],
            }))}
          />
        </ChartWrapper>
      </HomePageWrapper>
    </DefaultLayout>
  );
};

export default HomePage;
