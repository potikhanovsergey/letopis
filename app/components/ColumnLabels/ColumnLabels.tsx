import { FC } from "react";
import { BoxProps, Text } from "@mantine/core";

import classes from "./ColumnsLabels.module.css";

const COLUMNS_QUANTITY = 53;

const columns = Array.from(Array(COLUMNS_QUANTITY).fill(null).keys()).filter(
  (i) =>
    i === 0 ||
    i === COLUMNS_QUANTITY - 1 ||
    (i % 4 === 0 && i > 3 && COLUMNS_QUANTITY - i > 3)
);

export const ColumnLabels: FC<Omit<BoxProps, "children">> = (props) => {
  return (
    <div>
      <Text fw="bold">Недели</Text>
      <div className={classes.wrapper}>
        {columns.map((column, i) => (
          <Text
            className={classes.label}
            left={`${(column / COLUMNS_QUANTITY) * 100}%`}
            key={column}
          >
            {column + 1}
          </Text>
        ))}
      </div>
    </div>
  );
};
