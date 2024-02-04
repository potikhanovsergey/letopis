"use-client";
import { FC, useCallback, useMemo } from "react";
import { useSelector } from "@legendapp/state/react";

import { Cell } from "@/app/components/Cell";
import { DynamicIcon } from "@/app/components/DynamicIcon";
import { EventIconKey } from "@/app/components/IconPicker/IconPicker.typings";
import { useTimespansColor } from "@/app/hooks/useTimespansColor";
import { calendarData$ } from "@/app/stores";
import { events$, timespans$ } from "@/app/stores/calendar/computed";
import { getCellEvents, getCellTimespans } from "@/app/stores/calendar/utils";

import { CellFeatureProps } from "./CellFeature.typings";

export const CellFeature: FC<CellFeatureProps> = ({
  rowIndex,
  columnIndex,
  onMouseEnter,
  onMouseLeave,
}) => {
  const events = useSelector(events$);
  const timespans = useSelector(timespans$);
  const endDate = useSelector(calendarData$.endDate);

  const cellTimespans = useMemo(() => {
    return getCellTimespans({ rowIndex, columnIndex, timespans });
  }, [timespans, rowIndex, columnIndex]);

  const color = useTimespansColor(cellTimespans);

  const handleMouseEnter = useCallback(() => {
    onMouseEnter({ rowIndex, columnIndex });
  }, [onMouseEnter, rowIndex, columnIndex]);

  const children = useMemo(() => {
    const cellEvents = getCellEvents({
      rowIndex,
      columnIndex,
      events,
      endDate,
    });

    if (cellEvents.length === 1) {
      return <DynamicIcon name={cellEvents[0].icon as EventIconKey} />;
    }

    if (cellEvents.length === 0) return null;

    return cellEvents.length;
  }, [columnIndex, rowIndex, endDate, events]);

  return (
    <Cell
      color={color}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </Cell>
  );
};
