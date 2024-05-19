import { Calendar, Timespan } from "@prisma/client";

import { IndexedTimespan } from "@/app/stores/calendar/calendar.typings";

import { getIndexesByDate } from ".";

/* Возвращает промежуток с расчитанными индексами клеток. */
export const getIndexedTimespan = (
  timespan: Timespan,
  startDate: Date,
  format: Calendar["format"]
): IndexedTimespan => {
  const startCell = getIndexesByDate({
    startDate,
    date: timespan.startDate,
    format,
  });
  const endCell = getIndexesByDate({
    startDate,
    date: timespan.endDate,
    format,
  });

  console.log(endCell, timespan.endDate);

  return { ...timespan, startCell, endCell };
};
