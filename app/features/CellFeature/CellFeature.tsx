import { FC, useCallback } from "react";

import { Cell } from "@/app/components/Cell";

import { CellFeatureProps } from "./CellFeature.typings";

export const CellFeature: FC<CellFeatureProps> = ({
  index,
  rowIndex,
  columnIndex,
  onMouseEnter,
  onMouseLeave,
}) => {
  const handleMouseEnter = useCallback(() => {
    onMouseEnter({ index, rowIndex, columnIndex });
  }, [onMouseEnter, index, rowIndex, columnIndex]);

  return <Cell onMouseEnter={handleMouseEnter} onMouseLeave={onMouseLeave} />;
};
