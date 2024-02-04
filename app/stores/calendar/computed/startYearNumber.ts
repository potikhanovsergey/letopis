import { computed } from "@legendapp/state";

import { calendarData$ } from "@/app/stores/calendar";

export const startYearNumber$ = computed(() => {
  const startDate = calendarData$.startDate.get();

  return startDate.getFullYear();
});
