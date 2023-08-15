"use client";

import { useState } from "react";
import SelectedUsers from "src/features/SelectedUsers";
import { UsersList } from "src/features/UsersList";
import { getHistory } from "src/api";
import { THistoryData } from "src/api/types";
import { TUser } from "src/shared/types";
import Chart from "src/shared/ui/chart";
import { DefaultLayout } from "src/widgets/DefaultLayout";

import { HomePageWrapper, ChartWrapper } from "./styled";

const HomePage = ({ users }: { users: TUser[] }) => {
  const [selectedUsers, setSelectedUsers] = useState<TUser[]>([]);
  const [chart, setChart] = useState<THistoryData>([]);

  const onSelectUser = async (user: TUser) => {
    const newSelectedUsers = [...selectedUsers, user].sort(
      (a, b) => a.rank - b.rank
    );
    const history = await getHistory({
      ids: newSelectedUsers.map(({ rank }) => rank),
    });
    setSelectedUsers(newSelectedUsers);
    setChart(history);
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
          <Chart chart={chart.map((el) => el.rankChanges)} />
        </ChartWrapper>
      </HomePageWrapper>
    </DefaultLayout>
  );
};

export default HomePage;