import {
  CalendarMode,
  IndexedTimespan,
} from "@/app/stores/calendar/calendar.typings";

export interface TimespansProps {
  timespans: IndexedTimespan[];
  mode: CalendarMode;
}
