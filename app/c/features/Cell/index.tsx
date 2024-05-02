"use-client";
import { FC, useCallback, useMemo } from "react";
import { useSelector } from "@legendapp/state/react";

import CellUI from "@/app/c/components/Cell";
import { useCellsDataModal } from "@/app/hooks/useCellsDataModal";
import { useTimespansColor } from "@/app/hooks/useTimespansColor";
import { events$, timespans$ } from "@/app/stores/calendar/computed";
import { getCellEvents, getCellTimespans } from "@/app/stores/calendar/utils";

import { CellProps } from "./typings";
import { Tooltip } from "@mantine/core";
import { HoveredInfo } from "@/app/features/HoveredInfo";

const Cell: FC<CellProps> = ({
  rowIndex,
  columnIndex,
  onMouseEnter,
  onMouseLeave,
}) => {
  const events = useSelector(events$);
  const timespans = useSelector(timespans$);

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

  const handleClick = useCallback(() => {
    onMouseEnter({ rowIndex, columnIndex });
    openCellData();
  }, [onMouseEnter, rowIndex, columnIndex, openCellData]);

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
    <Tooltip
      multiline
      zIndex={100}
      maw={400}
      styles={{
        tooltip: {
          whiteSpace: "normal",
        },
      }}
      position="bottom"
      label={<HoveredInfo />}
      transitionProps={{ duration: 0 }}
    >
      <CellUI
        color={color}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={handleClick}
      >
        {children}
      </CellUI>
    </Tooltip>
  );
};

export default Cell;
