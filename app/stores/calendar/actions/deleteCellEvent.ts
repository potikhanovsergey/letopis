import { Event } from "@prisma/client";

import { events$ } from "@/app/stores";

export const deleteCellEvent = (id: Event["id"]) => {
  events$.set((prev) => prev.filter((e) => e.id !== id));
};
