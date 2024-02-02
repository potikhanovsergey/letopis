import { Event } from "@prisma/client";

import { IndexedEvent } from "@/app/stores/calendar/calendar.typings";

import { getIndexesByDate } from ".";

/* Возвращает событие с расчитанными индексами клеток. */
export const getIndexedEvent = (
  event: Event,
  startDate: Date
): IndexedEvent => {
  const indexes = getIndexesByDate({ startDate, date: event.date });

  return { ...event, ...indexes };
};
