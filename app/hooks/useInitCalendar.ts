import { useEffect } from "react";

import { useCalendarStore } from "@/app/stores";
import { getIndexedEvents } from "@/app/stores/calendar/utils";
import { ExtendedCalendar } from "@/app/typings";

export const useInitCalendar = (calendar: ExtendedCalendar) => {
  useEffect(() => {
    const { events, ...data } = calendar;
    const indexedEvents = getIndexedEvents(events, calendar.startDate);
    useCalendarStore.setState({ data, events: indexedEvents });
  }, [calendar]);
};
