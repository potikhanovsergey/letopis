"use client";
import { FC, PropsWithChildren } from "react";
import { useSelector } from "@legendapp/state/react";
import { AppShell } from "@mantine/core";

import { Header } from "@/app/components/layout/Header";
import { Main } from "@/app/components/layout/Main";
import { Navbar } from "@/app/components/layout/Navbar";
import { navbarOpened$ } from "@/app/stores/app";

export const Shell: FC<PropsWithChildren> = ({ children }) => {
  const navbarOpened = useSelector(navbarOpened$);

  return (
    <AppShell
      footer={{
        height: 60,
      }}
      header={{ height: 40 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !navbarOpened },
      }}
    >
      <Header />
      <Main>{children}</Main>
      <Navbar />
    </AppShell>
  );
};
