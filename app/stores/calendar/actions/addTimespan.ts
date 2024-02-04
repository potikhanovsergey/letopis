import { Timespan } from "@prisma/client";

import { calendarData$ } from "@/app/stores";

export const addTimespan = (timespan: Timespan) => {
  calendarData$.timespans.set((prev) =>
    [...prev, timespan].sort(
      (a, b) => a.startDate.getTime() - b.startDate.getTime()
    )
  );
};
