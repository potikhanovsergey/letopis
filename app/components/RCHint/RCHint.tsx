import { FC, PropsWithChildren } from "react";
import { Center } from "@mantine/core";

import classes from "./RCHint.module.css";

export const RCHint: FC<PropsWithChildren> = ({ children }) => {
  return <Center className={classes.root}>{children}</Center>;
};
