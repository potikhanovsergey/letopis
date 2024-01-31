"use client";
import { FC, PropsWithChildren } from "react";
import { Stack, Tooltip } from "@mantine/core";

import { KeyValue } from "@/app/components/KeyValue";
import { useCalendarStore } from "@/app/stores";

export const FloatingInfoFeature: FC<PropsWithChildren> = ({ children }) => {
  const hoveredDates = useCalendarStore((state) => state.hoveredDates());

  if (hoveredDates.start === null) return children;

  return (
    <Tooltip.Floating
      position="right"
      label={
        <Stack gap={0}>
          <KeyValue
            k="Начало недели"
            v={`${hoveredDates.start?.format("DD MMMM YYYY")} года`}
          />
          <KeyValue
            k="Конец недели"
            v={`${hoveredDates.end?.format("DD MMMM YYYY")} года`}
          />
        </Stack>
      }
    >
      {children}
    </Tooltip.Floating>
  );
};
