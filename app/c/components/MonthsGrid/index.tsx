import { FC, PropsWithChildren } from "react";
import { ScrollArea } from "@mantine/core";

import classes from "./MonthsGrid.module.css";

const MonthsGrid: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ScrollArea style={{ flex: 1 }}>
      <div className={classes.grid}>{children}</div>
    </ScrollArea>
  );
};

export default MonthsGrid;
