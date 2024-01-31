import { Group } from "@mantine/core";
import { FC, PropsWithChildren } from "react";

import classes from "./ModalActions.module.css";

export const ModalActions: FC<PropsWithChildren> = ({ children }) => {
  return <Group className={classes.wrapper}>{children}</Group>;
};
