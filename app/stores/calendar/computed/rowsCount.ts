import { computed } from "@legendapp/state";
import dayjs from "dayjs";

import { calendarData$ } from "@/app/stores/calendar";
import { MAX_ROWS } from "@/app/app.const";

export const rowsCount$ = computed(() => {
  const startDate = calendarData$.startDate.get();
  const endDate = calendarData$.endDate.get();
  const format = calendarData$.format.get();
  const diffUnit = format === "month_day" ? "month" : "y";

  const diff = dayjs(endDate).startOf(diffUnit).diff(dayjs(startDate).startOf(diffUnit), diffUnit) + 1;

  return Math.min(diff, MAX_ROWS);
});
