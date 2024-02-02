import { Timespan } from "@prisma/client";

import { IndexedTimespan } from "@/app/stores/calendar/calendar.typings";

import { getIndexedTimespan } from "./getIndexedTimespan";

/* Возвращает промежутки с расчитанными индексами клеток. */
export const getIndexedTimespans = (
  timespans: Timespan[],
  startDate: Date
): IndexedTimespan[] => {
  return timespans.map((timespan) => getIndexedTimespan(timespan, startDate));
};
