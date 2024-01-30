"use client";
import { FC, PropsWithChildren } from "react";
import { Stack, Tooltip } from "@mantine/core";

import { KeyValue } from "@/app/components/KeyValue";
import { useCalendarStore } from "@/app/stores";

export const FloatingInfoFeature: FC<PropsWithChildren> = ({ children }) => {
  const hoveredIndex = useCalendarStore((state) => state.hoveredIndex);
  const hoveredDates = useCalendarStore((state) => state.hoveredDates());

  if (hoveredIndex === null) return children;

  return (
    <Tooltip.Floating
      position="right"
      label={
        <Stack gap={0}>
          <KeyValue k="Индекс клетки" v={hoveredIndex} />
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
