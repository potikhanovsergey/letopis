import { FC } from "react";
import { Group, Text } from "@mantine/core";

import { KeyValueProps } from "./KeyValue.typings";

import classes from "./KeyValue.module.css";

export const KeyValue: FC<KeyValueProps> = ({ k, v, icon, ...props }) => {
  return (
    <Group className={classes.group} {...props}>
      <Group className={classes.keyGroup}>
        {icon}
        <Text fw="bold" inherit>
          {k}:
        </Text>{" "}
      </Group>
      {v}
    </Group>
  );
};
