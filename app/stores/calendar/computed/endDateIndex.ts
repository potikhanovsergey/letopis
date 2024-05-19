import { computed } from "@legendapp/state";
import dayjs from "dayjs";

import { calendarData$ } from "@/app/stores/calendar";

export const endDateIndex$ = computed(() => {
  const format = calendarData$.format.get();
  const endDate = dayjs(calendarData$.endDate.get());

  if (format === "year_week") {
    const yearBeginning = endDate.startOf("y");
    const endIndex = endDate.diff(yearBeginning, "w");

    return endIndex;
  }

  const monthBeginning = endDate.startOf("month");
  const endIndex = endDate.diff(monthBeginning, "day");

  return endIndex;
});
