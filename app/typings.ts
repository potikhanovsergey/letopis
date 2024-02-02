import { Calendar, Event, Timespan } from "@prisma/client";

export interface ExtendedCalendar extends Calendar {
  events: Event[];
  timespans: Timespan[];
}
