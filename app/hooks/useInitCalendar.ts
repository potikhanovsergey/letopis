import { useEffect } from "react";
import { batch } from "@legendapp/state";

import { calendarData$, events$, mode$, timespans$ } from "@/app/stores";
import { CalendarMode } from "@/app/stores/calendar/calendar.typings";
import {
  getIndexedEvents,
  getIndexedTimespans,
} from "@/app/stores/calendar/utils";
import { ExtendedCalendar } from "@/app/typings";

export const useInitCalendar = (
  calendar: ExtendedCalendar,
  mode: CalendarMode
) => {
  useEffect(() => {
    const { events, timespans, ...data } = calendar;
    const indexedEvents = getIndexedEvents(events, calendar.startDate);
    const indexedTimespans = getIndexedTimespans(timespans, calendar.startDate);

    batch(() => {
      calendarData$.set(data);
      events$.set(indexedEvents);
      timespans$.set(indexedTimespans);
      mode$.set(mode);
    });
  }, [calendar, mode]);
};
