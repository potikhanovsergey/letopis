import dayjs from "dayjs";

export const getCellDates = ({
  rowIndex,
  columnIndex,
  startDate,
  endDate,
}: {
  rowIndex: number | null;
  columnIndex: number | null;
  startDate: Date;
  endDate: Date;
}) => {
  if (rowIndex === null || columnIndex === null) return null;

  const startDateDayjs = dayjs(startDate);
  const startYearDate = startDateDayjs.startOf("y");
  const cellStartDate = startYearDate.add(rowIndex, "y").add(columnIndex, "w");
  const cellYearEndDate = cellStartDate.endOf("y");
  const cellEndDate = cellStartDate.add(6, "d");

  return {
    start: dayjs.max(cellStartDate, startDateDayjs),
    end: dayjs.min(dayjs.min(cellEndDate, cellYearEndDate)!, dayjs(endDate)),
  };
};
