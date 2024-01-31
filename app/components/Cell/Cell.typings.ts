import { PropsWithChildren } from "react";

export interface CellProps extends PropsWithChildren {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}
