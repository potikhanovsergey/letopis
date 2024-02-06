"use client";
import { FC, PropsWithChildren, useMemo } from "react";
import { useSelector } from "@legendapp/state/react";
import { Divider, Stack, Text, Tooltip } from "@mantine/core";

import { KeyValue } from "@/app/components/KeyValue";
import {
  hoveredCellTimespans$,
  hoveredDates$,
} from "@/app/stores/calendar/computed";
import { hoveredCellEvents$ } from "@/app/stores/calendar/computed/hoveredCellEvents";
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
    return `${hoveredDates.start?.format("DD MMMM YYYY")} года`;
  }, [hoveredDates.start]);

  const endDateLabel = useMemo(() => {
    return `${hoveredDates.end?.format("DD MMMM YYYY")} года`;
  }, [hoveredDates.end]);

  const events = useSelector(hoveredCellEvents$);
  const timespans = useSelector(hoveredCellTimespans$);

  if (hoveredDates.start === null) return children;

  return (
    <Tooltip.Floating
      multiline
      w={400}
      position="right"
      styles={{
        tooltip: {
          whiteSpace: "normal",
        },
      }}
      label={
        <Stack gap={0}>
          <KeyValue k="Начало клетки" v={startDateLabel} />
          <KeyValue k="День недели" v={startDayOfWeek} />
          <Divider my={4} color="dimmed" />
          <KeyValue k="Конец клетки" v={endDateLabel} />
          <KeyValue k="День недели" v={endDayOfWeek} />
          {events.length > 0 && (
            <>
              <Divider my={4} color="dimmed" />
              <Text size="sm" fw="bold">
                События
              </Text>

              {events.map((event) => (
                <Text size="xs" key={event.id}>
                  {event.title}
                </Text>
              ))}
            </>
          )}
          {timespans.length > 0 && (
            <>
              <Divider my={4} color="dimmed" />
              <Text size="sm" fw="bold">
                Промежутки
              </Text>

              {timespans.map((timespan) => (
                <Text size="xs" key={timespan.id}>
                  {timespan.title}
                </Text>
              ))}
            </>
          )}
        </Stack>
      }
    >
      {children}
    </Tooltip.Floating>
  );
};
