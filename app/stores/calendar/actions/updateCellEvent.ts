import { useCalendarStore } from "@/app/stores";
import { IndexedEvent } from "@/app/stores/calendar/calendar.typings";

export const updateCellEvent = (event: IndexedEvent) => {
  useCalendarStore.setState((prev) => ({
    events: prev.events.map((e) => (e.id === event.id ? event : e)),
  }));
};
