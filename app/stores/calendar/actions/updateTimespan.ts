import { useCalendarStore } from "@/app/stores";
import { IndexedTimespan } from "@/app/stores/calendar/calendar.typings";

export const updateTimespan = (timespan: IndexedTimespan) => {
  useCalendarStore.setState((prev) => ({
    timespans: prev.timespans.map((t) => (t.id === timespan.id ? timespan : t)),
  }));
};
