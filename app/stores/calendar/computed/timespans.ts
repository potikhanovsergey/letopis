import { computed } from "@legendapp/state";

import { calendarData$ } from "@/app/stores/calendar";
import { getIndexedTimespans } from "@/app/stores/calendar/utils";

export const timespans$ = computed(() =>
  getIndexedTimespans(
    calendarData$.timespans.get(),
    calendarData$.startDate.get()
  )
);
