import { observable } from "@legendapp/state";

import { ExtendedCalendar } from "@/app/typings";

import { CalendarMode } from "./calendar.typings";

export const calendarData$ = observable({
  createdAt: new Date(),
  updatedAt: new Date(),
  id: "",
  title: "",
  events: [],
  timespans: [],
  description: "",
  previewUrl: null,
  startDate: new Date(),
  endDate: new Date(),
  userId: "",
  visibility: "hidden",
  format: "year_week",
} as ExtendedCalendar);

export const hasInitialized$ = observable(false);

export const mode$ = observable("view" as CalendarMode);
export const hoveredRowIndex$ = observable(null as number | null);
export const hoveredColumnIndex$ = observable(null as number | null);

export const clickedRowIndex$ = observable(null as number | null);
export const clickedColumnIndex$ = observable(null as number | null);

export const commentsVisible$ = observable(false);
