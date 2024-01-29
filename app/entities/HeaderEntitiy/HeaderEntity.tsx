import { FC } from "react";
import { AppShellHeader } from "@mantine/core";

import { HeaderEntityProps } from "./HeaderEntity.typings";

import classNames from "./HeaderEntity.module.css";

export const HeaderEntity: FC<HeaderEntityProps> = ({
  leftSection,
  rightSection,
}) => {
  return (
    <AppShellHeader className={classNames.header} withBorder px="xs">
      {leftSection}
      {rightSection}
    </AppShellHeader>
  );
};
