import { FC, PropsWithChildren } from "react";

import classes from "./RCHint.module.css";

const RCHint: FC<PropsWithChildren> = ({ children }) => {
  return <div className={classes.root}>{children}</div>;
};

export default RCHint;
