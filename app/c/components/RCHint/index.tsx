import { FC, PropsWithChildren } from "react";
import { Center } from "@mantine/core";

import classes from "./RCHint.module.css";

const RCHint: FC<PropsWithChildren> = ({ children }) => {
  return <Center className={classes.root}>{children}</Center>;
};

export default RCHint;
