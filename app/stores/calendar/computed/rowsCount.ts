import { computed } from "@legendapp/state";
import dayjs from "dayjs";

import { calendarData$ } from "@/app/stores/calendar";

export const rowsCount$ = computed(() => {
  const startDate = calendarData$.startDate.get();
  const endDate = calendarData$.endDate.get();

  return dayjs(endDate).diff(startDate, "y") + 1;
});
