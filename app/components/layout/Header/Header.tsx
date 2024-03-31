import { FC } from "react";
import { AppShellHeader, Button, Group } from "@mantine/core";

import { Logo } from "@/app/components/layout/Logo";
import { BurgerFeature } from "@/app/features/layout/BurgerFeature";
import { HeaderSessionFeature } from "@/app/features/layout/HeaderSessionFeature";

import styles from "./Header.module.css";
import Link from "next/link";

export const Header: FC = () => {
  return (
    <AppShellHeader>
      <div className={styles.grid}>
        <Group>
          <Button size="compact-sm" component={Link} href="/">
            Календари
          </Button>
          <Button size="compact-sm" component={Link} href="/">
            О проекте
          </Button>
        </Group>
        <Logo />
        <BurgerFeature />
        <Group visibleFrom="sm" justify="flex-end">
          <HeaderSessionFeature />
        </Group>
      </div>
    </AppShellHeader>
  );
};
