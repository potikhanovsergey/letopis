import { Calendar } from "@prisma/client";
import dayjs from "dayjs";

/* Возвращает индекс клетки для конкретной даты */
export const getIndexesByDate = ({
  startDate,
  date,
  format,
}: {
  startDate: Date;
  date: Date;
  format: Calendar["format"];
}) => {
  const dayjsDate = dayjs(date);

  if (format === "year_week") {
    const dateStartYear = dayjsDate.startOf("y");
    const startDateStartYear = dayjs(startDate).startOf("y");

    const rowIndex = dayjs(dateStartYear).diff(startDateStartYear, "y");
    const columnIndex = dayjs(dayjsDate).diff(dayjsDate.startOf("y"), "w");

    return {
      rowIndex,
      columnIndex,
    };
  }

  const dateStartMonth = dayjsDate.startOf("month");
  const startDateStartMonth = dayjs(startDate).startOf("month");

  const rowIndex = dayjs(dateStartMonth).diff(startDateStartMonth, "month");
  const columnIndex = dayjs(dayjsDate).diff(dayjsDate.startOf("month"), "day");

  return {
    rowIndex,
    columnIndex,
  };
};
