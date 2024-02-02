import { Timespan } from "@prisma/client";

import { useCalendarStore } from "@/app/stores";

export const deleteTimespan = (id: Timespan["id"]) => {
  useCalendarStore.setState((prev) => ({
    timespans: prev.timespans.filter((e) => e.id !== id),
  }));
};
