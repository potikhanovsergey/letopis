import { useEffect } from "react";
import { batch } from "@legendapp/state";

import { calendarData$, hasInitialized$, mode$ } from "@/app/stores";
import { CalendarMode } from "@/app/stores/calendar/calendar.typings";
import { ExtendedCalendar } from "@/app/typings";

export const useInitCalendar = (
  calendar: ExtendedCalendar,
  mode: CalendarMode
) => {
  useEffect(() => {
    batch(() => {
      calendarData$.set(calendar);
      mode$.set(mode);
      hasInitialized$.set(true);
      console.log(true);
    });

    return () => {
      hasInitialized$.set(false);
    };
  }, [calendar, mode]);
};
