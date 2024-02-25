import { FC } from "react";
import { useSelector } from "@legendapp/state/react";
import { range } from "@mantine/hooks";

import { RowHintFeature } from "@/app/features/RowHintFeature";
import { rowsCount$ } from "@/app/stores/calendar/computed/rowsCount";

import classes from "./RowHints.module.css";

const RowHints: FC = () => {
  const rowsCount = useSelector(rowsCount$);

  return (
    <div className={classes.wrapper}>
      {range(0, rowsCount - 1).map((rowIndex) => (
        <RowHintFeature key={rowIndex} index={rowIndex} />
      ))}
    </div>
  );
};

export default RowHints;
