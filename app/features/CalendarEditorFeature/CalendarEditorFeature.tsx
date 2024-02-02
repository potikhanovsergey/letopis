"use client";
import { FC } from "react";

import { Calendar } from "@/app/components/Calendar";
import { EditToolbarFeature } from "@/app/features/EditToolbarFeature";
import { useInitCalendar } from "@/app/hooks/useInitCalendar";
import { useCalendarStore } from "@/app/stores";

import { CalendarEditorFeatureProps } from "./CalendarEditorFeature.typings";

export const CalendarEditorFeature: FC<CalendarEditorFeatureProps> = ({
  calendar,
}) => {
  useInitCalendar(calendar, "edit");

  const title = useCalendarStore((state) => state.data.title);
  const description = useCalendarStore((state) => state.data.description);
  const startDate = useCalendarStore((state) => state.data.startDate);

  return (
    <Calendar
      title={title}
      description={description}
      startDate={startDate}
      toolbar={<EditToolbarFeature />}
    />
  );
};
