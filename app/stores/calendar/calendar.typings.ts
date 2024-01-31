import { Calendar, Event } from "@prisma/client";
import { Dayjs } from "dayjs";

export interface CalendarStore {
  data: Calendar;
  hoveredIndex: number | null;
  hoveredRowIndex: number | null;
  hoveredColumnIndex: number | null;
  events: Event[]
  hoveredDates: () => { start: Dayjs | null; end: Dayjs | null };
  startDateIndex: () => number;
}
