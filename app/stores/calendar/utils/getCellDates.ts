import { Calendar } from "@prisma/client";
import dayjs from "dayjs";

export const getCellDates = ({
  rowIndex,
  columnIndex,
  startDate,
  endDate,
  format,
}: {
  rowIndex: number | null;
  columnIndex: number | null;
  startDate: Date;
  endDate: Date;
  format: Calendar["format"];
}) => {
  if (rowIndex === null || columnIndex === null) return null;

  const startDateDayjs = dayjs(startDate);

  if (format === "year_week") {
    const startYearDate = startDateDayjs.startOf("y");
    const cellStartDate = startYearDate
      .add(rowIndex, "y")
      .add(columnIndex, "w");
    const cellYearEndDate = cellStartDate.endOf("y");
    const cellEndDate = cellStartDate.add(6, "d");

    return {
      start: dayjs.max(cellStartDate, startDateDayjs),
      end: dayjs.min(dayjs.min(cellEndDate, cellYearEndDate)!, dayjs(endDate)),
    };
  }

  const startMonthDate = startDateDayjs.startOf("month");
  const cellStartDate = startMonthDate
    .add(rowIndex, "month")
    .add(columnIndex, "day");

  const start = dayjs.max(cellStartDate, startDateDayjs);

  return {
    start,
    end: start?.endOf("day"),
  };
};
