import { useMemo } from "react";
import { useSelector } from "@legendapp/state/react";

import {
  calendarData$,
  hoveredColumnIndex$,
  hoveredRowIndex$,
} from "@/app/stores";
import { events$ } from "@/app/stores/calendar/computed";
import { getCellEvents } from "@/app/stores/calendar/utils";

export const useHoveredCellEvents = () => {
  const events = useSelector(events$);
  const columnIndex = useSelector(hoveredColumnIndex$);
  const rowIndex = useSelector(hoveredRowIndex$);
  const endDate = useSelector(calendarData$.endDate);

  return useMemo(() => {
    if (columnIndex === null || rowIndex === null) return [];

    return getCellEvents({ rowIndex, columnIndex, events, endDate });
  }, [columnIndex, events, rowIndex, endDate]);
};
