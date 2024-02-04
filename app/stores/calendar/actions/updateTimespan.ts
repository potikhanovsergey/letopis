import { Timespan } from "@prisma/client";

import { calendarData$ } from "@/app/stores";

export const updateTimespan = (timespan: Timespan) => {
  calendarData$.timespans.set((prev) =>
    prev.map((t) => (t.id === timespan.id ? timespan : t))
  );
};
