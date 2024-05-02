import { useCallback } from "react";
import { batch } from "@legendapp/state";
import { modals } from "@mantine/modals";

import { CellIndexes } from "@/app/c/shared/typings";
import { CellsDataFeature } from "@/app/features/CellsDataFeature";
import { ClickedCellTitleFeature } from "@/app/features/ClickedCellTitleFeature";
import { clickedColumnIndex$, clickedRowIndex$ } from "@/app/stores";
import { useMediaQuery } from "@mantine/hooks";

export const useCellsDataModal = ({ rowIndex, columnIndex }: CellIndexes) => {
  const isMobile = useMediaQuery("(max-width: 56.25em)");

  const onClick = useCallback(() => {
    if (!isMobile) {
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
    }
  }, [columnIndex, rowIndex, isMobile]);

  return onClick;
};
