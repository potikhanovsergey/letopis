import { Dayjs } from "dayjs";

export interface CalendarStore {
  hoveredIndex: number | null;
  hoveredRowIndex: number | null;
  hoveredColumnIndex: number | null;
  hoveredDates: () => { start: Dayjs | null; end: Dayjs | null };
  rows: number;
  startDate: Date;
  startDateIndex: () => number;
}
