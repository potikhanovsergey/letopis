"use client";
import { FC, PropsWithChildren } from "react";
import { useSelector } from "@legendapp/state/react";
import { Tooltip } from "@mantine/core";

import { hoveredDates$ } from "@/app/stores/calendar/computed";
import { HoveredInfo } from "@/app/features/HoveredInfo";

export const FloatingInfoFeature: FC<PropsWithChildren> = ({ children }) => {
  const hoveredDatesStart = useSelector(hoveredDates$.start);

  return (
    <Tooltip.Floating
      multiline
      zIndex={100}
      maw={400}
      position="bottom"
      offset={20}
      // disabled={hoveredDatesStart === null}
      disabled
      styles={{
        tooltip: {
          whiteSpace: "normal",
        },
      }}
      label={<HoveredInfo />}
    >
      {children}
    </Tooltip.Floating>
  );
};
