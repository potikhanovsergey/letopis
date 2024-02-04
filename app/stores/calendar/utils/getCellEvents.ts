import dayjs from "dayjs";

import { CellIndexes } from "@/app/features/CellFeature/CellFeature.typings";
import { IndexedEvent } from "@/app/stores/calendar/calendar.typings";

export const getCellEvents = ({
  rowIndex,
  columnIndex,
  events,
  endDate,
}: CellIndexes & { events: IndexedEvent[]; endDate: Date }) => {
  const endDateDayjs = dayjs(endDate);

  return events.filter(
    (e) =>
      e.columnIndex === columnIndex &&
      e.rowIndex === rowIndex &&
      endDateDayjs.isAfter(e.date)
  );
};
