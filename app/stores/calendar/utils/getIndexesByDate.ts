import dayjs from "dayjs"

/* Возвращает индекс клетки для конкретной даты */
export const getIndexesByDate = ({ startDate, date }: { startDate: Date, date: Date }) => {
  const dayjsDate = dayjs(date);

  const dateStartYear = dayjsDate.startOf("y");
  const startDateStartYear = dayjs(startDate).startOf("y");

  const rowIndex = dayjs(dateStartYear).diff(startDateStartYear, "y");
  const columnIndex = dayjs(dayjsDate).diff(startDateStartYear.set("y", dayjsDate.year()), "w");

  return {
    rowIndex,
    columnIndex
  }
}