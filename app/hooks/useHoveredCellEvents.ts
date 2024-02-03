import { useMemo } from "react";
import { useSelector } from "@legendapp/state/react";

import { events$, hoveredColumnIndex$, hoveredRowIndex$ } from "@/app/stores";
import { getCellEvents } from "@/app/stores/calendar/utils";

export const useHoveredCellEvents = () => {
  const events = useSelector(() => events$.get());
  const columnIndex = useSelector(hoveredColumnIndex$);
  const rowIndex = useSelector(hoveredRowIndex$);

  return useMemo(() => {
    if (columnIndex === null || rowIndex === null) return [];

    return getCellEvents({ rowIndex, columnIndex, events });
  }, [columnIndex, events, rowIndex]);
};
