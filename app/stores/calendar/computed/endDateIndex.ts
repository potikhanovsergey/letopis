import { computed } from "@legendapp/state";
import dayjs from "dayjs";

import { calendarData$ } from "@/app/stores/calendar";

export const endDateIndex$ = computed(() => {
  const endDate = dayjs(calendarData$.endDate.get());
  const yearBeginning = endDate.startOf("y");

  const endIndex = endDate.diff(yearBeginning, "w");

  return endIndex;
});
