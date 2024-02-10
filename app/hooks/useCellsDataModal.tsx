import { useCallback } from "react";
import { batch } from "@legendapp/state";
import { modals } from "@mantine/modals";

import { CellIndexes } from "@/app/features/CellFeature/CellFeature.typings";
import { CellsDataFeature } from "@/app/features/CellsDataFeature";
import { ClickedCellTitleFeature } from "@/app/features/ClickedCellTitleFeature";
import { clickedColumnIndex$, clickedRowIndex$ } from "@/app/stores";

export const useCellsDataModal = ({ rowIndex, columnIndex }: CellIndexes) => {
  const onClick = useCallback(() => {
    batch(() => {
      clickedRowIndex$.set(rowIndex);
      clickedColumnIndex$.set(columnIndex);
    });

    modals.open({
      modalId: "cells-data-modal",
      title: <ClickedCellTitleFeature />,
      size: "lg",
      children: <CellsDataFeature />,
    });
  }, [columnIndex, rowIndex]);

  return onClick;
};
