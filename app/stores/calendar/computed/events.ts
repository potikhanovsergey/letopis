import { computed } from "@legendapp/state";

import { calendarData$ } from "@/app/stores/calendar";
import { getIndexedEvents } from "@/app/stores/calendar/utils";

export const events$ = computed(() => {
  return getIndexedEvents(
    calendarData$.events.get(),
    calendarData$.startDate.get()
  );
});
