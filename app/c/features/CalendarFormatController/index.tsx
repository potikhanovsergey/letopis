"use client";
import MonthsCalendar from "@/app/c/features/MonthsCalendar";
import YearsCalendar from "@/app/c/features/YearsCalendar";
import { calendarData$ } from "@/app/stores";
import { useSelector } from "@legendapp/state/react";
import { FC } from "react";

export const CalendarFormatController: FC = () => {
  const format = useSelector(calendarData$.format);

  if (format === "month_day") return <MonthsCalendar />;

  return <YearsCalendar />;
};
