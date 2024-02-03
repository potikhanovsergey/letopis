import { computed, observable } from "@legendapp/state";
import { Calendar } from "@prisma/client";
import dayjs from "dayjs";

import {
  CalendarMode,
  IndexedEvent,
  IndexedTimespan,
} from "./calendar.typings";

export const calendarData$ = observable({
  createdAt: new Date(),
  updatedAt: new Date(),
  id: "",
  title: "",
  description: "",
  rows: 60,
  previewUrl: null,
  startDate: new Date(),
  endDate: new Date(),
  userId: "",
  visiiblity: "hidden",
} as Calendar);

export const mode$ = observable("view" as CalendarMode);
export const events$ = observable([] as IndexedEvent[]);
export const timespans$ = observable([] as IndexedTimespan[]);
export const hoveredRowIndex$ = observable(null as number | null);
export const hoveredColumnIndex$ = observable(null as number | null);

export const startDateIndex$ = computed(() => {
  const startDate = dayjs(calendarData$.startDate.get());
  const yearBeginning = startDate.startOf("y");

  const startIndex = startDate.diff(yearBeginning, "w");

  return startIndex;
});

export const hoveredDates$ = computed(() => {
  const hoveredRowIndex = hoveredRowIndex$.get();
  const hoveredColumnIndex = hoveredColumnIndex$.get();
  const startYearDate = dayjs(calendarData$.startDate.get()).startOf("y");

  if (hoveredRowIndex === null || hoveredColumnIndex === null)
    return { start: null, end: null };

  const hoveredStartDate = startYearDate
    .add(hoveredRowIndex, "y")
    .add(hoveredColumnIndex, "w");

  const hoveredYearEndDate = hoveredStartDate.endOf("y");

  const hoveredEndDate = hoveredStartDate.add(6, "d");

  return {
    start: hoveredStartDate,
    end: dayjs.min(hoveredEndDate, hoveredYearEndDate),
  };
});
