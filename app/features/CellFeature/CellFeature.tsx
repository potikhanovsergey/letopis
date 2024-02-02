"use-client";
import { FC, useCallback, useMemo } from "react";

import { Cell } from "@/app/components/Cell";
import { DynamicIcon } from "@/app/components/DynamicIcon";
import { EventIconKey } from "@/app/components/IconPicker/IconPicker.typings";
import { useTimespansColor } from "@/app/hooks/useTimespansColor";
import { useCalendarStore } from "@/app/stores";
import { getCellEvents, getCellTimespans } from "@/app/stores/calendar/utils";

import { CellFeatureProps } from "./CellFeature.typings";

export const CellFeature: FC<CellFeatureProps> = ({
  rowIndex,
  columnIndex,
  onMouseEnter,
  onMouseLeave,
}) => {
  const events = useCalendarStore((state) => state.events);
  const timespans = useCalendarStore((state) => state.timespans);

  const cellTimespans = useMemo(() => {
    return getCellTimespans({ rowIndex, columnIndex, timespans });
  }, [timespans, rowIndex, columnIndex]);

  const color = useTimespansColor(cellTimespans);

  const handleMouseEnter = useCallback(() => {
    onMouseEnter({ rowIndex, columnIndex });
  }, [onMouseEnter, rowIndex, columnIndex]);

  const children = useMemo(() => {
    const cellEvents = getCellEvents({ rowIndex, columnIndex, events });

    if (cellEvents.length === 1) {
      return <DynamicIcon name={cellEvents[0].icon as EventIconKey} />;
    }

    if (cellEvents.length === 0) return null;

    return cellEvents.length;
  }, [columnIndex, rowIndex, events]);

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
