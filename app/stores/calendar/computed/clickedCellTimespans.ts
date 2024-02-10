import { computed } from "@legendapp/state";

import { clickedColumnIndex$, clickedRowIndex$ } from "@/app/stores/calendar";
import { getCellTimespans } from "@/app/stores/calendar/utils";

import { timespans$ } from "./timespans";

export const clickedCellTimespans$ = computed(() => {
  const timespans = timespans$.get();
  const columnIndex = clickedColumnIndex$.get();
  const rowIndex = clickedRowIndex$.get();

  if (columnIndex === null || rowIndex === null) return [];

  const clickedCellTimespans = getCellTimespans({
    rowIndex,
    columnIndex,
    timespans,
  });

  return clickedCellTimespans;
});
