import { computed } from "@legendapp/state";
import dayjs from "dayjs";

import { calendarData$ } from "@/app/stores/calendar";

export const startDateIndex$ = computed(() => {
  const format = calendarData$.format.get();
  const startDate = dayjs(calendarData$.startDate.get());

  if (format === "year_week") {
    const yearBeginning = startDate.startOf("y");
    const startIndex = startDate.diff(yearBeginning, "w");

    return startIndex;
  }

  const monthBeginning = startDate.startOf("month");
  const startIndex = startDate.diff(monthBeginning, "day");

  return startIndex;
});
