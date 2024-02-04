import { FC, PropsWithChildren } from "react";
import { Affix, Group, Paper } from "@mantine/core";

import classes from "./FloatingToolbar.module.css";

export const FloatingToolbar: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Affix className={classes.toolbar} position={{ bottom: 16, left: "50%" }}>
      <Paper withBorder shadow="sm" py="xs" px="md" radius="xl">
        <Group gap="xs">{children}</Group>
      </Paper>
    </Affix>
  );
};
