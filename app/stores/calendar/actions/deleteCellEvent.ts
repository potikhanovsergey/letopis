import { Event } from "@prisma/client";

import { useCalendarStore } from "@/app/stores";

export const deleteCellEvent = (id: Event["id"]) => {
  useCalendarStore.setState((prev) => ({
    events: prev.events.filter((e) => e.id !== id),
  }));
};
