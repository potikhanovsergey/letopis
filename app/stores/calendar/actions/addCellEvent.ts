import { events$ } from "@/app/stores";
import { IndexedEvent } from "@/app/stores/calendar/calendar.typings";

export const addCellEvent = (event: IndexedEvent) => {
  events$.set((prev) =>
    [...prev, event].sort((a, b) => a.date.getTime() - b.date.getTime())
  );
};
