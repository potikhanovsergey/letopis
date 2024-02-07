import { FC } from "react";

import { RCHint } from "@/app/components/RCHint";
import { array53 } from "@/app/features/YearsCalendarFeature";

import classes from "./ColumnHints.module.css";

export const ColumnHints: FC = () => {
  return (
    <div className={classes.wrapper}>
      <span />
      {array53.map((columnIndex) => {
        if (columnIndex % 5 === 0 || columnIndex === 52)
          return <RCHint key={columnIndex}>{columnIndex + 1}</RCHint>;

        return <span key={columnIndex} />;
      })}
    </div>
  );
};
