import { computed } from "@legendapp/state";

import {
  calendarData$,
  clickedColumnIndex$,
  clickedRowIndex$,
} from "@/app/stores/calendar";
import { getCellDates } from "@/app/stores/calendar/utils";

export const clickedDates$ = computed(() => {
  const rowIndex = clickedRowIndex$.get();
  const columnIndex = clickedColumnIndex$.get();
  const startDate = calendarData$.startDate.get();
  const endDate = calendarData$.endDate.get();

  return getCellDates({ rowIndex, columnIndex, startDate, endDate });
});
