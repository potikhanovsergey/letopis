import { Event } from "@prisma/client";

import { calendarData$ } from "..";

export const updateCellEvent = (event: Event) => {
  calendarData$.events.set((prev) =>
    prev.map((e) => (e.id === event.id ? event : e))
  );
};
