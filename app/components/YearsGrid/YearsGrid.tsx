import { FC, PropsWithChildren } from "react";

import classes from "./YearsGrid.module.css";

export const YearsGrid: FC<PropsWithChildren> = ({ children }) => {
  return <div className={classes.grid}>{children}</div>;
};
