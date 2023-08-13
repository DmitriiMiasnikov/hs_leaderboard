'use client'

import { TUser } from "src/shared/types";
import { DefaultLayout } from "src/widgets/defaultLayout";

const Home = ({ users }: { users: TUser[] }) => {
  return (
    <DefaultLayout>
      <div>
      Home
      <br />
      {users.map(({ name, rank, rating }) => {
        return <div key={name}>{name}</div>;
      })}
      </div>
    </DefaultLayout>
  );
};

export default Home;
