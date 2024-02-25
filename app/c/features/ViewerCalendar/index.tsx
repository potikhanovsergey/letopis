"use client";
import { FC } from "react";

import { Calendar } from "@/app/components/calendar/Calendar";
import ViewerToolbar from "@/app/c/features/ViewerToolbar";
import { useInitCalendar } from "@/app/hooks/useInitCalendar";

import { ViewerCalendarProps } from "./typings";

const ViewerCalendar: FC<ViewerCalendarProps> = ({ calendar }) => {
  useInitCalendar(calendar, "view");

  return <Calendar toolbar={<ViewerToolbar />} />;
};

export default ViewerCalendar;
