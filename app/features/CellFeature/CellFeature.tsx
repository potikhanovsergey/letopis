"use-client";
import { FC, useCallback, useMemo } from "react";

import { Cell } from "@/app/components/Cell";
import { useCalendarStore } from "@/app/stores";
import { getCellEvents } from "@/app/stores/calendar/utils/getCellEvents";

import { CellFeatureProps } from "./CellFeature.typings";

export const CellFeature: FC<CellFeatureProps> = ({
  rowIndex,
  columnIndex,
  onMouseEnter,
  onMouseLeave,
}) => {
  const events = useCalendarStore((state) => state.events);

  const handleMouseEnter = useCallback(() => {
    onMouseEnter({ rowIndex, columnIndex });
  }, [onMouseEnter, rowIndex, columnIndex]);

  const eventsCount = useMemo(() => {
    const cellEvents = getCellEvents({ rowIndex, columnIndex, events });

    return cellEvents.length || null;
  }, [columnIndex, rowIndex, events]);

  return (
    <Cell onMouseEnter={handleMouseEnter} onMouseLeave={onMouseLeave}>
      {eventsCount}
    </Cell>
  );
};
