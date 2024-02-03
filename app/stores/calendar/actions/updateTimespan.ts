import { timespans$ } from "@/app/stores";
import { IndexedTimespan } from "@/app/stores/calendar/calendar.typings";

export const updateTimespan = (timespan: IndexedTimespan) => {
  timespans$.set((prev) =>
    prev.map((t) => (t.id === timespan.id ? timespan : t))
  );
};
