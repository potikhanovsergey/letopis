import { useCalendarStore } from "@/app/stores";
import { IndexedTimespan } from "@/app/stores/calendar/calendar.typings";

export const addTimespan = (timespan: IndexedTimespan) => {
  useCalendarStore.setState((prev) => ({
    timespans: [...prev.timespans, timespan].sort(
      (a, b) => a.startDate.getTime() - b.startDate.getTime()
    ),
  }));
};
