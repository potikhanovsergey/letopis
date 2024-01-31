import { useCalendarStore } from "@/app/stores";
import { IndexedEvent } from "@/app/stores/calendar/calendar.typings";

export const addCellEvent = (event: IndexedEvent) => {
  useCalendarStore.setState((prev) => ({
    events: [...prev.events, event].sort(
      (a, b) => a.date.getTime() - b.date.getTime()
    ),
  }));
};
