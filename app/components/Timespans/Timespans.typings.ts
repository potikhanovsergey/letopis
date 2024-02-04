import { Timespan } from "@prisma/client";

import { CalendarMode } from "@/app/stores/calendar/calendar.typings";

export interface TimespansProps {
  timespans: Timespan[];
  mode: CalendarMode;
}
