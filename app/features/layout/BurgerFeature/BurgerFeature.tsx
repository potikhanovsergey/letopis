"use client";
import { FC } from "react";
import { useSelector } from "@legendapp/state/react";
import { Burger } from "@mantine/core";

import { navbarOpened$ } from "@/app/stores/app";

export const BurgerFeature: FC = () => {
  const opened = useSelector(navbarOpened$);

  return (
    <Burger
      opened={opened}
      onClick={navbarOpened$.toggle}
      hiddenFrom="sm"
      size="sm"
    />
  );
};
