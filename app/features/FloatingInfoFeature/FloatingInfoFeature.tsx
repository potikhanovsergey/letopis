"use client";
import { FC, PropsWithChildren, useMemo } from "react";
import { Divider, Stack, Text, Tooltip } from "@mantine/core";
import dayjs from "dayjs";

import { DynamicIcon } from "@/app/components/DynamicIcon";
import { EventIconKey } from "@/app/components/IconPicker/IconPicker.typings";
import { KeyValue } from "@/app/components/KeyValue";
import { useHoveredCellEvents } from "@/app/hooks/useHoveredCellEvents";
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

  const events = useHoveredCellEvents();

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
          {events.length > 0 && (
            <>
              <Divider my={4} color="dimmed" />
              <Text fw="bold">События</Text>
              {events.map((event) => (
                <KeyValue
                  k={event.title}
                  icon={
                    <DynamicIcon
                      size="0.8rem"
                      name={event.icon as EventIconKey}
                    />
                  }
                  v={dayjs(event.date).format("DD.MM.YYYY")}
                  key={event.id}
                />
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
