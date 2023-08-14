'use client'

import { useState } from "react";
import SelectedUsers from "src/features/SelectedUsers";
import { UsersList } from "src/features/users";
import { TUser } from "src/shared/types";
import { DefaultLayout } from "src/widgets/defaultLayout";

import { HomePageWrapper } from './styled';

const Home = ({ users }: { users: TUser[] }) => {
  const [selectedUsers, setSelectedUsers] = useState<TUser[]>([]);

  const onSelectUser = (user: TUser) => {
    setSelectedUsers([...selectedUsers,user].sort((a, b) => a.rank - b.rank));
  }

  return (
    <DefaultLayout>
      <HomePageWrapper>
      <UsersList users={users} onSelectUser={onSelectUser} />
      <div>
        <SelectedUsers selectedUsers={selectedUsers} />
      </div>
      </HomePageWrapper>
    </DefaultLayout>
  );
};

export default Home;
