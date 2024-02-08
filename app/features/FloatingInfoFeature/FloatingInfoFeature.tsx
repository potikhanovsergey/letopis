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
  const hoveredDates = useSelector(hoveredDates$);

  const startDayOfWeek = useMemo(() => {
    return getDayOfWeekLabel(hoveredDates.start);
  }, [hoveredDates.start]);

  const endDayOfWeek = useMemo(() => {
    return getDayOfWeekLabel(hoveredDates.end);
  }, [hoveredDates.end]);

  const startDateLabel = useMemo(() => {
    return `${hoveredDates.start?.format(
      "DD MMMM YYYY"
    )} года, ${startDayOfWeek}`;
  }, [hoveredDates.start, startDayOfWeek]);

  const endDateLabel = useMemo(() => {
    return `${hoveredDates.end?.format("DD MMMM YYYY")} года, ${endDayOfWeek}`;
  }, [endDayOfWeek, hoveredDates.end]);

  return (
    <Tooltip.Floating
      multiline
      maw={400}
      position="bottom"
      offset={20}
      disabled={hoveredDates.start === null}
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
