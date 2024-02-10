import { useCallback } from "react";
import { batch } from "@legendapp/state";
import { useSelector } from "@legendapp/state/react";
import { modals } from "@mantine/modals";

import { CellIndexes } from "@/app/features/CellFeature/CellFeature.typings";
import { CellsDataFeature } from "@/app/features/CellsDataFeature";
import {
  calendarData$,
  clickedColumnIndex$,
  clickedRowIndex$,
} from "@/app/stores";

export const useCellsDataModal = ({ rowIndex, columnIndex }: CellIndexes) => {
  const title = useSelector(calendarData$.title);

  const onClick = useCallback(() => {
    batch(() => {
      clickedRowIndex$.set(rowIndex);
      clickedColumnIndex$.set(columnIndex);
    });

    modals.open({
      modalId: "cells-data-modal",
      title,
      size: "lg",
      children: <CellsDataFeature />,
    });
  }, [columnIndex, rowIndex, title]);

  return onClick;
};
