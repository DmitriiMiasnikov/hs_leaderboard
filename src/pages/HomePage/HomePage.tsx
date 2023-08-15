"use client";

import { useState } from "react";
import { UsersList } from "src/features/UsersList";
import { getHistory } from "src/api";
import { THistoryData } from "src/api/types";
import { TUser } from "src/shared/types";
import Chart from "src/shared/ui/chart";
import { DefaultLayout } from "src/widgets/DefaultLayout";

import { HomePageWrapper, ChartWrapper } from "./styled";
import { chartColors } from "src/shared/config/chartColors";

const HomePage = ({ users }: { users: TUser[] }) => {
  const [selectedUsers, setSelectedUsers] = useState<
    (TUser & { index: number })[]
  >([]);
  const [chart, setChart] = useState<(THistoryData & { index: number })[]>([]);

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
    });
    setSelectedUsers(newSelectedUsers);
    setChart(history.map((el, index) => ({ ...el, index })));
  };

  const onRemoveSelectedUser = (rank: number) => {
    setSelectedUsers((prev) => prev.filter((user) => user.rank !== rank));
    setChart((prev) => prev.filter((data) => data.rank !== rank));
  };

  return (
    <DefaultLayout>
      <HomePageWrapper>
        <UsersList
          users={users}
          onSelectUser={onSelectUser}
          selectedUsers={selectedUsers}
          onRemoveSelectedUser={onRemoveSelectedUser}
        />
        <ChartWrapper>
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
