import { Calendar, Event } from "@prisma/client";

import { IndexedEvent } from "@/app/stores/calendar/calendar.typings";

import { getIndexesByDate } from ".";

/* Возвращает событие с расчитанными индексами клеток. */
export const getIndexedEvent = (
  event: Event,
  startDate: Date,
  format: Calendar["format"]
): IndexedEvent => {
  const indexes = getIndexesByDate({ startDate, date: event.date, format });

  return { ...event, ...indexes };
};
