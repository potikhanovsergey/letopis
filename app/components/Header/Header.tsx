import { FC } from "react";
import { AppShellHeader, Group } from "@mantine/core";

import { Logo } from "@/app/components/Logo";
import { BurgerFeature } from "@/app/features/BurgerFeature";
import { HeaderSessionFeature } from "@/app/features/HeaderSessionFeature";

export const Header: FC = () => {
  return (
    <AppShellHeader withBorder={false}>
      <Group h="100%" px="md" justify="space-between">
        <Logo />
        <BurgerFeature />
        <Group visibleFrom="sm">
          {/* <Button>О проекте</Button> */}
          <HeaderSessionFeature />
        </Group>
      </Group>
    </AppShellHeader>
  );
};
