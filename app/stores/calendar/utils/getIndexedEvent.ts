import { Event } from "@prisma/client"

import { getIndexesByDate } from ".";

/* Возвращает событие с расчитанными индексами клеток. */
export const getIndexedEvent = (event: Event, startDate: Date) => {
  const indexes = getIndexesByDate({ startDate, date: event.date });

  return { ...event, ...indexes };
}