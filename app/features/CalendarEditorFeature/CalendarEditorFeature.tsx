"use client";
import { FC } from "react";

import { Calendar } from "@/app/components/Calendar";
import { EditToolbarFeature } from "@/app/features/EditToolbarFeature";
import { useInitCalendar } from "@/app/hooks/useInitCalendar";

import { CalendarEditorFeatureProps } from "./CalendarEditorFeature.typings";

export const CalendarEditorFeature: FC<CalendarEditorFeatureProps> = ({
  calendar,
}) => {
  useInitCalendar(calendar, "edit");

  return <Calendar toolbar={<EditToolbarFeature />} />;
};
