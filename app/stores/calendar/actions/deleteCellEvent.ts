import { Event } from "@prisma/client";

import { calendarData$ } from "@/app/stores";

export const deleteCellEvent = (id: Event["id"]) => {
  calendarData$.events.set((prev) => prev.filter((e) => e.id !== id));
};
