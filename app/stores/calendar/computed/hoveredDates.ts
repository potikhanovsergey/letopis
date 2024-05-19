import { computed } from "@legendapp/state";

import {
  calendarData$,
  hoveredColumnIndex$,
  hoveredRowIndex$,
} from "@/app/stores/calendar";
import { getCellDates } from "@/app/stores/calendar/utils";

export const hoveredDates$ = computed(() => {
  const rowIndex = hoveredRowIndex$.get();
  const columnIndex = hoveredColumnIndex$.get();
  const startDate = calendarData$.startDate.get();
  const endDate = calendarData$.endDate.get();
  const format = calendarData$.format.get();

  return getCellDates({ rowIndex, columnIndex, startDate, endDate, format });
});
