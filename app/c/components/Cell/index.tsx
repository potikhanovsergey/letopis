import { FC, memo, useMemo } from "react";

import { CellProps } from "./typings";

import classes from "./Cell.module.css";

const CellBase: FC<CellProps> = ({
  children,
  color,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  const style = useMemo(() => {
    if (!color) return undefined;
    if (color) return { background: color };
  }, [color]);

  return (
    <button
      style={style}
      className={classes.cell}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default memo(CellBase);
