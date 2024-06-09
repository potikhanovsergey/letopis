"use client";
import { KeyValue } from "@/app/components/KeyValue";
import { HoveredCellEventsFeature } from "@/app/features/HoveredCellEventsFeature";
import { HoveredCellTimespansFeature } from "@/app/features/HoveredCellTimespansFeature";
import { hoveredDates$ } from "@/app/stores/calendar/computed";
import { getDayOfWeekLabel, formatLong } from "@/app/utils/date";
import { useSelector } from "@legendapp/state/react";
import { Stack, Text } from "@mantine/core";
import { FC, useMemo } from "react";

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

  return (
    <Stack gap={0}>
      <KeyValue k="Начало клетки" v={startDateLabel} />
      <KeyValue k="Конец клетки" v={endDateLabel} />
      <HoveredCellEventsFeature />
      <HoveredCellTimespansFeature />
      <Text size="sm">Кликните, чтобы увидеть больше</Text>
    </Stack>
  );
};
