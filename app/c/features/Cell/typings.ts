import { CellIndexes } from "@/app/c/shared/typings";

export interface CellProps extends CellIndexes {
  onMouseEnter: (indexes: CellIndexes) => void;
  onMouseLeave: () => void;
}
