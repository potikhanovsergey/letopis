import { FC, useCallback } from "react";

import { Cell } from "@/app/components/Cell";
import {
  setHoveredColumnIndex,
  setHoveredIndex,
  setHoveredRowIndex,
} from "@/app/stores/calendar/actions";

import { CellFeatureProps } from "./CellFeature.typings";

export const CellFeature: FC<CellFeatureProps> = ({
  index,
  rowIndex,
  columnIndex,
}) => {
  const handleMouseEnter = useCallback(() => {
    setHoveredIndex(index);
    setHoveredRowIndex(rowIndex);
    setHoveredColumnIndex(columnIndex);
  }, [index, rowIndex, columnIndex]);

  return <Cell onMouseEnter={handleMouseEnter} />;
};
