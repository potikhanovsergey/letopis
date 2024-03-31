"use client";
import { ThemeSwitcherProps } from "./types";
import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { FC } from "react";

import styles from "./styles.module.css";
import { Icon } from "@/app/components/Icon";

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon onClick={toggleColorScheme} {...props}>
      <Icon className={styles["light-icon"]} As={IconSun} />
      <Icon className={styles["dark-icon"]} As={IconMoon} />
    </ActionIcon>
  );
};
