import { computed } from "@legendapp/state";

import { hoveredColumnIndex$, hoveredRowIndex$ } from "@/app/stores/calendar";
import { getCellTimespans } from "@/app/stores/calendar/utils";

import { timespans$ } from "./timespans";

export const hoveredCellTimespans$ = computed(() => {
  const timespans = timespans$.get();
  const columnIndex = hoveredColumnIndex$.get();
  const rowIndex = hoveredRowIndex$.get();

  if (columnIndex === null || rowIndex === null) return [];

  const hoveredCellTimespans = getCellTimespans({
    rowIndex,
    columnIndex,
    timespans,
  });

  return hoveredCellTimespans;
});
