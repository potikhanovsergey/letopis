import { computed } from "@legendapp/state";
import dayjs from "dayjs";

import { calendarData$ } from "@/app/stores/calendar";
import { IndexedEvent } from "@/app/stores/calendar/calendar.typings";
import { getIndexedEvent } from "@/app/stores/calendar/utils";

export const events$ = computed(() => {
  const startDate = calendarData$.startDate.get();
  const endDate = calendarData$.endDate.get();
  const events = calendarData$.events.get();
  const format = calendarData$.format.get();

  const indexedEvents: IndexedEvent[] = [];

  for (const e of events) {
    if (dayjs(endDate).isBefore(e.date)) continue;
    if (dayjs(startDate).isAfter(e.date)) continue;

    indexedEvents.push(getIndexedEvent(e, startDate, format));
  }

  return indexedEvents;
});
