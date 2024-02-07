import { FC, PropsWithChildren } from "react";
import { ScrollArea } from "@mantine/core";

import classes from "./YearsGrid.module.css";

export const YearsGrid: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ScrollArea>
      <div className={classes.grid}>{children}</div>
    </ScrollArea>
  );
};
