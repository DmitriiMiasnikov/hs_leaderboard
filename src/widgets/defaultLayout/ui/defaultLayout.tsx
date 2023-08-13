import React from "react";
import Link from "next/link";
import Image from "next/image";

import { TDefaultLayout } from "./types";
import {
  DefaultLayoutWrapper,
  Header,
  Logo,
  PageContent,
  Content,
  Footer,
} from "./styled";

const DefaultLayout = ({ children }: TDefaultLayout) => {
  return (
    <DefaultLayoutWrapper>
      <Header>
        <Link href={"/"}>
          <Logo>
            <Image alt="logo" src="/images/logo.svg" width={30} height={30} />
            HS Leaderboard
          </Logo>
        </Link>
      </Header>
      <PageContent>
        <Content>{children}</Content>
        <Footer>
          <div>©DmitriiMiasnikov, 2023</div>
          <div>Support</div>
        </Footer>
      </PageContent>
    </DefaultLayoutWrapper>
  );
};

export default DefaultLayout;
