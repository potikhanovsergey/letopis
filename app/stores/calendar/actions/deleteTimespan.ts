import { Timespan } from "@prisma/client";

import { calendarData$ } from "@/app/stores";

export const deleteTimespan = (id: Timespan["id"]) => {
  calendarData$.timespans.set((prev) => prev.filter((t) => t.id !== id));
};
