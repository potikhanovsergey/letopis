import { computed } from "@legendapp/state";
import dayjs from "dayjs";

import {
  calendarData$,
  hoveredColumnIndex$,
  hoveredRowIndex$,
} from "@/app/stores/calendar";

export const hoveredDates$ = computed(() => {
  const hoveredRowIndex = hoveredRowIndex$.get();
  const hoveredColumnIndex = hoveredColumnIndex$.get();
  const startDate = dayjs(calendarData$.startDate.get());

  const startYearDate = startDate.startOf("y");

  const endDate = calendarData$.endDate.get();

  if (hoveredRowIndex === null || hoveredColumnIndex === null)
    return { start: null, end: null };

  const hoveredStartDate = startYearDate
    .add(hoveredRowIndex, "y")
    .add(hoveredColumnIndex, "w");

  const hoveredYearEndDate = hoveredStartDate.endOf("y");

  const hoveredEndDate = hoveredStartDate.add(6, "d");

  return {
    start: dayjs.max(hoveredStartDate, startDate),
    end: dayjs.min(
      dayjs.min(hoveredEndDate, hoveredYearEndDate)!,
      dayjs(endDate)
    ),
  };
});
