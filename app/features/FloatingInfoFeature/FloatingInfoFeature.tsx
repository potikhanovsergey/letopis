"use client";
import { FC, PropsWithChildren, useMemo } from "react";
import { useSelector } from "@legendapp/state/react";
import { Stack, Tooltip } from "@mantine/core";

import { KeyValue } from "@/app/components/KeyValue";
import { HoveredCellEventsFeature } from "@/app/features/HoveredCellEventsFeature";
import { HoveredCellTimespansFeature } from "@/app/features/HoveredCellTimespansFeature";
import { hoveredDates$ } from "@/app/stores/calendar/computed";
import { getDayOfWeekLabel } from "@/app/utils/date";

export const FloatingInfoFeature: FC<PropsWithChildren> = ({ children }) => {
  const hoveredDatesStart = useSelector(hoveredDates$.start);
  const hoveredDatesEnd = useSelector(hoveredDates$.end);

  const startDayOfWeek = useMemo(() => {
    return getDayOfWeekLabel(hoveredDatesStart);
  }, [hoveredDatesStart]);

  const endDayOfWeek = useMemo(() => {
    return getDayOfWeekLabel(hoveredDatesEnd);
  }, [hoveredDatesEnd]);

  const startDateLabel = useMemo(() => {
    return `${hoveredDatesStart?.format(
      "DD MMMM YYYY"
    )} года, ${startDayOfWeek}`;
  }, [hoveredDatesStart, startDayOfWeek]);

  const endDateLabel = useMemo(() => {
    return `${hoveredDatesEnd?.format("DD MMMM YYYY")} года, ${endDayOfWeek}`;
  }, [endDayOfWeek, hoveredDatesEnd]);

  return (
    <Tooltip.Floating
      multiline
      maw={400}
      position="bottom"
      offset={20}
      disabled={hoveredDatesStart === null}
      styles={{
        tooltip: {
          whiteSpace: "normal",
        },
      }}
      label={
        <Stack gap={0}>
          <KeyValue k="Начало клетки" v={startDateLabel} />
          <KeyValue k="Конец клетки" v={endDateLabel} />
          <HoveredCellEventsFeature />
          <HoveredCellTimespansFeature />
        </Stack>
      }
    >
      {children}
    </Tooltip.Floating>
  );
};
