"use client";
import { FC } from "react";

import { Calendar } from "@/app/components/Calendar";
import { ViewToolbarFeature } from "@/app/features/ViewToolbarFeature";
import { useInitCalendar } from "@/app/hooks/useInitCalendar";

import { CalendarViewerFeatureProps } from "./CalendarViewerFeature.typings";

export const CalendarViewerFeature: FC<CalendarViewerFeatureProps> = ({
  calendar,
}) => {
  useInitCalendar(calendar, "view");

  return <Calendar toolbar={<ViewToolbarFeature />} />;
};
