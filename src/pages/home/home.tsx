"use client";

import { useState } from "react";
import SelectedUsers from "src/features/SelectedUsers";
import { UsersList } from "src/features/users";
import { getHistory } from "src/features/users/api";
import { TUser } from "src/shared/types";
import Chart from "src/shared/ui/chart";
import { TChartData } from "src/shared/ui/chart/types";
import { DefaultLayout } from "src/widgets/defaultLayout";

import { HomePageWrapper, ChartWrapper } from "./styled";

const Home = ({ users }: { users: TUser[] }) => {
  const [selectedUsers, setSelectedUsers] = useState<TUser[]>([]);
  const [chart, setChart] = useState<TChartData[][]>([]);

  const onSelectUser = async (user: TUser) => {
    const newSelectedUsers = [...selectedUsers, user].sort((a, b) => a.rank - b.rank)
    const history = await getHistory({ ids: newSelectedUsers.map(({ rank }) => rank) })
    setSelectedUsers(newSelectedUsers);
    setChart(history.map(el => el.rankChanges));
  };
  console.log(chart);
  const onRemoveSelectedUser = (rank: number) => {
    setSelectedUsers((prev) => prev.filter((user) => user.rank !== rank));
  };

  return (
    <DefaultLayout>
      <HomePageWrapper>
        <UsersList users={users} onSelectUser={onSelectUser} />
        <div>
          <SelectedUsers
            selectedUsers={selectedUsers}
            onRemoveSelectedUser={onRemoveSelectedUser}
          />
          <ChartWrapper>
          <Chart chart={chart} />
          </ChartWrapper>
        </div>
      </HomePageWrapper>
    </DefaultLayout>
  );
};

export default Home;
