import { FC } from "react";

import { CellProps } from "./Cell.typings";

import classes from "./Cell.module.css";

export const Cell: FC<CellProps> = ({ onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className={classes.cell}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  );
};
