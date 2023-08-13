'use client'

import { DefaultLayout } from "src/widgets/defaultLayout";

const Home = ({ posts }: { posts: { id: string; name: string }[] }) => {
  return (
    <DefaultLayout>
      <div>
      Home
      <br />
      {posts.map(({ id, name }) => {
        return <div key={id}>{name}</div>;
      })}
      </div>
    </DefaultLayout>
  );
};

export default Home;
