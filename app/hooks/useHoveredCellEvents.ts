import { useMemo } from "react";

import { useCalendarStore } from "@/app/stores";
import { getCellEvents } from "@/app/stores/calendar/utils";

export const useHoveredCellEvents = () => {
  const events = useCalendarStore((state) => state.events);
  const { columnIndex, rowIndex } = useCalendarStore((state) => ({
    columnIndex: state.hoveredColumnIndex,
    rowIndex: state.hoveredRowIndex,
  }));

  return useMemo(() => {
    if (columnIndex === null || rowIndex === null) return [];

    return getCellEvents({ rowIndex, columnIndex, events });
  }, [columnIndex, events, rowIndex]);
};
