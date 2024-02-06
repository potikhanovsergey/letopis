import { computed } from "@legendapp/state";

import { hoveredColumnIndex$, hoveredRowIndex$ } from "@/app/stores/calendar";
import { getCellEvents } from "@/app/stores/calendar/utils";

import { events$ } from "./events";

export const hoveredCellEvents$ = computed(() => {
  const events = events$.get();
  const columnIndex = hoveredColumnIndex$.get();
  const rowIndex = hoveredRowIndex$.get();

  if (columnIndex === null || rowIndex === null) return [];

  const hoveredCellEvents = getCellEvents({
    rowIndex,
    columnIndex,
    events,
  });

  return hoveredCellEvents;
});
