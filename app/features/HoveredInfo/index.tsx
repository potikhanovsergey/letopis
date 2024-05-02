import { KeyValue } from "@/app/components/KeyValue";
import { HoveredCellEventsFeature } from "@/app/features/HoveredCellEventsFeature";
import { HoveredCellTimespansFeature } from "@/app/features/HoveredCellTimespansFeature";
import { useCellsDataModal } from "@/app/hooks/useCellsDataModal";
import { hoveredColumnIndex$, hoveredRowIndex$ } from "@/app/stores";
import { hoveredDates$ } from "@/app/stores/calendar/computed";
import { getDayOfWeekLabel, formatLong } from "@/app/utils/date";
import { useSelector } from "@legendapp/state/react";
import { Button, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { FC, TouchEventHandler, useCallback, useMemo } from "react";

export const HoveredInfo: FC = () => {
  const hoveredDatesStart = useSelector(hoveredDates$.start);
  const hoveredDatesEnd = useSelector(hoveredDates$.end);

  const startDayOfWeek = useMemo(() => {
    return getDayOfWeekLabel(hoveredDatesStart);
  }, [hoveredDatesStart]);

  const endDayOfWeek = useMemo(() => {
    return getDayOfWeekLabel(hoveredDatesEnd);
  }, [hoveredDatesEnd]);

  const startDateLabel = useMemo(() => {
    return `${formatLong(hoveredDatesStart)} года, ${startDayOfWeek}`;
  }, [hoveredDatesStart, startDayOfWeek]);

  const endDateLabel = useMemo(() => {
    return `${formatLong(hoveredDatesEnd)} года, ${endDayOfWeek}`;
  }, [endDayOfWeek, hoveredDatesEnd]);

  const isMobile = useMediaQuery("(max-width: 56.25em)");
  const columnIndex = useSelector(hoveredColumnIndex$) ?? 0;
  const rowIndex = useSelector(hoveredRowIndex$) ?? 0;

  const openCellData = useCellsDataModal({ rowIndex, columnIndex });

  const handleClick: TouchEventHandler<HTMLButtonElement> = useCallback(
    (e) => {
      e.stopPropagation();
      openCellData();
    },
    [openCellData]
  );

  return (
    <Stack gap={0}>
      <KeyValue k="Начало клетки" v={startDateLabel} />
      <KeyValue k="Конец клетки" v={endDateLabel} />
      <HoveredCellEventsFeature />
      <HoveredCellTimespansFeature />
      {isMobile ? (
        <Button
          size="compact-xs"
          onTouchStartCapture={handleClick}
          onTouchStart={handleClick}
        >
          Подробнее
        </Button>
      ) : (
        <Text size="sm">Кликните, чтобы увидеть больше</Text>
      )}
    </Stack>
  );
};
