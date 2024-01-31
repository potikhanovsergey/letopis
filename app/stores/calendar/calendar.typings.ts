import { Calendar, Event } from "@prisma/client";
import { Dayjs } from "dayjs";

export interface CalendarStore {
  data: Calendar;
  hoveredRowIndex: number | null;
  hoveredColumnIndex: number | null;
  events: IndexedEvent[]
  hoveredDates: () => { start: Dayjs | null; end: Dayjs | null };
  startDateIndex: () => number;
}

export interface IndexedEvent extends Event {
  rowIndex: number;
  columnIndex: number;
}