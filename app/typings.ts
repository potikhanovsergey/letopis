import { Calendar, Event } from "@prisma/client";

export interface ExtendedCalendar extends Calendar {
  events: Event[]
}