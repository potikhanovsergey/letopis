"use client";
import { FC, PropsWithChildren, useMemo } from "react";
import { Divider, Stack, Tooltip } from "@mantine/core";

import { KeyValue } from "@/app/components/KeyValue";
import { useCalendarStore } from "@/app/stores";
import { getDayOfWeekLabel } from "@/app/utils/date";

export const FloatingInfoFeature: FC<PropsWithChildren> = ({ children }) => {
  const hoveredDates = useCalendarStore((state) => state.hoveredDates());

  const startDayOfWeek = useMemo(() => {
    return getDayOfWeekLabel(hoveredDates.start);
  }, [hoveredDates.start]);

  const endDayOfWeek = useMemo(() => {
    return getDayOfWeekLabel(hoveredDates.end);
  }, [hoveredDates.end]);

  const startDateLabel = useMemo(() => {
    return `${hoveredDates.start?.format("DD MMMM YYYY")} года`;
  }, [hoveredDates.start]);

  const endDateLabel = useMemo(() => {
    return `${hoveredDates.end?.format("DD MMMM YYYY")} года`;
  }, [hoveredDates.end]);

  if (hoveredDates.start === null) return children;

  return (
    <Tooltip.Floating
      position="right"
      label={
        <Stack gap={0}>
          <KeyValue k="Начало клетки" v={startDateLabel} />
          <KeyValue k="День недели" v={startDayOfWeek} />
          <Divider my={4} color="dimmed" />
          <KeyValue k="Конец клетки" v={endDateLabel} />
          <KeyValue k="День недели" v={endDayOfWeek} />
        </Stack>
      }
    >
      {children}
    </Tooltip.Floating>
  );
};
