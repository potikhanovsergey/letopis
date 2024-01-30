import { FC } from "react";
import { AppShellHeader, Group } from "@mantine/core";

import { Logo } from "@/app/components/Logo";
import { HeaderSessionFeature } from "@/app/features/HeaderSessionFeature";

export const HeaderFeature: FC = () => {
  return (
    <AppShellHeader>
      <Group h="100%" px="md" justify="space-between">
        <Logo />
        <HeaderSessionFeature />
      </Group>
    </AppShellHeader>
  );
};
