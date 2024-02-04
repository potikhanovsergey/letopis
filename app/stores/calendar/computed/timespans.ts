import { computed } from "@legendapp/state";
import dayjs from "dayjs";

import { calendarData$ } from "@/app/stores/calendar";
import { IndexedTimespan } from "@/app/stores/calendar/calendar.typings";
import { getIndexedTimespan } from "@/app/stores/calendar/utils";

export const timespans$ = computed(() => {
  const startDate = calendarData$.startDate.get();
  const endDate = calendarData$.endDate.get();
  const timespans = calendarData$.timespans.get();

  const indexedTimespans: IndexedTimespan[] = [];

  for (const t of timespans) {
    if (dayjs(endDate).isBefore(t.startDate)) continue;
    if (dayjs(startDate).isAfter(t.endDate)) continue;

    indexedTimespans.push(getIndexedTimespan(t, startDate));
  }

  return indexedTimespans;
});
