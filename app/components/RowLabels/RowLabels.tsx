"use client";
import { FC } from "react";
import { Text } from "@mantine/core";

import classes from "./RowLabels.module.css";

export const RowLabels: FC = () => {
  return (
    <Text size="sm" className={classes.title}>
      Года
    </Text>
  );
};
