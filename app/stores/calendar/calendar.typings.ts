import { Calendar } from "@prisma/client";
import { Dayjs } from "dayjs";

export interface CalendarStore {
  data: Calendar;
  hoveredIndex: number | null;
  hoveredRowIndex: number | null;
  hoveredColumnIndex: number | null;
  hoveredDates: () => { start: Dayjs | null; end: Dayjs | null };
  startDate: Date;
  startDateIndex: () => number;
}
