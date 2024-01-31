import { Event } from "@prisma/client";

import { IndexedEvent } from "@/app/stores/calendar/calendar.typings";

import { getIndexedEvent } from ".";

/* Возвращает события с расчитанными индексами клеток. */
export const getIndexedEvents = (events: Event[], startDate: Date): IndexedEvent[] => {
  return events.map((e) =>  getIndexedEvent(e, startDate))
}