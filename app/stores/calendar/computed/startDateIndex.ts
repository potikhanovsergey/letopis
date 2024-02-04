import { computed } from "@legendapp/state";
import dayjs from "dayjs";

import { calendarData$ } from "@/app/stores/calendar";

export const startDateIndex$ = computed(() => {
  const startDate = dayjs(calendarData$.startDate.get());
  const yearBeginning = startDate.startOf("y");

  const startIndex = startDate.diff(yearBeginning, "w");

  return startIndex;
});
