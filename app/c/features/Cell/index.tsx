"use-client";
import { FC, useCallback, useMemo } from "react";
import { useSelector } from "@legendapp/state/react";

import CellUI from "@/app/c/components/Cell";
import { useCellsDataModal } from "@/app/hooks/useCellsDataModal";
import { useTimespansColor } from "@/app/hooks/useTimespansColor";
import { events$, timespans$ } from "@/app/stores/calendar/computed";
import { getCellEvents, getCellTimespans } from "@/app/stores/calendar/utils";

import { CellProps } from "./typings";
import { calendarData$ } from "@/app/stores";

const Cell: FC<CellProps> = ({
  rowIndex,
  columnIndex,
  onMouseEnter,
  onMouseLeave,
}) => {
  const events = useSelector(events$);
  const timespans = useSelector(timespans$);
  const format = useSelector(calendarData$.format);

  const openCellData = useCellsDataModal({ rowIndex, columnIndex });

  const cellTimespans = useMemo(() => {
    return getCellTimespans({
      rowIndex,
      columnIndex,
      timespans,
    });
  }, [rowIndex, columnIndex, timespans]);

  const color = useTimespansColor(cellTimespans);

  const handleMouseEnter = useCallback(() => {
    onMouseEnter({ rowIndex, columnIndex });
  }, [onMouseEnter, rowIndex, columnIndex]);

  const children = useMemo(() => {
    const cellEvents = getCellEvents({
      rowIndex,
      columnIndex,
      events,
    });

    if (cellEvents.length === 1) {
      return cellEvents[0].icon;
    }

    if (cellEvents.length === 0) return null;

    return cellEvents.length;
  }, [rowIndex, columnIndex, events]);

  return (
    <CellUI
      color={color}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={openCellData}
    >
      {children}
    </CellUI>
  );
};

export default Cell;
