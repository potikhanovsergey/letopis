import { computed } from "@legendapp/state";

import { clickedColumnIndex$, clickedRowIndex$ } from "@/app/stores/calendar";
import { getCellEvents } from "@/app/stores/calendar/utils";

import { events$ } from "./events";

export const clickedCellEvents$ = computed(() => {
  const events = events$.get();
  const columnIndex = clickedColumnIndex$.get();
  const rowIndex = clickedRowIndex$.get();

  if (columnIndex === null || rowIndex === null) return [];

  const clickedCellEvents = getCellEvents({
    rowIndex,
    columnIndex,
    events,
  });

  return clickedCellEvents;
});
