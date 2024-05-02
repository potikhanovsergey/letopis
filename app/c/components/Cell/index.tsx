import { FC, ForwardedRef, forwardRef, memo, useMemo } from "react";

import { CellProps } from "./typings";

import classes from "./Cell.module.css";

const CellBase: FC<CellProps> = forwardRef(
  (
    { children, color, onClick, onMouseEnter, onMouseLeave },
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    const style = useMemo(() => {
      if (!color) return undefined;
      if (color) return { background: color };
    }, [color]);

    return (
      <button
        ref={ref}
        style={style}
        className={classes.cell}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
);

CellBase.displayName = "Cell";

export default memo(CellBase);
