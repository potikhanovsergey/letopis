import { Timespan } from "@prisma/client";

import { IndexedTimespan } from "@/app/stores/calendar/calendar.typings";

import { getIndexesByDate } from ".";

/* Возвращает промежуток с расчитанными индексами клеток. */
export const getIndexedTimespan = (
  timespan: Timespan,
  startDate: Date
): IndexedTimespan => {
  const startCell = getIndexesByDate({
    startDate,
    date: timespan.startDate,
  });
  const endCell = getIndexesByDate({ startDate, date: timespan.endDate });

  return { ...timespan, startCell, endCell };
};
