import { timespans$ } from "@/app/stores";
import { IndexedTimespan } from "@/app/stores/calendar/calendar.typings";

export const addTimespan = (timespan: IndexedTimespan) => {
  timespans$.set((prev) =>
    [...prev, timespan].sort(
      (a, b) => a.startDate.getTime() - b.startDate.getTime()
    )
  );
};
