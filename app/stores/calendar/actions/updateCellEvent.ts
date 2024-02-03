import { events$ } from "@/app/stores";
import { IndexedEvent } from "@/app/stores/calendar/calendar.typings";

export const updateCellEvent = (event: IndexedEvent) => {
  events$.set((prev) => prev.map((e) => (e.id === event.id ? event : e)));
};
