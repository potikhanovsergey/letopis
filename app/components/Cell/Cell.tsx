import { FC, memo } from "react";

import { CellProps } from "./Cell.typings";

import classes from "./Cell.module.css";

const CellBase: FC<CellProps> = ({ children, onMouseEnter, onMouseLeave }) => {
  return (
    <button
      className={classes.cell}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  );
};

export const Cell = memo(CellBase);
