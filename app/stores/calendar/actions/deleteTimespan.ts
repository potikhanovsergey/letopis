import { Timespan } from "@prisma/client";

import { timespans$ } from "@/app/stores";

export const deleteTimespan = (id: Timespan["id"]) => {
  timespans$.set((prev) => prev.filter((t) => t.id !== id));
};
