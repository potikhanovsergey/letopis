import { Event } from "@prisma/client";

import { calendarData$ } from "@/app/stores";

export const addCellEvent = (event: Event) => {
  calendarData$.events.set((prev) =>
    [...prev, event].sort((a, b) => a.date.getTime() - b.date.getTime())
  );
};
