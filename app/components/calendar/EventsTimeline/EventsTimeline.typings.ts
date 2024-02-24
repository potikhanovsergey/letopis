import { Event } from "@prisma/client";

import { CalendarMode } from "@/app/stores/calendar/calendar.typings";

export interface EventsTimelineProps {
  events: Event[];
  mode: CalendarMode;
}
