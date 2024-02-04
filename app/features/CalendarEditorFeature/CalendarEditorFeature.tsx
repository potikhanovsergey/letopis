"use client";
import { FC } from "react";
import { useSelector } from "@legendapp/state/react";

import { Calendar } from "@/app/components/Calendar";
import { EditToolbarFeature } from "@/app/features/EditToolbarFeature";
import { useInitCalendar } from "@/app/hooks/useInitCalendar";
import { calendarData$ } from "@/app/stores";

import { CalendarEditorFeatureProps } from "./CalendarEditorFeature.typings";

export const CalendarEditorFeature: FC<CalendarEditorFeatureProps> = ({
  calendar,
}) => {
  useInitCalendar(calendar, "edit");

  const title = useSelector(calendarData$.title);
  const description = useSelector(calendarData$.description);
  const startDate = useSelector(calendarData$.startDate);
  const endDate = useSelector(calendarData$.endDate);

  return (
    <Calendar
      title={title}
      description={description}
      startDate={startDate}
      endDate={endDate}
      toolbar={<EditToolbarFeature />}
    />
  );
};
