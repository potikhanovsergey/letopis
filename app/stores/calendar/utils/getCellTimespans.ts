import { CellIndexes } from "@/app/features/CellFeature/CellFeature.typings";
import { IndexedTimespan } from "@/app/stores/calendar/calendar.typings";

export const getCellTimespans = ({
  rowIndex,
  columnIndex,
  timespans,
}: CellIndexes & { timespans: IndexedTimespan[] }) => {
  return timespans.filter((t) => {
    const tStartIndex = t.startCell.rowIndex * 53 + t.startCell.columnIndex;
    const tEndIndex = t.endCell.rowIndex * 53 + t.endCell.columnIndex;

    const cellIndex = rowIndex * 53 + columnIndex;

    return cellIndex >= tStartIndex && cellIndex <= tEndIndex;
  });
};
