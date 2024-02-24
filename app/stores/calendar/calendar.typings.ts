import { Event, Timespan } from "@prisma/client";
import { Dayjs } from "dayjs";

import { CellIndexes } from "@/app/c/shared/typings";
import { ExtendedCalendar } from "@/app/typings";

export interface CalendarStore {
  data: ExtendedCalendar;
  hoveredRowIndex: number | null;
  hoveredColumnIndex: number | null;
  events: IndexedEvent[];
  timespans: IndexedTimespan[];
  mode: CalendarMode;
  hoveredDates: () => { start: Dayjs | null; end: Dayjs | null };
  startDateIndex: () => number;
}

export interface ComputedCalendarStore {
  hoveredDates: { start: Dayjs | null; end: Dayjs | null };
  startDateIndex: number;
}

export interface IndexedEvent extends Event, CellIndexes {}
export interface IndexedTimespan extends Timespan {
  startCell: CellIndexes;
  endCell: CellIndexes;
}

export type CalendarMode = "view" | "edit";
