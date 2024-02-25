import { FC, PropsWithChildren } from "react";
import { ScrollArea } from "@mantine/core";

import classes from "./YearsGrid.module.css";

const YearsGrid: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ScrollArea style={{ flex: 1 }}>
      <div className={classes.grid}>{children}</div>
    </ScrollArea>
  );
};

export default YearsGrid;
