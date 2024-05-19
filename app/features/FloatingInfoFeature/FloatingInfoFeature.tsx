"use client";
import { FC, PropsWithChildren, useMemo } from "react";
import { useSelector } from "@legendapp/state/react";
import { Stack, Text, Tooltip } from "@mantine/core";

import { KeyValue } from "@/app/components/KeyValue";
import { HoveredCellEventsFeature } from "@/app/features/HoveredCellEventsFeature";
import { HoveredCellTimespansFeature } from "@/app/features/HoveredCellTimespansFeature";
import { hoveredDates$ } from "@/app/stores/calendar/computed";
import { formatLong, getDayOfWeekLabel } from "@/app/utils/date";
import { calendarData$ } from "@/app/stores";

export const FloatingInfoFeature: FC<PropsWithChildren> = ({ children }) => {
  const hoveredDatesStart = useSelector(hoveredDates$.start);
  const hoveredDatesEnd = useSelector(hoveredDates$.end);
  const format = useSelector(calendarData$.format);

  const startDayOfWeek = useMemo(() => {
    return getDayOfWeekLabel(hoveredDatesStart);
  }, [hoveredDatesStart]);

  const endDayOfWeek = useMemo(() => {
    return getDayOfWeekLabel(hoveredDatesEnd);
  }, [hoveredDatesEnd]);

  const startDateLabel = useMemo(() => {
    return `${formatLong(hoveredDatesStart)}, ${startDayOfWeek}`;
  }, [hoveredDatesStart, startDayOfWeek]);

  const endDateLabel = useMemo(() => {
    return `${formatLong(hoveredDatesEnd)}, ${endDayOfWeek}`;
  }, [endDayOfWeek, hoveredDatesEnd]);

  return (
    <Tooltip.Floating
      multiline
      maw={400}
      position="bottom"
      offset={20}
      zIndex={100}
      disabled={hoveredDatesStart === null}
      styles={{
        tooltip: {
          whiteSpace: "normal",
        },
      }}
      label={
        <Stack gap={0}>
          {format === "year_week" ? (
            <>
              <KeyValue k="Начало клетки" v={startDateLabel} />
              <KeyValue k="Конец клетки" v={endDateLabel} />
            </>
          ) : (
            <KeyValue k="Дата клетки" v={startDateLabel} />
          )}
          <HoveredCellEventsFeature />
          <HoveredCellTimespansFeature />
          <Text size="sm">Кликните, чтобы увидеть больше</Text>
        </Stack>
      }
    >
      {children}
    </Tooltip.Floating>
  );
};
