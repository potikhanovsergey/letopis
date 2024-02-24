import { CellIndexes } from "@/app/c/shared/typings";
import { IndexedEvent } from "@/app/stores/calendar/calendar.typings";

export const getCellEvents = ({
  rowIndex,
  columnIndex,
  events,
}: CellIndexes & {
  events: IndexedEvent[];
}) => {
  return events.filter(
    (e) => e.columnIndex === columnIndex && e.rowIndex === rowIndex,
  );
};
